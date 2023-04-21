<template>
  <div class="text-padrao p-3 px-md-4">
    <div>
      <h1 class="text-branco">Este é meu Setup 💻</h1>
      
      <h3>CPU</h3>
      <Icone icone="cpu" classesSpan="link-laranja text-decoration-none" classesSegundaDiv="d-flex align-items-center pl-3 pb-3">
        Intel Core i5 7400
      </Icone>

      <h3>Placa Mãe</h3>
      <Icone icone="placaMae" classesSpan="link-laranja text-decoration-none" classesSegundaDiv="d-flex align-items-center pl-3 pb-3">
        ASUS STRIX B250F GAMING (LGA1151)
      </Icone>
      
      <h3>Memória Ram</h3>
      <Icone icone="ram" classesSpan="link-laranja text-decoration-none" classesSegundaDiv="d-flex align-items-center pl-3 pb-3">
        24GB (2x8GB + 2x4GB) Dual-Channel DDR4 1197MHz
      </Icone>

      <h3>Video</h3>
      <Icone icone="monitorUltraWide" classesSpan="link-laranja text-decoration-none" classesSegundaDiv="d-flex align-items-center pl-3">
        Monitor led 29' LG ULTRAWIDE 29UM69G ips 1ms 75kHz (2560x1080@60Hz)
      </Icone>
      <Icone icone="monitorWide" classesSpan="link-laranja text-decoration-none" classesSegundaDiv="d-flex align-items-center pl-3">
        Monitor AOC 23.8' LED, 24B1XHM (1920x1080@60Hz)
      </Icone>
      <Icone icone="placaVideo" classesSpan="link-laranja text-decoration-none" classesSegundaDiv="d-flex align-items-center pl-3 pb-3">
        NVIDIA GeForce GTX 1060 6GB (Gigabyte)
      </Icone>

      <h2>Armazenamento</h2>
      <Icone icone="m2" classesSegundaDiv="d-flex align-items-center pl-3 pb-3">
        <span class="link-laranja text-decoration-none">447GB (M2) Western Digital WDC WDS480G2G0C-00AJM0</span>
      </Icone>
      <Icone icone="ssd" classesSegundaDiv="d-flex align-items-center pl-3 pb-3">
        <span class="link-laranja text-decoration-none">111GB (SSD) KINGSTON SV300S37A120G</span>
      </Icone>
      <Icone icone="ssd" classesSegundaDiv="d-flex align-items-center pl-3 pb-3">
        <span class="link-laranja text-decoration-none">223GB (SSD) KINGSTON SUV400S37240G</span>
      </Icone>
      <Icone icone="hd" classesSegundaDiv="d-flex align-items-center pl-3 pb-3">
        <span class="link-laranja text-decoration-none">232GB (HD) Seagate ST3250318AS</span>
      </Icone>
      <Icone icone="hd" classesSegundaDiv="d-flex align-items-center pl-3 pb-3">
        <span class="link-laranja text-decoration-none">931GB (HD) Seagate ST1000LM024 HN-M101MBB</span>
      </Icone>
      <Icone icone="hd" classesSegundaDiv="d-flex align-items-center pl-3 pb-3">
        <span class="link-laranja text-decoration-none">931GB (HD) Seagate ST1000LM024 HN-M101MBB</span>
      </Icone>

      <h2>Periféricos</h2>
      <Icone icone="mouse" classesSegundaDiv="d-flex align-items-center pl-3 pb-2">
        <span class="link-laranja text-decoration-none">Mouse sem fio Corsair Harpoon RGB Wireless</span>
      </Icone>
      <Icone icone="teclado" classesSegundaDiv="d-flex align-items-center pl-3 pb-2">
        <span class="link-laranja text-decoration-none">Teclado Corsair K55 RGB</span>
      </Icone>
      <Icone icone="cadeira" classesSegundaDiv="d-flex align-items-center pl-3 pb-2">
        <span class="link-laranja text-decoration-none">Cadeira Gamer Alpha Gamer Nebula - AGNEBULA</span>
      </Icone>
      <Icone icone="headfone" classesSegundaDiv="d-flex align-items-center pl-3 pb-2">
        <span class="link-laranja text-decoration-none">Headphone bluetooth W830BT Edifier - preto</span>
      </Icone>
      <Icone icone="microfone" classesSegundaDiv="d-flex align-items-center pl-3 pb-2">
        <span class="link-laranja text-decoration-none">Microfone HyperX QuadCast S</span>
      </Icone>
      <Icone icone="caixaSom" classesSegundaDiv="d-flex align-items-center pl-3 pb-3">
        <span class="link-laranja text-decoration-none">Monitor de Áudio EDIFIER R2850DB Bluetooth 150W RMS</span>
      </Icone>

    </div>
  </div>
</template>

<script>
  import { Model } from '@/components/vscode/Model.js';
  import Icone from '@/assets/svg/Icone.vue';

  export default {
    mixins: [Model],
    components: {
      Icone,
    },
  }
</script>