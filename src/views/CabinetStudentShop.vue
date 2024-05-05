<template>
    <div class="cabinet-container">
        <CabinetHeader />
        <CabinetShopBalance />
        <CabinetShop />
    </div>
</template>

<script setup>

import CabinetHeader from '../components/cabinet/CabinetHeader.vue'
import CabinetShopBalance from '../components/cabinet/CabinetShopBalance.vue'
import CabinetShop from '../components/cabinet/CabinetShop.vue'
</script>

<style>
.cabinet-container{
    min-height: 100vh;
    background-color: var(--dark);
}
</style>