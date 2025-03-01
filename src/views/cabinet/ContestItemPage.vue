<template>
    <template v-if="user === 'teacher'">
        <TeacherHeader />
        <TeacherContests :contests="contests" />
    </template>
    <template v-else>
        <StudentHeader />
        <StudentContest :contests="contests" />
    </template>
</template>

<script setup>
import StudentHeader from '@/components/cabinet/header/StudentHeader.vue';
import TeacherHeader from '@/components/cabinet/header/TeacherHeader.vue';
import StudentContest from '@/components/cabinet/contests/student/StudentContest.vue';
import TeacherContests from '@/components/cabinet/contests/teacher/TeacherContests.vue';
import { getById } from '@/db/db'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const user = ref('')
const route = useRoute();
const id = ref();
const contests = ref()

onMounted(() => {
    if (route.path.includes("teacher")) {
        user.value = "teacher"
    } else {
        user.value = "student"
    }

    id.value = route.params.id
    contests.value = getById(+id.value)[0];
    
})
</script>
