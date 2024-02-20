<template>
  <el-container>
    <el-header>导航</el-header>
    <el-main>内容（路由）</el-main>
    <el-footer height="200px">
      <myfooter />
    </el-footer>
  </el-container>
  
</template>

<script>
// 引入自定义footer组件
import myfooter from "@/components/Myfooter"

export default {
  name: "App",
  components: {myfooter}
};
</script>

<style scoped >
.el-header,
.el-footer {
  /* background-color: #67c23a; */
    background-color: #e1f3d8;

  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  /* background-color: #67c23a; */
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>