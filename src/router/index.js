import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import CabinetStudent from '../views/CabinetStudent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
      {
      path: '/cabinet-student',
      name: 'cabinet-student',
      component: CabinetStudent
    },
  ]
})

export default router
