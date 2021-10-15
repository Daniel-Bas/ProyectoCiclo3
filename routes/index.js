import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
      path: '/receta1',
      name: 'Receta1',
      component: () => import(/* webpackChunkName: "receta1" */ '../src/views/Receta1.vue')
    },
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
export default router