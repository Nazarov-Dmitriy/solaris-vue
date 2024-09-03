<template>
    <CabinetHeader />
    <Contest :contests="contests" />
</template>

<script setup>
import CabinetHeader from '@/components/cabinetStudent/CabinetHeader.vue'
import Contest from '@/components/cabinetTeacher/contests/Contest.vue'
import { getAll } from '@/db/db'

const contests = getAll()
</script>
