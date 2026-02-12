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
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 248, 255, 0.9) 100%);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(135, 206, 250, 0.3), 
              inset 0 1px 0 rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid rgba(135, 206, 250, 0.4);
  border-radius: 0 0 20px 20px;
  margin: 0 auto 2rem;
  max-width: 800px;
}

nav a {
  margin: 0 1rem;
  padding: 0.5rem 1.2rem;
  text-decoration: none;
  color: #0077be;
  font-weight: 600;
  border-radius: 20px;
  transition: all 0.3s ease;
  display: inline-block;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 2px 8px rgba(135, 206, 250, 0.2);
}

nav a:hover {
  color: #005a9c;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 12px rgba(135, 206, 250, 0.4);
  transform: translateY(-2px);
}

nav a.router-link-active {
  color: #fff;
  background: linear-gradient(135deg, #4fc3f7 0%, #29b6f6 50%, #03a9f4 100%);
  box-shadow: 0 4px 15px rgba(3, 169, 244, 0.4), 
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

main {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
