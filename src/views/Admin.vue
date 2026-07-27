<script setup>
import { computed } from 'vue'
import { Bar, Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from 'chart.js'
import { useProductsStore } from '../stores/products'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement)

const store = useProductsStore()

const totalProductos = computed(() => store.totalProductos)
const productoMasVendido = computed(() => store.productoMasVendido)
const ingresosTotales = computed(() => store.ingresosTotales)
const totalUnidadesVendidas = computed(() =>
  store.productos.reduce((acc, p) => acc + p.vendidos, 0),
)

// Gráfica de barras: ventas por producto
const barData = computed(() => ({
  labels: store.productos.map((p) => p.nombre),
  datasets: [
    {
      label: 'Unidades vendidas',
      backgroundColor: '#4f6df5',
      borderRadius: 6,
      data: store.productos.map((p) => p.vendidos),
    },
  ],
}))

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: { ticks: { autoSkip: false, maxRotation: 30, minRotation: 0 } },
  },
}

// Gráfica de dona: distribución de ingresos por producto
const doughnutData = computed(() => ({
  labels: store.productos.map((p) => p.nombre),
  datasets: [
    {
      backgroundColor: ['#4f6df5', '#22c55e', '#f59e0b', '#ef4444', '#a855f7', '#06b6d4'],
      data: store.productos.map((p) => +(p.precio * p.vendidos).toFixed(2)),
    },
  ],
}))

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 11 } } },
  },
}
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 py-12">
    <h1 class="text-3xl font-extrabold text-gray-800 mb-1">Panel de administración</h1>
    <p class="text-gray-500 mb-8">Resumen general de la tienda</p>

    <!-- Tarjetas de estadísticas -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
      <div class="bg-white rounded-2xl shadow-sm p-6">
        <p class="text-sm text-gray-500">Productos en catálogo</p>
        <p class="text-3xl font-extrabold text-gray-800 mt-2">{{ totalProductos }}</p>
        <p class="text-xs text-gray-400 mt-1">{{ totalUnidadesVendidas }} unidades vendidas en total</p>
      </div>
      <div class="bg-white rounded-2xl shadow-sm p-6">
        <p class="text-sm text-gray-500">Producto más vendido</p>
        <p class="text-xl font-bold text-gray-800 mt-2">{{ productoMasVendido.nombre }}</p>
        <p class="text-xs text-gray-400 mt-1">{{ productoMasVendido.vendidos }} unidades vendidas</p>
      </div>
      <div class="bg-white rounded-2xl shadow-sm p-6">
        <p class="text-sm text-gray-500">Ingresos totales</p>
        <p class="text-3xl font-extrabold text-green-600 mt-2">
          ${{ ingresosTotales.toLocaleString('es-ES', { minimumFractionDigits: 2 }) }}
        </p>
        <p class="text-xs text-gray-400 mt-1">Calculado a partir de precio × vendidos</p>
      </div>
    </div>

    <!-- Gráficas -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
      <div class="bg-white rounded-2xl shadow-sm p-6 lg:col-span-2">
        <h2 class="font-semibold text-gray-800 mb-4">Unidades vendidas por producto</h2>
        <div class="h-72">
          <Bar :data="barData" :options="barOptions" />
        </div>
      </div>
      <div class="bg-white rounded-2xl shadow-sm p-6">
        <h2 class="font-semibold text-gray-800 mb-4">Ingresos por producto</h2>
        <div class="h-72">
          <Doughnut :data="doughnutData" :options="doughnutOptions" />
        </div>
      </div>
    </div>

    <!-- Tabla de inventario -->
    <div class="bg-white rounded-2xl shadow-sm p-6 overflow-x-auto">
      <h2 class="font-semibold text-gray-800 mb-4">Inventario</h2>
      <table class="w-full text-sm text-left">
        <thead>
          <tr class="text-gray-400 border-b border-gray-100">
            <th class="py-2 pr-4">Producto</th>
            <th class="py-2 pr-4">Categoría</th>
            <th class="py-2 pr-4">Precio</th>
            <th class="py-2 pr-4">Stock</th>
            <th class="py-2 pr-4">Vendidos</th>
            <th class="py-2 pr-4">Ingresos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in store.productos" :key="p.id" class="border-b border-gray-50 last:border-0">
            <td class="py-3 pr-4 font-medium text-gray-700">{{ p.nombre }}</td>
            <td class="py-3 pr-4 text-gray-500">{{ p.categoria }}</td>
            <td class="py-3 pr-4">${{ p.precio.toFixed(2) }}</td>
            <td class="py-3 pr-4">
              <span :class="p.stock > 10 ? 'text-green-600' : 'text-amber-600'">{{ p.stock }}</span>
            </td>
            <td class="py-3 pr-4">{{ p.vendidos }}</td>
            <td class="py-3 pr-4 font-semibold">${{ (p.precio * p.vendidos).toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
