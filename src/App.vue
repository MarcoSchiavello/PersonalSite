<template>
  <Nav />
  <ThemeButton />
  <router-view />
  <Footer />
</template>

<script>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
import ThemeButton from './components/ThemeButton.vue';

export default {
  name: "App",
  components: {
    Nav,
    Footer,
    ThemeButton,
  },
  created() {
    const config = require('./data.json').config;

    const img = document.querySelector('head link[rel="icon"]');
    const title = document.querySelector('head title');

    img.setAttribute('href', config.imgSrc);
    title.textContent = config.title;
  
  },
}
</script>
