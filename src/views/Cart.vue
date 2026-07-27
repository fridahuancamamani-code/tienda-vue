<script setup>
import { RouterLink } from 'vue-router'
import { useCartStore } from '../stores/cart'

const cart = useCartStore()
</script>

<template>
  <section class="max-w-4xl mx-auto px-4 py-12">
    <h1 class="text-3xl font-extrabold text-gray-800 mb-8">Tu carrito de compras</h1>

    <div v-if="cart.items.length === 0" class="text-center py-20 bg-white rounded-2xl shadow-sm">
      <p class="text-5xl mb-4">🛒</p>
      <p class="text-gray-500 mb-6">Tu carrito está vacío.</p>
      <RouterLink
        to="/catalogo"
        class="inline-block bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-full transition"
      >
        Ir al catálogo
      </RouterLink>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2 space-y-4">
        <div
          v-for="item in cart.items"
          :key="item.id"
          class="flex items-center gap-4 bg-white rounded-2xl shadow-sm p-4"
        >
          <img :src="item.imagen" :alt="item.nombre" class="w-20 h-20 rounded-xl object-cover" />
          <div class="flex-1">
            <h3 class="font-semibold text-gray-800">{{ item.nombre }}</h3>
            <p class="text-sm text-gray-500">${{ item.precio.toFixed(2) }} c/u</p>
          </div>
          <div class="flex items-center gap-3">
            <button
              @click="cart.decrementar(item.id)"
              class="w-8 h-8 rounded-full border border-gray-200 hover:bg-gray-100 transition font-bold"
            >
              −
            </button>
            <span class="w-6 text-center font-semibold">{{ item.cantidad }}</span>
            <button
              @click="cart.incrementar(item.id)"
              class="w-8 h-8 rounded-full border border-gray-200 hover:bg-gray-100 transition font-bold"
            >
              +
            </button>
          </div>
          <p class="w-24 text-right font-bold text-gray-800">
            ${{ (item.precio * item.cantidad).toFixed(2) }}
          </p>
          <button
            @click="cart.eliminarProducto(item.id)"
            class="text-red-500 hover:text-red-700 transition text-lg"
            title="Eliminar"
          >
            🗑️
          </button>
        </div>

        <button
          @click="cart.vaciarCarrito"
          class="text-sm text-gray-500 hover:text-red-500 transition"
        >
          Vaciar carrito
        </button>
      </div>

      <div class="bg-white rounded-2xl shadow-sm p-6 h-fit">
        <h2 class="font-bold text-lg mb-4">Resumen del pedido</h2>
        <div class="flex justify-between text-sm text-gray-600 mb-2">
          <span>Productos ({{ cart.totalItems }})</span>
          <span>${{ cart.totalPrecio.toFixed(2) }}</span>
        </div>
        <div class="flex justify-between text-sm text-gray-600 mb-4">
          <span>Envío</span>
          <span class="text-green-600 font-medium">Gratis</span>
        </div>
        <div class="border-t border-gray-100 pt-4 flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${{ cart.totalPrecio.toFixed(2) }}</span>
        </div>
        <button
          class="mt-6 w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-xl transition"
        >
          Proceder al pago
        </button>
      </div>
    </div>
  </section>
</template>
