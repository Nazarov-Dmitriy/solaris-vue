<template>
    <div class="cabinet-container">
        <template v-if="user === 'teacher'">
            <TeacherHeader />
            <TeacherProfile />
            <TeacherFooter />
        </template>
        <template v-else>
            <StudentHeader />
            <StudentProfile />
            <StudentFooter />
        </template>
    </div>
    <router-view />
</template>

<script setup>
import TeacherFooter from '@/components/cabinet/footer/TeacherFooter.vue';
import TeacherHeader from '@/components/cabinet/header/TeacherHeader.vue';
import TeacherProfile from '@/components/cabinet/profile/TeacherProfile.vue';
import StudentHeader from '@/components/cabinet/header/StudentHeader.vue';
import StudentProfile from '@/components/cabinet/profile/StudentProfile.vue';
import StudentFooter from '@/components/cabinet/footer/StudentFooter.vue';
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
