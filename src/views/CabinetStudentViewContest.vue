<template>
    <div class="cabinet-container">
        <CabinetHeader />
        <CabinetStudentViewContest />
    </div>
</template>

<script setup>

import CabinetHeader from '../components/cabinetStudent/CabinetHeader.vue'
import CabinetStudentViewContest from '../components/cabinetStudent/contests/CabinetStudentViewContest.vue'
</script>

<style>
.cabinet-container {
    min-height: 100vh;
    background-color: var(--dark);
}
</style>