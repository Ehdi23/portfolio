<template>
  <section class="projects-section" id="projects-section">
    <div class="projects-section__title" ref="sectionTitle">Projets Pro</div>
    <div class="projects-section__subtitle" ref="sectionSubtitle">
      Découvrez mes réalisations et projets web
    </div>
    <div class="projects-grid" ref="projectsGrid">
      <div
        v-for="(project, index) in projects"
        :key="project.id"
        class="project-card"
        :style="{ '--delay': index * 0.08 + 's' }"
        @click="goToProject(project.id)"
      >
        <div class="project-card__image-wrapper">
          <img
            :src="project.image"
            :alt="`${project.title} - Aperçu`"
            class="project-card__image"
            :loading="index < 2 ? 'eager' : 'lazy'"
          />
        </div>
        <div class="project-card__content">
          <h3 class="project-card__title">{{ project.title }}</h3>
          <p class="project-card__description">
            {{ project.shortDescription }}
          </p>
          <div class="project-card__technologies">
            <div
              v-for="tech in project.technologies"
              :key="tech.name"
              class="tech-badge"
              :style="{ backgroundColor: tech.color }"
            >
              <!-- MySQL - Base de données (cylindre) -->
              <svg
                v-if="tech.name === 'MySQL'"
                class="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              </svg>
              <!-- Pest - Fiole de test -->
              <svg
                v-else-if="tech.name === 'Pest'"
                class="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M8 2v6l6 4v8" />
                <path d="M8 8h6" />
                <line x1="2" y1="12" x2="14" y2="12" />
                <line x1="2" y1="16" x2="14" y2="16" />
                <line x1="2" y1="20" x2="14" y2="20" />
                <circle cx="17" cy="20" r="2" fill="currentColor" />
              </svg>
              <!-- Fallback pour autres technologies -->
              <i v-else :class="tech.icon"></i>
              <span>{{ tech.name }}</span>
            </div>
          </div>
          <div class="project-card__links" v-if="project.links" @click.stop>
            <a
              v-if="project.links.website"
              :href="project.links.website"
              target="_blank"
              rel="noopener noreferrer"
              class="project-card-link"
            >
              <svg
                class="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
                />
              </svg>
            </a>
            <a
              v-if="project.links.demo"
              :href="project.links.demo"
              target="_blank"
              rel="noopener noreferrer"
              class="project-card-link"
            >
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="projects-section__footer">
        <Button>
          <router-link :to="{ name: 'projects' }" class="btn-link">
            Voir tous les projets
          </router-link>
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import { projects } from "@/data/projects";
import Button from "./Button.vue";

const router = useRouter();
const sectionTitle = ref(null);
const sectionSubtitle = ref(null);
const projectsGrid = ref(null);

const goToProject = (projectId) => {
  router.push({ name: "project-detail", params: { id: projectId } });
};

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Animer aussi le footer
        const footer = document.querySelector(".projects-section__footer");
        if (footer) {
          setTimeout(() => {
            footer.classList.add("visible");
          }, 800);
        }
      }
    });
  }, observerOptions);

  if (sectionTitle.value) {
    observer.observe(sectionTitle.value);
  }
  if (sectionSubtitle.value) {
    observer.observe(sectionSubtitle.value);
  }
  if (projectsGrid.value) {
    observer.observe(projectsGrid.value);
  }
});
</script>

<style scoped>
.projects-section {
  max-width: 1400px;
  width: 100%;
  margin: 6rem auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.projects-section__title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-title-color);
  margin-bottom: 1rem;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.projects-section__title.visible {
  opacity: 1;
  transform: translateY(0);
}

.projects-section__subtitle {
  font-size: 1.2rem;
  color: var(--text-color);
  margin-bottom: 3rem;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
}

.projects-section__subtitle.visible {
  opacity: 1;
  transform: translateY(0);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  width: 100%;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
}

.projects-grid.visible {
  opacity: 1;
  transform: translateY(0);
}

.projects-section__footer {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
}

.projects-section__footer.visible {
  opacity: 1;
  transform: translateY(0);
}

.project-card {
  background: var(--card-background);
  overflow: hidden;
  box-shadow: 0 4px 20px var(--card-shadow);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: var(--delay);
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
}

.project-card__image-wrapper {
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: var(--color-background-soft);
  position: relative;
  flex-shrink: 0;
  border-radius: 0.5rem;
}

.project-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 1;
  visibility: visible;
  position: relative;
  z-index: 1;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  image-rendering: auto;
  -ms-interpolation-mode: bicubic;
}

.project-card:hover .project-card__image {
  transform: scale(1.05);
}

.project-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 25px var(--card-shadow-hover);
  border-color: var(--color-border);
}

.dark .project-card:hover {
  border: solid 1px var(--color-border);
}

.project-card__content {
  padding: 2.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
}

.project-card__links {
  display: flex;
  gap: 0.75rem;
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}

.dark .project-card__links {
  border-top: solid 1px var(--color-border);
}

.project-card-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  color: var(--text-color);
  text-decoration: none;
  transition: all 0.3s ease;
  border-radius: 0.5rem;
}

.dark .project-card-link {
  border: solid 1px var(--color-border);
}

.project-card-link .icon {
  width: 1rem;
  height: 1rem;
}

.project-card-link:hover {
  background: var(--text-subtitle-color);
  color: var(--card-background);
  border-color: var(--color-border);
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 4px 12px rgba(255, 197, 118, 0.3);
}

.dark .project-card-link:hover {
  border: solid 1px var(--color-border);
}

.project-card-link:nth-child(2):hover {
  background: #24292e;
  border-color: #24292e;
  box-shadow: 0 4px 12px rgba(36, 41, 46, 0.3);
}

.project-card__title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-title-color);
  margin: 0;
  font-family: "Playfair Display", serif;
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  line-height: 1.3;
}

.project-card:hover .project-card__title {
  color: var(--text-subtitle-color);
}

.project-card__description {
  font-size: 1rem;
  color: var(--text-color);
  line-height: 1.7;
  margin: 0;
  opacity: 0.9;
}

.project-card__technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tech-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  transition: transform 0.2s ease;
  border-radius: 0.5rem;
}

.dark .tech-badge {
  border: solid 1px var(--text-subtitle-color);
}

.tech-badge:hover {
  transform: scale(1.05);
}

.tech-badge i {
  font-size: 1.1rem;
}

.tech-badge .icon {
  width: 1.1rem;
  height: 1.1rem;
  flex-shrink: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .projects-section {
    margin: 4rem auto;
    padding: 1rem;
  }

  .projects-section__title {
    font-size: 2rem;
  }

  .projects-section__subtitle {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .project-card__image-wrapper {
    height: 200px;
  }

  .project-card__content {
    padding: 1.5rem;
  }

  .project-card__title {
    font-size: 1.5rem;
  }

  .project-card__description {
    font-size: 0.95rem;
  }

  .projects-section__footer {
    margin-top: 2rem;
    padding: 0;
    width: 100%;
  }

  .projects-section__footer .btn-group {
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
  }

  .projects-section__footer .btn-link {
    width: auto;
    min-width: auto;
    max-width: calc(100% - 2rem);
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
    white-space: nowrap;
  }
}

@media screen and (max-width: 359px) {
  .projects-section {
    margin: 3rem auto;
    padding: 0.75rem;
  }

  .projects-section__title {
    font-size: 1.75rem;
  }

  .projects-section__subtitle {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }

  .project-card__image-wrapper {
    height: 180px;
  }

  .project-card__content {
    padding: 1rem;
  }

  .project-card__title {
    font-size: 1.25rem;
  }

  .project-card__description {
    font-size: 0.85rem;
  }

  .projects-section__footer {
    margin-top: 1.5rem;
    padding: 0;
    width: 100%;
  }

  .projects-section__footer .btn-group {
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
  }

  .projects-section__footer .btn-link {
    width: auto;
    min-width: auto;
    max-width: calc(100% - 1rem);
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
    white-space: nowrap;
  }

  .tech-badge {
    padding: 0.4rem 0.75rem;
    font-size: 0.8rem;
  }

  .tech-badge i {
    font-size: 0.9rem;
  }

  .tech-badge .icon {
    width: 0.9rem;
    height: 0.9rem;
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 1400px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
