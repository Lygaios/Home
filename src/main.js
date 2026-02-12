import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import PrivacyPolicy from './views/PrivacyPolicy.vue'
import Imprint from './views/Imprint.vue'
import './style.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/privacy', component: PrivacyPolicy },
    { path: '/imprint', component: Imprint }
  ]
})

createApp(App)
  .use(router)
  .mount('#app')
