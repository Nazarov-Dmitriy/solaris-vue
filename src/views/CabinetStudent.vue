<template>
    <div class="cabinet-container">
        <CabinetHeader />
        <CabinetProfile />
        <CabinetFooter />
    </div>
</template>

<script setup>

import CabinetHeader from '../components/cabinet/CabinetHeader.vue'
import CabinetFooter from '../components/cabinet/CabinetFooter.vue'
import CabinetProfile from '../components/cabinet/CabinetProfile.vue'
</script>

<style>
.cabinet-container{
    min-height: 100vh;
    background-color: var(--dark);
}
</style>