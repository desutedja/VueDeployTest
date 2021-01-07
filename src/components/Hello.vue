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
            <b-tab title="DEMO" active>
              <div class="container">
                <div class="row">
                  <div class="f-row">
                    <div class="thirty pull-left">
                      User ID
                    </div>
                    <div class="fifty pull-left click-to-copy">
                      <span class="click-to-copy-text" :value="link1">: 123456789</span>
                      <span data-label="Copied" class="Label" @click="doCopy">Copy</span>
                    </div>
                    <div class="twenty">
                      <button class="btn btn-primary btn-sm btnsmall">Edit</button>
                    </div>
                  </div>
                  <div class="f-row">
                    <div class="thirty pull-left">
                      Password
                    </div>
                    <div class="fifty pull-left click-to-copy">
                      <span class="click-to-copy-text" :value="link2">: 123456789</span>
                      <span data-label="Copied" class="Label">Copy</span>
                    </div>
                    <div class="twenty">
                      <button class="btn btn-primary btn-sm btnsmall">Edit</button>
                    </div>
                  </div>
                  <div class="f-row">
                    <div class="thirty pull-left">
                      Server
                    </div>
                    <div class="fifty pull-left">
                      : MetaTrader5
                    </div>
                  </div>
                  <div class="f-row">
                    <div class="thirty pull-left">
                      Balance
                    </div>
                    <div class="fifty pull-left">
                      : 1,250.75
                    </div>
                    <div class="twenty">
                      <button class="btn btn-primary btn-sm btnsmall">+</button>
                    </div>
                  </div>

                  <div class="f-row"><br /></div>

                  <span>Trading Untuk Meta Trader 5</span>
                  <div class="f-row">
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
            </b-tab>
            <b-tab title="REAL">
              <b-card-text>For Real Account</b-card-text>
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
small {
   display: block;
   text-align: center;
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
}
.pull-left{text-align: left;}
.f-row{width: 100%;}
.fifty{width:50% !important;}
.thirty{width:30% !important;float:left;}
.twenty{width:20% !important;float:left;}

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

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .promo{
    width:100%;
  }
}
</style>
