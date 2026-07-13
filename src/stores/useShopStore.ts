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
        },

        getProduct: (state) => {
            return (id: number) => {
            let product: Product | undefined;
            state.products.forEach(el => {
                const found = el.find(e => e.id === id);
                if (found) {
                    product = found;
                }
            });
            return product
        }}
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
        clearProducts() {
            this.$state.products = new Map()
            this.$state.pagesCount = 0
        }
    }
})
