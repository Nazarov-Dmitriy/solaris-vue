<template>
    <div class="cabinet-container">
        <CabinetHeader />
        <CabinetShop />
        <CabinetFooter />
    </div>
</template>

<script setup>

import CabinetHeader from '../components/cabinet/CabinetHeader.vue'
import CabinetFooter from '../components/cabinet/CabinetFooter.vue'
import CabinetShop from '../components/cabinet/CabinetShop.vue'
</script>

<style>
.cabinet-container{
    min-height: 100vh;
    background-color: var(--dark);
}
</style>