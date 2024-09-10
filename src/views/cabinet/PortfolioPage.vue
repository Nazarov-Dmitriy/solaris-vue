<template>
    <div class="cabinet-container">
        <template v-if="user === 'teacher'">
            <TeacherHeader />
            <TeacherPortfolio />
        </template>
        <template v-else>
            <StudentHeader />
            <StudentPortfolio />
        </template>
    </div>
</template>

<script setup>
import StudentHeader from '@/components/cabinet/header/StudentHeader.vue'
import TeacherHeader from '@/components/cabinet/header/TeacherHeader.vue'
import StudentPortfolio from '@/components/cabinet/portfolio/StudentPortfolio.vue'
import TeacherPortfolio from '@/components/cabinet/portfolio/TeacherPortfolio.vue'

import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const user = ref('')
const route = useRoute()

onMounted(() => {
    if (route.path.includes('teacher')) {
        user.value = 'teacher'
    } else {
        user.value = 'student'
    }
})
</script>

<style lang="scss" scoped>
.cabinet-container :deep(.dropdown-icon) {
    padding: 0;
}

.cabinet-container :deep(.dropdown-selected) {
    gap: 8px;
}

</style>
