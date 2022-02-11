<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';

    export default {
      components: {
          Header,
          Footer,
      }
    }
</script>


<style>
    @font-face {
        font-family: "Moma";
        src: url('~@/assets/fonts/Moma.woff') format('woff');
        font-weight: normal;
    }

    @font-face {
        font-family: "Moma";
        src: url('~@/assets/fonts/MoMABoldRegular.woff') format('woff');
        font-weight: bold;
    }

    #app {
        font-family: 'Moma';
    }
</style>
