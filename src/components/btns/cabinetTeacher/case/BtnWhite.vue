<template>
    <button class="btn-white" @click="submitEmit">
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
    padding: 16px 16px 16px 44px;
    box-sizing: border-box;
    cursor: pointer;
    background-image: url('../../../../../public/cabinteTeacher/case/portfolio-button-svg.svg');
    background-repeat: no-repeat;
    background-position: 5%;
}
.btn-white__text {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #dda06b;
    cursor: pointer;
}
</style>
