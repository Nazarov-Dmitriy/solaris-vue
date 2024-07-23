<template>
    <section class="uc-contest-wrapper">
        <div class="uc-contest__container">
            <div class="uc-contest">
                <div class="uc__item">
                    <p class="uc__decription h3">
                        Городской конкурс сочинений
                        «Деды наших дедов – герои Отечества», посвященного 79-ой годовщине Победы советского народа в
                        Великой Отечественной войне
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
                        <buttom class="uc__info-btn btn">
                            Узнать подробнее
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
                                сохранение исторической памяти о подвиге и героизме советского народа в годы Великой
                                Отечественной войны, о воинском и трудовом подвиге наших предков через личное
                                осмысление,
                                традиции и судьбы семей, хранящих светлую память о своих близких, через понимание роли
                                нашей
                                страны в избавлении от фашизма.
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
                                    изучение исторического наследия России на примере
                                    подвига
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
                                    Работы на Конкурс принимаются в электронном формате
                                    docx
                                    (формат А4, шрифт - Times New Roman, основной текст - кегль 14, интервал межстрочный
                                    –
                                    1,5).
                                </li>
                                <li class="uc-contest__list-item">
                                    Объем работы должен быть не более 4 (четырёх) печатных
                                    страниц
                                    основного текста.
                                </li>
                                <li class="uc-contest__list-item">
                                    Первая страница – заполненная заявка (Тема работы
                                    (пункт 5
                                    Положения); сведения об авторе: фамилия, имя, отчество, дата рождения,
                                    общеобразовательное
                                    учреждение, класс, руководитель (учитель помогающий в написании и структурировании
                                    работы),
                                    телефон и электронная почта руководителя.
                                </li>
                                <li class="uc-contest__list-item">
                                    Работа должна содержать фотографию или фотографии
                                    родственника, о котором будет идти речь в сочинении, а также фотографию участника,
                                    руководителя и директора школы.
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
                    <div
                        class="uc-contest__application"
                        :class="{ 'success': confirmedApplication.length > 0 }"
                    >
                        <template v-if="confirmedApplication.length === 0">
                            <h3 class="uc-contest__application-title h3">
                                Подать заявку
                            </h3>
                            <p class="uc-contest__application-text">
                                Для участия в конкурсе выбери наставника, подай заявку и жди подтвержения в уведомлениях
                            </p>
                            <div class="uc-contest__list">
                                <div
                                    v-for="el in listTeacher"
                                    :key="el.id"
                                    class="uc-contest__cards"
                                    @click="addSubmitApplication(el.id)"
                                >
                                    <div
                                        class="uc-contest__card"
                                        :class="{ 'active': arrSubmitApplication.includes(el.id) }"
                                    >
                                        <img
                                            src="../../../assets/image/user-cabinet/contest/avatar.png"
                                            alt="avatar"
                                            class="uc-contest__avater"
                                        >
                                        <p class="uc-contest__user-name p2">
                                            {{ el.name }}
                                        </p>
                                        <div class="uc-contest__user-derections p2">
                                            <p
                                                v-for="item in el.trend"
                                                :key="item"
                                                class="uc-contest__user-derection"
                                            >
                                                {{ item }}
                                            </p>
                                        </div>
                                        <button class="uc-contest__btn">
                                            <svg
                                                width="22"
                                                height="22"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M11 21C16.5475 21 21 16.5921 21 11.0446C21 5.49714 16.5475 1 11 1C5.4525 1 1 5.49714 1 11.0446C1 16.5921 5.4525 21 11 21Z"
                                                    stroke="#CBA05E"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M6 11H16"
                                                    stroke="#CBA05E"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M11 16.0704V6"
                                                    stroke="#CBA05E"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button
                                class="btn uc-contest-btn"
                                :disabled="arrSubmitApplication.length === 0"
                                @click="submitApplication()"
                            >
                                Подать заявку на участие
                            </button>
                        </template>
                        <template v-else>
                            <h3 class="uc-contest__application-title h3">
                                Твоя заявка принята
                            </h3>
                            <p class="uc-contest__application-text">
                                Ты учатвуешь в этом конкурсе, обратись к своему наставнику для получения всех
                                необходимых инструкций
                            </p>
                            <div class="uc-contest__application-success">
                                <img
                                    src="../../../assets/image/user-cabinet/contest/avatar.png"
                                    alt="avatar"
                                    class="uc-contest__avater"
                                >
                                <div class="uc-contest__application-wraper">
                                    <p class="uc-contest__user-name p2">
                                        {{ confirmedApplication[0].name }}
                                    </p>

                                    <div class="uc-contest__user-derections p2">
                                        <p
                                            v-for="item in confirmedApplication[0].trend"
                                            :key="item"
                                            class="uc-contest__user-derection"
                                        >
                                            {{ item }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';

const arrSubmitApplication = ref([])
const confirmedApplication = ref([])

const listTeacher = [
    {
        name: "Жуков Марк Никитич",
        trend: ['История', 'Обществознание'],
        id: 1,
    },
    {
        name: "Тарасова Василиса Михайловна",
        trend: ['Математика', 'Обществознание'],
        id: 2,

    },
    {
        name: "Вавилова Дарья Саввична",
        trend: ['Русский', 'Обществознание'],
        id: 3,

    },
    {
        name: "Кудрявцева Полина Андреевна",
        trend: ['Физика', 'Обществознание'],
        id: 4,

    },
    {
        name: "Сафонов Александр Платонович",
        trend: ['Химия', 'Обществознание'],
        id: 5,

    },
    {
        name: "Матвеев Марк Ярославович",
        trend: ['Информатика', 'Обществознание'],
        id: 6,

    },
];

function addSubmitApplication (id) {
    if (!arrSubmitApplication.value.includes(id)) {
        arrSubmitApplication.value.push(id)
    } else {
        arrSubmitApplication.value.splice(arrSubmitApplication.value.indexOf(id), 1)
    }
}

function submitApplication () {
    confirmedApplication.value.push(listTeacher[arrSubmitApplication.value[0]])
}

</script>
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

    @media(max-width: 991px) {
        padding: 24px 40px;
    }

    @media(max-width:576px) {
        padding: 24px 16px;
    }
}

.uc-contest {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.uc-contest__content {
    display: flex;
    gap: 16px;

    @media(max-width: 768px) {
        flex-direction: column;
    }
}

.uc-contest__decription {
    max-width: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media(max-width: 768px) {
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

.uc-contest__application {
    max-width: 50%;
    width: 100%;
    padding: 24px;
    background: var(--dark);
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    min-height: 732px;
    height: fit-content;
    box-sizing: border-box;
    border: 2px solid var(--roseBege);

    &.success{
     height: fit-content;
        min-height: 200px;
    }


    @media(max-width: 768px) {
        max-width: 100%;
        min-height: 300px;
        gap: 16px;
    }
    
}

.uc-contest__application-title {
    color: var(--white);
}

.uc-contest__application-text {
    color: var(--white);
    text-align: center;
}

.uc-contest__list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
}

.uc-contest__cards {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    border-bottom: 2px solid var(--roseBege);
    max-width: 100%;
    box-sizing: border-box;
}

.uc-contest__card {
    display: grid;
    grid-template-columns: 56px 1fr 52px;
    grid-template-rows: auto;
    grid-template-areas:
        "contest-avatar  contest-user-name  contest-btn"
        "contest-avatar  contest-user-derections  contest-btn";
    align-items: center;
    gap: 0 8px;
    padding: 8px 16px;

    @media(max-width: 991px) {
        grid-template-columns: 56px 1fr 52px;
        grid-template-areas:
            "contest-avatar  contest-user-name  contest-user-name"
            "contest-avatar  contest-user-derections  contest-btn";
    }
}

.uc-contest__card.active {
    background: var(--roseBege);
    grid-template-columns: 56px 1fr;
    grid-template-rows: auto;
    grid-template-areas:
        "contest-avatar  contest-user-name "
        "contest-avatar  contest-user-derections  ";
    align-items: center;
    gap: 0 8px;

    .uc-contest__user-name {
        color: var(--dark);
    }

    .uc-contest__btn {
        display: none;
    }

    .uc-contest__user-derection {
        color: var(--white);
    }
}

.uc-contest__application-success {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    justify-content: center;
    align-items: center;

    .uc-contest__application-wraper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .uc-contest__user-derections {
        justify-content: center;
        flex-direction: row;

    }

    .uc-contest__user-derection {
        color: var(--white);
    }
}

.uc-contest__card-user {
    display: flex;
    gap: 8px;
}

.uc-contest__avater {
    grid-area: contest-avatar;
    width: 56px;
    height: 56px;
    border-radius: 100%;
    border: 2px solid var(--roseBege);
    box-sizing: border-box;
}

.uc-contest__user-name {
    grid-area: contest-user-name;
    color: var(--white);
    padding-top: 4px;
}

.uc-contest__user-derections {
    grid-area: contest-user-derections;
    display: flex;
    gap: 16px;
    padding-bottom: 4px;

    @media(max-width: 991px) {
        flex-direction: column;
        gap: 8px;
    }
}

.uc-contest__user-derection {
    color: var(--roseBege)
}

.uc-contest__btn {
    grid-area: contest-btn;
    width: 52px;
    height: 52px;
    border: 2px solid var(--roseBege);
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.uc-contest-btn {
    margin-top: auto;
}
</style>