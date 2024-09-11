<template>
  <div class="project-page">
    <TheHeader />
    <section class="project-section">
      <div class="project-section__heading">
        <h2 class="title">CabAirportParis</h2>
        <h3 class="subtitle">
          Intégration responsive et développement Vuejs & laravel du site Cab
          Airport Paris
        </h3>
      </div>
      <div class="project-section__body grid-layout">
        <div class="grid-cell">
          <h3>Aperçu du projet</h3>
          <p>
            CabAirportParis est une plateforme dédiée à la réservation de taxis
            privés pour les transferts entre Paris et les aéroports, avec une
            interface utilisateur intuitive pour simplifier la gestion des
            réservations.
          </p>
          <img src="../assets/capture-principale.png" alt="Aperçu du site" />
        </div>

        <div class="grid-cell">
          <h3>Fonctionnalités principales</h3>
          <p>
            L'utilisateur peut réserver un trajet unique en Île-de-France ou
            opter pour une mise à disposition avec chauffeur pour un minimum de
            3 heures. Des offres spécifiques sont proposées pour les trajets
            vers les aéroports et Disneyland.
          </p>
          <img
            src="../assets/Capture d'écran 2024-08-30 142847.png"
            alt="Interface de réservation"
          />
        </div>

        <div class="grid-cell">
          <h3>Expérience utilisateur</h3>
          <p>
            Le site est entièrement responsive et conçu pour offrir une
            navigation fluide sur tous les appareils. L'utilisateur accède
            rapidement aux offres populaires, facilitant ainsi le processus de
            réservation.
          </p>
          <img
            src="../assets/Capture d'écran 2024-09-10 103649.png"
            alt="Version mobile du site"
          />
        </div>

        <div class="grid-cell">
          <h3>Technologies</h3>
          <p>
            Laravel pour le back-end et Vue.js pour le front-end. API REST
            (GoogleAPI, Stripe) pour l'intégration des services externes comme
            la géolocalisation et les paiements en ligne.
          </p>
          <img
            src="../assets/Capture d'écran 2024-08-30 142534.png"
            alt="Technologies utilisées"
          />
        </div>

        <div class="grid-cell">
          <h3>Design et maquette</h3>
          <p>
            La maquette a été conçue pour mettre en avant la clarté et la
            simplicité d’usage. Le design épuré facilite la navigation et
            l’accès aux offres.
          </p>
          <img src="../assets/capture-design.png" alt="Maquette et design" />
        </div>

        <div class="grid-cell">
          <h3>Optimisation et performance</h3>
          <p>
            Le site est optimisé pour des performances rapides, avec une gestion
            efficace des requêtes vers la base de données et des techniques de
            lazy loading pour les images.
          </p>
          <img
            src="../assets/capture-performance.png"
            alt="Optimisation et performance"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
</script>

<style scoped>
.project-page {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.project-section {
  width: 80%;
  margin: 3rem auto;
}

.grid-layout {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.grid-cell {
  padding: 1rem;
  border-radius: 1rem;
}

.grid-cell img {
  width: 100%;
  border-radius: 1rem;
}

.project-section__heading {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.project-section__heading .title {
  font-size: 3rem;
  font-weight: 700;
}

.project-section__heading h3 {
  font-size: 1.5rem;
  font-weight: 500;
}

.project-section__body * {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
