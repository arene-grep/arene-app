import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addProduct',
    name: 'AddProduct',
    component: () => import('../views/Form.vue')
  },
  {
    path: '/getProducts',
    name: 'GetProducts',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/getProducts/:id',
    name: 'getProductID',
    component: () => import('../views/Product.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
