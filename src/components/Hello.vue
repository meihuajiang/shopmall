<template>
  <div class="app_wrapper">
    <!-- main -->
    <div class="main_wrapper">
      <h1 class="title">{{ msg }}</h1>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style scoped>
.app_wrapper {
  background-color: #f2f2f2;
}
.main_wrapper .title {
  font-size: 1rem;
  color: #f00;
}
</style>
