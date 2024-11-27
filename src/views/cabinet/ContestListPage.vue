<template>
    <div class="page">
        <template v-if="user === 'teacher'">
            <TeacherHeader />
        </template>
        <template v-else>
            <StudentHeader />
        </template>
        <ContestsList :contests="contests" :user="user" />
    </div>
</template>

<script setup>
import ContestsList from '@/components/cabinet/contests/ContestsList.vue'
import StudentHeader from '@/components/cabinet/header/StudentHeader.vue'
import TeacherHeader from '@/components/cabinet/header/TeacherHeader.vue'
import { useCompetitionsStore } from '@/stores/useCompetitions'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const user = ref('')
const contests = ref()

const route = useRoute()
const useCompetitions = useCompetitionsStore()

onMounted(async () => {
    if (route.path.includes('teacher')) {
        user.value = 'teacher'
    } else {
        user.value = 'student'
    }

    try {
        await useCompetitions.fetchCompetitions()
        contests.value = useCompetitions.competitions
    } catch (error) {
        console.error('Ошибка при получении данных', error)
    }
})
</script>
