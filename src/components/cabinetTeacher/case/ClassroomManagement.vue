<template>
    <section class="management">
        <div class="management__container">
            <div class="management__wrapper">
                <div class="management__achievement">
                    <div class="management__header">
                        <h3 class="h3 management__header-title">Классное руководство</h3>
                        <p class="p2 management__header-text">максимум 10 баллов</p>
                    </div>
                    <div
                        v-for="(fieldGroup, index) in fieldsGroup"
                        :key="index"
                        class="flex flex-col gap-4"
                    >
                        <div class="management__text-wrapper">
                            <span></span>
                            <p class="management__nomination-text">Мероприятие</p>
                            <span></span>
                        </div>
                        <form action="#" class="management__form">
                            <div class="management__input-group">
                                <label for="eventName" class="management__label"
                                    >Наименование мероприятия</label
                                >
                                <DropdownComponent
                                    id="eventName"
                                    class="management__input"
                                    additionalClass="custom-dropdown-selected"
                                    :options="eventNameOptions"
                                />
                            </div>
                            <div class="management__notes-wrapper">
                                <p class="p2 management__notes-text">
                                    После выбора наименования мероприятия здесь отобразятся
                                    примечания к заполнению
                                </p>
                                <div class="management__input-group">
                                    <label for="chooseDate" class="management__label"
                                        >Уровень</label
                                    >
                                    <DropdownComponent
                                        id="chooseLevel"
                                        class="management__input"
                                        :options="chooseLevelOptions"
                                        additionalClass="custom-dropdown-selected"
                                    />
                                </div>
                                <div class="management__input-group">
                                    <label for="organise" class="management__label"
                                        >Организатор</label
                                    >
                                    <InputText id="organise" placeholder="Введите организатора" />
                                </div>
                                <div class="management__input-group">
                                    <label for="chooseName" class="management__label"
                                        >Название</label
                                    >

                                    <InputText id="chooseName" placeholder="Введите название" />
                                </div>
                            </div>
                            <div class="management__form-info-wrapper">
                                <div class="management__input-group">
                                    <label for="#">Дата</label>
                                    <InputDate />
                                </div>
                                <div class="management__input-group">
                                    <label for="#">Класс</label>
                                    <InputText placeholder="Введите класс" />
                                </div>
                                <div
                                    class="management__input-group management__input-group--mobile"
                                >
                                    <label for="#">Классный руководитель</label>
                                    <InputText class="input-text" placeholder="Введите фио" />
                                </div>
                            </div>
                            <div class="management__results">
                                <div class="management__text-wrapper">
                                    <span></span>
                                    <p class="management__nomination-text">Организатор</p>
                                    <span></span>
                                </div>
                                <div class="management__results-input-wrapper">
                                    <div class="management__input-group">
                                        <label for="chooseResult" class="management__label"
                                            >Результат</label
                                        >
                                        <DropdownComponent
                                            id="chooseResult"
                                            class="management__input"
                                            additionalClass="custom-dropdown-selected"
                                            :options="chooseResultOptions"
                                        />
                                    </div>
                                    <div class="management__result-btn-wrapper">
                                        <BtnWhite class="management__btn management__result-btn">
                                            Подтверждающий документ
                                        </BtnWhite>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <p class="p2 management__form-text">
                            Баллы начислятся после проверки, возможные варианты результатов
                            проверки: Зачтено, Зачтено частично, Не зачтено
                        </p>
                        <div class="management__footer">
                            <h3 class="h3 management__footer-title">Предполагаемый балл: 0</h3>
                            <BtnComponent
                                emit-name="form-submit"
                                @form-submit="toggleModal"
                                class="management__footer-btn"
                                >Сохранить</BtnComponent
                            >
                        </div>
                        <div class="management__btn-wrapper">
                            <BtnWhite
                                v-if="index === fieldsGroup.length - 1"
                                emit-name="form-submit"
                                @form-submit="addFieldsGroup"
                                additionalClass="btn-white__text--img"
                                class="management__btn"
                            >
                                Добавить мероприятие
                            </BtnWhite>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Teleport to="body">
            <ModalComponent
                additionalClass="custom-modal-position"
                emit-name="toggleModal"
                @toggleModal="toggleModal"
                :visible="isModalVisible"
            >
                <template #title>
                    <h2 class="modal-title">Данные сохранены</h2>
                </template>
                <template #text>
                    <p class="text-center">
                        Вы можете добавить еще работу или перейти к другому критерию
                    </p>
                </template>
            </ModalComponent>
        </Teleport>
    </section>
</template>

<script setup>
import { ref, watch } from 'vue'

import DropdownComponent from '@/components/dropdown/DropdownComponent.vue'
import BtnWhite from '@/components/btns/cabinetTeacher/case/BtnWhite.vue'
import BtnComponent from '@/components/btns/BtnComponent.vue'
import InputText from './form/InputText.vue'
import InputDate from './form/InputDate.vue'
import ModalComponent from '@/components/modal/ModalComponent.vue'

const fieldsGroup = ref([1])

function addFieldsGroup() {
    fieldsGroup.value.push(1)
}

const isModalVisible = ref(false)

function toggleModal() {
    isModalVisible.value = !isModalVisible.value
}

watch(isModalVisible, (newValue) => {
    if (newValue) {
        document.body.classList.add('no-scroll')
    } else {
        document.body.classList.remove('no-scroll')
    }
})

const eventNameOptions = ref([
    '-',
    'Результативность участия обучающихся во Всероссийской олимпиаде школьников.',
    'Результативность участия обучающихся в конкурсах и олимпиадах, входящие в Перечень Министерства просвещения РФ',
    'Результативность участия в интеллектуальных конкурсах, фестивалях, играх, в том числе "Большая перемена", конкурс и олимпиады по функциональной грамотности и другие конкурсные мероприятия, не входящие в Перечень Министерства просвещения РФ.',
    'Результативность участия в интеллектуальных конкурсах, фестивалях, играх, в том числе "Большая перемена", конкурс и олимпиады по функциональной грамотности и другие конкурсные мероприятия, не входящие в Перечень Министерства просвещения РФ.',
    'Результативность участия в научно-практических конференциях и других исследовательских мероприятиях по предмету обучения.',
    'Результаты участия в мероприятиях художественно - эстетической направленности - отчетные концерты, праздники искусства, утренники, выставки, ярмарки поделок и другие мероприятия, направленные на развитие эстетического вкуса у обучающихся. ',
    'Результат участие в мероприятиях военно-патриотической, экологической, туристско-краеведческой, волонтерской, поисковой направленности ',
    'Результат участия в спортивных состязаниях',
    'Результативность участия обучающихся при выполнении нормативов Всероссийского  физкультурно-спортивного  комплекса "Готов к труду и обороне".',
    'Результативность участия команды в спортивных соревнованиях "Президентские состязания".'
])
const chooseLevelOptions = ref(['-', 'Лицейский', 'Муниципальный', 'Региональный', 'Всероссийский'])
const chooseResultOptions = ref(['-', 'Участие', 'Победитлеь', 'Призер'])
</script>

<style scoped lang="scss">
.management {
    background-color: var(--white);
}
.management__container {
    display: flex;
    flex-direction: column;
    gap: 25px;
}
.management__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 32px;
    height: max-content;

    @media (max-width: $lg) {
        flex-direction: column;
        gap: 24px;
    }
}
.management__achievement {
    @media (max-width: $lg) {
        padding: 0 40px 24px 40px;
    }
    @media (max-width: $sm) {
        padding: 0 16px 24px 16px;
    }
}
.management__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;

    @media (max-width: $sm) {
        flex-direction: column;
        gap: 10px;
        align-items: start;
    }
}
.management__header-title {
    color: var(--dark);
}
.management__header-text {
    color: var(--dark);
}
.management__text-wrapper {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
}
.management__text-wrapper span {
    width: 100%;
    height: 0px;
    border: 1px solid;
    max-width: 50%;
}
.management__nomination-text {
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    flex-shrink: 0;
}
.management__form {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.management__input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;

    &--mobile {
        @media (max-width: $xl) {
            display: grid;
            grid-column: span 2;
        }
    }
}
.management__label {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: var(--dark);
}
.management__input {
    width: 100%;
    max-width: 100%;
}
.management__form-info-wrapper {
    display: grid;
    grid-template-columns: 20% 25% 1fr;
    width: 100%;
    gap: 16px;

    @media (max-width: $xl) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: $lg) {
        display: flex;
        flex-direction: column;
    }
}
.management__notes-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    gap: 16px;

    @media (max-width: $lg) {
        grid-template-columns: 1fr;
    }
}
.management__notes-text {
    text-align: center;
    color: var(--orange);
}
.management__student-input-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    @media (max-width: $lg) {
        grid-template-columns: 1fr;
    }
}
.management__results-input-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: end;
    @media (max-width: $lg) {
        grid-template-columns: 1fr;
        gap: 16px;
    }
}
.management__result-btn-wrapper {
    display: flex;
    justify-content: flex-end;
    @media (max-width: $lg) {
        width: 100%;
    }
}
.management__result-btn {
    @media (max-width: $lg) {
        width: 100%;
    }
}
.management__btn {
    @media (max-width: $sm) {
        width: 100%;
    }
}
.management__form-text {
    color: var(--dark);
    margin-top: 16px;
}
.management__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    @media (max-width: $sm) {
        flex-direction: column;
        width: 100%;
    }
}
.management__footer-btn {
    @media (max-width: $sm) {
        width: 100%;
        text-align: center;
        margin-bottom: 16px;
    }
}
.management__btn-wrapper {
    display: flex;
    justify-content: center;
}
</style>
