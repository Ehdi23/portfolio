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
          <h3>Problématique et Solution apportée :</h3>
          <p>
            Les voyageurs à destination et en provenance des aéroports parisiens
            recherchent une solution de transport fiable, rapide et facile à
            réserver. CabAirportParis répond à ce besoin en proposant un service
            de réservation de taxis privés sur-mesure. Grâce à notre plateforme
            intuitive, les utilisateurs peuvent réserver leur course en quelques
            clics, suivre leur chauffeur en temps réel et bénéficier d'un
            service client dédié.
          </p>
          <img src="../assets/capture-principale.png" alt="Aperçu du site" />
        </div>

        <div class="grid-cell">
          <img
            src="../assets/trajet-capture.png"
            alt="Interface de trajet du site"
          />
          <h3>Les fonctionnalités clés :</h3>
          <p>
            Trajets uniques, aller-retour, transferts aéroport, mises à
            disposition.
          </p>
          <p>
            Les utilisateurs peuvent réserver leur course en quelques clics
            grâce à notre interface simple et efficace. L'utilisateur a
            plusieurs options de réservation : trajet simple, aller-retour,
            transfert aéroport. Il peut également réserver un chauffeur pour 3h
            au minimum.
          </p>
          <p>
            Les clients peuvent régler leur course en toute sécurité grâce à
            notre intégration de la solution de paiement en ligne Stripe.
          </p>
        </div>

        <div class="grid-cell">
          <h3>Backend</h3>
          <p>
            Laravel a été utilisé pour le développement du back-end. Nous avons
            créé une API REST pour gérer les trajets, les utilisateurs et les
            paiements. La gestion du contenu ainsi que les prix des trajets sont
            gérés via une interface d'administration. Nous avons également
            intégré des services externes comme GoogleAPI pour la
            géolocalisation et Stripe pour les paiements en ligne.
          </p>
          <img src="../assets/administration-panel.png" alt="Backend Laravel" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
import { onMounted } from "vue";

// when the component is mounted, scroll to the top of the page
onMounted(() => {
  window.scrollTo(0, 0);
});
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
  padding: 1rem 0;
}

.grid-layout h3 {
  margin: 1rem 0;
  font-size: 1.2rem;
  font-weight: 600;
}

.grid-layout p {
  font-size: 1.1rem;
  font-weight: 500;
}

.grid-layout p span {
  font-weight: 700;
}

.grid-layout img {
  width: 100%;
  margin: 2rem 0;
  border-radius: 1rem;
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
  font-weight: 600;
}
</style>
