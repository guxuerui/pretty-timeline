<script setup lang="ts">
const routes = useRoute()
</script>

<template>
  <Header />
  <main class="main" font-sans p="x-4 y-5" text="center gray-700 dark:gray-200">
    <router-view />
    <Footer v-if="routes.fullPath !== '/'" />
  </main>
</template>

<style scoped>
  .main {
    font-size: 1rem;
    margin: 0 auto;
    max-width: 100vw;
    text-align: left;
  }
</style>
