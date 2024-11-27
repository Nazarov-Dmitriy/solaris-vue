import { defineStore } from 'pinia'
import axiosR from '@/api/http'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        users: [],
        token: '',
        err: ''
    }),
    getters: {
        getUser(state) {
            return state.users
        }
    },
    actions: {
        async loginUser(payload) {
            try {
                const res = await axiosR.post('/auth/login', payload)
                this.users = res.data
                console.log(res.data)
                this.token = res.data.token
                localStorage.setItem('token', this.token)
            } catch (err) {
                this.err = err
                if (this.err) {
                    console.error('Ошибка авторизации:', this.err)
                }
            }
        }
    }
})
