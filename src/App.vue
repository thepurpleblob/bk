<template>
  <div class="container p-0 p-xs-1" id="app">
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
        src: url('~@/assets/fonts/moma-sans__regular.woff2') format('woff2');
        font-weight: 400;
    }

    @font-face {
        font-family: "Moma";
        src: url('~@/assets/fonts/moma-sans__regular--italic.woff2') format('woff2');
        font-weight: 400;
        font-style: italic;
    }

    @font-face {
        font-family: "Moma";
        src: url('~@/assets/fonts/moma-sans__bold.woff2') format('woff2');
        font-weight: 900;
    }

    @font-face {
        font-family: "Moma";
        src: url('~@/assets/fonts/moma-sans__bold--italic.woff2') format('woff2');
        font-weight: 900;
        font-style: italic;
    }

    #app {
        font-family: 'Moma';
    }


</style>
