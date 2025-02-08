import { defineStore } from 'pinia'
import { User } from '@/interfaces/users'

export const useAuthStore = defineStore('userStore', {
    state: () => ({ user: {}}),
    getters: {
        getUser: (state) => {
            return state;
        }
    },
    actions: {
        loadUser (user){
            this.$state.user = user
        },
        clearUser(){

        }
    }
})
