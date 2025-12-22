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
                class="linkedin-button btn-link"
              >
                <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://x.com/e_gholem"
                target="_blank"
                class="x-button btn-link"
              >
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
                class="github-button btn-link"
              >
                <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
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
        <svg class="icon heart" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from "./Button.vue";
</script>

<style>
.footer {
  color: var(--text-color);
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
  border-color: var(--text-color);
}

.linkedin-button .icon,
.github-button .icon {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
}

.github-button:hover::after {
  background-color: #1c1c1c;
}

.x-button svg {
  fill: var(--text-color);
  transition: fill 0.3s ease;
}

.x-button:hover::after {
  background-color: black;
}

.x-button:hover svg {
  fill: #ffc576;
}

/* Dark mode - Couleurs différentes pour les animations */
:global(.dark) .linkedin-button:hover::after {
  background-color: #0a66c2;
}

:global(.dark) .github-button:hover::after {
  background-color: #ffffff;
}

:global(.dark) .x-button:hover::after {
  background-color: #ffffff;
}

:global(.dark) .x-button:hover svg {
  fill: #000000;
}

:global(.dark) .linkedin-button:hover {
  color: #ffffff;
}

:global(.dark) .github-button:hover {
  color: #000000;
}

:global(.dark) .x-button:hover {
  color: #000000;
}

:global(.dark) .linkedin-button,
:global(.dark) .github-button,
:global(.dark) .x-button {
  border-color: var(--text-color);
}

:global(.dark) .x-button svg {
  fill: var(--text-color);
  transition: fill 0.3s ease;
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
  color: var(--text-title-color);
  margin-bottom: 1rem;
}

.heart-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.heart {
  width: 3rem;
  height: 3rem;
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
  .footer {
    padding: 2rem 1rem;
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .footer-content__title {
    font-size: 1.25rem;
    text-align: center;
  }

  .footer-content__description {
    font-size: 0.9rem;
    text-align: center;
  }

  .x-button svg {
    fill: var(--text-subtitle-color);
  }

  :global(.dark) .x-button svg {
    fill: var(--text-color);
  }

  .footer-content__contact-info .btn-group .btn {
    flex-direction: column;
  }

  .footer-content__contact-info .btn-group .btn a {
    min-width: 8rem;
    height: 3rem;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
  }

  .designsby {
    padding: 1.5rem 0;
  }

  .designsby-title {
    font-size: 1.5rem;
  }

  .heart {
    width: 2.5rem;
    height: 2.5rem;
  }
}

@media screen and (max-width: 359px) {
  .footer {
    padding: 1.5rem 0.75rem;
  }

  .footer-content__title {
    font-size: 1.1rem;
  }

  .footer-content__description {
    font-size: 0.85rem;
  }

  .footer-content__contact-info .btn-group .btn a {
    min-width: 7rem;
    height: 2.75rem;
    font-size: 0.9rem;
  }

  .designsby-title {
    font-size: 1.25rem;
  }

  .heart {
    width: 2rem;
    height: 2rem;
  }
}
</style>
