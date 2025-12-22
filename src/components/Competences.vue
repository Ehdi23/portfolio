<template>
  <section class="competences-section">
    <div class="competences-title" ref="competencesTitleRef" data-delay="0.3">
      <div class="title">Expertise & Compétences</div>
      <div class="subtitle">Domaines de maîtrise</div>
    </div>

    <div class="competences-grid" ref="competencesGrid">
      <div
        v-for="(category, index) in competences"
        :key="category.name"
        class="competence-category"
        :style="{ '--delay': index * 0.08 + 's' }"
      >
        <div class="competence-category__header">
          <div class="competence-category__icon">
            <svg
              v-if="category.icon === 'paint-brush'"
              class="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
              />
            </svg>
            <svg
              v-else-if="category.icon === 'server'"
              class="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="2" y="3" width="20" height="4" rx="1" />
              <rect x="2" y="7" width="20" height="4" rx="1" />
              <rect x="2" y="11" width="20" height="4" rx="1" />
              <rect x="2" y="15" width="20" height="4" rx="1" />
            </svg>
            <svg
              v-else-if="category.icon === 'tools'"
              class="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
              />
            </svg>
            <svg
              v-else-if="category.icon === 'lightbulb'"
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
          </div>
          <h3 class="competence-category__title">{{ category.name }}</h3>
        </div>
        <div class="competence-category__content">
          <div
            v-for="skill in category.skills"
            :key="skill.name"
            class="competence-item"
          >
            <span class="competence-item__name">{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const competencesTitleRef = ref(null);
const competencesGrid = ref(null);

const competences = [
  {
    name: "Frontend",
    icon: "paint-brush",
    skills: [
      { name: "Vue.js" },
      { name: "JavaScript (ES6+)" },
      { name: "HTML5 / CSS3" },
      { name: "Responsive Design" },
      { name: "Vite / Webpack" },
    ],
  },
  {
    name: "Backend",
    icon: "server",
    skills: [
      { name: "Laravel" },
      { name: "PHP" },
      { name: "API RESTful" },
      { name: "MySQL" },
      { name: "Architecture MVC" },
    ],
  },
  {
    name: "Outils & Méthodologies",
    icon: "tools",
    skills: [
      { name: "Git / GitHub" },
      { name: "Agile / Scrum" },
      { name: "TDD & Testing (PHPUnit, PestPHP)" },
      { name: "Actions / Flux / Redux" },
      { name: "SOLID & Design Patterns (SOLID, Design Patterns)" },
      { name: "Clean Code & Refactoring" },
      { name: "Docker" },
      { name: "CI/CD" },
    ],
  },
  {
    name: "Compétences Transverses",
    icon: "lightbulb",
    skills: [
      { name: "Optimisation Performance" },
      { name: "Sécurité Web" },
      { name: "Accessibilité (WCAG)" },
      { name: "SEO" },
      { name: "Code Review" },
    ],
  },
];

onMounted(() => {
  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Animation du titre
        if (competencesTitleRef.value) {
          const delay =
            competencesTitleRef.value.getAttribute("data-delay") || 0;
          setTimeout(() => {
            competencesTitleRef.value.classList.add("active");
          }, delay * 150);
        }

        // Animation des cartes
        const categories = document.querySelectorAll(".competence-category");
        categories.forEach((category, index) => {
          setTimeout(() => {
            category.classList.add("active");
          }, index * 150 + 400);
        });

        // Animation des items de compétences
        const competenceItems = document.querySelectorAll(".competence-item");
        competenceItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("active");
          }, 600 + index * 30);
        });
      }
    });
  }, observerOptions);

  if (competencesGrid.value) {
    observer.observe(competencesGrid.value);
  }
});
</script>

<style scoped>
/* Animations */
.competences-title,
.competence-category {
  opacity: 0;
  transform: translateY(2rem);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.competences-title.active,
.competence-category.active {
  opacity: 1;
  transform: translateY(0);
}

.competence-item {
  opacity: 0;
  transform: translateX(-1rem);
  transition: all 0.4s ease;
}

.competence-item.active {
  opacity: 1;
  transform: translateX(0);
}

/* Styles du titre */
.competences-title {
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin: 4rem auto 3rem;
  max-width: 1200px;
  width: 100%;
  padding: 0 2rem;
}

.competences-title .title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-title-color);
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.competences-title .subtitle {
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--text-subtitle-color);
  -webkit-text-stroke: var(--text-color) 0.5px;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

/* Section principale */
.competences-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Grille des compétences */
.competences-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  padding: 0 1rem;
}

/* Carte de catégorie */
.competence-category {
  background: var(--card-background);
  padding: 2rem;
  box-shadow: 0 4px 6px var(--card-shadow);
  transition: all 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 0.5rem;
}

.competence-category:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px var(--card-shadow-hover);
  border-color: var(--color-border);
}

.dark .competence-category:hover {
  border: solid 1px var(--color-border);
}

.competence-category__header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--color-border);
  transition: border-color 0.3s ease;
}

.dark .competence-category__header {
  border-bottom: solid 1px var(--color-border);
}

.competence-category:hover .competence-category__header {
  border-bottom-color: var(--color-border);
}

.competence-category__icon {
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    var(--text-subtitle-color),
    var(--text-color)
  );
  color: var(--card-background);
  transition: transform 0.3s ease;
  border-radius: 0.5rem;
}

.competence-category__icon .icon {
  width: 1.5rem;
  height: 1.5rem;
}

.competence-category:hover .competence-category__icon {
  transform: rotate(5deg) scale(1.1);
}

.competence-category__title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-title-color);
  text-transform: uppercase;
  transition: color 0.3s ease;
}

/* Contenu des compétences */
.competence-category__content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.competence-item {
  padding: 0.75rem 1rem;
  background: var(--color-background-soft);
  transition: all 0.3s ease;
  border-radius: 0.5rem;
  border: 1px solid var(--color-border);
}

.competence-item:hover {
  background: var(--color-background-mute);
  transform: translateX(0.5rem);
}

.dark .competence-item:hover {
  border: solid 1px var(--color-border);
}

.competence-item__name {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-color);
  transition: color 0.3s ease;
}

/* Responsive */
@media screen and (min-width: 1025px) {
  .competences-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }

  .competences-title {
    margin: 6rem auto 4rem;
  }

  .competences-title .title {
    font-size: 2.5rem;
  }

  .competences-title .subtitle {
    font-size: 3rem;
  }
}

@media screen and (min-width: 641px) and (max-width: 1024px) {
  .competences-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .competences-title {
    margin: 4rem auto 3rem;
  }

  .competences-title .title {
    font-size: 2rem;
  }

  .competences-title .subtitle {
    font-size: 2.5rem;
  }
}

@media screen and (max-width: 640px) {
  .competences-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .competences-title {
    margin: 3rem auto 2rem;
    padding: 0 1rem;
  }

  .competences-title .title {
    font-size: 1.5rem;
  }

  .competences-title .subtitle {
    font-size: 2rem;
  }

  .competence-category {
    padding: 1.5rem;
  }

  .competence-category__header {
    margin-bottom: 1.5rem;
  }

  .competence-category__icon {
    width: 3rem;
    height: 3rem;
    font-size: 1.25rem;
  }

  .competence-category__title {
    font-size: 1.25rem;
  }
}

@media screen and (max-width: 480px) {
  .competences-title {
    margin: 2rem auto 1.5rem;
    padding: 0 0.75rem;
  }

  .competences-title .title {
    font-size: 1.25rem;
  }

  .competences-title .subtitle {
    font-size: 1.75rem;
  }

  .competence-category {
    padding: 1rem;
  }

  .competence-category__icon {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.1rem;
  }

  .competence-category__title {
    font-size: 1.1rem;
  }

  .competence-item {
    padding: 0.5rem 0.75rem;
  }

  .competence-item__name {
    font-size: 0.9rem;
  }
}
</style>
