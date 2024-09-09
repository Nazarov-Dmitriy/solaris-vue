<template>
    <section class="uc-contest-wrapper">
        <div class="uc-contest__container">
            <div
                class="uc-contest"
            >
                <div class="uc__item">
                    <p class="uc__decription h3">
                        {{ props.contests?.title }}
                    </p>
                    <div class="uc__directions">
                        <p
                            v-for="(tag, index) in props.contests?.tags"
                            :key="index"
                            class="uc__direction p2"
                        >
                            {{ tag }}
                        </p>
                    </div>
                    <div class="uc__info">
                        <p class="uc__publication p2">
                            Дата публикации {{ props.contests?.publication_date }}
                        </p>
                        <button
                            class="uc__info-btn btn"
                            @click="$router.push('/cabinet-teacher/contests')"
                        >
                            К списку конкурсов
                        </button>
                    </div>
                </div>
                <div class="uc-contest__content">
                    <div class="uc-contest__decription">
                        <div class="uc-contest__target">
                            <p class="uc-contest__subtitle">
                                Цель Конкурса:
                            </p>
                            <p class="uc-contest__text">
                                {{ props.contests?.description?.aim }}
                            </p>
                        </div>
                        <div class="uc-contest__task">
                            <p class="uc-contest__subtitle">
                                Задачи конкурса:
                            </p>
                            <ul class="ul-contest__list">
                                <li
                                    v-for="(task, index) in props.contests?.description?.tasks"
                                    :key="index"
                                    class="uc-contest__list-item"
                                >
                                    {{ task }}
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
                            <ul
                                v-for="(condition, index) in props.contests?.description?.conditions"
                                :key="index"
                                class="ul-contest__list"
                            >
                                <li class="uc-contest__list-item">
                                    {{ condition }}
                                </li>
                            </ul>
                        </div>
                        <div class="uc-contest__when-passes">
                            <p class="uc-contest__subtitle">
                                Когда проходит
                            </p>
                            <p
                                v-for="(date, index) in props.contests?.description?.date"
                                :key="index"
                                class="uc-contest__text"
                            >
                                {{ date }}
                            </p>
                        </div>
                        <p class="uc-contest__subtitle">
                            {{ props.contests?.description?.end }}
                        </p>
                    </div>
                    <div
                        v-if="props.contests?.hasParticipant"
                        class="uc-contest__application"
                    >
                        <h3 class="uc-contest__application-title h3">
                            Список учеников
                        </h3>
                        <p class="uc-contest__application-text">
                            Ученики, которые подали заявку. Вы можете удалить лишнего учениа.
                        </p>
                        <div class="uc-contest__list">
                            <div
                                v-for="el in listTeacher"
                                :key="el.id"
                                class="uc-contest__cards"
                            >
                                <div class="uc-contest__card">
                                    <img
                                        src="@/assets/image/user-cabinet/contest/avatar.png"
                                        alt="avatar"
                                        class="uc-contest__avatar"
                                    >
                                    <p class="uc-contest__user-name p2">
                                        {{ el.name }}
                                    </p>
                                    <div class="uc-contest__user-derections p2">
                                        <p class="uc-contest__user-derection">
                                            {{ el.studentGroup }}
                                        </p>
                                    </div>
                                    <button
                                        class="uc-contest__btn"
                                        @click="removeStudent(el.id)"
                                    >
                                        <svg
                                            width="16"
                                            height="20"
                                            viewBox="0 0 16 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M3.21579 19.5652C3.00842 19.5648 2.80899 19.4859 2.65747 19.3443M3.21579 19.5652H12.7232C12.9119 19.5666 13.0946 19.5021 13.2404 19.384M3.21579 19.5652L3.21689 19.0652M3.21579 19.5652L2.12089 7.40164M2.65747 19.3443L13.5391 18.8031L13.539 18.8056L13.5389 18.8056L13.5389 18.8058L13.5397 18.8058C13.5396 18.8067 13.5396 18.8075 13.5395 18.8083C13.5253 19.0142 13.4333 19.2069 13.2823 19.3476C13.2687 19.3603 13.2547 19.3724 13.2404 19.384M2.65747 19.3443C2.50595 19.2028 2.41363 19.0092 2.39898 18.8024L2.65747 19.3443ZM13.2404 19.384L12.9914 19.4391L13.0187 19.0647L12.9415 18.9818C12.9416 18.9816 12.9417 18.9815 12.9418 18.9814M13.2404 19.384L12.9418 18.9814M2.12089 7.40164L2.89773 18.7671C2.89775 18.7673 2.89776 18.7674 2.89777 18.7676C2.90361 18.8483 2.9397 18.9237 2.99867 18.9788L2.99886 18.979C3.05785 19.0341 3.13544 19.0649 3.21629 19.0652C3.21649 19.0652 3.21669 19.0652 3.21689 19.0652M2.12089 7.40164L13.8692 7.4015L13.0403 18.7694L13.0383 18.7967M2.12089 7.40164L13.0383 18.7967M3.21689 19.0652L12.7232 19.0652H12.7269C12.8062 19.0658 12.8832 19.0359 12.9418 18.9814M3.21689 19.0652L12.9418 18.9814M12.9418 18.9814L13.0188 19.0642L13.0383 18.7967M12.9418 18.9814C12.9944 18.9323 13.0282 18.867 13.0383 18.7967M14.4192 3.85704C14.4191 3.85704 14.419 3.85704 14.419 3.85704H1.58019C1.58012 3.85704 1.58005 3.85704 1.57997 3.85704C1.38546 3.85728 1.19906 3.93463 1.06168 4.07211L1.06156 4.07223C0.924136 4.20965 0.846832 4.39603 0.84668 4.59039L14.4192 3.85704ZM14.4192 3.85704C14.6139 3.85728 14.8004 3.93466 14.938 4.07219C15.0754 4.20947 15.1528 4.3958 15.1532 4.59056C15.1532 4.59074 15.1532 4.59092 15.1532 4.59109L15.1533 5.32359H0.84668V4.59051L14.4192 3.85704ZM5.03551 16.2283H5.02537L5.03545 16.7382C5.04663 17.304 5.5086 17.7564 6.07414 17.7564C6.63993 17.7564 7.10154 17.304 7.11298 16.7384L7.11309 16.7384V16.7283V9.17125C7.11309 8.59756 6.64799 8.13246 6.0743 8.13246C5.50061 8.13246 5.03551 8.59756 5.03551 9.17125V16.2283ZM8.87996 16.7283H8.87986L8.88006 16.7382C8.89124 17.304 9.35321 17.7564 9.91875 17.7564C10.4845 17.7564 10.9461 17.304 10.9576 16.7384L10.9577 16.7384V16.7283V9.17125H10.9578L10.9576 9.16111C10.9461 8.59561 10.4846 8.14313 9.91875 8.14313C9.35326 8.14313 8.89121 8.59547 8.88006 9.1614L8.87996 9.1614V9.17125V16.7283ZM5.31664 0.966823C5.31664 0.966816 5.31664 0.966809 5.31664 0.966803C5.31666 0.94953 5.33056 0.935623 5.34777 0.935547H10.6516C10.6688 0.935693 10.6831 0.94976 10.6831 0.967526V1.77895H5.31669L5.31664 0.966823Z"
                                                fill="#DDA06B"
                                                stroke="#DDA06B"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref,  } from 'vue'

const props = defineProps({
    contests: {
        type: Object,
        default: () => {}
    }
})

const listTeacher = ref([
    {
        name: 'Иванов Михаил Дмитриевич1',
        studentGroup: '7А класс',
        id: 1
    },
    {
        name: 'Иванов Михаил Дмитриеви2',
        studentGroup: '7А класс',
        id: 2
    },
    {
        name: 'Иванов Михаил Дмитриевич3',
        studentGroup: '7А класс',
        id: 3
    },
    {
        name: 'Иванов Михаил Дмитриевич4',
        studentGroup: '7А класс',
        id: 4
    },
    {
        name: 'Иванов Михаил Дмитриевич5',
        studentGroup: '7А класс',
        id: 5
    },
    {
        name: 'Иванов Михаил Дмитриевич6',
        studentGroup: '7А класс',
        id: 6
    }
])

function removeStudent (id) {
    const index = listTeacher.value.findIndex((el) => el.id === id)
    if (index !== -1) {
        listTeacher.value.splice(index, 1)
    }
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

.uc-contest__content {
    display: flex;
    gap: 16px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
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

.uc-contest__application {
    max-width: 50%;
    width: 100%;
    padding: 24px;
    background: var(--dark);
    display: flex;
    flex-direction: column;
    gap: 24px;
    order: -1;
    align-items: center;
    min-height: 732px;
    height: fit-content;
    box-sizing: border-box;
    border: 2px solid var(--roseBege);

    &.success {
        height: fit-content;
        min-height: 200px;
    }

    @media (max-width: 768px) {
        max-width: 100%;
        min-height: 300px;
        gap: 16px;
    }

    @media (max-width: 576px) {
        width: calc(100% + 32px);
        left: -16px;
        position: relative;
        max-width: unset;
        padding: 24px 16px;
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
        'contest-avatar  contest-user-name  contest-btn'
        'contest-avatar  contest-user-derections  contest-btn';
    align-items: center;
    gap: 0 8px;
    padding: 8px 16px;

    @media (max-width: 991px) {
        grid-template-columns: 56px 1fr 52px;
        grid-template-areas:
            'contest-avatar  contest-user-name  contest-user-name'
            'contest-avatar  contest-user-derections  contest-btn';
    }

    @media (max-width: 576px) {
        gap: 0;
        padding: 8px 8px;
    }
}

.uc-contest__card.active {
    background: var(--roseBege);
    grid-template-columns: 56px 1fr;
    grid-template-rows: auto;
    grid-template-areas:
        'contest-avatar  contest-user-name '
        'contest-avatar  contest-user-derections  ';
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

.uc-contest__avatar {
    grid-area: contest-avatar;
    width: 56px;
    height: 56px;
    border-radius: 100%;
    border: 2px solid var(--roseBege);
    box-sizing: border-box;

    @media (max-width: 576px) {
        margin-right: 8px;
    }
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

    @media (max-width: 991px) {
        flex-direction: column;
        gap: 8px;
    }
}

.uc-contest__user-derection {
    color: var(--roseBege);
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

.uc__item {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 32px auto;
    grid-template-areas:
        "uc-deccription uc-directions"
        "uc-deccription  uc-info";
    padding: 16px;
    border-bottom: 2px solid var(--roseBege);
    gap: 56px 0;

    @media(max-width: 1200px) {
        grid-template-columns: 1fr;
        grid-template-rows: 32px auto;
        grid-template-areas:
            "uc-directions"
            "uc-deccription "
            "uc-info";
        gap: 20px 0;
    }

    @media(max-width: 576px) {
        grid-template-rows: auto;
    }
}

.uc__item:hover {
    background: var(--lightBege);

    @media(max-width: 576px) {
        background: unset;
    }
}

.uc__decription {
    grid-area: uc-deccription;
    max-width: 652px;
    color: var(--dark);

    @media(max-width: 1200px) {
        max-width: 100%;
    }
}

.uc__directions {
    justify-self: end;
    grid-area: uc-directions;
    display: flex;
    gap: 24px;

    @media(max-width: 991px) {
        gap: 16px;
    }

    @media(max-width: 576px) {
        flex-wrap: wrap;
        flex-grow: 1;
        justify-content: space-between;
        width: 100%;
    }
}

.uc__direction {
    padding: 4px 8px;
    background: var(--roseBege);
    color: var(--white);

    @media(max-width: 576px) {
        font-size: 12px;
    }
}

.uc__info {
    grid-area: uc-info;
    justify-self: end;
    display: flex;
    gap: 16px;
    justify-content: flex-end;
    align-items: flex-end;

    @media(max-width: 576px) {
        flex-wrap: wrap;
        width: 100%;
    }
}

.uc__info-btn {
    @media(max-width: 576px) {
        flex-grow: 1;
        justify-content: center;
    }
}
</style>