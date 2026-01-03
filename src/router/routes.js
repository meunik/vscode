import Vscode from '@/components/Vscode.vue'

export const routes = [
  {
    path: '/curriculo',
    name: 'curriculo',
    component: Vscode,
    meta: { 
      tipo: 'arquivo',
      caminho: 'Profissional/Curriculo.md'
    }
  },
  {
    path: '/setup',
    name: 'setup',
    component: Vscode,
    meta: { 
      tipo: 'arquivo',
      caminho: 'Setup.html'
    }
  },
  {
    path: '/fotos',
    name: 'fotos',
    component: Vscode,
    meta: { 
      tipo: 'componente',
      dados: {
        titulo: 'Fotos',
        id: 'fotos',
        componente: 'Fotos',
        icone: {
          tipo: 'icon',
          valor: 'camera'
        }
      }
    }
  },
  {
    path: '/fs',
    redirect: '/fileshare'
  },
  {
    path: '/fileshare',
    name: 'fileshare',
    component: Vscode,
    meta: { 
      tipo: 'iframe',
      dados: {
        titulo: 'FileShare',
        url: 'https://fileshare.marcospaulo.dev',
        icone: {
          tipo: 'img',
          valor: '1765055625336.png'
        }
      }
    }
  },
  {
    path: '/yd',
    redirect: '/youtube'
  },
  {
    path: '/youtube',
    name: 'YouTube Downloader',
    component: Vscode,
    meta: { 
      tipo: 'iframe',
      dados: {
        titulo: 'YouTube Downloader',
        url: 'https://yd.marcospaulo.dev',
        icone: {
          tipo: 'img',
          valor: '1765055250293.png'
        }
      }
    }
  },
  {
    path: '/qr',
    redirect: '/qrcode'
  },
  {
    path: '/qrcode',
    name: 'QR Code Generator',
    component: Vscode,
    meta: { 
      tipo: 'iframe',
      dados: {
        titulo: 'QR Code Generator',
        url: 'https://qr.marcospaulo.dev',
        icone: {
          tipo: 'img',
          valor: '1765055036423.png'
        }
      }
    }
  },
]
