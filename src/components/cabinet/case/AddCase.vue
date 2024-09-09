<template>
    <section class="add-portfolio">
        <div class="add-portfolio__container">
            <div class="add-portfolio__main">
                <div class="add-portfolio__info">
                    <h2 class="h3 add-portfolio__info-title">
                        Инструкция по заполнению
                    </h2>
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
</script>

<style lang="scss">

.add-portfolio {
    background-color: var(--white);
}
.add-portfolio__main {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    height: max-content;
    @media (max-width: $lg) {
        flex-direction: column;
        gap: 24px;
    }
}
.add-portfolio__info {
    margin: 37px auto 0 auto;
    // max-width: 843px;
    @media (max-width: $lg) {
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
    color: var(--dark);
}
.add-portfolio__info-subtitle {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    color: var(--dark);
    margin-bottom: 16px;
}
.add-portfolio__info-subtitle span {
    display: block;
}
.add-portfolio__info-list {
    font-size: 16px;
    line-height: 150%;
    color: var(--dark);
    margin-left: 16px;
}
.add-portfolio__info-list-item {
    list-style-type: disc;
}
</style>
