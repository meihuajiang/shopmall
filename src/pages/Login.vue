<template>
  <div class="login">
    <van-nav-bar
      title="用户登录"
      left-text="返回"
      left-arrow
      @click-left="goBack"
    />
    <div class="login-body">
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
      <div class="login-button">
        <van-button
          type="primary"
          siz="large"
          :block="true"
          :loading="openLoading"
          @click="login"
          >马上登录</van-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import URL from "@/assets/js/api.js";
import { Toast } from "vant";
export default {
  name: "login",
  data() {
    return {
      userName: "",
      password: "",
      openLoading: false, //是否开启用户注册的loading状态
      userNameErrorMsg: "", //用户名格式错误时的提示
      passwordErrorMsg: "" //密码格式错误时的提示
    };
  },
  created() {
    if (localStorage.userInfo) {
      //判断本地是否有登录记录
      Toast.success("您已经登录过了");
      alert("您已经登录过了");
      this.$router.push("/");
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    login() {
      this.checkForm() && this.axiosLogin();
    },
    axiosLogin() {
      this.openLoading = true;
      let that = this;
      this.axios({
        url: URL.login,
        method: "post",
        data: {
          userName: that.userName,
          password: that.password
        }
      })
        .then(response => {
          if (response.data.code === 200) {
            // eslint-disable-next-line no-unused-vars
            new Promise((resolve, reject) => {
              localStorage.userInfo = { userName: this.userName };
              setTimeout(() => {
                resolve();
              }, 500);
            })
              .then(() => {
                Toast.success("登录成功");
                this.$router.push("/");
              })
              .catch(error => {
                console.log(error);
                Toast.fail("本地存储失败!");
              });
          } else {
            this.openLoading = false;
            Toast.fail("登录失败");
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
<style scoped lang="scss"></style>
