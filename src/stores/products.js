import { defineStore } from 'pinia'
import Audifonos  from '../assets/Imagenes/Audifonos.jpg'
import Reloj  from '../assets/Imagenes/Reloj.jpg'
import Mochila  from '../assets/Imagenes/Mochila.jpg'
import Lampara  from '../assets/Imagenes/Lampara.jpg'
import Teclado  from '../assets/Imagenes/Teclado.jpg'
import Botella  from '../assets/Imagenes/Botella.jpg'

// Datos simulados: al menos 5 productos con nombre, precio, stock y cantidad vendida
const productosSimulados = [
  {
    id: 1,
    nombre: 'Audífonos Inalámbricos Pro',
    precio: 249.9,
    stock: 34,
    vendidos: 128,
    categoria: 'Audio',
    imagen: Audifonos,
    descripcion: 'Sonido envolvente con cancelación de ruido activa y 30h de batería.',
  },
  {
    id: 2,
    nombre: 'Smartwatch Fit X2',
    precio: 399.0,
    stock: 20,
    vendidos: 210,
    categoria: 'Wearables',
    imagen: Reloj,
    descripcion: 'Monitorea tu ritmo cardíaco, sueño y actividad física en tiempo real.',
  },
  {
    id: 3,
    nombre: 'Mochila Urbana Antirrobo',
    precio: 159.5,
    stock: 45,
    vendidos: 87,
    categoria: 'Accesorios',
    imagen: Mochila,
    descripcion: 'Compartimento acolchado para laptop y puerto USB de carga integrado.',
  },
  {
    id: 4,
    nombre: 'Teclado Mecánico RGB',
    precio: 289.0,
    stock: 15,
    vendidos: 156,
    categoria: 'Tecnología',
    imagen: Teclado,
    descripcion: 'Switches táctiles, retroiluminación RGB personalizable y diseño compacto.',
  },
  {
    id: 5,
    nombre: 'Lámpara LED de Escritorio',
    precio: 89.9,
    stock: 60,
    vendidos: 64,
    categoria: 'Hogar',
    imagen: Lampara,
    descripcion: 'Tres niveles de brillo, luz cálida/fría y carga USB para tu celular.',
  },
  {
    id: 6,
    nombre: 'Botella Térmica 750ml',
    precio: 69.9,
    stock: 80,
    vendidos: 198,
    categoria: 'Accesorios',
    imagen: Botella,
    descripcion: 'Mantiene tus bebidas frías 24h o calientes 12h. Acero inoxidable.',
  },
]

export const useProductsStore = defineStore('products', {
  state: () => ({
    productos: productosSimulados,
  }),
  getters: {
    totalProductos: (state) => state.productos.length,
    productoMasVendido: (state) =>
      [...state.productos].sort((a, b) => b.vendidos - a.vendidos)[0],
    ingresosTotales: (state) =>
      state.productos.reduce((acc, p) => acc + p.precio * p.vendidos, 0),
    productoPorId: (state) => (id) => state.productos.find((p) => p.id === id),
  },
})
