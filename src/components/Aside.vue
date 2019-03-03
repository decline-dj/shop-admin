<template>

  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
  >
    <div class="logo"></div>
    <el-submenu
      v-for="(item,index) in menus"
      :key="index"
      :index="`${index+1}`"
    >
      <template slot="title">
        <i :class="item.icon"></i>
        <span slot="title">{{item.title}}</span>
      </template>
      <el-menu-item-group>
        <router-link
          v-for="(subitem,subindex) in item.group"
          :key="subindex"
          :to="`${item.path}${subitem.path}`"
        >
          <el-menu-item :index="`${index+1}-${subindex+1}`">{{subitem.title}}</el-menu-item>
        </router-link>

      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          icon: "el-icon-location",
          title: "管理页面",
          group: [{ src: "/admin/goods-list", title: "商品列表" }, { src: "/admin/category", title: "管理" }]
        },
        {
          icon: "el-icon-location",
          title: "商品页面",
          group: [{ src: "#", title: "1" }, { src: "#", title: "2" }]
        },
        {
          icon: "el-icon-location",
          title: "用户详情",
          group: [{ src: "#", title: "1" }, { src: "#", title: "2" }]
        }
      ]
    };
  },
  methods: {

  },
  props:["isCollapse"]
};
</script>
<style  scoped lang="css">
.el-menu-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.el-menu {
  flex: 1;
  background: #d3dce6;
}
.el-menu a {
  text-decoration: none;
}
.logo {
  height: 60px;
  background: #002140;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu-vertical-demo {
  background: #001529;
  height: 100%;
}

.el-menu-vertical-demo /deep/ .el-submenu__title * {
  color: #999;
}

.el-menu-vertical-demo /deep/ .el-submenu__title:hover {
  background: inherit;
}

.el-menu-vertical-demo /deep/ .is-opened .el-submenu__title * {
  color: #eee;
}

.menu-group /deep/ .el-menu-item-group__title {
  display: none;
}

.menu-group {
  background: #000c17;
}

.menu-group .el-menu-item {
  color: #999;
}

.menu-group .el-menu-item:hover,
.menu-group .el-menu-item:active,
.menu-group .el-menu-item:focus {
  color: #eee;
  background: inherit;
}
</style>