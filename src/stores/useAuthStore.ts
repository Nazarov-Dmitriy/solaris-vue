import { defineStore } from 'pinia'
import { AuthFormUser, User } from '@/interfaces/users'

export const useAuthStore = defineStore('userStore', {
    state: () => ({ user: {} as User }),
    getters: {
        getUser: (state): User => {
            return state.user;
        },
        getToken: (): string | null => {
            return localStorage.getItem("token") || null
        },
    },
    actions: {
        setCurrentUser() {
            this.$state.user = JSON.parse(localStorage.getItem('user'))?.user 
        },
        loadUser(user: User) {
            localStorage.setItem('user', JSON.stringify(user))
            this.$state.user = user
        },
        clearUser() {
            this.$state.user = {}
        }
    }
})
