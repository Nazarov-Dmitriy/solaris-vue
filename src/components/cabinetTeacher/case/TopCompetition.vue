<template>
    <sections class="top-competition">
        <div class="top-competition__container">
            <AddPortfolioTitle @form-submit="sendForVerification" />
            <ModalComponent
                v-if="isModalVisible"
                @close-modal="handleModalClose"
                @show-Modal="handleModalAction"
            >
                <template #text>
                    <p class="modal__text">
                        Если вы заполнили все критерии - подтвердите отправку, или нажмите кнопку
                        отмены
                    </p>
                </template>
                <template #btn>
                    <div class="modal__btn-wrapper">
                        <button class="modal__btn modal__btn--cancel" @click="handleModalClose">
                            Отменить
                        </button>
                        <button class="modal__btn modal__btn--send" @click="showSecondModal">
                            Отправить
                        </button>
                    </div>
                </template>
            </ModalComponent>
            <div class="top-competition__wrapper">
                <TeacherDetails />
                <div class="top-competition__event">
                    <div class="top-competition__nomination-header">
                        <h2 class="top-competition__nomination-header-title">
                            Участие в ТОП-конкурсе
                        </h2>
                        <span>максимум 20 баллов</span>
                    </div>
                    <div class="top-competition__nomination">
                        <div class="top-competition__nomination-text-wrapper">
                            <span></span>
                            <p class="top-competition__nomination-text">Участие в номинации</p>
                            <span></span>
                        </div>
                        <form action="#" class="top-competition__form">
                            <div class="top-competition__form-group">
                                <label for="#" class="top-competition__form-label">Номинация</label>
                                <InputText>
                                    <template #placeholder> Введите название номинации </template>
                                </InputText>
                            </div>
                            <div class="top-competition__form-group">
                                <label for="#" class="top-competition__form-label">Результат</label>
                                <InputOption class="top-competition__form-input">
                                    <template #text>
                                        <span>Выберите результат</span>
                                    </template>
                                </InputOption>
                            </div>
                        </form>
                        <p class="top-competition__form-text">
                            Баллы начислятся после проверки, возможные варианты результатов
                            проверки: Зачтено, Зачтено частично, Не зачтено
                        </p>
                        <div class="top-competition__footer">
                            <h2 class="top-competition__footer-title">Предполагаемый балл: 0</h2>
                            <BtnComponent class="top-competition__footer-btn"
                                >Сохранить</BtnComponent
                            >
                        </div>
                        <div class="top-competition__btn-wrapper">
                            <BtnWhite class="top-competition__btn">Добавить номинацию</BtnWhite>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </sections>
</template>

<script setup>
import { inject } from 'vue'

import ModalComponent from '@/components/modal/ModalComponent.vue'
import AddPortfolioTitle from './title/AddPortfolioTitle.vue'
import TeacherDetails from './form/TeacherDetails.vue'
import BtnComponent from '@/components/btns/BtnComponent.vue'
import BtnWhite from '@/components/btns/cabinetTeacher/case/BtnWhite.vue'
import InputText from './form/InputText.vue'
import InputOption from './form/inputOption.vue'

const isModalVisible = inject('isModalVisible')
const isSecondModalVisible = inject('isSecondModalVisible')
const sendForVerification = inject('sendForVerification')
const showSecondModal = inject('showSecondModal')
const handleModalClose = inject('handleModalClose')
const handleSecondModalClose = inject('handleSecondModalClose')
</script>

<style lang="scss" scoped>
.top-competition {
    background-color: #fff;
}
.top-competition__container {
    max-width: 1920px;
    margin: 0 auto;
    padding: 16px 240px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    @media (max-width: $xxl) {
        padding: 16px 60px;
    }
    @media (max-width: $md) {
        padding: 0;
        gap: 10px;
    }
}

.top-competition__wrapper {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    height: max-content;

    @media (max-width: $md) {
        flex-direction: column;
        gap: 24px;
    }
}
.top-competition__event {
    @media (max-width: $md) {
        padding: 24px 40px;
    }
    @media (max-width: $sm) {
        padding: 24px 16px;
    }
}

.top-competition__nomination-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    span {
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        color: #1f2a3e;
    }

    @media (max-width: $sm) {
        flex-direction: column;
        gap: 10px;
        align-items: start;
    }
}
.top-competition__nomination-header-title {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.5;
    color: #1f2a3e;
}
.top-competition__nomination {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.top-competition__nomination-text-wrapper {
    display: flex;
    align-items: center;
    gap: 16px;

    &--center {
        margin-bottom: 16px;
    }
}

.top-competition__nomination-text {
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    flex-shrink: 0;
}

.top-competition__nomination-text-wrapper span {
    width: 100%;
    height: 0px;
    border: 1px solid;
    max-width: 50%;
}

.top-competition__form {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.top-competition__form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.top-competition__form-label {
}
.top-competition__form-input {
    width: 50%;
    background-image: url('../../../../public/cabinteTeacher/case/input-option-svg.svg');
    background-repeat: no-repeat;
    background-position: calc(100% - 23px);

    span {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #dda06b;
    }
    @media (max-width: $lg) {
        width: 100%;
    }
    @media (max-width: $sm) {
        background-position: 20%;
    }
}
.top-competition__form-input--choose {
    width: 50%;
}
.top-competition__form-text {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #1f2a3e;
}
.top-competition__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;

    @media (max-width: $sm) {
        flex-direction: column;
        width: 100%;
    }
}
.top-competition__footer-title {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    color: #1f2a3e;
}

.top-competition__footer-btn {
    width: max-content;
    @media (max-width: $sm) {
        width: 100%;
        text-align: center;
    }
}
.top-competition__btn-wrapper {
    display: flex;
    justify-content: center;
}

.top-competition__btn {
    @media (max-width: $sm) {
        width: 100%;
        text-align: center;
    }
}
</style>
