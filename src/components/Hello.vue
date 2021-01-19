<template>
  <div class="hello">
    <div class="containerPromo">
      <div class="promo">
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="https://picsum.photos/1024/480/?image=52"
          ></b-carousel-slide>

          <!-- Slides with custom text -->
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
            <h1>Hello world!</h1>
          </b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                src="https://picsum.photos/1024/480/?image=55"
                alt="image slot"
              >
            </template>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div>
    <div class="containerPromo">
      <div class="promo">
        <b-card no-body>
          <b-tabs card>
            <b-tab title="DEMO" class="tabs" active>
              <div class="container">
                <div class="row">
                  <div class="f-row">
                    <div class="lbl twenty5 pull-left">
                      User ID
                    </div>
                    <div class="forty pull-left click-to-copy">
                      <span class="click-to-copy-text">: 123456789</span>
                    </div>
                    <div class="thirty5">
                      <button class="btn btn-primary btn-sm btnsmall">Copy</button>
                    </div>
                  </div>
                  <div class="f-row">
                    <div class="lbl twenty5 pull-left">
                      Password
                    </div>
                    <div class="forty pull-left click-to-copy">
                      <span class="click-to-copy-text">: 123456789</span>
                    </div>
                    <div class="thirty5">
                      <button class="btn btn-primary btn-sm btnsmall">Edit</button>
                    </div>
                  </div>
                  <div class="f-row">
                    <div class="lbl twenty5 pull-left">
                      Server
                    </div>
                    <div class="forty pull-left">
                      : MetaTrader5
                    </div>
                  </div>
                  <div class="f-row">
                    <div class="lbl twenty5 pull-left">
                      Balance
                    </div>
                    <div class="forty pull-left">
                      : 1,250.75
                    </div>
                    <div class="thirty5">
                      <button class="btn btn-primary btn-sm btnsmall"><i class="fa fa-refresh"></i></button>
                    </div>
                  </div>

                  <div class="f-row"><br /></div>

                  <div class="appl">
                    <div class="lblRow">
                      <span>Trading Untuk Meta Trader 5</span>
                    </div>

                    <div class="f-row apps">
                      <div class="thirty">
                        <small>WEB</small>
                        <button class="btn btn-secondary btn-md btn-radius"><i class="fa fa-globe"></i> TRADE</button>
                      </div>
                      <div class="thirty">
                        <small>ANDROID</small>
                        <button class="btn btn-secondary btn-md btn-radius"><i class="fa fa-android"></i> TRADE</button>
                      </div>
                      <div class="thirty">
                        <small>IOS</small>
                        <button class="btn btn-secondary btn-md btn-radius"><i class="fa fa-apple"></i> TRADE</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>
            <b-tab title="REAL" class="tabs">
              <div class="container">
                <div class="row">
                  <div class="f-row">
                    <div class="lbl twenty5 pull-left">
                      User ID
                    </div>
                    <div class="forty pull-left click-to-copy">
                      <span class="click-to-copy-text">: 123456789</span>
                    </div>
                    <div class="thirty5">
                      <button class="btn btn-primary btn-sm btnsmall">Copy</button>
                      <button class="btn btn-primary btn-sm btnsmall">Add</button>
                    </div>
                  </div>
                  <div class="f-row">
                    <div class="lbl twenty5 pull-left">
                      Password
                    </div>
                    <div class="forty pull-left click-to-copy">
                      <span class="click-to-copy-text">: 123456789</span>
                    </div>
                    <div class="thirty5">
                      <button class="btn btn-primary btn-sm btnsmall">Copy</button>
                      <button class="btn btn-primary btn-sm btnsmall">Edit</button>
                    </div>
                  </div>
                  <div class="f-row">
                    <div class="lbl twenty5 pull-left">
                      Server
                    </div>
                    <div class="forty pull-left">
                      : MetaTrader5
                    </div>
                  </div>
                  <div class="f-row">
                    <div class="lbl twenty5 pull-left">
                      Balance
                    </div>
                    <div class="forty pull-left">
                      : 1,250.75
                    </div>
                    <div class="thirty5">
                      <button class="btn btn-primary btn-sm btnsmall">Depo</button>
                      <button class="btn btn-primary btn-sm btnsmall">WD</button>
                    </div>
                  </div>

                  <div class="f-row"><br /></div>

                  <div class="appl">
                    <div class="lblRow">
                      <span>Trading Untuk Meta Trader 5</span>
                    </div>
                    <div class="f-row apps">
                      <div class="thirty">
                        <small>WEB</small>
                        <button class="btn btn-secondary btn-md btn-radius">TRADE</button>
                      </div>
                      <div class="thirty">
                        <small>ANDROID</small>
                        <button class="btn btn-secondary btn-md btn-radius">TRADE</button>
                      </div>
                      <div class="thirty">
                        <small>IOS</small>
                        <button class="btn btn-secondary btn-md btn-radius">TRADE</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>
            <b-tab title="APPLY" class="tabs">
              <div class="container">
                <div class="row">
                  <div class="center-screen">
                    <a href="/#/register/1" class="btn-grad">Apply</a>
                  </div>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.tabs > .card-header {
  background-image: url("../assets/texture2.png");
}

.apps > .thirty > button {
  font-size: 12px;
  font-weight: bold;
  font-family: tahoma;
  min-height: 36px;
  border-radius: 8px;
  color: #ffb527;
  background-color: #2f1c08;
}
.appl{
  width: 100%;
  min-height: 100px;
}

.lblRow{
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
}

.lbl {
  font-weight: bold;
}

.tabs > .card-header > ul > li.nav-item {
  margin: 0 !important;
}

small {
   display: block;
   text-align: center;
}

.center-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100px;
  margin: 0 auto;
}

.tabs > .container > .row > .f-row {
  padding: 3px;
}

.click-to-copy .Label {
    color: #0069ff;
    display: inline-block;
    font-size: 13px;
    line-height: 100%;
    position: relative;
    opacity: .999;
    top: -1px;
    cursor:pointer;
}

.btn-primary.gradient {
  background: -moz-linear-gradient(top,  #33a6cc 50%, #0099cc 50%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(50%,#33a6cc), color-stop(50%,#0099cc)); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top,  #33a6cc 50%,#0099cc 50%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(top,  #33a6cc 50%,#0099cc 50%); /* Opera 11.10+ */
  background: -ms-linear-gradient(top,  #33a6cc 50%,#0099cc 50%); /* IE10+ */
  background: linear-gradient(to bottom,  #33a6cc 50%,#0099cc 50%); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#33a6cc', endColorstr='#0099cc',GradientType=0 ); /* IE6-9 */
}
.btn-primary.gradient:hover, .btn-primary.gradient:focus, .btn-primary.gradient:active, .btn-primary.gradient.active, .open > .dropdown-toggle.btn-primary {
  background: -moz-linear-gradient(top,  #66b2cc 50%, #33a6cc 50%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(50%,#66b2cc), color-stop(50%,#33a6cc)); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top,  #66b2cc 50%,#33a6cc 50%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(top,  #66b2cc 50%,#33a6cc 50%); /* Opera 11.10+ */
  background: -ms-linear-gradient(top,  #66b2cc 50%,#33a6cc 50%); /* IE10+ */
  background: linear-gradient(to bottom,  #66b2cc 50%,#33a6cc 50%); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#66b2cc', endColorstr='#33a6cc',GradientType=0 ); /* IE6-9 */
}
.btn-primary.gradient:active, .btn-primary.gradient.active {
  background: -moz-linear-gradient(top,  #267c99 50%, #007299 50%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(50%,#267c99), color-stop(50%,#007299)); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top,  #267c99 50%,#007299 50%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(top,  #267c99 50%,#007299 50%); /* Opera 11.10+ */
  background: -ms-linear-gradient(top,  #267c99 50%,#007299 50%); /* IE10+ */
  background: linear-gradient(to bottom,  #267c99 50%,#007299 50%); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#267c99', endColorstr='#007299',GradientType=0 ); /* IE6-9 */
}

.btn-radius{
  border-radius: 25px;
  width: 85%;
}
.btnsmall{
  border-radius: 5px;
  width: 50px;
  padding: 0px;
  font-size: small !important;
}
.pull-left{text-align: left;}
.f-row{width: 100%;}
.fifty{width:50% !important;}
.forty{width:40% !important;float:left;}
.thirty5{width:35% !important;float:left;}
.thirty{width:30% !important;float:left;}
.twenty5{width:25% !important;float:left;}
.twenty{width:20% !important;float:left;}
.apps .thirty{width:33% !important;float:left;}

.hello{
  text-align: center;
  text-align: -webkit-center;
  text-align: -moz-center;
}

.promo{
  width:70%;
}

.promo .card{
  margin: 10px 0 100px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}

/* btn Apply */

.btn-grad {background-image: linear-gradient(to right, #314755 0%, #26a0da  51%, #314755  100%)}

.btn-grad {
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .promo{
    width:100%;
  }
}
</style>
