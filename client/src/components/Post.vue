<template>
  <div class="box">
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
            <div class="level-right">
              <small>{{ postedat }}</small>
            </div>
          </div>
          {{ textmessage }}
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item" aria-label="reply">
              <span class="icon is-small">
                <i class="fas fa-reply" aria-hidden="true"></i>
              </span>
            </a>
            <a class="level-item" aria-label="retweet">
              <span class="icon is-small">
                <i class="fas fa-retweet" aria-hidden="true"></i>
              </span>
            </a>
            <a class="level-item" aria-label="like">
              <span class="icon is-small">
                <i class="far fa-heart" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["displayname", "username", "postedat", "textmessage", "profileimg"],
};
</script>

<style scoped>
.icon {
  margin-right: 1em;
}
</style>