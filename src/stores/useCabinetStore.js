import { defineStore } from 'pinia'
import axiosR from '@/api/http'

export const useCabinetStore = defineStore('authStore', {
    state: () => ({
        studentData: null,
        teacherData: [],
        user: [],
        token: localStorage.getItem('token')
    }),
    getters: {
        getStudentData(state) {
            return state.studentData
        },
        getTeacherData(state) {
            return state.teacherData
        },
        getUser(state) {
            return state.user
        }
    },
    actions: {
        async fetchStudentData() {
            try {
                const res = await axiosR.get('/pupil/get_current_pupil', {
                    headers: {
                        Authorization: this.token
                    }
                })
                this.studentData = res.data
            } catch (error) {
                console.error('Ошибка при получении данных студента:', error)
            }
        },
        async fetchTeacherData() {
            try {
                const res = await axiosR.get('/teacher/get_current_teacher', {
                    headers: {
                        Authorization: this.token
                    }
                })
                this.teacherData = res.data
            } catch (error) {
                console.error('Ошибка при получении данных учителя:', error)
            }
        },
        async fetchUser() {
            try {
                const res = await axiosR.get('/user/current_user', {
                    headers: {
                        Authorization: this.token
                    }
                })
                this.user = res.data
            } catch (error) {
                console.error('Ошибка:', error.response?.data || error.message)
            }
        }
    }
})
