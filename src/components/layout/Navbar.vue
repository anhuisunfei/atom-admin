<template>
<header class="top-navbar-wrapper">
  <nav class="nav">
    <div class="nav-left">
      <router-link class="full" to="/">AtomAdmin</router-link>
    </div>
    <div class="nav-collapse">
      <a href="javascript:;" @click="toggleSidebar(!sidebar.opened)">
        <i class="fa fa-bars"></i>
      </a>

    </div>
    <div class="nav-right">
      <el-dropdown class="is-user">
        <img src="../../assets/avatar.jpg" class="nav-avatar" alt="">
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </nav>
</header>
</template>


<script>
import {
  mapActions,
  mapGetters
} from 'vuex'

export default {
  props: {
    show: Boolean
  },
  computed: mapGetters({
    sidebar: 'sidebar'
  }),
  methods: mapActions([
    'toggleSidebar'
  ])
}
</script>

<style lang="scss">
.top-navbar-wrapper {
    position: fixed;
    width: 100%;
    z-index: 1211;
    top: 0;

    .nav {
        position: relative;
        min-height: 55px;
        background-color: #03a9f4;
        z-index: 101;
        color: #fff;

        padding: 0;
        &-left {
            width: 224px;
            text-align: center;
            float: left;
            // background-color: #2a323c;
            font-family: Helvetica;
            position: relative;
            font-size: 30px;
            a {
                color: #fff;
                height: 55px;
                text-decoration: none;
                padding: 10px 15px;
                display: block;
            }
        }
        &-collapse {
            float: left;
            width: 70px;
            cursor: pointer;
            background-color: hsla(0,0%,100%,.1);
            text-align: center;

            position: relative;
            a {
                color: #fff;
                padding-top: 20px;
                padding-bottom: 20px;
                display: block;
            }
        }
        &-right {
            float: right;
            padding-right: 10px;
            padding-top: 10px;
        }
        &-avatar {
            width: 36px;
            height: 36px;
            border: 2px solid #d3dce6;
            border-radius: 50%;
            vertical-align: middle;
            cursor: pointer;
        }
    }
}
</style>
