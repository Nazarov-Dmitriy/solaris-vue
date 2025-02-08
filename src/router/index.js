import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import ProfilePage from '@/views/cabinet/ProfilePage.vue'
import NotificationPage from '@/views/cabinet/NotificationPage.vue'
import ShopPage from '@/views/cabinet/shop/ShopPage.vue'
import ShopCard from '@/views/cabinet/shop/ShopCard.vue'
import SalesPage from '@/views/cabinet/SalesPage.vue'
import ContestListPage from '@/views/cabinet/ContestListPage.vue'
import ContestItemPage from '@/views/cabinet/ContestItemPage.vue'
import PortfolioPage from '@/views/cabinet/PortfolioPage.vue'
import OfferContest from '@/views/cabinet/OfferContestPage.vue'
import CasePortfolioPage from '@/views/cabinet/CasePortfolioPage.vue'
import { useAuthStore } from '@/stores/useAuthStore.ts'

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
            children: [
                {
                    path: 'student',
                    meta: { protected: true, role: 'student'},
                    children: [
                        {
                            path: '',
                            name: 'profile-student',
                            component: ProfilePage
                        },
                        {
                            path: 'notification',
                            component: NotificationPage
                        },
                        {
                            path: 'contests',
                            children: [
                                {
                                    path: '',
                                    component: ContestListPage
                                },
                                {
                                    path: ':id',
                                    component: ContestItemPage
                                }
                            ]
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
                                }
                            ]
                        },
                        {
                            path: 'sales',
                            name: 'cabinet-sales',
                            component: SalesPage
                        },
                        {
                            path: 'portfolio',
                            name: 'portfolio-student',
                            component: PortfolioPage
                        }
                    ]
                },
                {
                    path: 'teacher',
                    meta: { protected: true, role: 'teacher'},
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
                        {
                            path: 'contests',
                            children: [
                                {
                                    path: '',
                                    component: ContestListPage
                                },
                                {
                                    path: ':id',
                                    component: ContestItemPage
                                }
                            ]
                        },
                        {
                            path: 'portfolio',
                            name: 'portfolio-teacher',
                            component: PortfolioPage
                        },
                        {
                            path: 'offer-contests',
                            name: 'offer-contests',
                            component: OfferContest
                        },
                        {
                            path: 'case-portfolio',
                            name: 'portfolio',
                            component: CasePortfolioPage
                        }
                    ]
                }
            ]
        }
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


router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("token");
    const user = useAuthStore()
  
    if (to.matched.some((route) => route.meta.protected && route.meta.role === 'student')) {
        if (token && user.getUser?.category === "Ученик") {
            next();
        } else {
            next("/");
        }
    }else if (to.matched.some((route) => route.meta.protected && route.meta.role === 'teacher')) {
        if (token && user.getUser?.category === "Учитель") {
            next();
        } else {
            next("/");
        }
    } else {
        next();
    }
});



export default router
