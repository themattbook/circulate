<template>
  <div class="container">
    <div class="columns">
      <div class="column is-2">
        <Menu />
      </div>
      <div class="column is-9 is-offset-1">
        <Post />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
import Post from "./Post.vue";
export default {
  name: "Body",
  components: {
    Menu,
    Post,
  },
  data() {
    return {
      properties: {
        image:
          "https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
    };
  },
};
</script>

<style scoped></style>
