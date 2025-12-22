<template>
  <div class="projects-page">
    <TheHeader />
    <section class="projects-section">
      <div class="projects-section__header" ref="sectionHeader">
        <h1 class="projects-section__title">Mes Projets</h1>
        <p class="projects-section__subtitle">
          Découvrez mes réalisations et les détails de mon travail
        </p>
      </div>

      <div class="projects-list" ref="projectsList">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="project-item"
          :class="{ 'project-item--reverse': index % 2 === 1 }"
          :style="{ '--delay': index * 0.05 + 's' }"
        >
          <div class="project-item__image" @click="goToProject(project.id)">
            <img :src="project.image" :alt="project.title" />
            <div class="project-item__overlay">
              <span class="project-item__view-more">Voir les détails</span>
              <svg
                class="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
          <div class="project-item__content">
            <div class="project-item__header">
              <h2 class="project-item__title">{{ project.title }}</h2>
              <div class="project-item__technologies">
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
            </div>
            <p class="project-item__description">
              {{ project.shortDescription }}
            </p>
            <div class="project-item__features">
              <div
                v-for="(feature, idx) in project.features.slice(0, 3)"
                :key="idx"
                class="feature-tag"
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
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>{{ feature }}</span>
              </div>
            </div>
            <div class="project-item__footer">
              <button
                @click="goToProject(project.id)"
                class="project-item__button"
              >
                <span>En savoir plus</span>
                <svg
                  class="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
              <div class="project-item__links" v-if="project.links">
                <a
                  v-if="project.links.website"
                  :href="project.links.website"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="project-item-link"
                  @click.stop
                  title="Visiter le site"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <TheFooter />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";
import { projects } from "@/data/projects";

const router = useRouter();
const sectionHeader = ref(null);
const projectsList = ref(null);

const goToProject = (projectId) => {
  router.push({ name: "project-detail", params: { id: projectId } });
};

onMounted(() => {
  window.scrollTo(0, 0);

  // Animation au scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (sectionHeader.value) {
          sectionHeader.value.classList.add("active");
        }
        const projectItems = document.querySelectorAll(".project-item");
        projectItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("active");
          }, index * 50);
        });
      }
    });
  }, observerOptions);

  if (projectsList.value) {
    observer.observe(projectsList.value);
  }
  if (sectionHeader.value) {
    observer.observe(sectionHeader.value);
  }
});
</script>

<style scoped>
/* Animations */
.projects-section__header,
.project-item {
  opacity: 0;
  transform: translateY(2rem);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.projects-section__header.active,
.project-item.active {
  opacity: 1;
  transform: translateY(0);
}

.projects-page {
  min-height: 100vh;
  background: var(--background-color);
  transition: background-color 0.3s ease;
}

.projects-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.projects-section__header {
  text-align: center;
  margin-bottom: 4rem;
}

.projects-section__title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-title-color);
  margin-bottom: 1rem;
  font-family: "Playfair Display", serif;
  transition: color 0.3s ease;
}

.projects-section__subtitle {
  font-size: 1.3rem;
  color: var(--text-color);
  line-height: 1.6;
  transition: color 0.3s ease;
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.project-item {
  background: var(--card-background);
  border: 1px solid var(--color-border);
  overflow: hidden;
  box-shadow: 0 4px 6px var(--card-shadow);
  transition: all 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 0;
  min-height: 400px;
}

.project-item--reverse {
  grid-template-columns: 1fr 1.2fr;
}

.project-item--reverse .project-item__image {
  order: 2;
}

.project-item--reverse .project-item__content {
  order: 1;
}

.project-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px var(--card-shadow-hover);
  border-color: var(--text-subtitle-color);
}

.project-item__image {
  position: relative;
  overflow: hidden;
  aspect-ratio: auto;
  cursor: pointer;
  height: 100%;
}

.project-item__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-item:hover .project-item__image img {
  transform: scale(1.1);
}

.project-item__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
}

.project-item:hover .project-item__overlay {
  opacity: 1;
}

.project-item__overlay .icon {
  width: 1.2rem;
  height: 1.2rem;
}

.project-item__content {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: space-between;
}

.project-item__header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-item__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}

.project-item__title {
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--text-title-color);
  margin: 0;
  font-family: "Playfair Display", serif;
  transition: color 0.3s ease;
  line-height: 1.2;
}

.project-item:hover .project-item__title {
  color: var(--text-subtitle-color);
}

.project-item__description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-color);
  margin: 0;
  transition: color 0.3s ease;
}

.project-item__technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.tech-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.tech-badge i {
  font-size: 1rem;
}

.tech-badge .icon {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
}

.project-item__features {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1rem 0;
}

.feature-tag {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: var(--text-color);
  transition: all 0.3s ease;
  padding: 0.5rem;
  background: var(--color-background-soft);
}

.feature-tag:hover {
  background: var(--color-background-mute);
  transform: translateX(0.5rem);
}

.feature-tag .icon {
  width: 0.875rem;
  height: 0.875rem;
  color: var(--text-subtitle-color);
  flex-shrink: 0;
  transition: color 0.3s ease;
}

.project-item__button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.75rem;
  font-size: 1rem;
  font-weight: 600;
  border: 2px solid var(--text-subtitle-color);
  background: var(--text-subtitle-color);
  color: var(--card-background);
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.project-item__button:hover {
  background: transparent;
  color: var(--text-subtitle-color);
  transform: translateX(5px);
}

.project-item__button .icon {
  width: 1rem;
  height: 1rem;
  transition: transform 0.3s ease;
}

.project-item__button:hover .icon {
  transform: translateX(5px);
}

.project-item__links {
  display: flex;
  gap: 0.75rem;
}

.project-item-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid var(--color-border);
  background: var(--color-background-soft);
  color: var(--text-color);
}

.project-item-link .icon {
  width: 1rem;
  height: 1rem;
}

.project-item-link:hover {
  background: var(--text-subtitle-color);
  color: var(--card-background);
  border-color: var(--text-subtitle-color);
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 4px 12px rgba(255, 197, 118, 0.3);
}

.project-item-link:nth-child(2):hover {
  background: #24292e;
  border-color: #24292e;
  box-shadow: 0 4px 12px rgba(36, 41, 46, 0.3);
}

/* Responsive */
@media screen and (min-width: 1025px) {
  .projects-section {
    padding: 6rem 2rem;
  }

  .projects-section__title {
    font-size: 3.5rem;
  }
}

@media screen and (min-width: 641px) and (max-width: 1024px) {
  .projects-section {
    padding: 4rem 2rem;
  }

  .project-item {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .project-item--reverse {
    grid-template-columns: 1fr;
  }

  .project-item--reverse .project-item__image {
    order: 1;
  }

  .project-item--reverse .project-item__content {
    order: 2;
  }

  .project-item__image {
    aspect-ratio: 16/9;
  }
}

@media screen and (max-width: 640px) {
  .projects-section {
    padding: 3rem 1rem;
  }

  .projects-section__title {
    font-size: 2rem;
  }

  .projects-section__subtitle {
    font-size: 1.1rem;
  }

  .project-item {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .project-item--reverse {
    grid-template-columns: 1fr;
  }

  .project-item--reverse .project-item__image {
    order: 1;
  }

  .project-item--reverse .project-item__content {
    order: 2;
  }

  .project-item__content {
    padding: 1.5rem;
  }

  .project-item__footer {
    flex-direction: column;
    align-items: stretch;
  }

  .project-item__button {
    width: 100%;
    justify-content: center;
  }

  .project-item__title {
    font-size: 1.5rem;
  }

  .project-item__description {
    font-size: 1rem;
  }
}
</style>
