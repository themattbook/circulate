<template>
  <div class="container">
    <div class="columns">
      <div class="column is-2">
        <Menu />
      </div>
      <div class="column is-9 is-offset-1">
        <Post
          :profileimg="post.image"
          :displayname="post.name"
          :username="post.username"
          :postedat="post.postdate"
          :textmessage="post.message"
          v-for="post in posts"
          :key="post.name"
        />
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
      posts: [
        {
          image: "https://bulma.io/images/placeholders/128x128.png",
          name: "Random Person",
          username: "@random",
          postdate: "09/11/2020",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.",
        },
        {
          image: "https://bulma.io/images/placeholders/128x128.png",
          name: "Someone New",
          username: "@someusername",
          postdate: "09/11/2020",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.",
        },
        {
          image: "https://bulma.io/images/placeholders/128x128.png",
          name: "Yetti Another",
          username: "@yetti",
          postdate: "09/11/2020",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.",
        },
        {
          image: "https://bulma.io/images/placeholders/128x128.png",
          name: "Random Person",
          username: "@random",
          postdate: "09/11/2020",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.",
        },
        {
          image: "https://bulma.io/images/placeholders/128x128.png",
          name: "Someone New",
          username: "@someusername",
          postdate: "09/11/2020",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.",
        },
        {
          image: "https://bulma.io/images/placeholders/128x128.png",
          name: "Yetti Another",
          username: "@yetti",
          postdate: "09/11/2020",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
