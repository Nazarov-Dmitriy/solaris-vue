<template>
    <button class="btn-white" @click="submitEmit">
        <slot name="img" />
        <span class="btn-white__text">
            <slot />
        </span>
    </button>
</template>

<script setup>
const props = defineProps({
    emitName: {
        type: String,
        default: null
    }
})
const emit = defineEmits(['form-submit', 'offer'])

function submitEmit() {
    emit(props.emitName)
}
</script>

<style lang="scss">
.btn-white {
    border: 2px solid #dda06b;
    padding: 16px;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: #fff;
}
.btn-white__text {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #dda06b;
    cursor: pointer;
}
</style>
