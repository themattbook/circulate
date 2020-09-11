<template>
  <nav class="navbar mt-3 mb-5" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="../assets/circulate-logo.png" />
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navMenu" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <a class="navbar-item button is-dark mr-2">Login</a>
            <a class="navbar-item button is-danger">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.svg-inline--fa {
  margin-right: 5px;
}
</style>
