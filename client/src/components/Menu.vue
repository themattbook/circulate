<template>
  <aside class="menu">
    <ul class="menu-list">
      <li>
        <a class="is-active">
          <i class="fas fa-house-user"></i>Home
        </a>
      </li>
      <li>
        <a>
          <i class="fas fa-binoculars"></i>Explore
        </a>
      </li>
      <li>
        <a>
          <i class="fas fa-flag"></i>Notifications
        </a>
      </li>
      <li>
        <a>
          <i class="fas fa-comment-alt"></i>Messages
        </a>
      </li>
      <li>
        <a>
          <i class="fas fa-bookmark"></i>Bookmarks
        </a>
      </li>
      <li>
        <a>
          <i class="fas fa-clipboard-list"></i>Lists
        </a>
      </li>
    </ul>
    <hr />
    <ul class="menu-list">
      <li>
        <a>
          <i class="fas fa-user"></i>Profile
        </a>
      </li>
      <li>
        <a>
          <i class="fas fa-cog"></i>Settings
        </a>
      </li>
    </ul>
    <hr />
    <ul class="menu-list">
      <li>
        <a class="button is-large is-light">Create</a>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style scoped>
.menu {
  font-weight: bold;
  font-size: 1.3rem;
}
.menu li {
  margin-top: 0.5rem;
}
.menu svg {
  margin-right: 1rem;
}
.menu hr {
  background-color: #ececec;
}
</style>