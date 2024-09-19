<template>
    <div class="cabinet-container">
        <template v-if="user === 'teacher'">
            <TeacherHeader />
        </template>
        <template v-else>
            <StudentHeader />
        </template>
        <Notification />
    </div>
</template>

<script setup>
import StudentHeader from '@/components/cabinet/header/StudentHeader.vue';
import TeacherHeader from '@/components/cabinet/header/TeacherHeader.vue';
import Notification from '@/components/cabinet/notification/CabinetNotification.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const user= ref('')
const route = useRoute();


onMounted(()=>{
    if(route.path.includes("teacher")){
        user.value = "teacher"
    }else{
        user.value = "student"
    }
})
</script>
