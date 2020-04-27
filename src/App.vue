/* src/App.vue */

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  mounted() {
    // eslint-disable-next-line no-unused-vars
    window.onbeforeunload = function(e) {
      const storage = window.localStorage;
      storage.clear();
    };
  }
};
</script>
