import axiosR from '@/api/http'
import { UserMessage, UserMessagesResponse } from '@/interfaces/users'
import { defineStore } from 'pinia'

const POLLING_INTERVAL_MS = 30000

export const useNotificationStore = defineStore('notificationStore', {
    state: () => ({
        messages: [] as UserMessage[],
        isLoading: false,
        error: '',
        pollingId: null as ReturnType<typeof setInterval> | null,
    }),
    getters: {
        messagesCount: (state) => state.messages.length,
    },
    actions: {
        async fetchMessages() {
            this.isLoading = true
            this.error = ''

            try {
                const response = await axiosR.get<UserMessagesResponse>('/user/messages')
                this.messages = Array.isArray(response.data?.data) ? response.data.data : []
            } catch (error) {
                console.error('Notification loading error', error)
                this.error = 'Не удалось загрузить уведомления'
                this.messages = []
            } finally {
                this.isLoading = false
            }
        },
        startPolling() {
            if (this.pollingId) return

            this.fetchMessages()
            this.pollingId = setInterval(() => {
                this.fetchMessages()
            }, POLLING_INTERVAL_MS)
        },
        stopPolling() {
            if (!this.pollingId) return

            clearInterval(this.pollingId)
            this.pollingId = null
        },
    },
})
