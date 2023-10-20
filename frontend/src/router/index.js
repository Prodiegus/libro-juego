import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Logins.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Signups.vue')
  },
  {
    path: '/lectorhome',
    name: 'lectorhome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LectorHomeView.vue')
  },
  {
    path: '/autorhome',
    name: 'autorhome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AutorHomes.vue')
  },
  {
    path: '/editarlibro',
    name: 'editarlibro',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditarLibro.vue')
  },
  {
    path: '/crearlibro',
    name: 'crearlibro',
    component: () => import(/* webpackChunkName: "about" */ '../views/CrearLibro.vue'),
  },
  {
    path: '/mostrarlibro',
    name: 'mostrarlibro',
    component: () => import(/* webpackChunkName: "about" */ '../views/MostrandoLibro.vue'),

    
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
