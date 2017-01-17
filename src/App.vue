<template>
<div id="app">
  <nprogress-container></nprogress-container>
  <navbar :show="true"></navbar>
  <sidebar :show="sidebar.opened && !sidebar.hidden"></sidebar>
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
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  name: 'app',
  components: {
    AppMain,
    Footerbar,
    Levelbar,
    Navbar,
    Sidebar,
    NprogressContainer
  },
  computed: mapGetters({
    sidebar: 'sidebar'
  }),
  methods: mapActions([
    'toggleDevice',
    'toggleSidebar'
  ]),
  beforeMount () {
    const {
      body
    } = document
    const WIDTH = 768
    const RATIO = 3

    const handler = () => {
      if (!document.hidden) {
        let rect = body.getBoundingClientRect()
        let isMobile = rect.width - RATIO < WIDTH
        console.log(rect.width)
        this.toggleDevice(isMobile ? 'mobile' : 'other')
        this.toggleSidebar(!isMobile)
      }
    }

    // document.addEventListener('visibilitychange', handler)
    // window.addEventListener('DOMContentLoaded', handler)
    window.addEventListener('resize', handler)
  }

}
</script>

<style lang="scss">@import '~animate.css';
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
