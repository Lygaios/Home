<template>
  <div class="imprint">
    <h1>Imprint</h1>
    <p>Imprint content will go here.</p>
  </div>
</template>

<script>
export default {
  name: 'Imprint'
}
</script>

<style scoped>
.imprint {
  max-width: 800px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  padding: 3rem;
  border-radius: 30px;
  box-shadow: 0 8px 32px rgba(135, 206, 250, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 1),
              0 0 0 1px rgba(135, 206, 250, 0.2);
}

h1 {
  margin-bottom: 2rem;
  color: #0288d1;
  font-size: 2.5rem;
  font-weight: 700;
  text-shadow: 0 2px 8px rgba(3, 169, 244, 0.2);
}
</style>
