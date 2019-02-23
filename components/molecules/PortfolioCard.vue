<template>
  <div class="card is-shady">
    <nav class="navbar">
      <div class="navbar-start">
          <div class="media u-my-auto u-ml-5">
            <figure class="image is-48x48">
              <img :src="portfolio.user.user_small_images_url">
            </figure>
          </div>
        <div class="navbar-item">
          <span class="u-valign-m is-size-5">{{portfolio.user.name}}</span>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="has-background-primary tag">
            <i class="fas fa-flag fa-lg has-text-white"></i>
            <span class="has-text-white">{{portfolio.user.status}}</span>
          </div>
        </div>
      </div>
    </nav>
    <div class="card-content">
      <div class="content">
        {{portfolio.portfolio_comment}}
      </div>
    </div>
    <div class="card-image">
      <figure class="image is-4by3">
        <a :href="portfolio.site_url">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </a>
      </figure>
    </div>
    <nav class="navbar">
      <div class="navbar-start">
        <div class="navbar-item">
          <a class="button is-primary"><i class="fas fa-comment has-text-white"></i>コメントを見る</a>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <a>
            <i class="fa fa-heart has-text-primary"></i>
            <span>5</span>
          </a>
        </div>
        <div class="navbar-item">
          <a>
            <i class="fab fa-twitter has-text-primary"></i>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'PortfolioCard',
  props: {
    portfolio: {
      type: Object,
      required: true,
      default: {}
    }
  }
}
</script>

<style>

</style>
