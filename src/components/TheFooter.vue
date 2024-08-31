<template>
  <section class="footer">
    <div class="footer-container">
      <!-- SECTION ME RETROUVER SUR LES RESEAUX SOCIAUX -->
      <div class="footer-content">
        <div class="footer-content__left">
          <div class="footer-content__title">
            Me retrouver sur les réseaux sociaux
          </div>
          <div class="footer-content__description">
            N'hésitez pas à me contacter pour plus d'informations
          </div>
          <div class="footer-content__contact">
            <div class="footer-content__contact-info btn">
              <Button>
                <a href="https://www.linkedin.com/in/el-hadi-el-gholem-789a7a270/" target="_blank" class="linkedin-button">
                  <i class="fab fa-linkedin"></i>
                  LinkedIn
                </a>
                <a href="https://x.com/e_gholem" target="_blank" class="x-button">X</a>
                <a href="https://github.com/Ehdi23" target="_blank" class="github-button">
                  <i class="fab fa-github"></i>
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- SECTION DESIGNS BY -->
    <div class="designsby">
      <div class="designsby-title">
        Designs by El Hadi
      </div>
      <div class="heart-container">
        <i class="fas fa-heart heart"></i>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from "./Button.vue";
</script>

<style>
.footer {
  color: #261f40;
  padding: 3rem 0;
}

.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.footer-content__left {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-content__title {
  font-size: 1.5rem;
  font-weight: 600;
}

.footer-content__description {
  font-size: 1rem;
}

.footer-content__contact {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.footer-content__contact-info {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

/* Style des boutons */
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 2rem;
}

button {
  background: none;
  color: #ffffff; /* Couleur du texte des boutons */
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 30px;
  position: relative;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.3s;
  border: solid 1px transparent; /* Bordure transparente par défaut */
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  overflow: hidden;
  cursor: pointer; /* Curseur pointer pour les boutons cliquables */
}

/* Effets des boutons avant et après */
button::before,
button::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  right: 50%;
  z-index: -1;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

button::before {
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  z-index: -2;
}

button::after {
  background-color: #261f40; /* Couleur de fond des boutons */
  opacity: 0;
}

/* Effets des boutons au survol */
button:hover {
  color: #ffc576; /* Couleur du texte au survol */
}

button:hover::before {
  opacity: 0.8; /* Augmentation de l'opacité de l'ombre */
}

button:hover::after {
  left: 0;
  right: 0;
}

/* Boutons LinkedIn */
.linkedin-button {
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-color: #261f40; /* Couleur de bordure LinkedIn */
}

.linkedin-button:hover::after {
  background-color: #005582; /* Couleur de fond LinkedIn au survol */
  box-shadow: 0px 0px 0px 0px; /* Supprime l'ombre de bordure au survol */
}

/* Boutons GitHub */
.github-button {
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-color: #261f40; /* Couleur de bordure GitHub */
}

.github-button:hover::after {
  background-color: #1c1c1c; /* Couleur de fond GitHub au survol */
  box-shadow: 0px 0px 0px 0px; /* Supprime l'ombre de bordure au survol */
}

/* Boutons X */
.x-button {
  border-color: #261f40; /* Couleur de bordure X */
}

.x-button:hover::after {
  background-color: black; /* Couleur de fond X au survol */
  box-shadow: 0px 0px 0px 0px; /* Supprime l'ombre de bordure au survol */
}

/* Section DesignsBy */
.designsby {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
}

.designsby-title {
  font-size: 2rem;
  font-weight: bold;
  color: #261f40;
  margin-bottom: 1rem;
}

.heart-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.heart {
  font-size: 3rem; /* Taille du cœur */
  color: #ffc576; /* Couleur du cœur */
  animation: pulse 1.5s infinite; /* Animation de pulsation */
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}
</style>
