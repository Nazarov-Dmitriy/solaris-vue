<template>
    <div class="cabinet-container">
        <CabinetHeader />
        <CabinetShopSales />
    </div>
</template>

<script setup>

import CabinetHeader from '../components/cabinetStudent/CabinetHeader.vue'
import CabinetShopSales from '../components/cabinetStudent/shop/CabinetShopSales.vue'
</script>

<style>
.cabinet-container {
    min-height: 100vh;
    background-color: var(--dark);
}
</style>