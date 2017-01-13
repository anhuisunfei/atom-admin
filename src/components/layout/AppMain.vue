<template>
<section class="app-main">
  <levelbar></levelbar>
  <transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut" appear>
    <router-view class="animated"></router-view>
  </transition>
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
    top: 70px;
}
</style>
