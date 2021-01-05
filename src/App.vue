<template>
  <div id="app">
    <div>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
          <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
              <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                      <a class="nav-link" href="#">Menu</a>
                  </li>
              </ul>
          </div>
          <div class="mx-auto order-0">
              <a class="navbar-brand mx-auto" href="#">Logo</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                  <span class="navbar-toggler-icon"></span>
              </button>
          </div>
          <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
              <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                      <a class="nav-link" href="#">ACCOUNT</a>
                  </li>
              </ul>
          </div>
      </nav>
    </div>
    <main>
      <marquee><p style="font-family: Impact; font-size: 18pt">Running Text! Teks Berjalan! Running Text! Teks Berjalan! Running Text! Teks Berjalan!</p></marquee>
      <!--img src="./assets/logo.png" alt="Vue.js PWA"-->
      <router-view></router-view>
      <footer class="text-center" style="background: gray;">
        <div class="footer-above">
          <div class="container">
            <div class="row">
              <div class="footer-col col-md-4">
                <h3>Location</h3>
                <p>3481 Melrose Place<br>Beverly Hills, CA 90210</p>
              </div>
              <div class="footer-col col-md-4">
                <h3>Around the Web</h3>
                <ul class="list-inline">
                  <!-- some social networks -->
                </ul>
              </div>
              <div class="footer-col col-md-4">
                <h3>About Us</h3>
                <p>its is a free to use, open source Bootstrap theme created by Start Bootstrap.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-below">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                Author
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
