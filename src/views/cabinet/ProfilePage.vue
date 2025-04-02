<template>
    <div class="cabinet-container">
        <template v-if="user.category === 'teacher'">
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
import TeacherFooter from '@/components/cabinet/footer/TeacherFooter.vue'
import TeacherHeader from '@/components/cabinet/header/TeacherHeader.vue'
import TeacherProfile from '@/components/cabinet/profile/TeacherProfile.vue'
import StudentHeader from '@/components/cabinet/header/StudentHeader.vue'
import StudentProfile from '@/components/cabinet/profile/StudentProfile.vue'
import StudentFooter from '@/components/cabinet/footer/StudentFooter.vue'
import { computed, onMounted } from 'vue'
import { useCabinetStore } from '@/stores/useCabinetStore'

const user = computed(() => {
    return cabinetStore.getUser
})

const cabinetStore = useCabinetStore()

onMounted(async () => {
    cabinetStore.fetchUser()
})
</script>
