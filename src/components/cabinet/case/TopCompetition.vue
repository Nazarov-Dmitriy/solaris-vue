<template>
    <sections class="top-competition">
        <div class="top-competition__container">
            <div class="top-competition__wrapper">
                <div class="top-competition__event flex flex-col gap-4">
                    <div class="top-competition__nomination-header">
                        <h2 class="top-competition__nomination-header-title">
                            Участие в ТОП-конкурсе
                        </h2>
                        <span>максимум 20 баллов</span>
                    </div>
                    <div
                        v-for="(event, index) in events"
                        :key="index"
                        class="top-competition__nomination"
                    >
                        <div class="top-competition__nomination-text-wrapper">
                            <span />
                            <p class="top-competition__nomination-text">
                                Участие в номинации
                            </p>
                            <span />
                        </div>
                        <form
                            action="#"
                            class="top-competition__form"
                        >
                            <div class="top-competition__form-group">
                                <label
                                    for="#"
                                    class="top-competition__form-label"
                                >Номинация</label>
                                <InputText>
                                    <template #placeholder>
                                        Введите название номинации
                                    </template>
                                </InputText>
                            </div>
                            <div class="top-competition__form-group">
                                <label
                                    for="#"
                                    class="top-competition__form-label"
                                >Результат</label>
                                <DropdownComponent
                                    class="top-competition__form-input"
                                    additional-class="custom-dropdown-selected"
                                    :options="result"
                                />
                            </div>
                        </form>
                        <p class="top-competition__form-text">
                            Баллы начислятся после проверки, возможные варианты результатов
                            проверки: Зачтено, Зачтено частично, Не зачтено
                        </p>
                        <div class="top-competition__footer">
                            <h2 class="top-competition__footer-title">
                                Предполагаемый балл: 0
                            </h2>
                            <BtnComponent
                                emit-name="form-submit"
                                class="top-competition__footer-btn"
                                @form-submit="toggleModal"
                            >
                                Сохранить
                            </BtnComponent>
                        </div>
                        <div class="top-competition__btn-wrapper">
                            <BtnWhite
                                v-if="index === events.length - 1"
                                emit-name="form-submit"
                                additional-class="btn-white__text--img"
                                class="top-competition__btn"
                                @form-submit="addNewEvent"
                            >
                                Добавить номинацию
                            </BtnWhite>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Teleport to="body">
            <ModalComponent
                additional-class="custom-modal-position"
                emit-name="toggleModal"
                :visible="isModalVisible"
                @toggle-modal="toggleModal"
            >
                <template #title>
                    <h2 class="modal-title">
                        Данные сохранены
                    </h2>
                </template>
                <template #text>
                    <p class="text-center">
                        Вы можете добавить еще работу или перейти к другому критерию
                    </p>
                </template>
            </ModalComponent>
        </Teleport>
    </sections>
</template>

<script setup>
import { ref, watch } from 'vue'
import BtnComponent from '@/components/btns/BtnComponent.vue'
import BtnWhite from '@/components/btns/cabinetTeacher/case/BtnWhite.vue'
import InputText from './form/InputText.vue'
import DropdownComponent from '@/components/dropdown/DropdownComponent.vue'
import ModalComponent from '@/components/modal/ModalComponent.vue'

const events = ref([1])

function addNewEvent () {
    events.value.push(1)
}

const isModalVisible = ref(false)

function toggleModal () {
    isModalVisible.value = !isModalVisible.value
}

watch(isModalVisible, (newValue) => {
    if (newValue) {
        document.body.classList.add('no-scroll')
    } else {
        document.body.classList.remove('no-scroll')
    }
})

const result = ref([
    '-',
    'Участие',
    'Призер/победитель',
    'Победитель',
    'Призер',
    'ГТО: Золотой значок (более 50% от количества сдающих, обучающихся у учителя)',
    'ГТО: Серебряный значок (более 50% от количества сдающих, обучающихся у учителя)',
    'ГТО: Бронзовый значок (более 50% от количества сдающих, обучающихся у учителя)'
])
</script>

<style lang="scss" scoped>
.top-competition {
    background-color: var(--white);
}

.top-competition__wrapper {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    height: max-content;
    @media (max-width: $lg) {
        flex-direction: column;
        gap: 24px;
    }
}
.top-competition__event {
    @media (max-width: $lg) {
        padding: 0 40px 24px 40px;
    }
    @media (max-width: $sm) {
        padding: 0 16px 24px 16px;
    }
}
.top-competition__nomination-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
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
.top-competition__nomination-header-title {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.5;
    color: var(--dark);
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
.custom-dropdown-selected {
    max-width: 100%;
}
.top-competition__form-input {
    max-width: 100%;
    width: 50%;
    // background-image: url('../../../../public/cabinteTeacher/case/input-option-svg.svg');
    background-repeat: no-repeat;
    background-position: calc(100% - 23px);
    span {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        color: var(--roseBege);
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
.top-competition__drop-down {
    max-width: 100%;
    width: 50%;
}
.top-competition__form-text {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: var(--dark);
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
    line-height: 1.5;
    color: var(--dark);
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
