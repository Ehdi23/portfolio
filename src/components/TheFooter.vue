<template>
  <section class="footer">
    <div class="footer-container">
      <!-- SECTION ME RETROUVER SUR LES RESEAUX SOCIAUX -->
      <div class="footer-content">
        <div class="footer-content__title">
          Me retrouver sur les réseaux sociaux
        </div>
        <div class="footer-content__description">
          N'hésitez pas à me contacter pour plus d'informations
        </div>
        <div class="footer-content__contact">
          <div class="footer-content__contact-info btn">
            <Button>
              <a
                href="https://www.linkedin.com/in/el-hadi-el-gholem-789a7a270/"
                target="_blank"
                class="linkedin-button"
              >
                <i class="fab fa-linkedin"></i>
                LinkedIn
              </a>
              <a href="https://x.com/e_gholem" target="_blank" class="x-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Layer_1"
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  xml:space="preserve"
                >
                  <path
                    d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/Ehdi23"
                target="_blank"
                class="github-button"
              >
                <i class="fab fa-github"></i>
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
    <!-- SECTION DESIGNS BY -->
    <div class="designsby">
      <div class="designsby-title">Designs by El Hadi</div>
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

.footer-container,
.footer-content,
.btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.footer-content__contact-info .btn-group .btn {
    flex-direction: row;
  }

.footer-content__title {
  font-size: 1.5rem;
  font-weight: 600;
}

.footer-content__description {
  font-size: 1rem;
}

.linkedin-button:hover::after {
  background-color: #005582;
}

/* Boutons GitHub */
.linkedin-button,
.github-button,
.x-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-color: #261f40;
}

.github-button:hover::after {
  background-color: #1c1c1c;
}

.x-button svg {
  fill: #261f40;
}

.x-button:hover::after {
  background-color: black;
}

.x-button:hover svg {
  fill: #ffc576;
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
  font-size: 3rem;
  color: #ffc576;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.footer-content__contact-info .btn-group .btn a {
  width: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 3rem;
}

@media screen and (min-width: 360px) and (max-width: 640px) {
  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .x-button svg {
    fill: #ffc576;
  }

  .footer-content__contact-info .btn-group .btn {
    flex-direction: column;
  }

  .footer-content__contact-info .btn-group .btn a{
    min-width: 8rem;
    height: 3rem;
    font-size: 1rem;
    font-weight: 500;
    padding: .5rem 1rem;
  }
}
</style>
