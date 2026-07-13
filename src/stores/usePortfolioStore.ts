import { defineStore } from 'pinia'
import axiosR from '@/api/http'

export type PortfolioItem = {
    id: number
    user?: {
        id: number
        name: string
        class: string
        category: string
    }
    text: string
    roles: string[]
    nastavnik?: {
        id: number
        full_name: string
    }
    solariki: number
    balls: number
    status: string
    created_at: string
}

function normalizePortfolio(payload: unknown): PortfolioItem[] {
    if (Array.isArray(payload)) {
        return payload as PortfolioItem[]
    }

    if (payload && typeof payload === 'object') {
        const response = payload as { data?: unknown }

        if (Array.isArray(response.data)) {
            return response.data as PortfolioItem[]
        }
    }

    return []
}

export const usePortfolioStore = defineStore('portfolioStore', {
    state: () => ({
        items: [] as PortfolioItem[],
        isLoading: false,
    }),
    actions: {
        async fetchPortfolio() {
            this.isLoading = true

            try {
                const response = await axiosR.get('/user/portfolio')
                this.items = normalizePortfolio(response.data)
            } catch {
                this.items = []
            } finally {
                this.isLoading = false
            }
        },
    },
})
