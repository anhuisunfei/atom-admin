<template>
<el-row>
  <el-row>
    <el-col :span="24">
      <div class="grid-content">
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="text">文字按钮</el-button>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <div class="grid-content">
        <el-button :plain="true" :disabled="true">主要按钮</el-button>
        <el-button type="primary" :disabled="true">主要按钮</el-button>
        <el-button type="text" :disabled="true">文字按钮</el-button>
      </div>
    </el-col>
  </el-row>
</el-row>
</template>

<script>
export default {}
</script>

<style lang="css">
</style>
