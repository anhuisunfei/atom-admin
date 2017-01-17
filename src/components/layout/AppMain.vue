<template>
<section class="app-main">
  <div class="layout-content">
    <levelbar></levelbar>
    <transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut" appear>
      <router-view class="animated"></router-view>
    </transition>
  </div>
</section>
</template>


<script>
import Levelbar from './Levelbar'

export default {
  components: {
    Levelbar
  }
}
</script>
 <style lang="scss">
.app-main {
    top: 55px;
    left: 224px;
    bottom: 0;
    right: 0;
    overflow: hidden;
    position: absolute;
    width: auto;
}
</style>
