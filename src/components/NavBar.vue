<script setup>
import { RouterLink } from 'vue-router'
import { useCartStore } from '../stores/cart'

const cart = useCartStore()
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
    <nav class="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
      <RouterLink to="/" class="flex items-center gap-2 font-bold text-xl text-brand-600">
        <span class="text-2xl">🛍️</span> TiendaMilNovedades
      </RouterLink>

      <div class="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
        <RouterLink to="/" class="hover:text-brand-600 transition" active-class="text-brand-600">Inicio</RouterLink>
        <RouterLink to="/nosotros" class="hover:text-brand-600 transition" active-class="text-brand-600">Nosotros</RouterLink>
        <RouterLink to="/catalogo" class="hover:text-brand-600 transition" active-class="text-brand-600">Catálogo</RouterLink>
        <RouterLink to="/admin" class="hover:text-brand-600 transition" active-class="text-brand-600">Admin</RouterLink>
      </div>

      <RouterLink
        to="/carrito"
        class="relative flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition"
      >
        🛒 Carrito
        <span
          v-if="cart.totalItems > 0"
          class="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
        >
          {{ cart.totalItems }}
        </span>
      </RouterLink>
    </nav>
  </header>
</template>
