<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { computed, inject, onMounted, watch } from 'vue';
import { useAuthStore } from './stores/useAuthStore';
import { PupilService } from './plugins/PupilService';
import { TeacherService } from './plugins/TeacherService';
const route = useRoute();
const router = useRouter();

const userStore = useAuthStore();
const pupilService: PupilService = inject('PupilService');
const teacherService: TeacherService = inject('TeacherService');

const user = computed(() => {
    return userStore.getUser;
});

console.log(111111);

onMounted(() => {
    userStore.setCurrentUser();
});

watch([user, route], () => {
    if (!user) {
        router.push({ name: 'home' });
    }

    if (user.value?.category === 'Учитель') {
        teacherService.getCurrentTeacher();
    } else if (user.value?.category === 'Ученик') {
        pupilService.getCurrentPipul();
    }

    if (route.name === 'home' && user.value) {
        if (user.value?.category === 'Учитель') {
            router.push('/cabinet/teacher');
        } else if (user.value?.category === 'Ученик') {
            router.push('/cabinet/student');
        }
    }
});
</script>

<template>

    <router-view />
</template>

<style></style>
