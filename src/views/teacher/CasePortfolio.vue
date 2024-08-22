<template>
    <CabinetHeader />
    <div class="cabinet-container">
        <div class="cabinet-container__wrapper">
            <CaseTitle />
            <div class="cabinet-container__main">
                <TeacherDetails @option-selected="handleOptionSelected" />
                <template v-if="!selectedComponent">
                    <AddCase />
                </template>
                <component :is="selectedComponent" v-else />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import CabinetHeader from '../../components/cabinetTeacher/header/CabinetHeader.vue'
import AddCase from '@/components/cabinetTeacher/case/AddCase.vue'
import TeacherDetails from '@/components/cabinetTeacher/case/form/TeacherDetails.vue'
import CaseTitle from '@/components/cabinetTeacher/case/title/CaseTitle.vue'
import ActivityQuality from '@/components/cabinetTeacher/case/ActivityQuality.vue'
import ClassroomManagement from '@/components/cabinetTeacher/case/ClassroomManagement.vue'
import StudentAchievments from '@/components/cabinetTeacher/case/StudentAchievments.vue'
import TeacherAchievments from '@/components/cabinetTeacher/case/TeacherAchievments.vue'
import TopCompetition from '@/components/cabinetTeacher/case/TopCompetition.vue'
import AddCertification from '@/components/cabinetTeacher/case/AddCertification.vue'

const selectedOption = ref('')

const componentMap = {
    'Классное руководство': ClassroomManagement,
    'Качество деятельности учителя': ActivityQuality,
    'Достижения обучающихся': StudentAchievments,
    'Достижения учителя': TeacherAchievments,
    'Участие в ТОП-конкурсе': TopCompetition,
    Аттестация: AddCertification
}

const selectedComponent = computed(() => {
    return componentMap[selectedOption.value] || null
})

function handleOptionSelected(option) {
    selectedOption.value = option
}
</script>

<style scoped lang="scss">
.cabinet-container {
    background-color: #fff;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 25px;
    height: 100%;
    padding: 16px 60px;
    @media (max-width: $lg) {
        padding: 0;
        gap: 10px;
    }
}
.cabinet-container__wrapper {
    height: max-content;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 25px;
}

.cabinet-container__main {
    max-width: 1440px;
    min-height: 700px;
    display: flex;
    justify-content: space-between;
    gap: 32px;
    margin: 0 auto;

    @media (max-width: $lg) {
        flex-direction: column;
        gap: 24px;
    }
}
.tab-content {
    margin-top: 20px;
}

.item {
    padding: 10px;
    background-color: #f0f0f0;
    margin-bottom: 5px;
}
</style>
