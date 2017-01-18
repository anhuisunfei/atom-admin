<template>
<aside class="app-sidebar animated" :class="{slideInLeft: show, slideOutLeft: !show}">
  <el-menu theme="dark" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :router="true">
    <el-menu-item index="/">
      <i class="fa fa-dashboard"></i>Dashboard
    </el-menu-item>
    <el-submenu index="1">
      <template slot="title">
        <i class="fa fa-fire"></i>Elements
</template>

        <el-menu-item index="/buttons">Buttons</el-menu-item>
          <el-menu-item index="/tables">Tables</el-menu-item>
</template>
</el-menu>
</aside>
</template>

<script>
export default {
  props: {
    show: Boolean
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss">
.app-sidebar {
    width: 224px;
    top: 55px;
    left: 0;
    z-index: 1001;
    display: block;
    min-height: 100%;
    background-color: #282828;
    height: 100%;
    position: fixed;
}
.el-submenu [class^=fa] {
    vertical-align: baseline;
    margin-right: 10px;
}
.el-menu-item [class^=fa] {
    vertical-align: baseline;
    margin-right: 10px;
}
</style>
