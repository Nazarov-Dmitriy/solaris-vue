<template>
    <section class="achievements">
        <div class="achievements__container">
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
            <div class="achievements__wrapper">
                <TeacherDetails />
                <div class="achievements__achievement">
                    <div class="achievements__header">
                        <h3 class="h3 achievements__header-title">Достижения обучающихся</h3>
                        <p class="p2 achievements__header-text">максимум 20 баллов</p>
                    </div>
                    <div class="achievements__text-wrapper">
                        <span></span>
                        <p class="achievements__nomination-text">Мероприятие</p>
                        <span></span>
                    </div>
                    <form action="#" class="achievements__form">
                        <div class="achievements__input-group">
                            <label for="eventName" class="achievements__label"
                                >Наименование мероприятия</label
                            >
                            <DropdownComponent
                                id="eventName"
                                class="achievements__input"
                                additionalClass="custom-dropdown-selected"
                                :options="eventNameOptions"
                            />
                        </div>
                        <div class="achievements__notes-wrapper">
                            <p class="p2 achievements__notes-text">
                                После выбора наименования мероприятия здесь отобразятся примечания к
                                заполнению
                            </p>
                            <div class="achievements__input-group">
                                <label for="chooseLevel" class="achievements__label">Уровень</label>
                                <DropdownComponent
                                    id="chooseLevel"
                                    class="achievements__input"
                                    additionalClass="custom-dropdown-selected"
                                    :options="chooseLevelOptions"
                                />
                            </div>
                            <div class="achievements__input-group">
                                <label for="organiser" class="achievements__label"
                                    >Организатор</label
                                >
                                <InputText
                                    id="organiser"
                                    class="achievements__input"
                                    placeholder="Введите организатора"
                                />
                            </div>
                            <div class="achievements__input-group">
                                <label for="name" class="achievements__label">Название</label>
                                <InputText
                                    id="name"
                                    class="achievements__input"
                                    placeholder="Введите название"
                                />
                            </div>
                        </div>
                        <div class="achievements__student">
                            <div class="achievements__text-wrapper">
                                <span></span>
                                <p class="achievements__nomination-text">Обучающиеся/Ученик</p>
                                <span></span>
                            </div>
                            <div class="achievements__student-input-wrapper">
                                <div class="achievements__input-group">
                                    <label for="class" class="achievements__label"
                                        >Класс обучающегося</label
                                    >
                                    <DropdownComponent
                                        id="class"
                                        class="achievements__input"
                                        additionalClass="custom-dropdown-selected"
                                        :options="classOptions"
                                    />
                                </div>
                                <div class="achievements__input-group">
                                    <label for="studentInformation" class="achievements__label"
                                        >ФИ обучающегося, группа или класс</label
                                    >
                                    <InputText
                                        id="studentInformation"
                                        class="achievements__input"
                                        placeholder="Введите обучающегося"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="achievements__results">
                            <div class="achievements__text-wrapper">
                                <span></span>
                                <p class="achievements__nomination-text">Результат</p>
                                <span></span>
                            </div>
                            <div class="achievements__results-input-wrapper">
                                <div class="achievements__input-group">
                                    <label for="chooseResult" class="achievements__label"
                                        >Результат</label
                                    >
                                    <DropdownComponent
                                        id="chooseResult"
                                        class="achievements__input"
                                        additionalClass="custom-dropdown-selected"
                                        :options="result"
                                    />
                                </div>
                                <div class="achievements__result-btn-wrapper">
                                    <BtnWhite class="achievements__btn achievements__result-btn">
                                        Подтверждающий документ
                                    </BtnWhite>
                                </div>
                            </div>
                        </div>
                    </form>
                    <p class="p2 achievements__form-text">
                        Баллы начислятся после проверки, возможные варианты результатов проверки:
                        Зачтено, Зачтено частично, Не зачтено
                    </p>
                    <div class="achievements__footer">
                        <h3 class="h3 achievements__footer-title">Предполагаемый балл: 0</h3>
                        <BtnComponent class="achievements__footer-btn">Сохранить</BtnComponent>
                    </div>
                    <div class="achievements__btn-wrapper">
                        <BtnWhite class="achievements__btn">
                            <template #img>
                                <img
                                    src="/public/cabinteTeacher/case/portfolio-button-svg.svg"
                                    alt=""
                                />
                            </template>
                            Добавить мероприятие
                        </BtnWhite>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, inject } from 'vue'

import DropdownComponent from '@/components/dropdown/DropdownComponent.vue'
import TeacherDetails from './form/TeacherDetails.vue'
import BtnWhite from '@/components/btns/cabinetTeacher/case/BtnWhite.vue'
import BtnComponent from '@/components/btns/BtnComponent.vue'
import InputText from './form/InputText.vue'
import AddPortfolioTitle from './title/AddPortfolioTitle.vue'
import ModalComponent from '@/components/modal/ModalComponent.vue'

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
const organiserOptions = ref([''])
const classOptions = ref(['-', '1-3', '4-6', '7-11'])

const isModalVisible = inject('isModalVisible')
const isSecondModalVisible = inject('isSecondModalVisible')
const sendForVerification = inject('sendForVerification')
const showSecondModal = inject('showSecondModal')
const handleModalClose = inject('handleModalClose')
const handleSecondModalClose = inject('handleSecondModalClose')
</script>

<style scoped lang="scss">
.achievements {
    background-color: var(--white);
}
.achievements__container {
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
.achievements__wrapper {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    height: max-content;
    @media (max-width: $lg) {
        flex-direction: column;
        gap: 24px;
    }
}
.achievements__achievement {
    @media (max-width: $lg) {
        padding: 0 40px 24px 40px;
    }
    @media (max-width: $sm) {
        padding: 0 16px 24px 16px;
    }
}
.achievements__header {
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
.achievements__header-title {
    color: var(--dark);
}
.achievements__header-text {
    color: var(--dark);
}
.achievements__text-wrapper {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
}
.achievements__text-wrapper span {
    width: 100%;
    height: 0px;
    border: 1px solid;
    max-width: 50%;
}
.achievements__nomination-text {
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    flex-shrink: 0;
}
.achievements__form {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.achievements__input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.achievements__label {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: var(--dark);
}
.achievements__input {
    width: 100%;
    max-width: 100%;
}
.achievements__notes-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    gap: 16px;

    @media (max-width: $lg) {
        grid-template-columns: 1fr;
    }
}
.achievements__notes-text {
    text-align: center;
    color: var(--orange);
}
.achievements__student-input-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    @media (max-width: $lg) {
        grid-template-columns: 1fr;
    }
}
.achievements__results-input-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: $lg) {
        grid-template-columns: 1fr;
        gap: 16px;
    }
}
.achievements__result-btn-wrapper {
    display: flex;
    justify-content: flex-end;
    @media (max-width: $lg) {
        width: 100%;
    }
}
.achievements__result-btn {
    @media (max-width: $lg) {
        width: 100%;
    }
}
.achievements__btn {
    @media (max-width: $sm) {
        width: 100%;
    }
}
.achievements__form-text {
    color: var(--dark);
    margin-top: 16px;
}
.achievements__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    @media (max-width: $sm) {
        flex-direction: column;
        width: 100%;
    }
}
.achievements__footer-btn {
    @media (max-width: $sm) {
        width: 100%;
        text-align: center;
        margin-bottom: 16px;
    }
}
.achievements__btn-wrapper {
    display: flex;
    justify-content: center;
}
</style>
