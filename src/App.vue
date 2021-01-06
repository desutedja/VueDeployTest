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
            <div class="row" style="display:block ruby">

              <div class="col-md-2 col-sm-3 col-xs-3 margin_top">
                <div class="row alert alert-info" style="margin:0;padding:5px;">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <div class="">
                      <div class="glyphicon-ring glyphicon-teal">
                        <span class="fa fa-facebook glyphicon-bordered"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-6 text-center" style="padding:0;">
                    <p style="padding-top: 10px;"> Here Some Text </p>
                  </div>
                </div>
              </div>

              <div class="col-md-2 col-sm-3 col-xs-3 margin_top">
                <div class="row alert alert-info" style="margin:0;padding:5px;">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <div class="">
                      <div class="glyphicon-ring glyphicon-teal">
                        <span class="fa fa-twitter glyphicon-bordered"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-6 text-center" style="padding:0;">
                    <p style="padding-top: 10px;"> Here Some Text </p>
                  </div>
                </div>
              </div>

              <div class="col-md-2 col-sm-3 col-xs-3 margin_top">
                <div class="row alert alert-info" style="margin:0;padding:5px;">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <div class="">
                      <div class="glyphicon-ring glyphicon-teal">
                        <span class="fa fa-google glyphicon-bordered"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-6 text-center" style="padding:0;">
                    <p style="padding-top: 10px;"> Here Some Text </p>
                  </div>
                </div>
              </div>

              <div class="col-md-2 col-sm-3 col-xs-3 margin_top">
                <div class="row alert alert-info" style="margin:0;padding:5px;">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <div class="">
                      <div class="glyphicon-ring glyphicon-teal">
                        <span class="fa fa-youtube glyphicon-bordered"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-6 text-center" style="padding:0;">
                    <p style="padding-top: 10px;"> Here Some Text </p>
                  </div>
                </div>
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

.container{
  font-size:10px;
}

.glyphicon-ring {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 4px solid white;
  color: white;
  display: inline-table;
  text-align: center;
}

.glyphicon-ring .glyphicon-bordered {
  font-size: 15px;
  vertical-align: middle;
  display: table-cell;
}

.glyphicon-teal {
  background: teal;
  color: orange;
}

.margin_top{
	margin-top: 0px;
}

@media (max-width: 768px){
	.margin_top{
		margin-top: 10px !important;
	}
}

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
