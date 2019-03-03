<template>
  <div class="pagesking">
    <el-container>
      <!-- 左侧菜单栏 -->
      <el-aside width="auto">
        <app-aside :isCollapse="isCollapse"></app-aside>
      </el-aside>

      <!-- 右侧内容区域 -->
      <el-container>
        <!-- 头部 -->
        <el-header>
          <app-header @taggle='changeCollapse'>

          </app-header>
        </el-header>
        <!-- 主体 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from "../components/Aside";
import Header from "../components/Header";

export default {
  name: "admin-index",
  data(){
    return {
        isCollapse: false,
    }
  },
  // 注册组件，注意组件名称不要和html的标签名重复
  components: {
    "app-aside": Aside,
    "app-header": Header
  },
  methods:{
      changeCollapse(){
        this.isCollapse = !this.isCollapse;
      }
  }
};
</script>

<style scoped lang="css">
.pagesking {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.el-container {
  margin-bottom: 40px;
  height: 100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
