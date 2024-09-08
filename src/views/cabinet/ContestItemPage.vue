<template>
    <template v-if="user === 'teacher'">
        <TeacherHeader />
    </template>
    <template v-else>
        <StudentHeader />
    </template>
    <ContestComponent
        :contests="contests"
        :user="user"
    />
</template>

<script setup>
import StudentHeader from '@/components/cabinet/header/StudentHeader.vue';
import TeacherHeader from '@/components/cabinet/header/TeacherHeader.vue';
import ContestComponent from '@/components/cabinet/contests/ContestItem.vue'
import { getAll } from '@/db/db'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const user = ref('')
const route = useRoute();
const contests = getAll()

onMounted(() => {
    if (route.path.includes("teacher")) {
        user.value = "teacher"
    } else {
        user.value = "student"
    }
})
</script>
