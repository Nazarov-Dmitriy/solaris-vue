import { defineStore } from 'pinia'
import { Teacher } from '@/interfaces/users'

export const useTeacherStore = defineStore('teacherStore', {
    state: () => ({ user: {} as Teacher }),
    getters: {
        getUser: (state): Teacher => {
            return state.user;
        },
    },
    actions: {
        setUser(user: Teacher) {
            this.$state.user = user
        },
        clearUser() {
            this.$state.user = {}
        }
    }
})
