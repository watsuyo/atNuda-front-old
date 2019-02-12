<template>
  <div>
    <header class="nav">
      <nav class="navbar">
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
          </a>
        </div>

        <div class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <span class="icon">
                    <i class="fas fa-download"></i>
                  </span>
                  <span>ポートフォリオ登録</span>
                </a>
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="button is-light navbar-link">
                    <i class="fas fa-user fa-lg"></i>
                  </a>
                  <div class="navbar-dropdown">
                    <a class="navbar-item">
                      マイページ
                    </a>
                    <a class="navbar-item">
                      ログアウト
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <section>
        <div class="columns mt-50">
          <div class="column is-10 is-offset-1">
            <div class="lavel">
              <div class="level-left">
                <div class="level-item is-3">
                  <div class="control has-icons-left">
                    <div class="select">
                      <select>
                        <option selected>ポジション</option>
                      </select>
                    </div>
                    <span class="icon is-left">
                      <i class="fas fa-globe"></i>
                    </span>
                  </div>
                </div>
                <div class="level-item is-3">
                  <div class="control has-icons-left">
                    <div class="select">
                      <select>
                        <option selected>ステータス</option>
                      </select>
                    </div>
                    <span class="icon is-left">
                      <i class="fas fa-globe"></i>
                    </span>
                  </div>
                </div>
                <div>のポートフォリオ</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section is-medium has-background-warning mt-50">
        <div class="columns has-background-white">
          <div class="column is-5"></div>
          <div class="column">
            <div class="buttons is-centered">
              <a class="button">新着順</a>
              <a class="button">人気順</a>
            </div>
          </div>
          <div class="column is-5"></div>
        </div>
        <div class="columns has-background-white">
          <div class="column is-4 is-offset-1">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">John Smith</p>
                    <p class="subtitle is-6">@johnsmith</p>
                  </div>
                </div>
                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                  <br>
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-4 is-offset-2">
            <div class="card">
              <nav class="columns is-flex is-vcentered">
                <div class="column is-5">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" width="48" height="48">
                    <span class="u-valign-m">John Smith</span>
                </div>
                <div class="column">
                  zaaa
                </div>
              </nav>
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                  <br>
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="columns has-background-white u-pt-20">
          <div class="column is-10 is-offset-1">
            <nav class="pagination is-centered">
              <ul class="pagination-list">
                <li>
                  <a class="pagination-link" aria-label="Goto page 1">1</a>
                </li>
                <li>
                  <span class="pagination-ellipsis">&hellip;</span>
                </li>
                <li>
                  <a class="pagination-link" aria-label="Goto page 45">45</a>
                </li>
                <li>
                  <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>
                </li>
                <li>
                  <a class="pagination-link" aria-label="Goto page 47">47</a>
                </li>
                <li>
                  <span class="pagination-ellipsis">&hellip;</span>
                </li>
                <li>
                  <a class="pagination-link" aria-label="Goto page 86">86</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </main>
    <footer class="footer u-bt-30">
      <div class="content has-text-centered">
        <div>
          <i class="fab fa-twitter fa-2x"></i>
        </div>
        <div>
          <span>zeroichidevelop@gmail.com</span>
        </div>
        <div>
          <span>© 2019, zeroichi</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style>

</style>
