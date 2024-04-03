<template>
  <div>
    <HeaderMain/>
    <AboutMain/>
    <ArticleMain/>
    <FooterMain/>
  </div>
</template>

<script>
import AboutMain from '../../components/Main/AboutMain.vue';
import ArticleMain from '../../components/Main/ArticleMain.vue';
import FooterMain from '../../components/Main/FooterMain.vue';
import HeaderMain from '../../components/Main/HeaderMain.vue';

export default {
  components: {
    HeaderMain,
    AboutMain,
    ArticleMain,
    FooterMain
},
  beforeRouteEnter(to, from, next) {
    document.title = 'PettyCashPall' + (to.meta.title || 'Teks Default');
    next();
  },

  beforeRouteUpdate(to, from, next) {
    document.title = '' + (to.meta.title || 'Teks Default');
    next();
  },
};
</script>