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
  padding: 2rem;
  text-align: center;
  background-color: #f0f0f0;
}

nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
}

main {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
