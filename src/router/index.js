import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import CabinetStudent from '../views/CabinetStudent.vue'
import CabinetStudentShop from '../views/CabinetStudentShop.vue'
import CabinetStudentCardProduct from '../views/CabinetStudentCardProduct.vue'
import CabinetStudentSales from '../views/CabinetStudentSales.vue'
import CabinetStudentContests from '../views/CabinetStudentContests.vue'
import CabinetStudentViewContest from '../views/CabinetStudentViewContest.vue'

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
      {
      path: '/cabinet-shop',
      name: 'cabinet-shop',
      component: CabinetStudentShop
    },
      {
      path: '/cabinet-shop-card',
      name: 'cabinet-shop-card',
      component: CabinetStudentCardProduct
    },
      {
      path: '/cabinet-sales',
      name: 'cabinet-sales',
      component: CabinetStudentSales
    },
      {
      path: '/cabinet-contests',
      name: 'cabinet-contests',
      component: CabinetStudentContests
    },
      {
      path: '/cabinet-contests-view',
      name: 'cabinet-contests-view',
      component: CabinetStudentViewContest
    },
  ]
})

export default router
