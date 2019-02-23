<template>
  <div class="sf-site-all">
    <Header/>
    <nuxt class="sf-site-content"/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '~/components/molecules/Footer.vue'
import Header from '~/components/molecules/Header.vue'

export default {
  components: {
    Footer,
    Header
  }
}
</script>

<style>
.sf-site-all {
  min-height: 100vh; /* 全体の高さを最低でもビューポートの100%にする */
  display: flex; /* 子クラスを横並びにする */
  flex-direction: column; /* 子クラスの横並びの方向を縦にする */
}
.sf-site-content {
  flex: 1; /* flexに1つだけ数値を指定するとその要素は伸びる */
}
/* NavbarとBottomにはflexを指定しないので伸びない */
/* 結果としてページファイルの中味だけが伸びて、ビューポート100%を実現 */
/* Bottomは下に貼り付く。スティッキーフッターを実現 */
</style>