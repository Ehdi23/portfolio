import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
import ProjectsView from '@/views/ProjectsView.vue';
import ProjectDetailView from '@/views/ProjectDetailView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Portfolio - El Hadi EL GHOLEM | Développeur Web Full-Stack',
        description: 'Portfolio de El Hadi EL GHOLEM, développeur web full-stack spécialisé en Vue.js et Laravel. Découvrez mes projets et compétences.'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        title: 'Contact - Portfolio El Hadi EL GHOLEM',
        description: 'Contactez El Hadi EL GHOLEM pour vos projets web. Développeur full-stack Vue.js et Laravel.'
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
      meta: {
        title: 'Projets - Portfolio El Hadi EL GHOLEM',
        description: 'Découvrez les projets web développés par El Hadi EL GHOLEM : applications Vue.js, Laravel et solutions full-stack.'
      }
    },
    {
      path: '/project/:id',
      name: 'project-detail',
      component: ProjectDetailView,
      meta: {
        title: 'Détails du projet - Portfolio El Hadi EL GHOLEM',
        description: 'Détails et informations sur le projet développé par El Hadi EL GHOLEM.',
        transition: 'fade'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});
  
export default router
