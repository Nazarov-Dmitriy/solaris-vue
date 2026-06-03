<template>
    <div class="input-wrapper">
        <div
            class="input-container"
            @click="focusInput"
        >
            <input
                ref="input"
                v-model="model"
                type="text"
                class="form-input"
                :placeholder="props.placeholder"
                @focus="hidePlaceholder"
                @blur="validateDate"
                @input="formatDate"
            >
            <div
                v-if="showCustomPlaceholder && !model"
                class="custom-placeholder"
            >
                <slot name="placeholder" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    placeholder: {
        type: String,
        default: '__/__/____'
    }
})

const model = defineModel({ default: '' })
const showCustomPlaceholder = ref(true)
const dateError = ref('')

function hidePlaceholder () {
    showCustomPlaceholder.value = false
}

const formatDate = (e) => {
    const input = e.target.value.replace(/\D/g, '')
    let formattedDate = ''

    if (input.length <= 2) {
        formattedDate = input
    } else if (input.length <= 4) {
        formattedDate = `${input.slice(0, 2)}/${input.slice(2)}`
    } else {
        formattedDate = `${input.slice(0, 2)}/${input.slice(2, 4)}/${input.slice(4, 8)}`
    }

    model.value = formattedDate
}

const validateDate = () => {
    const datePattern = /^\d{2}\/\d{2}\/\d{4}$/
    if (!datePattern.test(model.value)) {
        dateError.value = 'Введите дату в формате ДД/ММ/ГГГГ'
    } else {
        dateError.value = ''
    }
    if (!model.value) showCustomPlaceholder.value = true
}
</script>

<style lang="scss" scoped>
.input-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
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
    color: #dda06b;

    &::placeholder {
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        color: #dda06b;
    }
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
