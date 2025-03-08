import { defineStore } from 'pinia'
import { Student } from '@/interfaces/users'

export const usePipulStore = defineStore('pipulStore', {
    state: () => ({ user: {} as Student }),
    getters: {
        getUser: (state): Student => {
            return state.user;
        },
    },
    actions: {
        setUser(user: Student) {
            this.$state.user = user
        },
        clearUser() {
            this.$state.user = {}
        }
    }
})
