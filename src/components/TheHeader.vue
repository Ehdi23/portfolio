<template>
  <header>
    <div class="container">
      <div class="logo">
        <router-link :to="{ name: 'home' }">
          <img
            src="../assets/[removal.ai]_7fdd3655-3a98-47e8-8d0d-c38e085c06cb-pixlr-image-generator-7af35ad6-a621-4513-87f7-c875de2c890c.png"
            alt=""
            srcset=""
          />
        </router-link>
      </div>
      <nav class="navbar">
        <div class="btn-group">
          <DarkModeToggle />
          <Button>
            <router-link
              v-if="route.name !== 'projects'"
              :to="{ name: 'projects' }"
              class="btn-link"
            >
              Projets
            </router-link>
            <router-link v-else :to="{ name: 'home' }" class="btn-link">
              Accueil
            </router-link>
          </Button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from "vue-router";
import Button from "./Button.vue";
import DarkModeToggle from "./DarkModeToggle.vue";

const route = useRoute();
</script>

<style>
@media screen and (min-width: 1099px) {
  .container {
    max-width: 1035px;
    width: 100%;
    margin: 0 auto;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .btn-group {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 1.5rem;
  }

  .navbar {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    animation: fadeInRight 0.8s ease-in-out forwards;
  }

  .logo {
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .logo img {
    width: 100%;
    animation: tightToStretch 2s ease-in-out forwards;
  }
}

@media screen and (min-width: 641px) and (max-width: 1098px) {
  .container {
    max-width: 1035px;
    width: 100%;
    margin: 0 auto 2rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    opacity: 0;
    transform: scale(0.2);
    animation: fadeInUp 0.8s ease-in-out forwards;
  }

  .btn-group {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 1.5rem;
  }

  .logo {
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .logo img {
    width: 40%;
  }

  .navbar {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
}

/** style for mobile */

@media screen and (min-width: 360px) and (max-width: 640px) {
  .container {
    max-width: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
    height: auto;
    min-height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo img {
    display: none;
  }

  .navbar {
    width: 100%;
    padding-right: 0.5rem;
    display: flex;
    justify-content: flex-end;
    animation: goDown 0.8s ease-in-out forwards;
  }

  .btn-group {
    gap: 0.75rem;
  }

  .btn-group .btn a {
    width: 8rem;
    height: 2.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  .notification-bar {
    margin-bottom: 3rem;
  }
}

@media screen and (max-width: 359px) {
  .container {
    padding: 0 0.5rem;
    min-height: 3.5rem;
  }

  .btn-group {
    gap: 0.5rem;
  }

  .btn-group .btn a {
    width: 7rem;
    height: 2.5rem;
    font-size: 0.9rem;
  }
}
</style>
