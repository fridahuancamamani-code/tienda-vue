import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/nosotros',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/catalogo',
    name: 'Catalog',
    component: () => import('../views/Catalog.vue'),
  },
  {
    path: '/carrito',
    name: 'Cart',
    component: () => import('../views/Cart.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
