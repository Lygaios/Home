<template>
  <div class="imprint">
    <div class="content-container">
      <h1>Imprint</h1>
      <div class="imprint-content">
        <p>
          This website is a study project, created for educational purposes. It is not intended for commercial use.
        </p>
        
        <div class="contact-info">
          <p><strong>Website created by:</strong></p>
          <p>
            Joshua Brunke<br />
            Über der Kieckwiese 3<br />
            38729 Langelsheim<br />
            Germany<br />
            Tel.: +49(5383)9079151<br />
            Email: <a href="mailto:joshuabrunke1@gmail.com">joshuabrunke1@gmail.com</a>
          </p>
        </div>
      </div>
      
      <div class="footer-info">
        <p>© 2025-26 Joshua Brunke. All rights reserved.</p>
      </div>
    </div>
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
}

.content-container {
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
  text-align: center;
}

.imprint-content {
  margin-bottom: 2rem;
}

.imprint-content > p {
  color: #2c3e50;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  text-align: center;
}

.contact-info {
  background: rgba(135, 206, 250, 0.08);
  border-radius: 20px;
  padding: 2rem;
  margin-top: 2rem;
  box-shadow: 0 2px 8px rgba(135, 206, 250, 0.1);
}

.contact-info p {
  margin-bottom: 1rem;
  color: #2c3e50;
  line-height: 1.8;
}

.contact-info p:last-child {
  margin-bottom: 0;
}

.contact-info strong {
  color: #2a4559;
  font-weight: 600;
  font-size: 1.05rem;
}

.contact-info a {
  color: #598cc4;
  text-decoration: none;
  font-weight: 500;
}

.contact-info a:hover {
  color: #2a4559;
  text-decoration: underline;
}

.footer-info {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(135, 206, 250, 0.2);
  margin-top: 1.5rem;
}

.footer-info p {
  color: #3d5f7f;
  font-size: 0.9rem;
  opacity: 0.9;
  margin: 0;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .content-container {
    padding: 1.5rem;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  .imprint-content > p {
    font-size: 0.95rem;
  }
  
  .contact-info {
    padding: 1.5rem;
  }
}
</style>
