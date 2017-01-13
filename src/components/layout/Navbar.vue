<template>
<nav class="nav">
  <div class="nav-left">
    <router-link class="full" to="/">AtomAdmin</router-link>
  </div>
  <div class="nav-collapse">
    <i class="fa fa-bars"></i>
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
</template>


<script>
export default {
  props: {
    isCollapse: Boolean
  },
  methods: {

  }
}
</script>

<style lang="scss">
.nav {
    position: fixed;
    width: 100%;
    height: 70px;
    line-height: 70px;
    background-color: #03a9f4;
    z-index: 101;
    color: #fff;

    padding: 0;
    &-left {
        width: 224px;
        text-align: center;
        float: left;
        background-color: #2a323c;
        font-family: Helvetica;
        font-size: 30px;
        a {
            color: #fff;
                text-decoration: none;
        }
    }
    &-collapse {
        float: left;
        width: 70px;
        cursor: pointer;
        background-color: hsla(0,0%,100%,.1);
        text-align: center;
        color: #fff;

    }
    &-right {
        float: right;
        padding-right: 10px;
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
</style>
