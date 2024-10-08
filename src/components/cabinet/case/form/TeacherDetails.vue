<template>
    <div class="add-portfolio__data">
        <div v-for="(item, index) in data" :key="index" class="flex flex-col gap-4">
            <div class="add-portfolio__data-text-wrapper">
                <span />
                <p class="add-portfolio__data-text">Ваши данные</p>
                <span />
            </div>
            <h2 class="add-portfolio__data-title">
                {{ item.dataTitle }} <span>{{ item.dataTitleSpan }}</span>
            </h2>
        </div>
        <form action="#" class="add-portfolio__form" @submit.prevent>
            <label class="add-portfolio__form-label">
                <span>Предмет</span>
            </label>
            <div v-for="(fieldGroup, index) in fieldsGroup" :key="index" class="input-group">
                <DropdownComponent
                    class="add-portfolio__form-input"
                    :additional-class="'custom-dropdown-selected'"
                    :options="subjects"
                />
                <button type="button" class="add-portfolio__form-btn" @click="addFieldsGroup">
                    <img
                        :src="getPath('cabinteTeacher/case/portfolio-button-svg.svg')"
                        alt="Выбрать предмет"
                    />
                </button>
            </div>
            <div class="options-group">
                <label class="add-portfolio__form-label">
                    <div
                        class="add-portfolio__data-text-wrapper add-portfolio__data-text-wrapper--center"
                    >
                        <span />
                        <p class="add-portfolio__data-text add-portfolio__data-text--center">
                            Критерий оценки
                        </p>
                        <span />
                    </div>
                </label>
                <DropdownComponent
                    class="add-portfolio__form-input"
                    :additional-class="'custom-dropdown-selected'"
                    :options="options"
                    @update:model-value="updateSelectedOption"
                />
            </div>
            <button class="add-portfolio__form-btn" @click="handleSubmit()">Перейти</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import DropdownComponent from '@/components/dropdown/DropdownComponent.vue'

const data = ref([
    {
        dataTitle: 'Иванова',
        dataTitleSpan: 'Мария Ивановна'
    }
])

const selectedOption = ref('')
const fieldsGroup = ref([1])

function addFieldsGroup() {
    if (fieldsGroup.value.length >= subjects.length - 1) {
        return
    } else {
        fieldsGroup.value.push(1)
    }
}

const options = ref([
    '-',
    'Достижения обучающихся',
    'Достижения учителя',
    'Классное руководство',
    'Участие в ТОП-конкурсе',
    'Качество деятельности учителя',
    'Аттестация'
])

const subjects = ['-', 'Математика', 'Физика', 'Химия']

const emit = defineEmits(['optionSelected'])

function updateSelectedOption(option) {
    selectedOption.value = option
}

function handleSubmit() {
    emit('optionSelected', selectedOption.value)
}

function getPath(img) {
    return new URL(`../../../../../public/${img}`, import.meta.url).href
}
</script>

<style lang="scss">
.add-portfolio__data {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 48px 16px 0px 16px;
    box-sizing: border-box;
    background: #1f2a3e;
    color: #dda06b;
    max-width: 429px;
    width: 100%;
    min-width: 354px;
    @media (max-width: $lg) {
        max-width: 100%;
        padding: 24px 16px;
        height: auto;
        min-width: auto;
        min-height: auto;
    }
}

.add-portfolio__data-text-wrapper {
    display: flex;
    align-items: center;
    gap: 16px;

    &--center {
        margin-bottom: 16px;
    }
}

.add-portfolio__data-text {
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    flex-shrink: 0;

    &--center {
        text-align: center;
    }
}

.add-portfolio__data-text-wrapper span {
    width: 100%;
    height: 0px;
    border: 1px solid;
    max-width: 50%;
}

.add-portfolio__data-title {
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    text-align: center;

    span {
        display: block;
        text-align: center;
    }
}
.add-portfolio__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
}
.add-portfolio__form-label {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    width: 100%;

    span {
        margin-bottom: 8px;
    }

    @media (max-width: $lg) {
        display: flex;
        flex-direction: column;
    }
}

.input-group {
    display: flex;
    align-items: center;
    width: 100%;
}

.custom-dropdown-selected {
    max-width: 100% !important;
    width: 100%;
    background: url('/cabinteTeacher/case/input-option-svg.svg') no-repeat right center !important;
}

.custom-dropdown-selected-text {
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.add-portfolio__form-label-span {
    text-align: center;
    margin-bottom: 16px;
}

.add-portfolio__input-group {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.add-portfolio__form-input {
    max-width: 100% !important;
    width: 100%;
}

.options-group {
    width: 100%;
    position: relative;
}

.add-portfolio__form-btn {
    border: 2px solid #dda06b;
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #dda06b;
    width: max-content;
    background-color: #1f2a3e;
    height: 56px;
    cursor: pointer;
}
</style>
