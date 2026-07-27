<script setup>
import { computed, ref } from 'vue'
import { useProductsStore } from '../stores/products'
import ProductCard from '../components/ProductCard.vue'

const store = useProductsStore()
const busqueda = ref('')
const categoriaActiva = ref('Todas')

const categorias = computed(() => [
  'Todas',
  ...new Set(store.productos.map((p) => p.categoria)),
])

const productosFiltrados = computed(() =>
  store.productos.filter((p) => {
    const coincideCategoria = categoriaActiva.value === 'Todas' || p.categoria === categoriaActiva.value
    const coincideBusqueda = p.nombre.toLowerCase().includes(busqueda.value.toLowerCase())
    return coincideCategoria && coincideBusqueda
  }),
)
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 py-12">
    <div class="mb-8">
      <h1 class="text-3xl font-extrabold text-gray-800">Catálogo de productos</h1>
      <p class="text-gray-500 mt-1">{{ productosFiltrados.length }} productos disponibles</p>
    </div>

    <div class="flex flex-col md:flex-row gap-4 mb-8">
      <input
        v-model="busqueda"
        type="text"
        placeholder="Buscar producto..."
        class="w-full md:w-72 px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500"
      />
      <div class="flex flex-wrap gap-2">
        <button
          v-for="cat in categorias"
          :key="cat"
          @click="categoriaActiva = cat"
          class="px-4 py-2 rounded-full text-sm font-medium transition"
          :class="categoriaActiva === cat
            ? 'bg-brand-600 text-white'
            : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-400'"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <div
      v-if="productosFiltrados.length"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <ProductCard v-for="p in productosFiltrados" :key="p.id" :producto="p" />
    </div>
    <div v-else class="text-center text-gray-500 py-20">
      No se encontraron productos con esos criterios.
    </div>
  </section>
</template>
