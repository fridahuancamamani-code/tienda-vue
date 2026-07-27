<script setup>
import { RouterLink } from 'vue-router'
import { useProductsStore } from '../stores/products'
import ProductCard from '../components/ProductCard.vue'

const store = useProductsStore()
const destacados = store.productos.slice(0, 3)
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-brand-600 to-brand-700 text-white">
      <div class="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10">
        <div class="flex-1 text-center md:text-left">
          <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">
            Todo lo que necesitas, <br class="hidden md:block" />
            <span class="text-brand-100">a un clic de distancia</span>
          </h1>
          <p class="mt-4 text-brand-50 text-lg max-w-lg mx-auto md:mx-0">
            Descubre productos seleccionados con la mejor calidad y envío rápido.
            Aprovecha nuestras ofertas antes de que se agoten.
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <RouterLink
              to="/catalogo"
              class="bg-white text-brand-700 font-bold px-8 py-3 rounded-full hover:bg-brand-50 transition shadow-lg"
            >
              Comprar ahora
            </RouterLink>
            <RouterLink
              to="/nosotros"
              class="border-2 border-white/70 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition"
            >
              Conócenos
            </RouterLink>
          </div>
        </div>
        <div class="flex-1">
          <img
            src="https://picsum.photos/seed/heroshop/600/450"
            alt="Productos destacados"
            class="rounded-3xl shadow-2xl w-full"
          />
        </div>
      </div>
    </section>

    <!-- Beneficios -->
    <section class="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div class="text-center p-6 bg-white rounded-2xl shadow-sm">
        <div class="text-3xl mb-2">🚚</div>
        <h3 class="font-semibold">Envío rápido</h3>
        <p class="text-sm text-gray-500 mt-1">Recibe tu pedido en 24-48 horas.</p>
      </div>
      <div class="text-center p-6 bg-white rounded-2xl shadow-sm">
        <div class="text-3xl mb-2">🔒</div>
        <h3 class="font-semibold">Pago seguro</h3>
        <p class="text-sm text-gray-500 mt-1">Tus datos siempre protegidos.</p>
      </div>
      <div class="text-center p-6 bg-white rounded-2xl shadow-sm">
        <div class="text-3xl mb-2">↩️</div>
        <h3 class="font-semibold">Devoluciones fáciles</h3>
        <p class="text-sm text-gray-500 mt-1">30 días para cambios sin costo.</p>
      </div>
    </section>

    <!-- Productos destacados -->
    <section class="max-w-6xl mx-auto px-4 pb-16">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold">Productos destacados</h2>
        <RouterLink to="/catalogo" class="text-brand-600 font-semibold hover:underline">Ver todo →</RouterLink>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard v-for="p in destacados" :key="p.id" :producto="p" />
      </div>
    </section>

    <!-- CTA final -->
    <section class="bg-brand-50 py-14">
      <div class="max-w-3xl mx-auto text-center px-4">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800">¿Listo para tu primera compra?</h2>
        <p class="text-gray-500 mt-2">Regístrate y obtén 10% de descuento en tu primer pedido.</p>
        <RouterLink
          to="/catalogo"
          class="inline-block mt-6 bg-brand-600 hover:bg-brand-700 text-white font-bold px-8 py-3 rounded-full transition"
        >
          Explorar catálogo
        </RouterLink>
      </div>
    </section>
  </div>
</template>
