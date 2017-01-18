<template>
<nav class="app-levelbar">
  <el-breadcrumb>
    <el-breadcrumb-item :to="{ path : '/'}">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-if="parentName!=null">{{ parentName }}</el-breadcrumb-item>
    <el-breadcrumb-item>{{ name }}</el-breadcrumb-item>
  </el-breadcrumb>
</nav>
</template>

<script>
export default {
  data() {
    return {
      list: null
    }
  },
  created() {
    this.getList()
  },
  computed: {
    name() {
      return this.$route.name
    },
    parentName() {
      if (this.$route.matched.length === 2) {
        return this.$route.matched[0].name
      } else {
        return null
      }
    }
  },
  methods: {
    getList() {
      let matched = this.$route.matched.filter(item => item.name)
      let first = matched[0]
      if (first && (first.name !== 'Home' || first.path !== '')) {
        matched = [{
          name: 'Home',
          path: '/'
        }].concat(matched)
      }
      this.list = matched
    }
  },
  watch: {
    $route(to, from) {
      this.getList()
    }
  }
}
</script>
