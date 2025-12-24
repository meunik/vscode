#!/usr/bin/env node

import fs from 'fs';
import os from 'os';
import path from 'path';
import { exec, execSync } from 'child_process';
import { Client as SSHClient } from 'ssh2';
import SftpClient from 'ssh2-sftp-client';
import ora from 'ora';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const args = process.argv.slice(2);

if (args.includes('-v') || args.includes('--version')) {
  const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
  console.log(pkg.version);
  process.exit(0);
}

if (args.includes('-h') || args.includes('--help')) {
  console.log(`
    Uso: deploy-docker [opções]

    Opções:
      -v, --version Exibe a versão
      -h, --help    Exibe esta ajuda
      --no-build    Pula a etapa de build do Vue
      --no-push     Pula o upload da imagem para o servidor
  `);
  process.exit(0);
}

class DockerDeployService {
  #fs;
  #os;
  #ora;
  #path;
  #ssh;
  #sftp;
  #exec;
  #execSync;
  #projectRoot;

  #SSH_CONFIG;
  #DOCKER_IMAGE_NAME;
  #DOCKER_IMAGE_TAG;
  #DOCKER_CONTAINER_NAME;
  #REMOTE_DEPLOY_DIR;
  #IMAGE_TAR_NAME;
  #LOCAL_TAR_PATH;

  #RED;
  #GREEN;
  #LIGHT_GREEN;
  #YELLOW;
  #BLUE;
  #LIGHT_BLUE;
  #GRAY;
  #WHITE;
  #NC;

  constructor({
    fs,
    os,
    ora,
    path,
    projectRoot,
    ssh,
    sftp,
    exec,
    execSync,
  }) {
    this.#fs = fs;
    this.#os = os;
    this.#ora = ora;
    this.#path = path;
    this.#ssh = ssh;
    this.#sftp = sftp;
    this.#exec = exec;
    this.#execSync = execSync;
    this.#projectRoot = projectRoot;

    // Configurações SSH
    this.#SSH_CONFIG = {
      host: process.env.SSH_HOST,
      port: parseInt(process.env.SSH_PORT || '22'),
      username: process.env.SSH_USER,
    };

    // Adicionar senha ou chave privada
    if (process.env.SSH_PASSWORD) {
      this.#SSH_CONFIG.password = process.env.SSH_PASSWORD;
    } else if (process.env.SSH_PRIVATE_KEY_PATH) {
      const keyPath = process.env.SSH_PRIVATE_KEY_PATH.replace('~', this.#os.homedir());
      this.#SSH_CONFIG.privateKey = this.#fs.readFileSync(keyPath);
    } else {
      console.error('Erro: Configure SSH_PASSWORD ou SSH_PRIVATE_KEY_PATH no .env.docker');
      process.exit(1);
    }

    // Configurações Docker
    this.#DOCKER_IMAGE_NAME = process.env.DOCKER_IMAGE_NAME;
    this.#DOCKER_IMAGE_TAG = process.env.DOCKER_IMAGE_TAG || 'latest';
    this.#DOCKER_CONTAINER_NAME = process.env.DOCKER_CONTAINER_NAME || this.#DOCKER_IMAGE_NAME;
    this.#REMOTE_DEPLOY_DIR = process.env.REMOTE_DEPLOY_DIR;
    this.#IMAGE_TAR_NAME = `${this.#DOCKER_IMAGE_NAME}-${this.#DOCKER_IMAGE_TAG}.tar.gz`;
    this.#LOCAL_TAR_PATH = this.#path.join(this.#projectRoot, this.#IMAGE_TAR_NAME);

    // Cores
    this.#RED = '\x1b[0;31m';
    this.#GREEN = '\x1b[0;32m';
    this.#LIGHT_GREEN = '\x1b[1;32m';
    this.#YELLOW = '\x1b[0;33m';
    this.#BLUE = '\x1b[0;34m';
    this.#LIGHT_BLUE = '\x1b[1;36m';
    this.#GRAY = '\x1b[0;90m';
    this.#WHITE = '\x1b[1;37m';
    this.#NC = '\x1b[0m';

    this.main();
  }

  log(msg, icone = '●', color = this.#BLUE, dotsColor = this.#GRAY) {
    const dots = dotsColor ? `${dotsColor}...${this.#NC}` : '';
    const point = color ? `${color}●${this.#NC} ` : '';
    const icon = icone ? `${icone} ` : '';
    console.log(`${point}${icon}${point}${msg}${dots}`);
  }

  logDot() {
    process.stdout.write(`${this.#LIGHT_GREEN}●${this.#NC}`);
  }

  run(cmd, opts = {}) {
    return new Promise((resolve, reject) => {
      this.#exec(cmd, { shell: true, ...opts, maxBuffer: 100 * 1024 * 1024 }, (err, stdout, stderr) => {
        if (err) return reject(stderr || err);
        resolve(stdout);
      });
    });
  }

  async withSpinner(title, fn) {
    const spinner = this.#ora({ text: title, color: 'cyan' }).start();
    try {
      const result = fn();
      if (result instanceof Promise) await result;
      spinner.succeed(`${title}`);
      return result;
    } catch (e) {
      spinner.fail(`${title}`);
      console.error(`\n${this.#RED}Erro detalhado:${this.#NC}`, e);
      throw e;
    }
  }

  async execSSH(command) {
    return new Promise((resolve, reject) => {
      this.#ssh.exec(command, (err, stream) => {
        if (err) return reject(err);
        
        let stdout = '';
        let stderr = '';
        
        stream.on('close', (code) => {
          if (code !== 0) {
            reject(new Error(`Command failed with code ${code}: ${stderr}`));
          } else {
            resolve(stdout);
          }
        });
        
        stream.on('data', (data) => {
          stdout += data.toString();
          this.logDot();
        });
        
        stream.stderr.on('data', (data) => {
          stderr += data.toString();
        });
      });
    });
  }

  async connectSSH() {
    return new Promise((resolve, reject) => {
      this.#ssh.on('ready', resolve);
      this.#ssh.on('error', reject);
      this.#ssh.connect(this.#SSH_CONFIG);
    });
  }

  async buildVue() {
    const args = process.argv.slice(2);
    if (args.includes('--no-build')) {
      this.log('Pulando build do Vue (--no-build)', '⏭️', this.#YELLOW);
      return;
    }

    await this.withSpinner(
      `📦 ${this.#BLUE}●${this.#NC} Buildando projeto Vue`,
      () => this.run('yarn build', { cwd: this.#projectRoot })
    );
  }

  async buildDockerImage() {
    const imageFullName = `${this.#DOCKER_IMAGE_NAME}:${this.#DOCKER_IMAGE_TAG}`;
    
    await this.withSpinner(
      `🐳 ${this.#BLUE}●${this.#NC} Buildando imagem Docker ${this.#YELLOW}${imageFullName}${this.#NC}`,
      () => this.run(`docker build -t ${imageFullName} .`, { cwd: this.#projectRoot })
    );
  }

  async saveDockerImage() {
    const imageFullName = `${this.#DOCKER_IMAGE_NAME}:${this.#DOCKER_IMAGE_TAG}`;
    const tarName = this.#IMAGE_TAR_NAME.replace('.tar.gz', '.tar');
    const tarPath = this.#path.join(this.#projectRoot, tarName);
    
    // Remover tar antigo se existir
    if (this.#fs.existsSync(tarPath)) {
      this.#fs.unlinkSync(tarPath);
    }

    await this.withSpinner(
      `💾 ${this.#BLUE}●${this.#NC} Salvando imagem como ${this.#YELLOW}${tarName}${this.#NC}`,
      async () => {
        await this.run(`docker save -o ${tarName} ${imageFullName}`, { cwd: this.#projectRoot });
      }
    );
    
    // Atualizar referências para usar .tar ao invés de .tar.gz
    this.#IMAGE_TAR_NAME = tarName;
    this.#LOCAL_TAR_PATH = tarPath;
  }

  async uploadToServer() {
    const args = process.argv.slice(2);
    if (args.includes('--no-push')) {
      this.log('Pulando upload para servidor (--no-push)', '⏭️', this.#YELLOW);
      return;
    }

    try {
      await this.withSpinner(
        `🔌 ${this.#BLUE}●${this.#NC} Conectando ao servidor via SFTP`,
        () => this.#sftp.connect(this.#SSH_CONFIG)
      );

      // Criar diretório remoto se não existir
      await this.withSpinner(
        `📁 ${this.#BLUE}●${this.#NC} Criando diretório ${this.#YELLOW}${this.#REMOTE_DEPLOY_DIR}${this.#NC}`,
        async () => {
          try {
            await this.#sftp.mkdir(this.#REMOTE_DEPLOY_DIR, true);
          } catch (e) {
            // Diretório já existe
          }
        }
      );

      // Upload da imagem
      const remoteTarPath = `${this.#REMOTE_DEPLOY_DIR}/${this.#IMAGE_TAR_NAME}`;
      this.log(`📤 Upload da imagem para o servidor`, '🚀', this.#BLUE);
      await this.#sftp.put(this.#LOCAL_TAR_PATH, remoteTarPath);
      this.log(`\n${this.#GREEN}✔${this.#NC} ●●●● ${this.#GREEN}Upload concluído${this.#NC}`, false, false, false);

      // Upload do docker-compose.yml e .env
      await this.withSpinner(
        `📤 ${this.#BLUE}●${this.#NC} Enviando docker-compose.yml`,
        () => this.#sftp.put(
          this.#path.join(this.#projectRoot, 'docker-compose.yml'),
          `${this.#REMOTE_DEPLOY_DIR}/docker-compose.yml`
        )
      );

      // Enviar .env.docker como .env no servidor
      if (this.#fs.existsSync(this.#path.join(this.#projectRoot, '.env.docker'))) {
        await this.withSpinner(
          `📤 ${this.#BLUE}●${this.#NC} Enviando arquivo .env`,
          () => this.#sftp.put(
            this.#path.join(this.#projectRoot, '.env.docker'),
            `${this.#REMOTE_DEPLOY_DIR}/.env`
          )
        );
      }

    } finally {
      await this.#sftp.end();
    }
  }

  async deployOnServer() {
    const args = process.argv.slice(2);
    if (args.includes('--no-push')) {
      this.log('Pulando deploy no servidor (--no-push)', '⏭️', this.#YELLOW);
      return;
    }

    try {
      await this.withSpinner(
        `🔌 ${this.#BLUE}●${this.#NC} Conectando ao servidor via SSH`,
        () => this.connectSSH()
      );

      const imageFullName = `${this.#DOCKER_IMAGE_NAME}:${this.#DOCKER_IMAGE_TAG}`;
      const remoteTarPath = `${this.#REMOTE_DEPLOY_DIR}/${this.#IMAGE_TAR_NAME}`;

      // Carregar imagem no Docker do servidor
      this.log(`🐳 Carregando imagem no servidor`, '📥', this.#BLUE);
      
      // Se for .tar, carrega diretamente; se for .tar.gz, descomprime primeiro
      const loadCommand = this.#IMAGE_TAR_NAME.endsWith('.tar.gz')
        ? `cd ${this.#REMOTE_DEPLOY_DIR} && gunzip -c ${this.#IMAGE_TAR_NAME} | docker load`
        : `cd ${this.#REMOTE_DEPLOY_DIR} && docker load -i ${this.#IMAGE_TAR_NAME}`;
      
      await this.execSSH(loadCommand);
      console.log(''); // Nova linha após os dots
      
      // Detectar se usa docker-compose (v1) ou docker compose (v2)
      let dockerComposeCmd = 'docker compose';
      try {
        await this.execSSH('docker compose version');
      } catch (e) {
        dockerComposeCmd = 'docker-compose';
      }
      
      // Criar rede se não existir
      await this.withSpinner(
        `🌐 ${this.#BLUE}●${this.#NC} Verificando rede Docker`,
        async () => {
          try {
            await this.execSSH('docker network create web');
          } catch (e) {
            // Rede já existe
          }
        }
      );

      // Parar e remover container antigo
      await this.withSpinner(
        `🛑 ${this.#YELLOW}●${this.#NC} Parando container antigo`,
        async () => {
          try {
            await this.execSSH(`cd ${this.#REMOTE_DEPLOY_DIR} && ${dockerComposeCmd} down --remove-orphans`);
          } catch (e) {
            // Container pode não existir
          }
          
          // Garantir que containers órfãos também sejam parados
          try {
            await this.execSSH('docker stop meusite 2>/dev/null || true');
            await this.execSSH('docker rm meusite 2>/dev/null || true');
          } catch (e) {
            // Ignorar erros
          }
        }
      );

      // Subir novo container
      this.log(`🚀 Iniciando container`, '▶️', this.#GREEN);
      await this.execSSH(`cd ${this.#REMOTE_DEPLOY_DIR} && ${dockerComposeCmd} up -d`);
      console.log(''); // Nova linha após os dots

      // Limpar arquivo tar
      await this.withSpinner(
        `🧹 ${this.#YELLOW}●${this.#NC} Limpando arquivos temporários no servidor`,
        () => this.execSSH(`rm ${remoteTarPath}`)
      );

    } finally {
      this.#ssh.end();
    }
  }

  async cleanup() {
    await this.withSpinner(
      `🧹 ${this.#YELLOW}●${this.#NC} Removendo arquivo tar local`,
      async () => {
        if (this.#fs.existsSync(this.#LOCAL_TAR_PATH)) {
          this.#fs.unlinkSync(this.#LOCAL_TAR_PATH);
        }
      }
    );
  }

  async main() {
    try {
      this.log(`\n${this.#LIGHT_BLUE}●●●●●●●● DEPLOY DOCKER ●●●●●●●●${this.#NC}`, false, false, false);
      
      // 1. Build do Vue
      await this.buildVue();

      // 2. Build da imagem Docker
      await this.buildDockerImage();

      // 3. Salvar imagem como tar.gz
      await this.saveDockerImage();

      // 4. Upload para servidor
      await this.uploadToServer();

      // 5. Deploy no servidor
      await this.deployOnServer();

      // 6. Limpeza
      await this.cleanup();

      this.log(`\n${this.#LIGHT_GREEN}●●●●●●●●●● Deploy finalizado! ●●●●●●●●●●${this.#NC}`, false, false, false);
      this.log(`${this.#GREEN}✔${this.#NC} Aplicação disponível em: ${this.#LIGHT_BLUE}http://${this.#SSH_CONFIG.host}:${process.env.PORT || '8080'}${this.#NC}`, false, false, false);
      
    } catch (error) {
      console.error(`\n${this.#RED}✖ Erro durante o deploy:${this.#NC}`, error.message);
      process.exit(1);
    }
  }
}

export default DockerDeployService;

// Executar o deploy
(async function () {
  const projectRoot = process.cwd();
  const envPath = path.join(projectRoot, '.env.docker');

  if (!fs.existsSync(envPath)) {
    console.error(`Erro: O arquivo .env.docker não foi encontrado no caminho: ${envPath}`);
    console.error('Crie o arquivo baseado no .env.docker.example');
    process.exit(1);
  }

  dotenv.config({ path: envPath });

  // Variáveis de ambiente obrigatórias
  const varEnvObrigatorias = [
    'SSH_HOST',
    'SSH_USER',
    'DOCKER_IMAGE_NAME',
    'REMOTE_DEPLOY_DIR',
  ];
  
  const varEnvFaltantes = varEnvObrigatorias.filter((varName) => !process.env[varName]);

  if (varEnvFaltantes.length > 0) {
    console.error('Erro: As seguintes variáveis de ambiente estão ausentes no arquivo .env.docker:');
    console.error(varEnvFaltantes.join(', '));
    process.exit(1);
  }

  new DockerDeployService({
    fs,
    os,
    ora,
    path,
    projectRoot,
    ssh: new SSHClient(),
    sftp: new SftpClient(),
    exec,
    execSync,
  });
})();

