<template>
    <div class="cabinet-container">
        <CabinetHeader />
        <CabinetShopBalance />
        <CabinetShopCard />
    </div>
</template>

<script setup>

import CabinetHeader from '../components/cabinetStudent/CabinetHeader.vue'
import CabinetShopBalance from '../components/cabinetStudent/shop/CabinetShopBalance.vue'
import CabinetShopCard from '../components/cabinetStudent/shop/CabinetShopCard.vue'
</script>

<style>
.cabinet-container{
    min-height: 100vh;
    background-color: var(--dark);
}
</style>