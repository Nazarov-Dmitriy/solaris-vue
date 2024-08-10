<template>
    <div class="cabinet-container">
        <CabinetHeader />
        <!-- <AddPortfolio /> -->
        <!-- <AddCertification /> -->
        <!-- <ActivityQuality /> -->
        <!-- <TopCompetition /> -->
        <!-- <StudentAchievments /> --> 
        <!-- <TeacherAchievments /> -->
        <!-- <ClassroomManagement /> -->
         <CabinetTeacherViewContestWith/>
         <CabinetTeacherViewContestWithout/>
    </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import CabinetHeader from '@/components/cabinetStudent/CabinetHeader.vue'
import ActivityQuality from '@/components/cabinetTeacher/case/ActivityQuality.vue'
import AddCertification from '@/components/cabinetTeacher/case/AddCertification.vue'
import AddPortfolio from '@/components/cabinetTeacher/case/AddPortfolio.vue'
import TopCompetition from '@/components/cabinetTeacher/case/TopCompetition.vue'
import StudentAchievments from '@/components/cabinetTeacher/case/StudentAchievments.vue'
import TeacherAchievments from '@/components/cabinetTeacher/case/TeacherAchievments.vue'
import ClassroomManagement from '@/components/cabinetTeacher/case/ClassroomManagement.vue'
import CabinetTeacherViewContestWith from '@/components/cabinetTeacher/contest/CabinetTeacherViewContestWith.vue'
import CabinetTeacherViewContestWithout from '@/components/cabinetTeacher/contest/CabinetTeacherViewContestWithout.vue'

const isDropdownOpen = ref({
    criteria: false,
    subject: false
})

const selectedSubject = ref('')
const selectedCriteria = ref('')

function toggleDropdown(type) {
    isDropdownOpen.value[type] = !isDropdownOpen.value[type]
}

function selectSubject(subject) {
    selectedSubject.value = subject
    isDropdownOpen.value.subject = false
}

function selectCriteria(criteria) {
    selectedCriteria.value = criteria
    isDropdownOpen.value.criteria = false
}

const isModalVisible = ref(false)
const isSecondModalVisible = ref(false)

function sendForVerification() {
    isModalVisible.value = true
}

function showSecondModal() {
    isModalVisible.value = false
    isSecondModalVisible.value = true
}

function handleModalClose() {
    isModalVisible.value = false
}

function handleSecondModalClose() {
    isSecondModalVisible.value = false
}

provide('toggleDropdown', toggleDropdown)
provide('selectSubject', selectSubject)
provide('selectCriteria', selectCriteria)
provide('isDropdownOpen', isDropdownOpen)
provide('selectedSubject', selectedSubject)
provide('selectedCriteria', selectedCriteria)

provide('isModalVisible', isModalVisible)
provide('isSecondModalVisible', isSecondModalVisible)
provide('sendForVerification', sendForVerification)
provide('showSecondModal', showSecondModal)
provide('handleModalClose', handleModalClose)
provide('handleSecondModalClose', handleSecondModalClose)
</script>
