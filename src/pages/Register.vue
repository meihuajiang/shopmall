<template>
  <div class="register">
    <van-nav-bar
      title="用户注册"
      left-text="返回"
      left-arrow
      @click-left="goBack"
    />
    <div class="register-body">
      <van-field
        label="用户名"
        placeholder="请输入用户名"
        required
        v-model="userName"
        clearable
        :error-message="userNameErrorMsg"
      />
      <van-field
        label="密码"
        type="password"
        placeholder="请输入密码"
        required
        v-model="password"
        :error-message="passwordErrorMsg"
      />
      <div class="register-button">
        <van-button
          type="primary"
          siz="large"
          :block="true"
          :loading="openLoading"
          @click="register"
          >马上注册</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import URL from "@/assets/js/api";
import { Toast } from "vant";
export default {
  name: "register",
  data() {
    return {
      userName: "",
      password: "",
      openLoading: false,
      userNameErrorMsg: "", //用户名格式错误时的提示
      passwordErrorMsg: "" //密码格式错误时的提示
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    register() {
      this.checkForm() && this.axiosRegister();
    },
    axiosRegister() {
      this.openLoading = true;
      let that = this;
      this.axios({
        url: URL.register,
        method: "post",
        data: {
          userName: that.userName,
          password: that.password
        }
      })
        .then(response => {
          if (response.data.code === 200) {
            Toast.success(response.data.message);
          } else {
            this.openLoading = false;
            Toast.fail("注册失败");
          }
        })
        .catch(error => {
          this.openLoading = false;
          console.log(error);
        });
    },
    checkForm() {
      let isOk = true;
      if (this.userName.length < 2) {
        this.userNameErrorMsg = "用户名不能少于2位";
        isOk = false;
      } else {
        this.userNameErrorMsg = "";
      }
      if (this.password.length < 5) {
        this.passwordErrorMsg = "密码不能少于5位";
        isOk = false;
      }
      return isOk;
    }
  }
};
</script>

<style scoped></style>
