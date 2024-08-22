<template>
    <button
        class="btn-orange"
        @click="submitEmit"
    >
        <span class="btn-orange__text">
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

const emit = defineEmits(['form-submit', 'offer', 'action'])

function submitEmit () {
    emit(props.emitName)
}
</script>

<style lang="scss">
.btn-orange {
    border: 2px solid var(--white);
    padding: 16px;
    background: var(--orange);
    cursor: pointer;
}
.btn-orange__text {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5%;
    color: var(--white);
}

.btn-orange:hover {
  border: 2px solid var(--roseBege);
  background: var(--roseBege);
  color: var(--bage);
}

.btn-orange:active {
  border: 2px solid var(--dark);
  background: var(--roseBege);
  color: var(--dark);
}
</style>
