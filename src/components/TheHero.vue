<template>
  <div class="hero">
    <div class="hero__container">
      <div class="hero-subtitle" data-delay="1" ref="subtitle">
        Bonjour, je suis
      </div>
      <div class="hero-title" data-delay="2" ref="title">El Hadi EL GHOLEM</div>
      <div class="hero-description" data-delay="3" ref="description">
        <p>
          développeur web full-stack passionné par la création
          d'interfaces utilisateur et d'applications web performantes.
        </p>
      </div>
      <div class="hero-button" data-delay="4" ref="button">
        <Button>
          <router-link to="/contact" class="btn-link">Contact</router-link>
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
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title,
.hero-subtitle,
.hero-description,
.hero-button,
.logo-illustration {
  opacity: 0;
  transform: translateY(1rem);
  animation: fadeInUp 0.8s ease-out;
  animation-fill-mode: both;
}

[data-delay] {
  animation-delay: calc(var(--delay) * 0.2s);
}

/* Common styling */
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 100%;
  margin: 4rem auto;
}

.hero__container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 70%;
}

.hero-subtitle {
  color: var(--text-subtitle-color);
  font-weight: 600;
}

.hero-title {
  color: var(--text-title-color);
  font-family: Playfair Display, serif;
  font-weight: 600;
  line-height: 1;
}

.hero-description p {
  color: var(--text-color);
  font-weight: 500;
  text-align: justify;
  text-transform: capitalize;
}

.hero-button {
  margin-top: 1rem;
  display: flex;
  justify-content: start;
  gap: 2rem;
  width: 100%;
}

/* Large screens */
@media screen and (min-width: 1099px) {
  .hero {
    max-width: 1200px;
    min-height: 85vh;
  }

  .hero__container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 60%;
  }

  .hero-subtitle {
    font-size: 3rem;
    -webkit-text-stroke: #261f40 0.5px;
  }

  .hero-title {
    font-size: 3.5rem;
    margin: 8px 0 16px;
    width: 35rem;
  }

  .hero-description p {
    font-size: 1.2rem;
    font-weight: 400;
  }

  .hero-button .btn-group .btn {
    flex-direction: row;
  }

  .hero-illustration {
    display: flex;
    justify-content: center;
    width: 30%;
  }

  .hero-illustration figure img {
    width: 30rem;
    height: auto;
  }
}

/* Medium screens */
@media screen and (min-width: 641px) and (max-width: 1098px) {
  .hero {
    max-width: 1035px;
    padding: 2rem 0;
    min-height: 85vh;
  }

  .hero-subtitle {
    font-size: 2rem;
  }

  .hero-title {
    font-size: 2.5rem;
    margin: 8px 0 16px;
  }

  .hero-description p {
    font-size: 1.5rem;
  }

  .hero-button {
    gap: 1rem;
  }

  .hero-button .btn-group .btn {
    min-width: 23rem;
  }

  .hero-illustration figure img {
    width: 100%;
    height: auto;
  }
}

/* Small screens */
@media screen and (min-width: 360px) and (max-width: 640px) {
  .hero {
    min-height: 25vh;
  }

  .hero__container {
    padding-left: 1rem;
  }

  .hero-illustration {
    display: none;
  }

  .hero-title {
    width: 24rem;
    font-size: 2.5rem;
    font-weight: 700;
  }

  .hero-subtitle {
    font-size: 1.8rem;
    font-weight: 700;
    -webkit-text-stroke: var(--text-color) 0.2px;
  }

  .hero-description p {
    font-size: 1rem;
  }

  .hero-button {
    display: none;
  }
}
</style>
