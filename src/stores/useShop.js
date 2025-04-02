import { defineStore } from 'pinia'
import axiosR from '@/api/http'

export const useShopStore = defineStore('shopStore', {
    state: () => ({
        products: []
    }),
    getters: {
        getProducts(state) {
            return state.products
        }
    },
    actions: {
        async fetchProducts() {
            try {
                const res = await axiosR.get('/catalog')
                console.log(res.data)
                this.products = res.data
            } catch (error) {
                console.error('Ошибка при получении данных', error)
            }
        }
    }
})
