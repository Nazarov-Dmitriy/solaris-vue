import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
// import CabinetStudentShop from '../views/CabinetStudentShop.vue'
// import CabinetStudentShopCard from '../views/CabinetStudentShopCard.vue'
// import CabinetStudentSales from '../views/CabinetStudentSales.vue'
// import CabinetStudentContests from '../views/CabinetStudentContests.vue'
// import CabinetStudentViewContest from '../views/CabinetStudentViewContest.vue'
// import CabinetStudentPortfolio from '../views/CabinetStudentPortfolio.vue'
// import ProfilePage from '@/views/teacher/ProfilePage.vue'
// import CasePortfolio from '@/views/teacher/CasePortfolio.vue'
// import CabinetTeacherNotification from '@/views/teacher/CabinetTeacherNotification.vue'
// import CabinetTeacherPortfolio from '@/views/teacher/CabinetTeacherPortfolio.vue'
// import CabinetTeacherProposeContest from '@/views/teacher/contest/CabinetTeacherProposeContest.vue'
// import CabinetTeacherContests from '@/views/teacher/CabinetTeacherContests.vue'
// import ContestView from '@/views/teacher/contest/ContestView.vue'
// import CabinetTeacher from '@/views/cabinet/CabinetTeacher.vue'
// import CabinetStudent from '@/views/cabinet/CabinetStudent.vue'
// import CabinetPage from '@/views/CabinetPage.vue'
import ProfilePage from '@/views/cabinet/ProfilePage.vue'
import NotificationPage from '@/views/cabinet/NotificationPage.vue'
import ShopPage from '@/views/cabinet/shop/ShopPage.vue'
import ShopCard from '@/views/cabinet/shop/ShopCard.vue'
import SalesPage from '@/views/cabinet/SalesPage.vue'
import ContestListPage from '@/views/cabinet/ContestListPage.vue'




const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: MainPage
        },
        {
            path: '/cabinet',
            // component: CabinetPage,
            children: [

                {
                    path: 'student',
                    children: [
                        {
                            path: '',
                            name: 'profile-student',
                            component: ProfilePage,
                        },
                        {
                            path: 'notification',
                            component: NotificationPage
                        },
                        {
                            path: 'contests',
                            component: ContestListPage
                        },
                        {
                            path: 'shop',
                            children: [
                                {
                                    path: '',
                                    name: 'shop',
                                    component: ShopPage
                                },
                                {
                                    path: ':id',
                                    name: 'shop-card',
                                    component: ShopCard
                                },
                            ]
                        },
                        {
                            path: 'sales',
                            name: 'cabinet-sales',
                            component: SalesPage
                        },
                    ]
                },
                {
                    path: 'teacher',
                    children: [
                        {
                            path: '',
                            name: 'profile-teacher',
                            component: ProfilePage
                        },
                        {
                            path: 'notification',
                            component: NotificationPage
                        },
                    ]
                }
            ]
        },


     
        // {
        //     path: '/cabinet-contests',
        //     name: 'cabinet-contests',
        //     component: CabinetStudentContests
        // },
        // {
        //     path: '/cabinet-contest-view/:id',
        //     name: 'cabinet-contests-view',
        //     component: CabinetStudentViewContest
        // },
        // {
        //     path: '/cabinet-portfolio',
        //     name: 'cabinet-portfolio',
        //     component: CabinetStudentPortfolio
        // },
        // {
        //     path: '/cabinet-teacher',
        //     component: CabinetTeacher,
        //     children: [
        //         {
        //             path: 'profile',
        //             name: 'profile',
        //             component: ProfilePage
        //         },
        //         {
        //             path: 'notification',
        //             name: 'notification',
        //             component: CabinetTeacherNotification
        //         },
        //         {
        //             path: 'contests',
        //             name: 'contests',
        //             component: CabinetTeacherContests
        //         },
        //         {
        //             path: 'teacher-portfolio',
        //             name: 'teacher-portfolio',
        //             component: CabinetTeacherPortfolio
        //         },
        //         {
        //             path: 'case',
        //             children: [
        //                 {
        //                     path: 'portfolio',
        //                     name: 'portfolio',
        //                     component: CasePortfolio
        //                 }
        //             ]
        //         },
        //         {
        //             path: 'teacher-contest',
        //             children: [
        //                 {
        //                     path: '/teacher-contest-view/:id',
        //                     name: '/teacher-contest-view',
        //                     component: ContestView
        //                 },
        //                 {
        //                     path: 'propose',
        //                     name: 'teacher-contest-propose',
        //                     component: CabinetTeacherProposeContest
        //                 }
        //             ]
        //         }
        //     ]
        // }
    ],
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
                top: 88
            }
        } else if (savedPosition) {
            return savedPosition
        } else {
            return {
                top: 0,
                behavior: 'smooth'
            }
        }
    }
})

export default router
