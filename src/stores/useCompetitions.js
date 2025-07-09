import axios from 'axios'
import { defineStore } from 'pinia'
import { reactive } from 'vue'
import axiosR from '@/api/http'

export const useCompetitionsStore = defineStore('competitionsStore', {
    state: () => ({
        competitions: reactive([]),
        perPage: 4,
        currentPage: 1,
        totalPages: 1
    }),
    actions: {
        async fetchCompetitions () {
            try {
                let { data } = await axiosR.get('/competitions/')
                this.competitions = data
            } catch (error) {
                console.error('Ошибка при получении данных', error)
            }
        },
        setTotalPages(pages) {
            this.totalPages = pages;
        },
        setCurrentPage(page) {
            this.currentPage = page;
        }
    }
})
