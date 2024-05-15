<template>
    <div class="cabinet-container">
        <CabinetHeader />
        <CabinetShopBalance />
        <CabinetShop />
    </div>
</template>

<script setup>

import CabinetHeader from '../components/cabinetStudent/CabinetHeader.vue'
import CabinetShopBalance from '../components/cabinetStudent/shop/CabinetShopBalance.vue'
import CabinetShop from '../components/cabinetStudent/shop/CabinetShop.vue'
</script>

<style>
.cabinet-container{
    min-height: 100vh;
    background-color: var(--dark);
}
</style>