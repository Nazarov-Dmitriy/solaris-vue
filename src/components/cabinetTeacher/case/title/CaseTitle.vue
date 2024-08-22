<template>
    <div class="add-portfolio__header">
        <Teleport to="body">
            <ModalComponent
                :visible="isModalVisible"
                :additional-class="'custom-modal'"
                @toggle-modal="handleModalClose"
                @show-modal="handleModalAction"
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
        </Teleport>
        <Teleport to="body">
            <ModalComponent :visible="isSecondModalVisible" @toggleModal="handleSecondModalClose">
                <template #text>
                    <p class="modal__text">
                        Ваш кейс успешно отправлен! После проверки результаты появятся у вас в
                        портфолио
                    </p>
                </template>
                <template #btn>
                    <div class="modal__btn-wrapper">
                        <button
                            class="modal__btn modal__btn--send"
                            @click="$router.push('/cabinet-portfolio')"
                        >
                            Перейти в портфолио
                        </button>
                    </div>
                </template>
            </ModalComponent>
        </Teleport>

        <h2 class="add-portfolio__title">Добавить кейс в портфолио</h2>
        <BtnComponent emit-name="form-submit" class="add-portfolio__btn" @click="handleButtonClick">
            Отправить на проверку
        </BtnComponent>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import BtnComponent from '@/components/btns/BtnComponent.vue'
import ModalComponent from '@/components/modal/ModalComponent.vue'
import { useRouter } from 'vue-router'

const isModalVisible = ref(false)
const isSecondModalVisible = ref(false)
const emit = defineEmits(['form-submit', 'handleModalClose', 'handleModalAction'])

const router = useRouter()

function manageBodyScroll() {
    if (isModalVisible.value || isSecondModalVisible.value) {
        document.body.classList.add('no-scroll')
    } else {
        document.body.classList.remove('no-scroll')
    }
}
watch([isModalVisible, isSecondModalVisible], manageBodyScroll)

router.afterEach(() => {
    document.body.classList.remove('no-scroll')
})

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
