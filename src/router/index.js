import { createRouter, createWebHistory } from 'vue-router';
import ShopPage from '@/views/cabinet/shop/ShopPage.vue';
import ShopCard from '@/views/cabinet/shop/ShopCard.vue';
import SalesPage from '@/views/cabinet/SalesPage.vue';
import ContestListPage from '@/views/cabinet/ContestListPage.vue';
import ContestItemPage from '@/views/cabinet/ContestItemPage.vue';
import PortfolioPage from '@/views/cabinet/PortfolioPage.vue';
import OfferContest from '@/views/cabinet/OfferContestPage.vue';
import CasePortfolioPage from '@/views/cabinet/CasePortfolioPage.vue';
import MainPage from '@/views/MainPage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: MainPage,
        },
        {
            path: '/cabinet',
            children: [
                {
                    path: 'student',
                    meta: { protected: true, role: 'student' },
                    children: [
                        {
                            path: '',
                            name: 'profile-student',
                            component: import(
                                '../views/cabinet/ProfilePage.vue'
                            ),
                        },
                        {
                            path: 'notification',
                            component: import(
                                '../views/cabinet/NotificationPage.vue'
                            ),
                        },
                        {
                            path: 'contests',
                            children: [
                                {
                                    path: '',
                                    component: ContestListPage,
                                },
                                {
                                    path: ':id',
                                    component: ContestItemPage,
                                },
                            ],
                        },
                        {
                            path: 'shop',
                            children: [
                                {
                                    path: '',
                                    name: 'shop',
                                    component: ShopPage,
                                },
                                {
                                    path: ':id',
                                    name: 'shop-card',
                                    component: ShopCard,
                                },
                            ],
                        },
                        {
                            path: 'sales',
                            name: 'cabinet-sales',
                            component: SalesPage,
                        },
                        {
                            path: 'portfolio',
                            name: 'portfolio-student',
                            component: PortfolioPage,
                        },
                    ],
                },
                {
                    path: 'teacher',
                    meta: { protected: true, role: 'teacher' },
                    children: [
                        {
                            path: '',
                            name: 'profile-teacher',
                            component: import(
                                '../views/cabinet/ProfilePage.vue'
                            ),
                        },
                        {
                            path: 'notification',
                            component: import(
                                '../views/cabinet/NotificationPage.vue'
                            ),
                        },
                        {
                            path: 'contests',
                            children: [
                                {
                                    path: '',
                                    component: ContestListPage,
                                },
                                {
                                    path: ':id',
                                    component: ContestItemPage,
                                },
                            ],
                        },
                        {
                            path: 'portfolio',
                            name: 'portfolio-teacher',
                            component: PortfolioPage,
                        },
                        {
                            path: 'offer-contests',
                            name: 'offer-contests',
                            component: OfferContest,
                        },
                        {
                            path: 'case-portfolio',
                            name: 'portfolio',
                            component: CasePortfolioPage,
                        },
                    ],
                },
            ],
        },
    ],
    scrollBehavior(to, _from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
                top: 88,
            };
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return {
                top: 0,
                behavior: 'smooth',
            };
        }
    },
});

export default router;
