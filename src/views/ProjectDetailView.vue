<template>
  <div class="project-detail-page" v-if="project">
    <TheHeader />
    <div class="project-detail">
      <div class="project-detail__header">
        <button @click="goBack" class="back-button">
          <svg
            class="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>Retour à la liste des projets</span>
        </button>
        <h1 class="project-detail__title">{{ project.title }}</h1>
        <p class="project-detail__subtitle">{{ project.fullDescription }}</p>
        <div class="project-detail__technologies">
          <div
            v-for="tech in project.technologies"
            :key="tech.name"
            class="tech-badge-large"
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
        <div class="project-detail__links" v-if="project.links">
          <a
            v-if="project.links.website"
            :href="project.links.website"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link project-link--website"
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
            <span>Voir le site</span>
          </a>
          <a
            v-if="project.links.demo"
            :href="project.links.demo"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link project-link--demo"
          >
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
            <span>Démo</span>
          </a>
        </div>
      </div>

      <div class="project-detail__hero-image">
        <img
          :src="project.image"
          :alt="`${project.title} - Aperçu principal`"
          loading="eager"
        />
      </div>

      <div class="project-detail__content">
        <div class="content-section">
          <h2 class="section-title">Problématique et Solution</h2>
          <div class="section-content">
            <div class="problem-solution">
              <div class="problem-box">
                <h3>
                  <svg
                    class="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  Problématique
                </h3>
                <p>{{ project.problem }}</p>
              </div>
              <div class="solution-box">
                <h3>
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
                      d="M9 21h6M12 3a6 6 0 0 0 0 12c1.657 0 3-4.03 3-9s-1.343-9-3-9zM12 3a6 6 0 0 1 0 12c-1.657 0-3-4.03-3-9s1.343-9 3-9z"
                    />
                  </svg>
                  Solution
                </h3>
                <p>{{ project.solution }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="content-section">
          <h2 class="section-title">Fonctionnalités clés</h2>
          <div class="features-grid">
            <div
              v-for="(feature, index) in project.features"
              :key="index"
              class="feature-card"
              :style="{ '--delay': index * 0.05 + 's' }"
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
              <p>{{ feature }}</p>
            </div>
          </div>
        </div>

        <div class="content-section">
          <h2 class="section-title">Galerie du projet</h2>
          <div class="gallery-grid">
            <div
              v-for="(img, index) in project.images"
              :key="index"
              class="gallery-item"
            >
              <img :src="img.src" :alt="img.alt" loading="eager" />
            </div>
          </div>
        </div>

        <div class="content-section">
          <h2 class="section-title">Développement & Architecture</h2>
          <div class="backend-content">
            <p>{{ project.backend }}</p>
          </div>
        </div>

        <div class="content-section" v-if="project.challenges">
          <h2 class="section-title">Défis & Solutions Techniques</h2>
          <div class="challenges-grid">
            <div
              v-for="(challenge, index) in project.challenges"
              :key="index"
              class="challenge-card"
            >
              <div class="challenge-card__icon">
                <i :class="challenge.icon"></i>
              </div>
              <h3 class="challenge-card__title">{{ challenge.title }}</h3>
              <p class="challenge-card__description">
                {{ challenge.description }}
              </p>
            </div>
          </div>
        </div>

        <div class="content-section" v-if="project.learnings">
          <h2 class="section-title">Apprentissages & Résultats</h2>
          <div class="learnings-content">
            <ul class="learnings-list">
              <li v-for="(learning, index) in project.learnings" :key="index">
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
                <span>{{ learning }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
      <button class="lightbox-close" @click="closeLightbox">
        <svg
          class="icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <button class="lightbox-prev" @click.stop="prevImage">
        <svg
          class="icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button class="lightbox-next" @click.stop="nextImage">
        <svg
          class="icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
      <img
        :src="project.images[currentImageIndex].src"
        :alt="project.images[currentImageIndex].alt"
        @click.stop
      />
    </div>

    <TheFooter />
  </div>
  <div v-else class="loading">
    <p>Chargement du projet...</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { projects } from "@/data/projects";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

const route = useRoute();
const router = useRouter();

const project = computed(() => {
  return projects.find((p) => p.id === route.params.id);
});

const lightboxOpen = ref(false);
const currentImageIndex = ref(0);

const goBack = () => {
  router.push({ name: "projects" });
};

const openLightbox = (index) => {
  currentImageIndex.value = index;
  lightboxOpen.value = true;
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  lightboxOpen.value = false;
  document.body.style.overflow = "";
};

const nextImage = () => {
  if (project.value && project.value.images) {
    currentImageIndex.value =
      (currentImageIndex.value + 1) % project.value.images.length;
  }
};

const prevImage = () => {
  if (project.value && project.value.images) {
    currentImageIndex.value =
      currentImageIndex.value === 0
        ? project.value.images.length - 1
        : currentImageIndex.value - 1;
  }
};

onMounted(() => {
  window.scrollTo(0, 0);
  if (!project.value) {
    router.push({ name: "home" });
    return;
  }

  // Mettre à jour les meta tags pour le SEO
  if (project.value) {
    document.title = `${project.value.title} - Portfolio El Hadi EL GHOLEM`;
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", project.value.fullDescription);

    // Mettre à jour Open Graph
    const updateMetaTag = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    updateMetaTag(
      "og:title",
      `${project.value.title} - Portfolio El Hadi EL GHOLEM`
    );
    updateMetaTag("og:description", project.value.fullDescription);
    updateMetaTag(
      "twitter:title",
      `${project.value.title} - Portfolio El Hadi EL GHOLEM`
    );
    updateMetaTag("twitter:description", project.value.fullDescription);
  }

  // Keyboard navigation for lightbox
  const handleKeyPress = (e) => {
    if (lightboxOpen.value) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    }
  };

  window.addEventListener("keydown", handleKeyPress);
  return () => {
    window.removeEventListener("keydown", handleKeyPress);
  };
});
</script>

<style scoped>
.project-detail-page {
  min-height: 100vh;
}

.project-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--card-background);
  border: 2px solid var(--color-border);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  transition: all 0.3s ease;
  margin-bottom: 2rem;
}

.back-button .icon {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
}

.back-button:hover {
  background: var(--text-subtitle-color);
  color: var(--card-background);
  border-color: var(--text-subtitle-color);
  transform: translateX(-5px);
}

.project-detail__header {
  margin-bottom: 3rem;
  animation: fadeInUp 0.6s ease;
}

.project-detail__title {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-title-color);
  margin-bottom: 1rem;
  font-family: "Playfair Display", serif;
}

.project-detail__subtitle {
  font-size: 1.3rem;
  text-align: justify;
  color: var(--text-color);
  line-height: 1.8;
  margin-bottom: 2rem;
}

.project-detail__technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.tech-badge-large {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.tech-badge-large i {
  font-size: 1.3rem;
}

.tech-badge-large .icon {
  width: 1.3rem;
  height: 1.3rem;
  flex-shrink: 0;
}

.project-detail__links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.75rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.project-link--website {
  background: var(--text-subtitle-color);
  color: var(--card-background);
  border-color: var(--text-subtitle-color);
}

.project-link--website:hover {
  background: transparent;
  color: var(--text-subtitle-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 197, 118, 0.3);
}

.project-link--github {
  background: var(--card-background);
  color: var(--text-color);
  border-color: var(--color-border);
}

.project-link--github:hover {
  background: #24292e;
  color: white;
  border-color: #24292e;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(36, 41, 46, 0.3);
}

.project-link--demo {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: transparent;
}

.project-link--demo:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  opacity: 0.9;
}

.project-link .icon {
  width: 1.1rem;
  height: 1.1rem;
  display: inline-block;
  flex-shrink: 0;
}

.project-detail__hero-image {
  width: 100%;
  height: 500px;
  margin-bottom: 4rem;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  animation: fadeInUp 0.8s ease 0.2s both;
}

.project-detail__hero-image img {
  width: 100%;
  height: auto;
  display: block;
  image-rendering: auto;
  -ms-interpolation-mode: bicubic;
}

.project-detail__content {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.content-section {
  animation: fadeInUp 0.6s ease both;
}

.content-section:nth-child(1) {
  animation-delay: 0.15s;
}
.content-section:nth-child(2) {
  animation-delay: 0.2s;
}
.content-section:nth-child(3) {
  animation-delay: 0.25s;
}
.content-section:nth-child(4) {
  animation-delay: 0.3s;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-title-color);
  margin-bottom: 2rem;
  font-family: "Playfair Display", serif;
  position: relative;
  padding-bottom: 1rem;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #fb4e03, #ff6b35);
}

.problem-solution {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.problem-box,
.solution-box {
  padding: 2rem;
  box-shadow: 0 10px 30px var(--card-shadow);
  transition: transform 0.3s ease;
}

.problem-box {
  background: linear-gradient(
    135deg,
    rgba(255, 229, 229, 0.3) 0%,
    rgba(255, 204, 204, 0.3) 100%
  );
  border: 1px solid var(--color-border);
}

.solution-box {
  background: linear-gradient(
    135deg,
    rgba(229, 245, 255, 0.3) 0%,
    rgba(204, 238, 255, 0.3) 100%
  );
  border: 1px solid var(--color-border);
}

.problem-box:hover,
.solution-box:hover {
  transform: translateY(-5px);
}

.problem-box h3,
.solution-box h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-title-color);
}

.problem-box h3 .icon,
.solution-box h3 .icon {
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
}

.problem-box p,
.solution-box p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.feature-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--card-background);
  box-shadow: 0 5px 20px var(--card-shadow);
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards;
  animation-delay: var(--delay);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px var(--card-shadow-hover);
}

.feature-card .icon {
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  color: #42b883;
}

.feature-card p {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-color);
  margin: 0;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/9;
  box-shadow: 0 5px 20px var(--card-shadow);
  border: 1px solid var(--color-border);
  background: var(--card-background);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 1;
  visibility: visible;
  position: relative;
  z-index: 1;
  image-rendering: auto;
  -ms-interpolation-mode: bicubic;
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
  pointer-events: none;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-overlay .icon {
  width: 2rem;
  height: 2rem;
  color: white;
}

.backend-content {
  background: var(--card-background);
  padding: 2rem;
  box-shadow: 0 5px 20px var(--card-shadow);
  border: 1px solid var(--color-border);
}

.backend-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color);
}

/* Challenges section */
.challenges-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.challenge-card {
  background: var(--card-background);
  padding: 2rem;
  box-shadow: 0 5px 20px var(--card-shadow);
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
}

.challenge-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px var(--card-shadow-hover);
  border-color: var(--text-subtitle-color);
}

.challenge-card__icon {
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    var(--text-subtitle-color),
    var(--text-color)
  );
  color: var(--card-background);
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.challenge-card__title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-title-color);
  margin-bottom: 1rem;
}

.challenge-card__description {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-color);
}

/* Learnings section */
.learnings-content {
  background: var(--card-background);
  padding: 2rem;
  box-shadow: 0 5px 20px var(--card-shadow);
  border: 1px solid var(--color-border);
}

.learnings-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.learnings-list li {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: var(--color-background-soft);
  transition: all 0.3s ease;
}

.learnings-list li:hover {
  background: var(--color-background-mute);
  transform: translateX(0.5rem);
}

.learnings-list li .icon {
  width: 1.2rem;
  height: 1.2rem;
  flex-shrink: 0;
  margin-top: 0.2rem;
  color: var(--text-subtitle-color);
}

.learnings-list li span {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-color);
}

/* Lightbox */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease;
}

.lightbox img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}

.lightbox-close,
.lightbox-prev,
.lightbox-next {
  position: absolute;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-close .icon,
.lightbox-prev .icon,
.lightbox-next .icon {
  width: 1.5rem;
  height: 1.5rem;
}

.lightbox-close {
  top: 2rem;
  right: 2rem;
}

.lightbox-prev {
  left: 2rem;
}

.lightbox-next {
  right: 2rem;
}

.lightbox-close:hover,
.lightbox-prev:hover,
.lightbox-next:hover {
  background: rgba(255, 255, 255, 0.4);
  transform: scale(1.1);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 1.5rem;
  color: var(--text-color);
}

@media (max-width: 768px) {
  .project-detail {
    padding: 1rem;
  }

  .project-detail__title {
    font-size: 2rem;
  }

  .project-detail__subtitle {
    font-size: 1.1rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .problem-solution {
    grid-template-columns: 1fr;
  }

  .features-grid,
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .lightbox-prev,
  .lightbox-next {
    display: none;
  }

  .project-detail__technologies {
    gap: 0.75rem;
  }

  .tech-badge-large {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .tech-badge-large i {
    font-size: 1.1rem;
  }

  .tech-badge-large .icon {
    width: 1.1rem;
    height: 1.1rem;
  }

  .project-detail__links {
    flex-direction: column;
    width: 100%;
  }

  .project-link {
    width: 100%;
    justify-content: center;
  }

  .challenges-grid {
    grid-template-columns: 1fr;
  }

  .learnings-list {
    grid-template-columns: 1fr;
  }

  .back-button {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .project-detail {
    padding: 0.75rem;
  }

  .project-detail__title {
    font-size: 1.75rem;
  }

  .project-detail__subtitle {
    font-size: 1rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .tech-badge-large {
    padding: 0.4rem 0.75rem;
    font-size: 0.85rem;
  }

  .problem-box,
  .solution-box {
    padding: 1.5rem;
  }

  .problem-box h3,
  .solution-box h3 {
    font-size: 1.25rem;
  }

  .problem-box p,
  .solution-box p {
    font-size: 1rem;
  }

  .feature-card {
    padding: 1rem;
  }

  .gallery-item {
    aspect-ratio: 16/9;
  }

  .lightbox img {
    max-width: 95%;
    max-height: 85%;
  }

  .lightbox-close {
    top: 1rem;
    right: 1rem;
    padding: 0.75rem;
  }
}
</style>
