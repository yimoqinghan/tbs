import Vue from 'vue'
import VueRouter from 'vue-router'
// import posTerminus from "../index.vue";
import index from '../view/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
    component: index
  },
]

const router = new VueRouter({
  routes
})

export default router