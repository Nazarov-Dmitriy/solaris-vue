<template>
    <button
        :class="buttonlabel.className"
        @click="clickEvent()"
    >
        {{ buttonlabel.label }}
    </button>
</template>

<script lang="ts" setup>
import { ModelRef } from 'vue';
import { Button } from './button-interface';
const emit = defineEmits(['onSubmit']);
const buttonlabel : ModelRef<Button> = defineModel<Button>("config", {required: true})

function clickEvent(){
    emit("onSubmit")
}
</script>

<style lang="scss"></style>