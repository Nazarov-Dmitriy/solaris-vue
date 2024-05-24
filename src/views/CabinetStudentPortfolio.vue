<template>
    <div class="cabinet-container">
        <CabinetHeader />
        <CabinetPortfolio />
    </div>
</template>

<script setup>

import CabinetHeader from '../components/cabinetStudent/CabinetHeader.vue'
import CabinetPortfolio from '../components/cabinetStudent/CabinetPortfolio.vue'
</script>

<style>
.cabinet-container{
    min-height: 100vh;
    background-color: var(--dark);
}
</style>