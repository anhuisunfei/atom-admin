<template>
<div id="app">
  <nprogress-container></nprogress-container>
  <navbar></navbar>
  <sidebar></sidebar>
  <app-main></app-main>
  <footerbar></footerbar>
</div>
</template>

<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
import {
  AppMain,
  Footerbar,
  Levelbar,
  Navbar,
  Sidebar
} from './components/layout'

export default {
  name: 'app',
  components: {
    AppMain,
    Footerbar,
    Levelbar,
    Navbar,
    Sidebar,
    NprogressContainer
  }
}
</script>

<style lang="scss">
@import '~animate.css';
.animated {
    animation-duration: 0.377s;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

}

body {
    margin: 0;
    padding: 0;
}
</style>
