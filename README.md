# TiendaVue 🛍️

Proyecto final — **Diseño de Programación Web II**.
Tienda en línea construida con **Vue 3**, **Vite**, **Vue Router**, **Pinia** y **Tailwind CSS**.

## ✨ Características

**Rutas públicas**
- `/` — Inicio: landing orientada a conversión (CTA de compra, productos destacados).
- `/nosotros` — Información sobre la tienda.
- `/catalogo` — Catálogo de productos con búsqueda y filtro por categoría.
- `/carrito` — Carrito de compras: agregar/eliminar productos, cambiar cantidades y ver el total.

**Panel de administración**
- `/admin` — Dashboard con:s
  - Cantidad total de productos en el catálogo.
  - Producto más vendido (simulado).
  - Ingresos totales generados.
  - Gráfica de barras (unidades vendidas por producto) y gráfica de dona (ingresos por producto), con Chart.js.
  - Tabla de inventario.

**Estado global**
- `src/stores/products.js` — Pinia store con un arreglo de 6 productos simulados (nombre, precio, stock, vendidos, categoría, imagen, descripción).
- `src/stores/cart.js` — Pinia store para el carrito (agregar, incrementar, decrementar, eliminar, vaciar).

**Estilos**
- Tailwind CSS para un diseño limpio y responsivo.

## 🚀 Cómo ejecutar el proyecto

Requisitos: [Node.js](https://nodejs.org/) 18 o superior.

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar el servidor de desarrollo
npm run dev

# 3. Compilar para producción
npm run build

# 4. Previsualizar la build de producción
npm run preview
```

Abre el proyecto en Visual Studio Code y ejecuta los comandos anteriores desde la terminal integrada.

## 📦 Estructura del proyecto

```
tienda-vue/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.js
    ├── App.vue
    ├── assets/
    │   └── main.css
    ├── router/
    │   └── index.js
    ├── stores/
    │   ├── products.js
    │   └── cart.js
    ├── components/
    │   ├── NavBar.vue
    │   └── ProductCard.vue
    └── views/
        ├── Home.vue
        ├── About.vue
        ├── Catalog.vue
        ├── Cart.vue
        └── Admin.vue
```

## 🌐 Publicar el proyecto (GitHub Pages)

1. Sube el proyecto a un repositorio de GitHub.
2. Instala el plugin de despliegue: `npm install -D gh-pages`.
3. Agrega en `vite.config.js` la opción `base: '/nombre-del-repo/'`.
4. Agrega en `package.json` el script `"deploy": "vite build && gh-pages -d dist"`.
5. Ejecuta `npm run deploy`.

También puedes usar [Vercel](https://vercel.com) o [Netlify](https://netlify.com) importando el repositorio directamente, sin configuración adicional.
