import Vue from 'vue'
import VueRouter from 'vue-router'
// import MainView from '../views/MainView.vue'
import MainScheduleView from '../views/MainScheduleView.vue'
import LoginView from '../views/LoginView.vue'
import PatientsView from '../views/PatientsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainScheduleView
  },
  // {
  //   path: '/main2',
  //   name: 'main2',
  //   component: MainScheduleView
  // },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/patients',
    name: 'patients',
    component: PatientsView
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
