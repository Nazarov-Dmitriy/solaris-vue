import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import CabinetStudent from '../views/CabinetStudent.vue'
import CabinetStudentShop from '../views/CabinetStudentShop.vue'
import CabinetStudentShopCard from '../views/CabinetStudentShopCard.vue'
import CabinetStudentSales from '../views/CabinetStudentSales.vue'
import CabinetStudentContests from '../views/CabinetStudentContests.vue'
import CabinetStudentViewContest from '../views/CabinetStudentViewContest.vue'
import CabinetStudentPortfolio from '../views/CabinetStudentPortfolio.vue'
import CabinetTeacher from '@/views/teacher/CabinetTeacher.vue'
import ProfilePage from '@/views/teacher/ProfilePage.vue'
import CasePortfolio from '@/views/teacher/CasePortfolio.vue'



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
            path: '/cabinet-shop-card/:id',
            name: 'cabinet-shop-card',
            component: CabinetStudentShopCard
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
            path: '/cabinet-contest-view/:id',
            name: 'cabinet-contests-view',
            component: CabinetStudentViewContest
        },
        {
            path: '/cabinet-portfolio',
            name: 'cabinet-portfolio',
            component: CabinetStudentPortfolio
        },
        {
            path: '/cabinet-teacher',
            component: CabinetTeacher,
            children: [   
                {
                    path: "profile",
                    name: "profile",
                    component: ProfilePage
                },           
                {
                    path: 'case',                  
                    children: [ 
                        {
                            path: 'portfolio',
                            name: 'portfolio',                    
                            component: CasePortfolio,
                        },
                    ]
                },
              
            ],
          

        },
    ],
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash, behavior: 'smooth',
                top: 88,
            }
        } else if (savedPosition) {
            return savedPosition
        } else {
            return {
                top: 0, behavior: 'smooth',
            }
        }
    }
})

export default router
