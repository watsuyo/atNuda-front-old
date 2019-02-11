<template>
  <body>
    <div id="app">
      <!-- 仕方なくcdn -->
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
      
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="">
              <!-- タイトルは画像にする -->
            <!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> -->
            <p class="is-size-1">atNuda</p>
            <p class="is-size-6 subtitle">エンジニア向けポートフォリオ投稿・添削サービス</p>
          </a>
          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-medium is-size-5">
                  <i class="fas fa-address-card"></i>
                  <strong class="newPost">新規投稿</strong>
                </a>
                <i class="fas fa-user-circle is-size-1"></i>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </body>
</template>

<script>
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add()

export default {
    
  }
</script>


<style lang="scss">
  @import "../node_modules/bulma/bulma.sass";
    body {
      width: 100%;
      text-align: center;
    }
    #app {
      width: 80%;
      display: inline-block !important;
    }
    #header {
      display: inline-block; 
    }
    .subtitle {
      padding-left: 50px;
    }
    .navbar-menu {
      padding-left: 5%;
    }
    .buttons {
      display: inline-block !important;
    }
    .fa-address-card {
      padding-right: 10%;
    }
    .fa-user-circle {
      padding-left: 10%;
    }
    .newPost {
      padding-left: 10%;
    }

</style>
