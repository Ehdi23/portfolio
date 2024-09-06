<template>
  <div class="hero">
    <div class="hero__container">
      <div class="hero-subtitle" data-delay="1" ref="subtitle">
        Bonjour, je suis
      </div>
      <div class="hero-title" data-delay="2" ref="title">El Hadi EL GHOLEM</div>
      <div class="hero-description" data-delay="3" ref="description">
        <p>Développeur Web Autodidacte Laravel & Vuejs</p>
      </div>
      <div class="hero-button" data-delay="4" ref="button">
        <Button>
          <router-link to="/">Télécharger mon CV</router-link>
          <router-link to="/contact">Contact</router-link>
        </Button>
      </div>
    </div>
    <div class="hero-illustration">
      <figure class="logo-illustration" data-delay="5" ref="illustration">
        <img
          src="../assets/[removal.ai]_7fdd3655-3a98-47e8-8d0d-c38e085c06cb-pixlr-image-generator-7af35ad6-a621-4513-87f7-c875de2c890c.png"
          alt=""
        />
      </figure>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Button from "./Button.vue";

const subtitle = ref(null);
const title = ref(null);
const description = ref(null);
const button = ref(null);
const illustration = ref(null);

onMounted(() => {
  const elements = [
    subtitle.value,
    title.value,
    description.value,
    button.value,
    illustration.value,
  ];

  elements.forEach((el) => {
    if (el) {
      const delay = el.getAttribute("data-delay") || 0;
      el.style.setProperty("--delay", delay);

      setTimeout(() => {
        el.classList.add("fade-in");
      }, delay * 1000); // Convertir secondes en millisecondes
    }
  });
});
</script>

<style>
.hero-title,
.hero-subtitle,
.hero-description,
.hero-button,
.logo-illustration {
  opacity: 0;
  transform: translateY(1rem);
  animation: fadeInUp 0.8s ease-out;
  animation-fill-mode: both; /* Ensure that the element remains in its final state */
}
  /* Dynamically apply animation delays */
  [data-delay] {
    animation-delay: calc(var(--delay) * 0.2s);
  }

@media screen and (min-width: 1099px) {
  .hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    max-width: 1035px;
    width: 100%;
    margin: 0 auto;
    min-height: 85vh;
  }

  .hero__container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  .hero-subtitle {
    color: #ffc576;
    font-size: 3rem;
    font-weight: 600;
  }

  .hero-title {
    color: #261f40;
    font-family: Playfair Display, serif;
    font-size: 3.5rem;
    line-height: 1;
    font-weight: 600;
    margin: 8px 0 16px;
  }

  .hero-description p {
    font-size: 1.5rem;
    color: #261f40;
    font-weight: 600;
  }

  .hero-button {
    margin-top: 1rem;
    display: flex;
    justify-content: start;
    gap: 2rem;
    width: 100%;
  }

  .hero-button .btn-group .btn {
    flex-direction: row;
  }

  .hero-illustration {
    display: flex;
    width: 50%;
  }

  .hero-illustration figure {
    width: 50%;
  }
}

@media screen and (min-width: 641px) and (max-width: 1098px) {
  .hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    max-width: 1035px;
    width: 100%;
    margin: 0 auto;
    padding: 2rem 0;
    min-height: 85vh;
  }

  .hero__container {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 1rem;
    width: 100%;
  }

  .hero-illustration figure img {
    width: 100%;
    height: auto;
  }

  .hero-subtitle {
    color: #ffc576;
    font-size: 2rem;
    font-weight: 600;
  }

  .hero-title {
    color: #261f40;
    font-family: Playfair Display, serif;
    font-size: 2.5rem;
    line-height: 1;
    font-weight: 700;
    margin: 8px 0 16px;
  }

  .hero-description p {
    font-size: 1.5rem;
    color: #261f40;
    font-weight: 600;
  }

  .hero-button {
    width: 100%;
    display: flex;
    justify-content: start;
    gap: 1rem;
    margin-top: 1rem;
  }

  .hero-button .btn-group .btn {
    flex-direction: row;
    min-width: 23rem;
  }
}

@media screen and (min-width: 360px) and (max-width: 640px) {
  .hero {
    min-height: 70vh;
  }

  .hero__container {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    height: 40rem;
  }

  .hero-illustration {
    display: none;
  }

  .hero-title,
  .hero-subtitle,
  .hero-description,
  .hero-button {
    opacity: 0;
    transform: translateY(1rem);
    animation: fade-in 0.8s ease-out;
    animation-fill-mode: both; /* Ensure that the element remains in its final state */
  }

  .hero-title {
    font-size: 4rem;
    font-weight: 700;
    color: #261f40;
  }

  .hero-subtitle {
    color: #ffc576;
    font-size: 1.5rem;
    font-weight: 600;
  }

  .hero-description p {
    font-size: 1rem;
    color: #261f40;
    font-weight: 600;
  }

  [data-delay] {
    animation-delay: calc(var(--delay) * 0.2s);
  }

  .hero-button {
    display: none;
  }

  .hero-button .btn-group .btn a {
    min-width: 8rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 3rem;
    font-size: 1rem;
    font-weight: 500;
    padding: .5rem 1rem;
  }
}
</style>
