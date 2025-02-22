<template>
    <button :class="buttonlabel.className" @click="clickEvent()">
        {{ buttonlabel.label }}
    </button>
</template>

<script lang="ts" setup>
import { ModelRef } from 'vue';
import { Button } from './button-interface';
const emit = defineEmits(['onClick']);
const buttonlabel: ModelRef<Button> = defineModel<Button>('config', {
    required: true,
});

function clickEvent() {
    emit('onClick');
}
</script>

<style lang="scss"></style>
