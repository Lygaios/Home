<template>
  <div class="home">
    <h1>LYGAIOS</h1>
    <p class="subtitle">Welcome to my project hub</p>
    
    <div class="projects">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <h2 class="project-title">{{ project.title }}</h2>
        <p class="project-description">{{ project.description }}</p>
        <a :href="project.link" target="_blank" rel="noopener noreferrer" class="project-link">
          Visit Project →
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      projects: [
        // Add your projects here! Just copy this block and fill in your info:
        // {
        //   id: 1,
        //   title: 'Project Name',
        //   description: 'A brief description of what this project does',
        //   link: 'https://example.com'
        // },

         {
           id: 1,
           title: 'My portfolio',
           description: 'My portfolio showcasing web development work, created in Angular',
           link: 'https://joshuabrunke.com'
         },
      ]
    }
  }
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

.subtitle {
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
  margin-bottom: 3rem;
}

.subtitle::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  border-radius: 30px;
  z-index: -1;
}

.projects {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
}

.project-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  padding: 2rem 2.5rem;
  border-radius: 30px;
  box-shadow: 0 8px 24px rgba(135, 206, 250, 0.35),
              inset 0 1px 0 rgba(255, 255, 255, 0.9),
              0 0 0 1px rgba(135, 206, 250, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(135, 206, 250, 0.45),
              inset 0 1px 0 rgba(255, 255, 255, 0.9),
              0 0 0 1px rgba(135, 206, 250, 0.3);
}

.project-title {
  font-size: 1.8rem;
  font-weight: 600;
  background: linear-gradient(135deg, #2a4559 0%, #3d5f7f 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.project-description {
  font-size: 1rem;
  color: #2c3e50;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-link {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, #598cc4 0%, #6393ca 100%);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(89, 140, 196, 0.3);
}

.project-link:hover {
  background: linear-gradient(135deg, #4a7db5 0%, #598cc4 100%);
  box-shadow: 0 6px 16px rgba(89, 140, 196, 0.4);
  transform: translateY(-2px);
}
</style>
