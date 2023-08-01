<template>
  <div class="text-padrao p-3 px-md-4">
    <div>
      <h1 class="text-branco">Este é meu Setup 💻</h1>
      
      <h3>CPU</h3>
      <Icone
        icone="cpu"
        classesSpan="link-laranja text-decoration-none"
        classesSegundaDiv="align-items-center pl-3 pb-3"
      >
        Intel Core i7-13700F
      </Icone>

      <h3>Placa Mãe</h3>
      <Icone
        icone="placaMae"
        classesSpan="link-laranja text-decoration-none"
        classesSegundaDiv="align-items-center pl-3 pb-3"
      >
        ASUS TUF GAMING B760M-PLUS WIFI D4 (LGA1700)
      </Icone>
      
      <h3>Memória Ram</h3>
      <Icone
        icone="ram"
        classesSpan="link-laranja text-decoration-none"
        classesSegundaDiv="align-items-center pl-3 pb-3"
      >
        32GB (4x8GB) Dual-Channel DDR4 3600MHz XPG
      </Icone>

      <h3>Video</h3>
      <Icone
        icone="monitorUltraWide"
        classesSpan="link-laranja text-decoration-none"
        classesSegundaDiv="align-items-center pl-3"
      >
        Monitor led 29' LG ULTRAWIDE 29UM69G ips 1ms 75kHz (2560x1080@60Hz)
      </Icone>
      <Icone
        icone="monitorWide"
        classesSpan="link-laranja text-decoration-none"
        classesSegundaDiv="align-items-center pl-3"
      >
        Monitor AOC 23.8' LED, 24B1XHM (1920x1080@60Hz)
      </Icone>
      <Icone
        icone="placaVideo"
        classesSpan="link-laranja text-decoration-none"
        classesSegundaDiv="align-items-center pl-3 pb-3"
      >
        AMD Radeon RX 6750 XT (MSI)
      </Icone>

      <h2>Armazenamento</h2>
      <Icone
        icone="m2"
        classesSpan="link-laranja text-decoration-none"
        classesSegundaDiv="align-items-center pl-3 pb-3"
      >
        M2 (447GB) Western Digital WDC WDS480G2G0C-00AJM0
      </Icone>
      <Icone
        icone="ssd"
        classesSpan="link-laranja text-decoration-none"
        classesSegundaDiv="align-items-center pl-3 pb-3"
      >
        SSD (111GB) KINGSTON SV300S37A120G
      </Icone>
      <Icone
        icone="ssd"
        classesSpan="link-laranja text-decoration-none"
        classesSegundaDiv="align-items-center pl-3 pb-3"
      >
        SSD (223GB) KINGSTON SUV400S37240G
      </Icone>
      <Icone
        icone="hd"
        classesSpan="link-laranja text-decoration-none"
        classesSegundaDiv="align-items-center pl-3 pb-3"
      >
        HD (232GB) Seagate ST3250318AS
      </Icone>
      <Icone
        icone="hd"
        classesSpan="link-laranja text-decoration-none"
        classesSegundaDiv="align-items-center pl-3 pb-3"
      >
        HD (931GB) Seagate ST1000LM024 HN-M101MBB
      </Icone>
      <Icone
        icone="hd"
        classesSpan="link-laranja text-decoration-none"
        classesSegundaDiv="align-items-center pl-3 pb-3"
      >
        HD (931GB) Seagate ST1000LM024 HN-M101MBB <i class="font-13 text-dark">(sim, são dois HDs iguais)</i>
      </Icone>

      <h2>Periféricos</h2>
      <Icone
        icone="mouse"
        classesSpan="link-laranja text-decoration-none"
        classesSegundaDiv="align-items-center pl-3 pb-2"
      >
        Mouse sem fio Corsair Harpoon RGB Wireless
      </Icone>
      <Icone
        icone="teclado"
        classesSpan="link-laranja text-decoration-none"
        classesSegundaDiv="align-items-center pl-3 pb-2"
      >
        Teclado Corsair K55 RGB
      </Icone>
      <Icone
        icone="cadeira"
        classesSpan="link-laranja text-decoration-none"
        classesSegundaDiv="align-items-center pl-3 pb-2"
      >
        Cadeira Gamer Terabyte Style, Azul
      </Icone>
      <Icone
        icone="headfone"
        classesSpan="link-laranja text-decoration-none"
        classesSegundaDiv="align-items-center pl-3 pb-2"
      >
        Headphone bluetooth W830BT Edifier - preto
      </Icone>
      <Icone
        icone="microfone"
        classesSpan="link-laranja text-decoration-none"
        classesSegundaDiv="align-items-center pl-3 pb-2"
      >
        Microfone HyperX QuadCast S
      </Icone>
      <Icone
        icone="caixaSom"
        classesSpan="link-laranja text-decoration-none"
        classesSegundaDiv="align-items-center pl-3 pb-3"
      >
        Monitor de Áudio EDIFIER R2850DB Bluetooth 150W RMS
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