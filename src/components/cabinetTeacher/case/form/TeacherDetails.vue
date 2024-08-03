<template>
    <div class="add-portfolio__data">
        <div class="add-portfolio__data-text-wrapper">
            <span></span>
            <p class="add-portfolio__data-text">Ваши данные</p>
            <span></span>
        </div>
        <h2 class="add-portfolio__data-title">Иванова <span>Мария Ивановна</span></h2>
        <form action="#" class="add-portfolio__form">
            <div class="options-group">
                <label class="add-portfolio__form-label">
                    <span>Предмет</span>
                </label>
                <InputOption class="add-portfolio__form-input" @click="toggleDropdown('subject')">
                    <template #text>
                        <p class="add-portfolio__form-input-text">
                            {{ selectedSubject || 'Предмет который преподаете' }}
                        </p>
                    </template>
                    <template #button>
                        <button
                            type="button"
                            class="add-portfolio__form-btn"
                            @click="toggleDropdown('subject')"
                        >
                            <img
                                :src="getPath('cabinteTeacher/case/portfolio-button-svg.svg')"
                                alt="Выбрать предмет"
                            />
                        </button>
                    </template>
                </InputOption>
                <div v-if="isDropdownOpen.subject" class="option-wrapper">
                    <div
                        class="option"
                        v-for="subject in subjects"
                        :key="subject"
                        @click="selectOption(subject, 'subject')"
                    >
                        {{ subject }}
                    </div>
                </div>
            </div>

            <div class="options-group">
                <label class="add-portfolio__form-label">
                    <div
                        class="add-portfolio__data-text-wrapper add-portfolio__data-text-wrapper--center"
                    >
                        <span></span>
                        <p class="add-portfolio__data-text add-portfolio__data-text--center">
                            Критерий оценки
                        </p>
                        <span></span>
                    </div>
                </label>
                <InputOption class="add-portfolio__form-input" @click="toggleDropdown('criteria')">
                    <template #text>
                        <p class="add-portfolio__form-input-text">
                            {{ selectedCriteria || 'Выберите критерий' }}
                        </p>
                    </template>
                </InputOption>
                <div v-if="isDropdownOpen.criteria" class="option-wrapper">
                    <div
                        class="option"
                        v-for="option in options"
                        :key="option"
                        @click="selectOption(option, 'criteria')"
                    >
                        {{ option }}
                    </div>
                </div>
            </div>

            <button class="add-portfolio__form-btn">Перейти</button>
        </form>
    </div>
</template>

<script setup>
import { inject } from 'vue'
import InputOption from './inputOption.vue'

const options = inject('options')
const subjects = inject('subjects')
const isDropdownOpen = inject('isDropdownOpen')
const selectedSubject = inject('selectedSubject')
const selectedCriteria = inject('selectedCriteria')
const toggleDropdown = inject('toggleDropdown')
const selectSubject = inject('selectSubject')
const selectCriteria = inject('selectCriteria')

function getPath(img) {
    return new URL(`../../../../../public/${img}`, import.meta.url).href
}

function selectOption(option, type) {
    if (type === 'subject') {
        selectSubject(option)
    } else if (type === 'criteria') {
        selectCriteria(option)
    }
}
</script>

<style scoped lang="scss">
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
    min-height: 100vh;

    @media (max-width: $md) {
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
}

.add-portfolio__form-input-text {
    width: max-content;
}

.options-group {
    width: 100%;
    position: relative;
}

.option-wrapper {
    background-color: white;
    position: absolute;
    width: 100%;
    z-index: 5;
}
.option {
    border: 1px solid #dda06b;
    padding: 8px 16px;
    box-sizing: border-box;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #1f2a3e;
    cursor: pointer;
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
    height: 52px;
    cursor: pointer;
}
</style>
