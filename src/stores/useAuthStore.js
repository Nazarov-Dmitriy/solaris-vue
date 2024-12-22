import { defineStore } from 'pinia'
import axiosR from '@/api/http'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        user: null,
        token: '',
        err: ''
    }),
    getters: {
        getUser (state) {
            return state.user
        }
    },
    actions: {
        async loginUser (payload) {
            try {
                const res = await axiosR.post('/auth/login', payload)
                this.user = res.data
                this.token = res.data.token
                localStorage.setItem('token', this.token)
            } catch (err) {
                this.err = err
                localStorage.removeItem('token')
            }
        },
        async autoLogin () {
            const token = localStorage.getItem('token')
            if (token) {
                axiosR
                    .get("/user/current_user")
                    .then((res) => {
                        this.user = res.data?.user_id

                    })
                    .catch((e) => {
                        this.err = e
                        localStorage.removeItem('token')
                    })
            }
        },
    }
})
