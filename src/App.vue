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

              <div class="sidebar-social">
                <ul>
                  <li>
                    <a href="#" title="Home" target="_blank" rel="nofollow">
                      <i class="fa fa-home"></i>
                      <span>Home</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" title="Market" target="_blank" rel="nofollow">
                      <i class="fa fa-industry"></i>
                      <span>Market</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" title="Trade" target="_blank" rel="nofollow">
                      <i class="fa fa-plus"></i>
                      <span>Trade</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" title="Orders" target="_blank" rel="nofollow">
                      <i class="fa fa-shopping-cart"></i>
                      <span>Orders</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" title="Account" target="_blank" rel="nofollow">
                      <i class="fa fa-user"></i>
                      <span>Account</span>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        <!--div class="footer-below">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                Thanks You!
              </div>
            </div>
          </div>
        </div-->
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
@import './assets/css/font-awesome.min.css';

.footer-above {
  position: fixed;
  bottom: 0px;
  width: 100%;
}
.footer-above .container {
  padding: 0 !important;
}

.footer-above .container .row {
  margin: 0 !important;
}

.sidebar-social {
  margin: 0;
  padding: 0;
  width: 100%;
}

.sidebar-social ul {
  margin: 0;
  padding: 5px;
}

.sidebar-social li {
  text-align: center;
  width: 19%;
  margin: 0 0 3px !important;
  background-color: #fff;
  border: 1px solid #eee;
  display: inline-block;
  font-size: 10px;
  padding:0;
}

.sidebar-social i {
  display: block;
  margin: 0 auto 10px auto;
  width: 32px;
  height: 32px;
  margin: 10px auto 0;
  line-height: 32px;
  text-align: center;
  font-size: 20px;
  color: #444444;
  margin-top:0;
  padding-top:5px;
}

.sidebar-social a{
  text-decoration:none;
  width:100%;
  height:100%;
  display:block;
  margin:0;
  padding:0;
}

.sidebar-social a span{
  color:black;
  font-size:10px;
  padding:5px 0 10px 0;
  display:block;
  text-transform:uppercase;
  font-family:'Josefin Sans';
  letter-spacing:1px;
}

.sidebar-social a:hover i.fa-home { color:#00ABE3 }
.sidebar-social a:hover i.fa-industry { color:#cb2027 }
.sidebar-social a:hover i.fa-shopping-cart { color:#FF57AE }
.sidebar-social a:hover i.fa-plus { color:#00ABE3 }
.sidebar-social a:hover i.fa-user { color:#FF1F25 }

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
