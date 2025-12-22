import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Gestion des meta tags dynamiques pour le SEO
router.afterEach((to) => {
  // Mettre à jour le titre de la page
  if (to.meta.title) {
    document.title = to.meta.title
  }
  
  // Mettre à jour la meta description
  let metaDescription = document.querySelector('meta[name="description"]')
  if (!metaDescription) {
    metaDescription = document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    document.head.appendChild(metaDescription)
  }
  if (to.meta.description) {
    metaDescription.setAttribute('content', to.meta.description)
  }
  
  // Mettre à jour les meta tags Open Graph
  const updateMetaTag = (property, content) => {
    let meta = document.querySelector(`meta[property="${property}"]`)
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('property', property)
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', content)
  }
  
  if (to.meta.title) {
    updateMetaTag('og:title', to.meta.title)
    updateMetaTag('twitter:title', to.meta.title)
  }
  
  if (to.meta.description) {
    updateMetaTag('og:description', to.meta.description)
    updateMetaTag('twitter:description', to.meta.description)
  }
  
  // Mettre à jour l'URL Open Graph
  const currentUrl = window.location.origin + to.fullPath
  updateMetaTag('og:url', currentUrl)
  updateMetaTag('twitter:url', currentUrl)
})

app.mount('#app')
