<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/privacy">Privacy Policy</router-link>
      <router-link to="/imprint">Imprint</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
nav {
  padding: 1.5rem 2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.85);
  position: sticky;
  top: 0;
  z-index: 100;
}

nav a {
  margin: 0 1.5rem;
  text-decoration: none;
  color: #2a4559;
  font-weight: 600;
}

nav a:hover {
  color: #598cc4;
}

nav a.router-link-active {
  color: #598cc4;
}

main {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
