<template>
  <div class="contact-view">
    <TheHeader />
    <div class="intro-container">
      <div class="intro-container__texts">
        <div id="title-contact">
          <div class="title-contact">me contacter</div>
          <div class="subtitle-contact"><h3>Obtenir un devis</h3></div>
          <p>
            Merci de donner un maximum de détail sur le projet afin que je
            puisse évaluer correctement la charge de travail que représente
            votre projet. Cela permettra aussi d'avoir un premier chiffrage au
            plus proche du devis final.
          </p>
        </div>
      </div>
      <TheContact />
    </div>
    <TheFooter />
  </div>
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
  padding: 2rem 1rem;
  max-width: 1400px;
  margin: 3rem auto;
  gap: 3rem;
  flex-wrap: wrap;
}

.intro-container__texts {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex: 1;
  min-width: 300px;
  max-width: 500px;
  text-align: left;
  background: var(--card-background);
  box-shadow: 0 10px 30px var(--card-shadow);
  border: 1px solid var(--color-border);
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

@media screen and (max-width: 640px) {
  .intro-container {
    flex-direction: column;
    padding: 1rem;
    margin: 2rem auto;
  }

  .intro-container__texts {
    width: 100%;
    max-width: 100%;
    padding: 1.5rem;
  }

  #title-contact {
    align-items: center;
  }

  #title-contact p {
    text-align: center;
  }
}

/* Styles pour les écrans entre 641px et 1024px */
@media screen and (min-width: 641px) and (max-width: 1024px) {
  .intro-container {
    gap: 2rem;
    flex-direction: column;
    padding: 2rem;
    margin: 2rem auto;
  }

  .intro-container__texts {
    width: 100%;
    max-width: 600px;
    padding: 2rem;
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
    gap: 3rem;
    flex-direction: row;
    padding: 3rem;
    margin: 4rem auto;
  }

  .intro-container__texts {
    flex: 0 0 45%;
    max-width: 500px;
    padding: 2.5rem;
  }

  .title-contact {
    font-size: 2rem;
  }

  .intro-container__texts p {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.8;
  }
}

@media screen and (max-width: 480px) {
  .intro-container {
    padding: 0.75rem;
    margin: 1.5rem auto;
  }

  .intro-container__texts {
    padding: 1rem;
  }

  .title-contact {
    font-size: 1.25rem;
  }

  .subtitle-contact h3 {
    font-size: 1rem;
  }

  .intro-container__texts p {
    font-size: 0.9rem;
    line-height: 1.6;
  }
}
</style>
