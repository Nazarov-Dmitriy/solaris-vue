<template>
    <div class="cabinet-container">
        <CabinetHeader />
        <CabinetProfile />
        <CabinetFooter />
    </div>
</template>

<script setup>
import CabinetFooter from '@/components/cabinetTeacher/profile/CabinetFooter.vue';
import CabinetProfile from '@/components/cabinetTeacher/profile/ProfileComponent.vue';
import CabinetHeader from './header/CabinetHeader.vue';
</script>


