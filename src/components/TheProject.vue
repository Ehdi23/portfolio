<template>
  <section class="services-section">
    <div class="services-section__title">
      <h2>Mes Projets Professionnel</h2>
    </div>
    <div class="services-section__container">
      <div class="services-section__caption">
        <figure>
          <img src="../assets/Capture d'écran 2024-08-30 135808.png" alt="" />
        </figure>
      </div>
      <div class="services">
        <div class="project-container">
          <div class="project-pro__description">
            <p class="project-pro__title">Cab airport paris</p>
            <p id="project-pro__text">
              Cab Airport Paris est une plateforme de réservation de taxis,
              développée avec Vue.js et Laravel, pour faciliter les trajets
              entre l'aéroport et Paris. Notre service propose une solution de
              transport pratique, sécurisée, et accessible en ligne, idéale pour
              les voyageurs souhaitant un déplacement confortable et sans
              tracas.
            </p>
            <div class="project-pro__stack heading-2">
              <div class="stack-1 vuejs">
                <i class="fab fa-vuejs"></i>
                <p>VueJs</p>
              </div>
              <div class="stack-1 laravel">
                <i class="fab fa-laravel"></i>
                <p>Laravel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from "./Button.vue";
// when scrolling, the project title will fade in
window.addEventListener("scroll", () => {
  const projectSection = document.querySelector(".services-section");
  const projectTitle = document.querySelector(".services-section__title");
  const projectTitlePosition = projectTitle.getBoundingClientRect().top;
  const imageCaption = document.querySelector(".services-section__caption img");
  const projectDescription = document.querySelector(
    ".project-pro__description"
  );
  const screenPosition = window.innerHeight / 1.3;

  if (projectTitlePosition < screenPosition) {
    projectSection.classList.add("active");
    projectTitle.classList.add("active");
    imageCaption.classList.add("active");
  }

  if (
    projectDescription &&
    projectDescription.getBoundingClientRect().top < screenPosition
  ) {
    projectDescription.classList.add("animationOpacity");
  }
});
</script>

<style>
/* Styles communs pour .services-section */
.services-section {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  background-color: whitesmoke;
  border-radius: 1rem;
  box-shadow: 10px 10px 5px 5px rgba(0, 0, 0, 0.25);
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease;
}

.services-section.active {
  opacity: 1;
  transform: translateY(10px);
}

/* Styles pour le titre */
.services-section__title {
  display: flex;
  align-self: baseline;
  color: #261f40;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease;
  margin-left: 7rem; /* Déplacé vers les media queries pour la réactivité */
}

.services-section__title h2 {
  font-size: 2rem;
  font-weight: 700;
}

.services-section__title.active {
  opacity: 1;
  transform: translateY(0);
}

/* Styles pour le conteneur des services */
.services-section__container {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: 100%;
  margin-top: 1rem;
}

/* Styles pour la section des images */
.services-section__caption {
  display: flex;
  justify-content: center;
  align-items: center;
}

.services-section__caption img {
  width: 100%;
  height: auto;
  border-radius: 1rem;
  opacity: 0;
  transition: all 0.5s ease;
}

.services-section__caption img.active {
  opacity: 1;
  transform: scale(
    1
  ); /* Corrigé de 0.2 à 1 pour afficher l'image normalement */
  animation: fadeIn 0.8s ease-in-out forwards;
}

/* Styles pour le conteneur des projets */
.project-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

.project-pro__description {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;
  gap: 1rem;
  opacity: 0;
}

.project-pro__title {
  text-transform: uppercase;
  font-family: Playfair Display, serif;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  color: #fb4e03;
  line-height: 1;
  position: relative;
}

#project-pro__text {
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8;
  color: #261f40;
}

.project-button {
  display: flex;
  gap: 2rem;
}

/* Styles pour les services */
.services {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
}

.animationOpacity {
  animation: fadeOpacity 0.8s ease-in-out forwards;
}

/* Styles pour les stacks technologiques */
.project-pro__stack {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.stack-1 {
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stack-1 p {
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
}

.stack-1.vuejs {
  background-color: #42b883; /* Couleur Vue.js */
}

.stack-1.laravel {
  background-color: #e3342f; /* Couleur Laravel */
}

/* Media Queries */
@media screen and (min-width: 1099px) {
  .services-section__title {
    margin-left: 7rem;
  }

  .services-section__container {
    flex-direction: row;
  }
}

@media screen and (max-width: 768px) {
  .services-section__title {
    margin-left: 0; /* Ajusté pour les écrans plus petits */
    padding-left: 1rem;
  }

  .services-section__container {
    flex-direction: column;
    width: 100%;
  }

  .services-section__caption img {
    transform: scale(1); /* Ajusté pour afficher l'image normalement */
  }
}
</style>
