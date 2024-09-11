<template>
  <TheNotification v-if="showNotification" />
  <router-view />
</template>

<script setup>
import { onMounted, ref } from "vue";
import TheNotification from "./components/TheNotification.vue";

const showNotification = ref(false);

onMounted(() => {
  setTimeout(() => {
    showNotification.value = true;
    localStorage.setItem("notification", true);
  }, 3000);
});
</script>
