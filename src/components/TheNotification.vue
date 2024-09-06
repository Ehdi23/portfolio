<template>
  <!-- notification, to say that the portfolio is still under construction -->
  <div :class="['shadow-screen', { 'hidden-class': !showNotification }]">
    <div v-if="showNotification" class="notification">
      <p>
        I'm still improving my knowledge. This portfolio is still under
        construction.
      </p>
      <!-- fontawesome cross -->
      <button @click="closeNotification">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#261E40"
          class="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 6.586l4.95-4.95a.75.75 0 0 1 1.061 1.061L9.061 7.647 14.01 12.6a.75.75 0 0 1-1.06 1.06L8 8.707l-4.95 4.95a.75.75 0 0 1-1.061-1.06L6.94 7.647 2.99 3.596a.75.75 0 0 1 1.06-1.06L8 6.586z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const showNotification = ref(false);

onMounted(() => {
  setTimeout(() => {
    showNotification.value = true;
  }, 500);
});

function closeNotification() {
  const notificationElement = document.querySelector(".notification");

  // Ajouter la classe fade-out pour commencer l'animation
  notificationElement.classList.add("fade-out");

  // Attendre la durée de l'animation avant de masquer complètement la notification
  setTimeout(() => {
    showNotification.value = false;
  }, 1000); // Durée de l'animation CSS (500ms)
}
</script>

<style>
.hidden-class {
  display: none;
}

@media screen and (min-width: 641px) {
  .notification {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0 auto;
    height: 1rem;
    background-color: #ffc576; /* Couleur de fond de la notification */
    color: #261e40;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 9000; /* S'assurer que la notification est au-dessus de tout le reste */
    animation: fadeInDown 0.8s ease-in-out forwards;
    transition: opacity 0.5s ease-in-out; /* Ajoutez une transition pour le fondu */
  }

  .notification.fade-out {
    animation: fadeOutShrink 0.5s ease forwards;
  }

  .notification.fade-in {
    animation: goDown 1s ease-in-out forwards;
  }

  .notification button {
    background: none;
    border: none;
    color: #261e40;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
  }

  .notification button:hover {
    transform: scale(1.3);
    transition: transform 0.5s;
  }

  .notification p {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0;
    flex: 1;
  }
}

@media screen and (min-width: 360px) and (max-width: 640px) {
  .shadow-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }

  .notification {
    display: flex;
    position: fixed;
    top: 50%;
    left: 0;
    width: 100%;
    max-width: 100vw; /* Assure que la largeur ne dépasse pas celle de l'écran */
    background-color: #ffc576;
    height: fit-content;
    padding: 1rem 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    z-index: 1000;
    animation: tightToStretch 0.8s ease-in-out forwards;
    transition: opacity 0.5s ease-in-out;
    box-sizing: border-box; /* Inclut le padding dans la largeur */
  }

  .notification p {
    font-size: 1rem;
    text-align: center;
    word-wrap: break-word;
    padding-right: 0.7rem;
    padding-left: 0.7rem;
    font-weight: 500;
  }

  .notification button {
    background: none;
    border: none;
    color: #261e40;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    position: absolute;
    right: 1%;
    top: 5%;
  }
}
</style>
