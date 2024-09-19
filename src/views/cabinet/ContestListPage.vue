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

import { getAll } from '@/db/db'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const user = ref('')
const route = useRoute()
const contests = getAll()

onMounted(() => {
    if (route.path.includes('teacher')) {
        user.value = 'teacher'
    } else {
        user.value = 'student'
    }
})
</script>
