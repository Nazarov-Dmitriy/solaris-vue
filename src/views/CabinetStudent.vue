<template>
    <div class="cabinet-container">
        <CabinetHeader />
        <CabinetProfile />
        <CabinetFooter />
    </div>
</template>

<script setup>

import CabinetHeader from '../components/cabinetStudent/CabinetHeader.vue'
import CabinetFooter from '../components/cabinetStudent/CabinetFooter.vue'
import CabinetProfile from '../components/cabinetStudent/CabinetProfile.vue'
</script>

<style>
.cabinet-container{
    min-height: 100vh;
    background-color: var(--dark);
    display: flex;
    flex-direction: column;
}
</style>