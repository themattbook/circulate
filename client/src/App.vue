<template>
  <div id="app">
    <Navigation />
    <Body />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Body from "./components/Body.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Body
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
}
</style>
