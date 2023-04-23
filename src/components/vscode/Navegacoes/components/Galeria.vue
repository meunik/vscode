<template>
  <div :id="galleryID" class="grid-container">
    <a
      v-for="(image, key) in imagesData"
      :key="key"
      :href="image.largeURL"
      :data-pswp-width="image.width"
      :data-pswp-height="image.height"
      target="_blank"
      rel="noreferrer"
      class="link-fotos"
    >
      <img :src="image.thumbnailURL" alt="" class="fotos" />
    </a>
  </div>
</template>

<script>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { imagens } from "@/utils/imagens.js";

export default {
  name: 'Galeria',
  props: {
    galleryID: String,
    images: Array,
  },
  data() {
    return {
      imagesData: [],
    }
  },
  async created() {
    this.imagesData = await imagens();
  },
  mounted() {
    if (!this.lightbox) {
      this.lightbox = new PhotoSwipeLightbox({
        gallery: '#' + this.$props.galleryID,
        children: 'a',
        pswpModule: () => import('photoswipe'),
      });
      this.lightbox.init();
    }
  },
  unmounted() {
    if (this.lightbox) {
      this.lightbox.destroy();
      this.lightbox = null;
    }
  },
  methods: {},
};
</script>

<style>
  .div-fotos {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: sans-serif;
  }
  .grid-container {
    columns: 5 200px;
    column-gap: 10px;
    margin: 0 auto;
  }
  .grid-container a {
    width: 150px;
    margin: 0 10px 10px 0;
    display: inline-block;
    width: 100%;
    /* border: solid 2px black; */
    /* padding: 5px; */
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    transition: all 0.25s ease-in-out;
  }
  .grid-container a:hover img {
    filter: grayscale(0);
  }
  .grid-container a:hover {
    border-color: coral;
  }
  .grid-container a img {
    width: 100%;
    filter: grayscale(100%);
    border-radius: 5px;
    transition: all 0.25s ease-in-out;
  }
  .grid-container a p {
    margin: 5px 0;
    padding: 0;
    text-align: center;
    font-style: italic;
  }
</style>