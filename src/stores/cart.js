import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [], // { id, nombre, precio, imagen, cantidad }
  }),
  getters: {
    totalItems: (state) => state.items.reduce((acc, i) => acc + i.cantidad, 0),
    totalPrecio: (state) =>
      state.items.reduce((acc, i) => acc + i.precio * i.cantidad, 0),
  },
  actions: {
    agregarProducto(producto) {
      const existente = this.items.find((i) => i.id === producto.id)
      if (existente) {
        existente.cantidad++
      } else {
        this.items.push({
          id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
          imagen: producto.imagen,
          cantidad: 1,
        })
      }
    },
    incrementar(id) {
      const item = this.items.find((i) => i.id === id)
      if (item) item.cantidad++
    },
    decrementar(id) {
      const item = this.items.find((i) => i.id === id)
      if (item) {
        item.cantidad--
        if (item.cantidad <= 0) this.eliminarProducto(id)
      }
    },
    eliminarProducto(id) {
      this.items = this.items.filter((i) => i.id !== id)
    },
    vaciarCarrito() {
      this.items = []
    },
  },
})
