<template>
  <header>
    <TheNotification v-if="showNotification" @close="showNotification = false" />
    <div class="container">
      <div class="logo">
        <img src="../assets/[removal.ai]_7fdd3655-3a98-47e8-8d0d-c38e085c06cb-pixlr-image-generator-7af35ad6-a621-4513-87f7-c875de2c890c.png" alt="" srcset="">
      </div>
      <nav class="navbar">
        <div class="btn-group">
          <Button>
          <a href="mailto:egholem@gmail.com">Contact</a>
        </Button>
        <Button>
          <router-link to="#services-section">Réalisations</router-link>
        </Button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import Button from './Button.vue';
import TheNotification from './TheNotification.vue';
import { ref, onMounted } from "vue";

const showNotification = ref(false);

onMounted(() => {
  setTimeout(() => {
    showNotification.value = true;
  }, 3000);
});

function closeNotification() {
  showNotification.value = false;
}
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
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .logo img {
    width: 40%;
  animation: tightToStretch 2s ease-in-out forwards;

  }
}

@media screen and (min-width: 768px) and (max-width: 1098px) {
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
    display: none;
  }

  .navbar {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    animation: tightToStretch 2s ease-in-out forwards;
  }

  .notification-bar {
    margin-bottom: 3rem;
  }
}
</style>
