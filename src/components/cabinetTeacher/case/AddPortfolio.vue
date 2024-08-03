<template>
    <section class="add-portfolio">
        <div class="add-portfolio__container">
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

            <div class="add-portfolio__main">
                <TeacherDetails />
                <div class="add-portfolio__info">
                    <h2 class="add-portfolio__info-title">Инструкция по заполнению</h2>
                    <p class="add-portfolio__info-subtitle">
                        <span>Дорогой коллега!</span> Для правильного расчета баллов стимулирующей
                        части просим Вас ВНИМАТЕЛЬНО прочитать инструкцию полностью и пользоваться
                        ей при заполнении!
                    </p>
                    <ul class="add-portfolio__info-list">
                        <li
                            v-for="(text, index) in texts"
                            :key="index"
                            class="add-portfolio__info-list-item"
                        >
                            {{ text }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, inject } from 'vue'
import TeacherDetails from './form/TeacherDetails.vue'
import ModalComponent from '../../modal/ModalComponent.vue'
import AddPortfolioTitle from './title/AddPortfolioTitle.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const texts = [
    'Для начала заполнения выберите предмет, который вы ведете. Если вы ведете несколько предметов нажмите на кнопку с плюсиком рядом с выпадающим списком и появится дополнительное поле. Если вы ведете один предмет после выбора из списка ничего нажимать не нужно.',
    'Далее выберите критерий оценки из выпадающего списка и нажмите кнопку “Перейти”. Обратите внимание, если вы перейдете на пустой критерий вы попадете на страницу с инструкцией',
    'Заполните все активные поля в форме (в случае когда критерий не обязателен к заполнению, поле будет не активно)',
    'Нажмите кнопку сохранить (ВНИМАНИЕ! Без этого при переходек другому критерию данные не сохраняются). Если какое-то поле пропущено или заполненно не корректно отобразиться информация об ошибке. Если все заполненно верно появится системное сообщение об успешном сохранении',
    'Если вы хотите добавить несколько активностей по какому-то одному критерию нажмите на кнопку “Добавить”, у вас появится дополнительная форма внутри критерия',
    'К каждому мероприятию необходимо загрузить подтверждающий документ (вес до 5 МБ, формат PDF, DOC, DOCX, PNG, JPG)',
    'Критерии “Качество деятельности учителя” и “Аттестация” заполняются модератором, баллы отображаются в вашем личном кабинете и портфолио. Вы можете запросить актуализацию данных. Если данные актуальны - вы можете просто пропустить этот критерий',
    'Расчет баллов в приложени - это предварительная оценка деятельности, которая уточняется модератором',
    'После заполнения всех критериев, которые вы хотели добавить нажмите на кнопку “Отправить на проверку вверху экрана” в открывшемся окне подтвердите отправку или нажмите кнопку отмена',
    'После проверки модератером утвержденные баллы стимуляции будут отражаться в личном кабинете во вкладке “Портфолио” '
]
const isModalVisible = inject('isModalVisible')
const isSecondModalVisible = inject('isSecondModalVisible')
const sendForVerification = inject('sendForVerification')
const showSecondModal = inject('showSecondModal')
const handleModalClose = inject('handleModalClose')
const handleSecondModalClose = inject('handleSecondModalClose')

function goToPortfolio() {
    router.push('/portfolio')
}
</script>

<style lang="scss">
.add-portfolio {
    background-color: var(--white);
}
.add-portfolio__container {
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

.add-portfolio__main {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    height: max-content;

    @media (max-width: $md) {
        flex-direction: column;
        gap: 24px;
    }
}
.add-portfolio__info {
    margin: 37px auto 0 auto;
    max-width: 843px;

    @media (max-width: $md) {
        padding: 24px 40px;
        margin-top: 0;
    }
    @media (max-width: $sm) {
        padding: 24px 40px;
    }
    @media (max-width: 390px) {
        padding: 24px 16px;
    }
}
.add-portfolio__info-title {
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    color: #1f2a3e;
}
.add-portfolio__info-subtitle {
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #1f2a3e;
    margin-bottom: 16px;
}
.add-portfolio__info-subtitle span {
    display: block;
}
.add-portfolio__info-list {
    font-size: 16px;
    line-height: 150%;
    color: #1f2a3e;
    margin-left: 16px;
}
.add-portfolio__info-list-item {
    list-style-type: disc;
}
</style>
