<template>
<section class="app-main" :class={sidebarHide:!sidebar.opened}>
  <div class="layout-content">
    <div class="layout-level">
      <levelbar></levelbar>
    </div>
    <div class="layout-inner">
      <transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut" appear>
        <router-view class="animated"></router-view>
      </transition>
    </div>
  </div>
</section>
</template>


<script>
import Levelbar from './Levelbar'
import {
  mapGetters
} from 'vuex'
export default {
  components: {
    Levelbar
  },
  computed: mapGetters({
    sidebar: 'sidebar'
  })
}
</script>
 <style lang="scss">
.app-main {
    top: 55px;
    margin-left: 224px;
    bottom: 0;
    right: 0;
    overflow: hidden;
    position: relative;
    width: auto;
    background-color: #f5f5f5;
    .layout-content {
        overflow-y: auto;
        padding: 15px;
        .layout-inner {
            padding: 10px;
            background: #fff;
            border-radius: 3px;
            margin-top: 10px;
            .el-row {
                margin-bottom: 20px;
            }
        }
    }
    .layout-level{
      box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
    padding: 25px 15px;
    background-color: #fff;
    margin: -15px -15px 0;
    }
}
.sidebarHide {
    margin-left: 0;
}
</style>
