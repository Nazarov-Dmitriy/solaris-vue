<template>
    <div class="add-portfolio__header">
        <ModalComponent
            v-if="isModalVisible"
            :additionalClass="'custom-modal'"
            @close-modal="handleModalClose"
            @show-Modal="handleModalAction"
        >
            <template #text>
                <p class="modal__text">
                    Если вы заполнили все критерии - подтвердите отправку, или нажмите кнопку отмены
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
                    Ваш кейс успешно отправлен! После проверки результаты появятся у вас в портфолио
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
        <h2 class="add-portfolio__title">Добавить кейс в портфолио</h2>
        <BtnComponent emitName="form-submit" class="add-portfolio__btn" @click="handleButtonClick">
            Отправить на проверку
        </BtnComponent>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import BtnComponent from '@/components/btns/BtnComponent.vue'
import ModalComponent from '@/components/modal/ModalComponent.vue'

const isModalVisible = ref(false)
const isSecondModalVisible = ref(false)
const emit = defineEmits(['form-submit', 'handleModalClose', 'handleModalAction'])

function handleButtonClick() {
    emit('form-submit')
    isModalVisible.value = true
}

function handleModalClose() {
    isModalVisible.value = false
}

function showSecondModal() {
    isSecondModalVisible.value = true
    isModalVisible.value = false
}

function handleSecondModalClose() {
    isSecondModalVisible.value = false
}
</script>

<style scoped lang="scss">
.add-portfolio__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: $lg) {
        padding: 16px 40px;
    }
    @media (max-width: $sm) {
        flex-direction: column;
        padding: 16px;
        gap: 16px;
    }
}
.add-portfolio__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.5;
    color: #1f2a3e;

    @media (max-width: $lg) {
        width: 55%;
    }
    @media (max-width: $sm) {
        width: 100%;
    }
}
.add-portfolio__btn {
    @media (max-width: $sm) {
        width: 100%;
        text-align: center;
    }
}
</style>
