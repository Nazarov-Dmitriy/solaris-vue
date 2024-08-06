<template>
    <section class="activity-quality">
        <div class="activity-quality__container">
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

            <ModalComponent v-if="isSecondModalVisible" @close-modal="handleSecondModalClose">
                <template #text>
                    <p class="modal__text">
                        Ваш кейс успешно отправлен! После проверки результаты появятся у вас в
                        портфолио
                    </p>
                </template>
                <template #btn>
                    <div class="modal__btn-wrapper">
                        <button class="modal__btn modal__btn--send" @click="goToPortfolio">
                            Перейти в портфолио
                        </button>
                    </div>
                </template>
            </ModalComponent>
            <div class="activity-quality__wrapper">
                <TeacherDetails />
                <div class="activity-quality__certification">
                    <div class="activity-quality__certification-header">
                        <h2 class="activity-quality__certification-title">
                            Качество деятельности учителя
                        </h2>
                        <span>максимум 20 баллов</span>
                    </div>
                    <p class="activity-quality__text">
                        Критерий оценки по повышению качества профессиональной деятельности.
                        Заполняется модератором, вы можете запросить актуалтзацию данных и они
                        обновятся в вашем портфолио
                    </p>
                    <div class="activity-quality__btn-wrapper">
                        <BtnComponent class="activity-quality__btn"
                            >Актуализировать данные</BtnComponent
                        >
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { inject } from 'vue'

import ModalComponent from '@/components/modal/ModalComponent.vue'
import TeacherDetails from './form/TeacherDetails.vue'
import AddPortfolioTitle from './title/AddPortfolioTitle.vue'
import BtnComponent from '@/components/btns/BtnComponent.vue'

const isModalVisible = inject('isModalVisible')
const isSecondModalVisible = inject('isSecondModalVisible')
const sendForVerification = inject('sendForVerification')
const showSecondModal = inject('showSecondModal')
const handleModalClose = inject('handleModalClose')
const handleSecondModalClose = inject('handleSecondModalClose')
</script>

<style lang="scss">
.activity-quality {
    background-color: var(--white);
}
.activity-quality__container {
    max-width: 1920px;
    margin: 0 auto;
    padding: 16px 240px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    @media (max-width: $xxl) {
        padding: 16px 60px;
    }
    @media (max-width: $lg) {
        padding: 0;
        gap: 10px;
    }
}
.activity-quality__wrapper {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    height: max-content;
    @media (max-width: $lg) {
        flex-direction: column;
        gap: 24px;
    }
}
.activity-quality__certification {
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media (max-width: $lg) {
        padding: 24px 40px;
        box-sizing: border-box;
    }
    @media (max-width: $sm) {
        padding: 24px 16px;
    }
}
.activity-quality__certification-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    span {
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        color: var(--dark);
    }
    @media (max-width: $sm) {
        flex-direction: column;
        gap: 10px;
        align-items: start;
    }
}
.activity-quality__certification-title {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.5;
    color: var(--dark);
}
.activity-quality__btn-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}
.activity-quality__btn {
    @media (max-width: $sm) {
        width: 100%;
        text-align: center;
    }
}
</style>
