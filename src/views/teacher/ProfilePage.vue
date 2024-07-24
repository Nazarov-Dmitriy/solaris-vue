<template>
    <div class="cabinet-container">
        <CabinetHeader />
        <CabinetProfile />
        <CabinetFooter />
        Кабинет учителя профиль sss
    </div>
</template>

<script setup>
import CabinetFooter from '@/components/cabinetTeacher/profile/CabinetFooter.vue';
import CabinetHeader from '@/components/cabinetStudent/CabinetHeader.vue';
import CabinetProfile from '@/components/cabinetStudent/CabinetProfile.vue';
</script>
