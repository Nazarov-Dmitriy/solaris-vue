<template>
    <div class="textarea-wrapper">
        <textarea name="#" class="textarea" :placeholder="props.placeholder" v-model="model"></textarea>
    </div>
</template>

<script setup>
const props = defineProps({
    placeholder: {
        type: String,
        default: null
    }
})

const model = defineModel({ default: '' })
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
