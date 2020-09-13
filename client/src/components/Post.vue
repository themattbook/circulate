<template>
  <div class="mb-6">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img :src="profileimg" alt="Image" />
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <div class="level is-mobile">
            <div class="level-left">
              <strong class="mr-1">{{ displayname }}</strong>
              <small>{{ username }}</small>
            </div>
          </div>
          {{ textmessage }}
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item" aria-label="reply">
              Like
            </a>
            <a class="level-item" aria-label="retweet">
              Reply
            </a>
            <a class="level-item" aria-label="like">
              {{ postedat }}
            </a>
          </div>
        </nav>
        <Comment v-if="hascomment" />
      </div>
    </article>
  </div>
</template>

<script>
import Comment from "./Comment.vue";
export default {
  name: "Post",
  props: [
    "displayname",
    "username",
    "postedat",
    "textmessage",
    "profileimg",
    "hascomment"
  ],
  components: {
    Comment
  }
};
</script>

<style scoped>
.icon {
  margin-right: 1em;
}
</style>
