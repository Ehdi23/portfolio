import { ref, watch } from 'vue';

// État global partagé
const isDarkMode = ref(false);

// Initialiser le dark mode
const initDarkMode = () => {
  if (typeof window === 'undefined') return;
  
  const saved = localStorage.getItem('darkMode');
  if (saved !== null) {
    isDarkMode.value = saved === 'true';
  } else {
    // Détecter la préférence système
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  applyDarkMode();
};

// Appliquer le dark mode au document
const applyDarkMode = () => {
  if (typeof document === 'undefined') return;
  
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// Toggle le dark mode
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('darkMode', isDarkMode.value.toString());
  }
  applyDarkMode();
};

// Watcher pour synchroniser les changements
watch(isDarkMode, () => {
  applyDarkMode();
});

// Initialiser au chargement si on est côté client
if (typeof window !== 'undefined') {
  initDarkMode();
  
  // Écouter les changements de préférence système (seulement si pas de préférence sauvegardée)
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const handleChange = (e) => {
    if (localStorage.getItem('darkMode') === null) {
      isDarkMode.value = e.matches;
      applyDarkMode();
    }
  };
  mediaQuery.addEventListener('change', handleChange);
}

export function useDarkMode() {
  return {
    isDarkMode,
    toggleDarkMode,
    initDarkMode
  };
}
