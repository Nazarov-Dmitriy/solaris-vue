<template>
    <CabinetHeader />
    <section class="propose-contest">
        <div class="propose-contest__container">
            <h3 class="propose-contest__title h3">Предложить конкурс</h3>
            <p class="p1">Опишите предлагаемый вами конкурс во всех полях.</p>
            <form action="#" class="propose-contest__form">
                <div class="propose-contest__form-text-inputs">
                    <div class="propose-contest__form-input-group">
                        <label for="#" class="propose-contest__form-label">Название</label>
                        <InputText
                            class="propose-contest__form-input"
                            placeholder="Опишите цель предлагаемого конкурса"
                        />
                    </div>
                    <div
                        class="propose-contest__form-dropdown-group propose-contest__form-dropdown-group--mobile"
                    >
                        <label for="#" class="propose-contest__form-label"
                            >Добавьте роль участника в конкурсе</label
                        >
                        <div class="dropdown-wrapper">
                            <DropdownComponent
                                class="propose-contest__form-dropdown"
                                :options="role"
                                additionalClass="custom-dropdown-selected"
                            />
                            <button class="dropdown-btn">
                                <img
                                    src="/public/cabinteTeacher/case/portfolio-button-svg.svg"
                                    alt="Выбрать предмет"
                                />
                            </button>
                        </div>
                    </div>

                    <div class="propose-contest__form-input-group">
                        <label for="#" class="propose-contest__form-label">Описание</label>
                        <InputTextarea
                            class="propose-contest__form-textarea"
                            placeholder="Перечислите основные задачи конкурса"
                        />
                    </div>
                </div>
                <div class="propose-contest__form-add-file">
                    <div
                        v-for="(dropdown, index) in dropdowns"
                        :key="index"
                        class="propose-contest__form-dropdown-group"
                    >
                        <label for="#" class="propose-contest__form-label"
                            >Добавьте роль участника в конкурсе</label
                        >
                        <div class="dropdown-wrapper">
                            <DropdownComponent
                                :options="role"
                                class="propose-contest__form-dropdown"
                                additionalClass="custom-dropdown-selected"
                            />
                            <button @click="addDropdown" class="dropdown-btn">
                                <img
                                    src="/public/cabinteTeacher/case/portfolio-button-svg.svg"
                                    alt="Выбрать предмет"
                                />
                            </button>
                        </div>
                    </div>
                    <div v-if="showFile" class="flex justify-end gap-4">
                        <div
                            v-for="(file, index) in selectedFiles"
                            :key="index"
                            class="propose-contest__file-img-wrapper"
                        >
                            <img
                                @click="deleteFile"
                                class="propose-contest__file-img-close"
                                src="/public/cabinteTeacher/propose/close.png"
                                alt="file img"
                            />
                            <img
                                class="propose-contest__file-img"
                                src="/public/cabinteTeacher/propose/file.svg"
                                alt="file img"
                            />
                        </div>
                    </div>
                    <div class="propose-contest__form-btn-wrapper">
                        <div class="propose-contest__form-btn">
                            <BtnWhite
                                emit-name="form-submit"
                                @form-submit="addFile"
                                class="propose-contest__form-btn"
                                >Добавить файл</BtnWhite
                            >
                            <input
                                ref="fileInput"
                                type="file"
                                @change="handleFileChange"
                                class="propose-contest__file-input"
                            />
                        </div>
                        <BtnComponent class="propose-contest__form-btn"
                            >Отправить на согласование</BtnComponent
                        >
                        <div class="propose-contest__form-btn-info">
                            <p class="propose-contest__form-btn-info-text">
                                Нажимая “Отправить на согласование” вы соглашаетесь с
                                <a href="#">условиями</a>
                            </p>
                            <p class="propose-contest__form-btn-info-text">
                                Когда модератор согласует ваше предложение, вы получити уведомление
                                о результате
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

import BtnComponent from '@/components/btns/BtnComponent.vue'
import BtnWhite from '@/components/btns/cabinetTeacher/case/BtnWhite.vue'
import InputText from '@/components/cabinetTeacher/case/form/InputText.vue'
import InputTextarea from '@/components/cabinetTeacher/case/form/InputTextarea.vue'
import DropdownComponent from '@/components/dropdown/DropdownComponent.vue'
import CabinetHeader from '@/components/cabinetStudent/CabinetHeader.vue'

const role = ref(['-', 'Ученик', 'Учитель'])

const fileInput = ref(null)
const showFile = ref(false)
const selectedFiles = ref([])

const dropdowns = ref([1])

function addDropdown() {
    if (dropdowns.value.length >= 3) {
        return
    }
    dropdowns.value.push(1)
    console.log(dropdowns.value)
}

function addFile() {
    fileInput.value.click()
}

function handleFileChange(event) {
    const files = event.target.files
    for (let i = 0; i < files.length; i++) {
        selectedFiles.value.push(files[i])
    }
    showFile.value = selectedFiles.value.length > 0
}

function deleteFile(index) {
    selectedFiles.value.splice(index, 1)
    showFile.value = selectedFiles.value.length > 0
}
</script>

<style lang="scss" scoped>
.propose-contest {
    padding: 24px 240px;
    @media (max-width: $xxl) {
        padding: 24px 40px;
    }
    @media (max-width: $lg) {
        padding: 24px 40px;
    }
    @media (max-width: $sm) {
        padding: 24px 16px;
    }
}
.propose-contest__container {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.propose-contest__title {
    color: var(--dark);
    padding-bottom: 16px;
    border-bottom: 2px solid var(--roseBege);
    @media (max-width: $sm) {
        text-align: center;
    }
}
.propose-contest__form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    gap: 16px;
    @media (max-width: $lg) {
        grid-template-columns: 1fr;
    }
}
.propose-contest__form-text-inputs {
    display: flex;
    flex-direction: column;
    gap: 24px;
}
.propose-contest__form-input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.propose-contest__form-label {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: var(--dark);
}
.propose-contest__form-dropdown-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    @media (max-width: $lg) {
        display: none;
    }
    &--mobile {
        display: none;

        @media (max-width: $lg) {
            display: flex;
        }
    }
}
.dropdown-wrapper {
    display: flex;
}
.dropdown-btn {
    border: 2px solid var(--roseBege);
    padding: 16px;
    box-sizing: border-box;
    width: 52px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
}
.propose-contest__form-dropdown {
    max-width: 100%;
    width: 100%;
    height: 52px;
}
.custom-dropdown-selected {
    max-width: 100%;
}
.propose-contest__form-add-file {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: $lg) {
        align-items: start;
    }
}
.propose-contest__form-btn-wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: flex-end;
    align-items: end;
    @media (max-width: $lg) {
        align-items: start;
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
    }
    @media (max-width: $sm) {
        display: flex;
        flex-direction: column;
    }
}

.propose-contest__form-btn-info {
    text-align: end;
    max-width: 400px;
    width: 100%;
    @media (max-width: $lg) {
        text-align: start;
        grid-column: span 2;
        max-width: 100%;
    }
}

.propose-contest__file-img-wrapper {
    border: 2px solid #1f2a3e;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 32px;
    margin-top: 32px;
}

.propose-contest__file-img-close {
    position: absolute;
    top: 9px;
    right: 9px;
    cursor: pointer;
}

.propose-contest__form-btn-info-text {
    text-align: right;
    @media (max-width: $lg) {
        text-align: left;
    }
}
.propose-contest__form-btn {
    @media (max-width: $lg) {
        width: 100%;
        height: 100%;
        text-align: center;
        display: block;
    }
}

.propose-contest__file-input {
    display: none;
}
</style>
