<template>
  <div class="home">
    <h1>LYGAIOS</h1>
    <p>A frontend developer's project hub</p>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 4rem 2rem;
  max-width: 900px;
  margin: 0 auto;
}

h1 {
  font-size: 4.5rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #2a4559 0%, #3d5f7f 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  letter-spacing: 0.05em;
  filter: drop-shadow(0 0 40px rgba(255, 255, 255, 0.8))
          drop-shadow(0 0 80px rgba(255, 255, 255, 0.6))
          drop-shadow(2px 2px 20px rgba(255, 255, 255, 0.9))
          drop-shadow(-2px -2px 20px rgba(255, 255, 255, 0.9));
}

p {
  font-size: 1.4rem;
  background: linear-gradient(135deg, #2a4559 0%, #3d5f7f 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  padding: 1.5rem 2.5rem;
  border-radius: 30px;
  box-shadow: 0 8px 24px rgba(135, 206, 250, 0.35),
              inset 0 1px 0 rgba(255, 255, 255, 0.9),
              0 0 0 1px rgba(135, 206, 250, 0.3);
  display: inline-block;
  font-weight: 500;
  position: relative;
}

p::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  border-radius: 30px;
  z-index: -1;
}
</style>
