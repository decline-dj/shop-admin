<template>
  <div class="login-form">
    <el-form
      label-position="right"
      label-width="45px"
      :model="user"
    >
      <el-form-item>
        <div class="login-title">登录</div>
      </el-form-item>
      <el-form-item label="账号">
        <el-input v-model="user.uname"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          type="password"
          v-model="user.upwd"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <div class="login-title">
          <el-button
            type="primary"
            @click="submitForm"
          >提交</el-button>
          <el-button @click="resetForm">重置</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        uname: "",
        upwd: ""
      }
    };
  },
  methods: {
    submitForm() {
      console.log("用户：" + this.user.uname + "密码：" + this.user.upwd);
    },

    resetForm() {
      (this.user.uname = ""), (this.user.upwd = "");
    }
  }
};
</script>

<style scoped lang="css">
.login-form {
  width: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -200px 0 0 -225px;
}
.login-title {
  text-align: center;
  color: #409eff;
  font-size: 16px;
}
</style>
