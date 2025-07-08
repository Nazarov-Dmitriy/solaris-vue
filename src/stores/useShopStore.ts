import { defineStore } from 'pinia'
import { Product } from '@/interfaces/shop'

export const useShopStore = defineStore('shopStore', {
    state: () => ({ products: new Map() as Map<number, Product[]>, currentPage: 1, perPage: 10, pagesCount: 0  }),
    getters: {
        /* getUser: (state): Teacher => {
            return state.user;
        }, */
        getProductByPage: (state) => {
            return state.products.get(state.currentPage)
        }
    },
    actions: {
        setProducts(products: Product[], page: number) {
            this.$state.products.set(page, products)
        },
        setPagesCount(count: number) {
            this.$state.pagesCount = count
        },
        setCurrentPage(page: number) {
            this.$state.currentPage = page
        },
        addProducts(products: Product[]) {
            this.$state.products.concat(products)
        },/* 
        clearProducts() {
            this.$state.products = {}
        } */
    }
})
