<template>
    <section class="uc-contest-wrapper">
        <div class="uc-contest__container">
            <div class="uc-contest">
                <div class="uc__item">
                    <p class="uc__decription h3">
                        Городской конкурс сочинений «Деды наших дедов – герои Отечества»,
                        посвященного 79-ой годовщине Победы советского народа в Великой
                        Отечественной войне
                    </p>
                    <div class="uc__directions">
                        <p class="uc__direction p2">
                            Журналист
                        </p>
                        <p class="uc__direction p2">
                            Историк
                        </p>
                        <p class="uc__direction p2">
                            Патриот
                        </p>
                        <p class="uc__direction p2">
                            Юнармеец
                        </p>
                    </div>
                    <div class="uc__info">
                        <p class="uc__publication p2">
                            Дата публикации 02.03.2024
                        </p>
                        <buttom
                            class="uc__info-btn btn"
                            @click="$router.push('/cabinet-contests')"
                        >
                            К списку конкурсов
                        </buttom>
                    </div>
                </div>
                <div class="uc-contest__content">
                    <div class="uc-contest__decription">
                        <div class="uc-contest__target">
                            <p class="uc-contest__subtitle">
                                Цель Конкурса:
                            </p>
                            <p class="uc-contest__text">
                                сохранение исторической памяти о подвиге и героизме советского
                                народа в годы Великой Отечественной войны, о воинском и трудовом
                                подвиге наших предков через личное осмысление, традиции и судьбы
                                семей, хранящих светлую память о своих близких, через понимание роли
                                нашей страны в избавлении от фашизма.
                            </p>
                        </div>
                        <div class="uc-contest__task">
                            <p class="uc-contest__subtitle">
                                Задачи конкурса:
                            </p>
                            <ul class="ul-contest__list">
                                <li class="uc-contest__list-item">
                                    воспитание патриотизма у учащихся;
                                </li>
                                <li class="uc-contest__list-item">
                                    уважения к подвигу защитников Отечества;
                                </li>
                                <li class="uc-contest__list-item">
                                    изучение исторического наследия России на примере подвига
                                    советского народа во время Великой Отечественной войны.
                                </li>
                            </ul>
                        </div>
                        <div class="uc-contest__condition">
                            <p class="uc-contest__subtitle">
                                Условия участия
                            </p>
                            <p class="uc-contest__text">
                                К участию в Конкурсе принимаются только индивидуальные сочинения
                            </p>
                            <ul class="ul-contest__list">
                                <li class="uc-contest__list-item">
                                    Работы на Конкурс принимаются в электронном формате docx (формат
                                    А4, шрифт - Times New Roman, основной текст - кегль 14, интервал
                                    межстрочный – 1,5).
                                </li>
                                <li class="uc-contest__list-item">
                                    Объем работы должен быть не более 4 (четырёх) печатных страниц
                                    основного текста.
                                </li>
                                <li class="uc-contest__list-item">
                                    Первая страница – заполненная заявка (Тема работы (пункт 5
                                    Положения); сведения об авторе: фамилия, имя, отчество, дата
                                    рождения, общеобразовательное учреждение, класс, руководитель
                                    (учитель помогающий в написании и структурировании работы),
                                    телефон и электронная почта руководителя.
                                </li>
                                <li class="uc-contest__list-item">
                                    Работа должна содержать фотографию или фотографии родственника,
                                    о котором будет идти речь в сочинении, а также фотографию
                                    участника, руководителя и директора школы.
                                </li>
                            </ul>
                        </div>
                        <div class="uc-contest__when-passes">
                            <p class="uc-contest__subtitle">
                                Когда проходит
                            </p>
                            <p class="uc-contest__text">
                                Конкурс проводится в три этапа (школьный, районный, городской):
                            </p>
                            <p class="uc-contest__text">
                                1 этап (школьный): с 8 апреля по 3 мая 2024 года;
                            </p>
                            <p class="uc-contest__text">
                                2 этап (районный): с 6 по 13 мая 2024 года
                            </p>
                        </div>
                        <p class="uc-contest__subtitle">
                            Заявки необходимо прислать до 6 апреля 2024 года
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup></script>
<style lang="scss">
.uc-contest-wrapper {
    width: 100%;
    display: flex;
    flex-grow: 1;
    background: var(--white);
    flex-direction: column;
}

.uc-contest__container {
    max-width: 1560px;
    padding: 24px 60px;
    margin: 0 auto;
    position: relative;
    box-sizing: border-box;

    @media (max-width: 991px) {
        padding: 24px 40px;
    }

    @media (max-width: 576px) {
        padding: 24px 16px;
    }
}

.uc-contest {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.uc-contest__decription {
    max-width: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    color: var(--dark);

    @media (max-width: 768px) {
        max-width: 100%;
    }
}

.uc-contest__subtitle {
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    display: inline;
}

.uc-contest__text {
    display: inline;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
}

.ul-contest__list {
    padding-left: 24px;
}

.uc-contest__list-item {
    list-style-type: disc;
}

.uc-contest__condition {
    display: flex;
    flex-direction: column;
}

.uc-contest__when-passes {
    display: flex;
    flex-direction: column;
}
</style>
