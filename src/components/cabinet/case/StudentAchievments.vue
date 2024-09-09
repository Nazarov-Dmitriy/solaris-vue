<template>
    <section class="achievements">
        <div class="achievements__container">
            <div class="achievements__wrapper">
                <div class="achievements__achievement">
                    <div class="achievements__header">
                        <h3 class="h3 achievements__header-title">
                            Достижения обучающихся
                        </h3>
                        <p class="p2 achievements__header-text">
                            максимум 20 баллов
                        </p>
                    </div>
                    <div
                        v-for="(event, index) in events"
                        :key="index"
                        class="flex flex-col gap-4"
                    >
                        <div class="achievements__text-wrapper">
                            <span />
                            <p class="achievements__nomination-text">
                                Мероприятие
                            </p>
                            <span />
                        </div>
                        <form
                            action="#"
                            class="achievements__form"
                        >
                            <div class="achievements__input-group">
                                <label
                                    for="eventName"
                                    class="achievements__label"
                                >Наименование мероприятия</label>
                                <DropdownComponent
                                    id="eventName"
                                    class="achievements__input"
                                    additional-class="custom-dropdown-selected"
                                    :options="eventNameOptions"
                                />
                            </div>
                            <div class="achievements__notes-wrapper">
                                <p class="p2 achievements__notes-text">
                                    После выбора наименования мероприятия здесь отобразятся
                                    примечания к заполнению
                                </p>
                                <div class="achievements__input-group">
                                    <label
                                        for="chooseLevel"
                                        class="achievements__label"
                                    >Уровень</label>
                                    <DropdownComponent
                                        id="chooseLevel"
                                        class="achievements__input"
                                        additional-class="custom-dropdown-selected"
                                        :options="chooseLevelOptions"
                                    />
                                </div>
                                <div class="achievements__input-group">
                                    <label
                                        for="organiser"
                                        class="achievements__label"
                                    >Организатор</label>
                                    <InputText
                                        id="organiser"
                                        class="achievements__input"
                                        placeholder="Введите организатора"
                                    />
                                </div>
                                <div class="achievements__input-group">
                                    <label
                                        for="name"
                                        class="achievements__label"
                                    >Название</label>
                                    <InputText
                                        id="name"
                                        class="achievements__input"
                                        placeholder="Введите название"
                                    />
                                </div>
                            </div>
                            <div class="achievements__student">
                                <div class="achievements__text-wrapper">
                                    <span />
                                    <p class="achievements__nomination-text">
                                        Обучающиеся/Ученик
                                    </p>
                                    <span />
                                </div>
                                <div class="achievements__student-input-wrapper">
                                    <div class="achievements__input-group">
                                        <label
                                            for="class"
                                            class="achievements__label"
                                        >Класс обучающегося</label>
                                        <DropdownComponent
                                            id="class"
                                            class="achievements__input"
                                            additional-class="custom-dropdown-selected"
                                            :options="classOptions"
                                        />
                                    </div>
                                    <div class="achievements__input-group">
                                        <label
                                            for="studentInformation"
                                            class="achievements__label"
                                        >ФИ обучающегося, группа или класс</label>
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
                                    <span />
                                    <p class="achievements__nomination-text">
                                        Результат
                                    </p>
                                    <span />
                                </div>
                                <div class="achievements__results-input-wrapper">
                                    <div class="achievements__input-group">
                                        <label
                                            for="chooseResult"
                                            class="achievements__label"
                                        >Результат</label>
                                        <DropdownComponent
                                            id="chooseResult"
                                            class="achievements__input"
                                            additional-class="custom-dropdown-selected"
                                            :options="results"
                                        />
                                    </div>
                                    <div class="achievements__result-btn-wrapper">
                                        <BtnWhite
                                            class="achievements__btn achievements__result-btn"
                                        >
                                            Подтверждающий документ
                                        </BtnWhite>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <p class="p2 achievements__form-text">
                            Баллы начислятся после проверки, возможные варианты результатов
                            проверки: Зачтено, Зачтено частично, Не зачтено
                        </p>
                        <div class="achievements__footer">
                            <h3 class="h3 achievements__footer-title">
                                Предполагаемый балл: 0
                            </h3>
                            <BtnComponent
                                emit-name="form-submit"
                                class="achievements__footer-btn"
                                @form-submit="toggleModal"
                            >
                                Сохранить
                            </BtnComponent>
                        </div>
                        <div class="achievements__btn-wrapper">
                            <BtnWhite
                                v-if="index === events.length - 1"
                                emit-name="form-submit"
                                additional-class="btn-white__text--img"
                                class="achievements__btn"
                                @form-submit="addNewEvent"
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
    </section>
</template>

<script setup>
import { ref, watch } from 'vue'

import DropdownComponent from '@/components/dropdown/DropdownComponent.vue'
import BtnWhite from '@/components/btns/cabinetTeacher/case/BtnWhite.vue'
import BtnComponent from '@/components/btns/BtnComponent.vue'
import InputText from './form/InputText.vue'
import ModalComponent from '@/components/modal/ModalComponent.vue'

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

const results = ref([
    '-',
    'Участие',
    'Призер/победитель',
    'Победитель',
    'Призер',
    'ГТО: Золотой значок (более 50% от количества сдающих, обучающихся у учителя)',
    'ГТО: Серебряный значок (более 50% от количества сдающих, обучающихся у учителя)',
    'ГТО: Бронзовый значок (более 50% от количества сдающих, обучающихся у учителя)'
])

const chooseLevelOptions = ref(['-', 'Лицейский', 'Муниципальный', 'Региональный', 'Всероссийский'])
const classOptions = ref(['-', '1-3', '4-6', '7-11'])

const events = ref([1])

function addNewEvent () {
    events.value.push(1)
}
</script>

<style scoped lang="scss">
.achievements {
    background-color: var(--white);
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
    margin-bottom: 20px;
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
    justify-content: space-between;
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
    align-items: end;
    gap: 16px;
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
