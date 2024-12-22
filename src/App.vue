<script setup>
import { RouterView } from 'vue-router'
import { useAuthStore } from './stores/useAuthStore';
import { useRouter, useRoute } from 'vue-router'
import { computed, watch } from 'vue';
const router = useRouter()
const route = useRoute()

const userStore = useAuthStore()
userStore.autoLogin()

const user = computed(() => {
    return userStore.getUser
})

watch(user, () => {
    if (route.name === 'home' && user.value && user.value) {
        if (user.value.category === 'Учитель') {
            router.push('/cabinet/teacher')
        } else if (user.value.category === 'Ученик') {
            router.push('/cabinet/student')
        }
    }
})
</script>

<template>
    <RouterView />
</template>

<style></style>
