<template>
  <el-container>
    <el-header>导航</el-header>
    <el-main>内容（路由）</el-main>
    <el-footer height="100px">注脚</el-footer>
  </el-container>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #67c23a;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #e1f3d8;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>