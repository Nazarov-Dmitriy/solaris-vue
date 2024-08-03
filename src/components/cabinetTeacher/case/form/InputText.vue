<template>
    <div class="input-wrapper">
        <div class="input-container" @click="focusInput">
            <input
                type="text"
                ref="input"
                class="form-input"
                v-model="inputValue"
                @focus="hidePlaceholder"
                @blur="showPlaceholder"
            />
            <div v-if="showCustomPlaceholder && !inputValue" class="custom-placeholder">
                <slot name="placeholder"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const inputValue = ref('')
const showCustomPlaceholder = ref(true)

const focusInput = () => {
    showCustomPlaceholder.value = false
    $refs.input.focus()
}

const hidePlaceholder = () => {
    showCustomPlaceholder.value = false
}

const showPlaceholder = () => {
    if (!inputValue.value) {
        showCustomPlaceholder.value = true
    }
}
</script>

<style lang="scss" scoped>
.input-wrapper {
    width: 100%;
    display: flex;
}

.input-container {
    position: relative;
    width: 100%;
}

.form-input {
    border: 2px solid #dda06b;
    padding: 14px 16px;
    box-sizing: border-box;
    height: 52px;
    background-color: #fff;
    width: 100%;
    cursor: text;
}

.custom-placeholder {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    pointer-events: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #dda06b;
}
</style>
