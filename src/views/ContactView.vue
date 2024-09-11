<template>
  <TheHeader />
  <div class="intro-container">
    <div class="intro-container__texts">
      <div id="title-contact">
        <div class="title-contact">me contacter</div>
        <div class="subtitle-contact"><h3>Obtenir un devis</h3></div>
        <p>
          Merci de donner un maximum de détail sur le projet afin que je puisse
          évaluer correctement la charge de travail que représente votre projet.
          Cela permettra aussi d'avoir un premier chiffrage au plus proche du
          devis final.
        </p>
      </div>
    </div>
    <TheContact />
  </div>
  <TheFooter />
</template>

<script setup>
import TheContact from "@/components/TheContact.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<style>
.intro-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  max-width: 100%;
  margin: 5rem auto 0;
  background-color: whitesmoke;
  border-radius: 1rem;
  box-shadow: 10px 10px 5px 5px rgba(0, 0, 0, 0.25);
}

.intro-container__texts {
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 50%;
  text-align: center;
  background-color: transparent;
}

.intro-container__texts p {
  color: var(--text-title-color);
  font-size: 1rem;
  text-align: justify;
  margin-bottom: 1rem;
}

#title-contact {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 0.5rem;
}

.title-contact {
  color: var(--text-title-color);
  display: flex;
  font-weight: 600;
  text-transform: uppercase;
}

.subtitle-contact {
  display: flex;
  margin-bottom: 1rem;
}

.subtitle-contact h3 {
  color: var(--text-subtitle-color);
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  -webkit-text-stroke: var(--text-color) 0.25px;
}

/* Styles pour les écrans entre 641px et 1024px */
@media screen and (min-width: 641px) and (max-width: 1024px) {
  .intro-container {
    gap: 2rem;
    flex-direction: column;
    padding: 2rem;
    background-color: transparent;
    box-shadow: none;
    width: 100%;
    margin: 0 auto;
  }

  .intro-container__texts {
    width: 100%;
    padding: 2rem;
    background-color: whitesmoke;
    border-radius: 1rem;
    box-shadow: 10px 10px 5px 5px rgba(0, 0, 0, 0.25);
  }

  .title-contact {
    font-size: 1.5rem;
  }

  .intro-container__texts p {
    font-weight: 500;
  }
}

/* Pour les écrans supérieurs à 1025px */
@media screen and (min-width: 1025px) {
  .intro-container {
    gap: 2rem;
    flex-direction: row;
    padding: 2rem;
    background-color: transparent;
    box-shadow: none;
    max-width: 90%;
    margin: 0 auto;
    min-height: 100vh;
  }

  .intro-container__texts {
    max-width: 80%;
    padding: 2rem;
    background-color: whitesmoke;
    border-radius: 1rem;
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.25);
  }

  .title-contact {
    font-size: 2rem;
  }

  .intro-container__texts p {
    font-size: 1.2rem;
    font-weight: 500;
  }
}

/* Ajout pour les écrans plus petits */
@media screen and (max-width: 1280px) {
  .intro-container {
    flex-direction: column;
    padding: 1rem;
    max-width: 95%;
  }

  .intro-container__texts {
    max-width: 90%;
    padding: 1rem;
  }

  .title-contact {
    font-size: 1.2rem;
  }

  .intro-container__texts p {
    font-size: 0.9rem;
  }
}
</style>
