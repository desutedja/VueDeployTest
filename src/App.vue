<template>
  <div id="app">
    <div>
      <!--nav class="navbar navbar-expand-md navbar-dark bg-dark">
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
      </nav-->
      <!--b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Menu 1</b-nav-item>
            <b-nav-item href="#">Menu 2</b-nav-item>
          </b-navbar-nav>
        </b-collapse>

        <div class="mx-auto order-0">
            <b-navbar-brand href="#" class="mx-auto order-0" >Logo</b-navbar-brand>
        </div>
        <-- Right aligned nav items -->
        <!--b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <-- Using 'button-content' slot -->
              <!--template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
      </b-navbar-->
      <nav style="z-index: 31;">
        <div class="burger" @click='navSlide'>
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>

        <div class="navb">
          <ul class="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="#">Menu 1</a></li>
            <li><a href="#">Menu 2</a></li>
            <li><a href="#">Menu 3</a></li>
            <li><a href="#">Menu 4</a></li>
            <li><a href="#">Menu 5</a></li>
            <li><a href="#">Menu 6</a></li>
          </ul>
        </div>

        <div class="navb logo">
            <a href="/"><img src="./assets/icon_forex.png" width="15%" style="max-width:65px" alt="Vue.js PWA" /></a>
        </div>

        <div class="navb"></div>
      </nav>
    </div>
    <main style="z-index: 30;position: relative;">
      <marquee><p style="font-family: Impact; font-size: 18pt">Running Text! Teks Berjalan! Running Text! Teks Berjalan! Running Text! Teks Berjalan!</p></marquee>
      <!--img src="./assets/logo.png" alt="Vue.js PWA"-->
      <router-view></router-view>
      <footer class="footer text-center" style="background: gray;position: relative;">
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
                    <a href="/#/market" title="Market" rel="nofollow">
                      <i class="fa fa-industry"></i>
                      <span>Market</span>
                    </a>
                  </li>

                  <li>
                    <a href="/#/trade" title="Trade" target="_blank" rel="nofollow">
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
  name: 'app',
  methods: {
    navSlide () {
      const burger = document.querySelector('.burger')
      const nav = document.querySelector('.nav-links')
      const navLinks = document.querySelectorAll('.nav-links li')

      nav.classList.toggle('nav-active')

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ''
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
        }
      })

      burger.classList.toggle('toggle')
    }
  }
}
</script>

<style>
@import './assets/css/font-awesome.min.css';
.footer {
  margin-top:85px;
}

.navb{
  width: 30%;
}

nav {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 8vh;
    background-color: #5D4954;
    font-family: "Poppins", sans-serif;
}

.logo {
    text-align: center;
    color: rgb(226, 226, 226);
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 20px;
    width:60%;
}

.logo > img {
  max-width: 45px;
}

.nav-links {
    display: flex;
    justify-content: space-around;
}

.nav-links li {
    list-style: none;
}

.nav-links a {
    color: rgb(226, 226, 226);
    text-decoration: none;
    letter-spacing: 3px;
    font-weight: bold;
    font-size: 14px;
}

.burger {
    display: none;
}

.burger div {
    width: 25px;
    height: 3px;
    background-color: rgb(226, 226, 226);
    margin: 5px;
    transition: all 0.3s ease;
}

@media screen and (max-width: 1024px) {
    .nav-links {
        width: 60%;
    }
}

@media screen and (max-width: 768px) {
    body {
        overflow-x: hidden;
    }

    .nav-links {
        position: fixed;
        z-index: 100;
        left: 0px;
        height: 92vh;
        top: 8vh;
        background-color: #5D4954;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 40%;
        transform: translateX(-100%);
        transition: transform 0.5s ease-in;
    }

    .nav-links li {
        opacity: 0;
    }

    .burger {
        display: block;
        cursor: pointer;
    }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .promo{
    width:100%;
  }

  .nav-links {
    width: 50%;
  }

  .burger {
    float: left;
    padding: 10px;
  }

  .logo {
    width: 50%;
  }
}

.nav-active {
        transform: translateX(0%);
}

@keyframes navLinkFade {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.toggle .line1 {
    transform: rotate(-45deg) translate(-5px, 6px);
}

.toggle .line2 {
    opacity: 0;
}

.toggle .line3 {
    transform: rotate(45deg) translate(-5px, -6px);
}

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
  width: 18%;
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
  margin-top: 75px;
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
