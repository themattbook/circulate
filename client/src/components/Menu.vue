<template>
  <aside class="menu">
    <ul class="menu-list">
      <li>
        <a class="is-active">Home</a>
      </li>
      <li>
        <a>Explore</a>
      </li>
      <li>
        <a>Notifications</a>
      </li>
      <li>
        <a>Messages</a>
      </li>
      <li>
        <a>Bookmarks</a>
      </li>
      <li>
        <a>Lists</a>
      </li>
      <li>
        <a>Profile</a>
      </li>
      <li>
        <a>Settings</a>
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
</style>