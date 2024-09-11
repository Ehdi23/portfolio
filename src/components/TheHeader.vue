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
          <Button>
            <router-link :to="{ name: 'contact' }" class="btn-link"
              >Contact</router-link
            >
          </Button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import Button from "./Button.vue";
</script>

<style>
@media screen and (min-width: 1099px) {
  .container {
    max-width: 1035px;
    width: 100%;
    margin: 0 auto;
    border-radius: 1rem;
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
    gap: 2rem;
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
    border-radius: 1rem;
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
    gap: 2rem;
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
    max-width: 1035px;
    width: 100%;
    margin: 0 auto 2rem;
    border-radius: 1rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    opacity: 1;
  }

  .btn-group {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 2rem;
  }

  .logo {
    width: 30%;
    animation: fadeInLeft 1.5s ease-in-out forwards;
  }

  .logo img {
    display: none;
  }

  .navbar {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    animation: goDown 0.8s ease-in-out forwards;
  }

  .btn-group {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 2rem;
  }

  .notification-bar {
    margin-bottom: 3rem;
  }
}
</style>
