<template>
  <div class="privacy-policy">
    <h1>Privacy Policy</h1>
    <p>Privacy policy content will go here.</p>
  </div>
</template>

<script>
export default {
  name: 'PrivacyPolicy'
}
</script>

<style scoped>
.privacy-policy {
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
  color: #2a4559;
  font-size: 2.5rem;
  font-weight: 700;
  text-shadow: 0 2px 8px rgba(89, 140, 196, 0.2);
}
</style>
