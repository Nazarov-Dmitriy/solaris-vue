<template>
    <div class="textarea-wrapper">
        <textarea name="#" class="textarea" :placeholder="props.placeholder"></textarea>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    placeholder: {
        type: String,
        default: null
    }
})
</script>

<style scoped lang="scss">
.textarea {
    font-family: 'Inter';
    border: 2px solid var(--roseBege);
    padding: 16px;
    box-sizing: border-box;
    width: 100%;
    height: 388px;
    background-color: #fff;
    resize: none;
    color: #dda06b;
    outline: none;
    font-size: 16px;

    &::placeholder {
        color: #dda06b;
        font-size: 16px;
    }
}
</style>
