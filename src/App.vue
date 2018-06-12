<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {

    }
  }
}
</script>

<style>
  @font-face {
    font-family: 'icomoon';
    src:  url('/static/fonts/icomoon.eot?fhqid3');
    src:  url('/static/fonts/icomoon.eot?fhqid3#iefix') format('embedded-opentype'),
    url('/static/fonts/icomoon.ttf?fhqid3') format('truetype'),
    url('/static/fonts/icomoon.woff?fhqid3') format('woff'),
    url('/static/fonts/icomoon.svg?fhqid3#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  [class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

*{margin: 0;padding: 0;}
body{background-color: #fff;}
</style>
