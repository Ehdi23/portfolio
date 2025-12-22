<template>
  <button
    @click="toggleDarkMode"
    class="dark-mode-toggle"
    :aria-label="
      isDarkMode ? 'Activer le mode clair' : 'Activer le mode sombre'
    "
    :title="isDarkMode ? 'Mode sombre activé' : 'Mode clair activé'"
  >
    <transition name="icon-fade" mode="out-in">
      <svg
        v-if="isDarkMode"
        key="sun"
        class="icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
      <svg
        v-else
        key="moon"
        class="icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </transition>
  </button>
</template>

<script setup>
import { useDarkMode } from "@/composables/useDarkMode";

const { isDarkMode, toggleDarkMode } = useDarkMode();
</script>

<style scoped>
.dark-mode-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border: 2px solid var(--text-color);
  background: transparent;
  color: var(--text-color);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.dark-mode-toggle .icon {
  width: 1.2rem;
  height: 1.2rem;
  transition: transform 0.3s ease;
}

.dark-mode-toggle:hover {
  transform: scale(1.1);
  background: var(--text-color);
  color: var(--background-color);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.dark-mode-toggle:active {
  transform: scale(0.95);
}

.dark-mode-toggle:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}

.dark-mode-toggle:hover .icon {
  transform: rotate(15deg);
}

/* Animation pour le changement d'icône */
.icon-fade-enter-active,
.icon-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.icon-fade-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.5);
}

.icon-fade-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.5);
}

/* Mode sombre */
:global(.dark) .dark-mode-toggle {
  border-color: var(--text-color);
  color: var(--text-color);
}

:global(.dark) .dark-mode-toggle:hover {
  background: var(--text-color);
  color: var(--background-color);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
}

@media screen and (max-width: 640px) {
  .dark-mode-toggle {
    width: 2.5rem;
    height: 2.5rem;
  }

  .dark-mode-toggle .icon {
    width: 1rem;
    height: 1rem;
  }
}
</style>
