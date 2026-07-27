<script setup>
import { useCartStore } from '../stores/cart'

const props = defineProps({
  producto: {
    type: Object,
    required: true,
  },
})

const cart = useCartStore()

function agregar() {
  cart.agregarProducto(props.producto)
}
</script>

<template>
  <div class="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col group">
    <div class="aspect-square overflow-hidden bg-gray-100">
      <img
        :src="producto.imagen"
        :alt="producto.nombre"
        class="w-full h-full object-cover group-hover:scale-105 transition duration-300"
      />
    </div>
    <div class="p-4 flex flex-col flex-1">
      <span class="text-xs font-semibold text-brand-600 uppercase tracking-wide">{{ producto.categoria }}</span>
      <h3 class="font-semibold text-gray-800 mt-1">{{ producto.nombre }}</h3>
      <p class="text-sm text-gray-500 mt-1 flex-1">{{ producto.descripcion }}</p>

      <div class="flex items-center justify-between mt-3">
        <span class="text-lg font-bold text-gray-900">Bs{{ producto.precio.toFixed(2) }}</span>
        <span
          class="text-xs px-2 py-1 rounded-full"
          :class="producto.stock > 10 ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'"
        >
          {{ producto.stock > 10 ? 'En stock' : `¡Últimas ${producto.stock}!` }}
        </span>
      </div>

      <button
        @click="agregar"
        class="mt-4 w-full bg-brand-500 hover:bg-brand-600 text-white font-semibold py-2 rounded-xl transition"
      >
        Agregar al carrito
      </button>
    </div>
  </div>
</template>
