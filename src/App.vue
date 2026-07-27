<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <main class="flex-1">
      <RouterView />
    </main>
    <footer class="bg-gray-900 text-gray-300 text-sm py-6 mt-10">
      <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <p>© 2026 TiendaVue. Proyecto académico — Diseño de Programación Web II.</p>
        <p class="text-gray-500">Hecho con Vue 3 + Vite + Pinia + Tailwind CSS</p>
      </div>
    </footer>
  </div>
</template>
