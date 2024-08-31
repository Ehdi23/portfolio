<template>
  <header>
    <TheNotification />
    <div class="container">
      <div class="logo">
        <img src="../assets/[removal.ai]_7fdd3655-3a98-47e8-8d0d-c38e085c06cb-pixlr-image-generator-7af35ad6-a621-4513-87f7-c875de2c890c.png" alt="" srcset="">
      </div>
      <nav class="navbar">
        <div class="btn-group">
          <Button>
          <router-link to="/">Contact</router-link>
        </Button>
        <Button>
          <router-link to="/">Réalisations</router-link>
        </Button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import Button from "./Button.vue";
import TheNotification from "./TheNotification.vue";
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

.navbar {
  width: 100%;
  display: flex;
  justify-content: flex-end;
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
}

@media screen and (max-width: 768px) {
  .container {
    max-width: 1035px;
    width: 100%;
    margin: 0 auto;
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
</style>
