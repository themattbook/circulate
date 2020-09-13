<template>
  <div class="container mt-6">
    <div class="columns mt-4">
      <div class="is-menu column is-2 mt-6">
        <Menu />
      </div>
      <div class="column is-9 is-offset-1 mt-6 is-post">
        <Post
          :profileimg="post.image"
          :displayname="post.name"
          :username="post.username"
          :postedat="post.postdate"
          :textmessage="post.message"
          v-for="post in posts"
          :key="post.name"
          :hascomment="post.comment"
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
    Post
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
          comment: true
        },
        {
          image: "https://bulma.io/images/placeholders/128x128.png",
          name: "Someone New",
          username: "@someusername",
          postdate: "09/11/2020",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.",
          comment: true
        },
        {
          image: "https://bulma.io/images/placeholders/128x128.png",
          name: "Yetti Another",
          username: "@yetti",
          postdate: "09/11/2020",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.",
          comment: false
        },
        {
          image: "https://bulma.io/images/placeholders/128x128.png",
          name: "Random Person",
          username: "@random",
          postdate: "09/11/2020",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.",
          comment: false
        },
        {
          image: "https://bulma.io/images/placeholders/128x128.png",
          name: "Someone New",
          username: "@someusername",
          postdate: "09/11/2020",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.",
          comment: true
        },
        {
          image: "https://bulma.io/images/placeholders/128x128.png",
          name: "Yetti Another",
          username: "@yetti",
          postdate: "09/11/2020",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.",
          comment: true
        }
      ]
    };
  }
};
</script>

<style scoped></style>
