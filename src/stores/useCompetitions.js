import { defineStore } from 'pinia'
import { reactive } from 'vue'
import axiosR from '@/api/http'

export const useCompetitionsStore = defineStore('competitionsStore', {
    state: () => ({
        competitions: reactive([])
    }),
    actions: {
        async fetchCompetitions() {
            try {
                let { data } = await axiosR.get('/competition', {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                this.competitions = data
            } catch (error) {
                console.error('Ошибка при получении данных', error)
            }
        }
    }
})
