<template>
<aside class="app-sidebar animated" :class="{slideInLeft: show, slideOutLeft: !show}">

  <el-menu  theme="dark" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :router="true">
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-message"></i>Elements
</template>

        <el-menu-item index="/">选项1</el-menu-item>
        <el-menu-item index="/buttons">buttons</el-menu-item>
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
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
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
</style>
