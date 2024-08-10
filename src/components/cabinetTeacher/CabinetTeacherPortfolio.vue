<template>
    <section class="section-teacher-portfolio">
        <div class="teacher-portfolio-panel-wraper">
            <div class="teacher-portfolio-panel__container">
                <div class="teacher-portfolio-panel">
                    <img
                        class="teacher-portfolio-panel__coin"
                        src="@/assets/image/cabinet-teacher/solaric-single.svg"
                        alt="solaric-img"
                    >
                    <img
                        class="teacher-portfolio-panel__coin"
                        src="@/assets/image/cabinet-teacher/solaric-single.svg"
                        alt="solaric-img"
                    >
                    <img
                        class="teacher-portfolio-panel__coin"
                        src="@/assets/image/cabinet-teacher/solaric-single.svg"
                        alt="solaric-img"
                    >
                    <div class="teacher-portfolio__point">
                        <div>
                            <p class="teacher-portfolio__point-text p1">
                                Оценка качества деятельности 
                                <span class="h3">
                                    100 баллов
                                </span>
                            </p>
                        </div>
                        <div>
                            <p class="teacher-portfolio__point-text p1">
                                Аттестация 
                                <span class="h3">
                                    100 баллов
                                </span>
                            </p>
                        </div>
                    </div>
                    
                    <div class="teacher-portfolio__buttons">
                        <DropdownComponent
                            v-model:modelValue="sort"
                            class="teacher-portfolio-panel__dropdown-sort"
                            :options="portfolioSort"
                        />
                        <button class="btn btn-teacher-portfolio">
                            Добавить
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="teacher-portfolio-wpaper">
            <div class="teacher-portfolio-container">
                <div class="teacher-portfolio-contnent">
                    <div class="teacher-portfolio-subtitle__wraper">
                        <span class="teacher-portfolio-subtitle__line" />
                        <p class="teacher-portfolio-subtitle__title p2">
                            Портфолио
                        </p>
                        <span class="teacher-portfolio-subtitle__line" />
                    </div>
                    <div
                        v-if="teacherPortfolioContests.length > 0"
                        class="teacher-portfolio-list"
                    >
                        <div class="teacher-portfolio__tab-header">
                            <div class="teacher-portfolio__tab-contest p2">
                                Название конкурса
                            </div>
                            <div class="teacher-portfolio__tab-point p2">
                                Баллы
                            </div>
                            <div class="teacher-portfolio__tab-date p2">
                                Дата
                            </div>
                        </div>
                        <div
                            v-for="el in renderList"
                            :key="el.id"
                            class="teacher-portfolio__item"
                        > 
                            <div class="teacher-portfolio__tab-contest">
                                <div class="botton">
                                    Конкурс:
                                </div>
                                <div class="p2">
                                    {{ el.contest }}
                                </div>
                            </div>
                            <div class="teacher-portfolio__tab-point p2">
                                <div class="botton">
                                    Баллы
                                </div>
                                <div class="p2">
                                    {{ el.points }}
                                </div>
                            </div>
                            <div class="teacher-portfolio__tab-date p2">
                                <div class="botton">
                                    Дата
                                </div>
                                <div class="p2">
                                    {{ el.contest_date }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <p
                        v-else
                        class="p1 teacher-portfolio-contnent-empty"
                    >
                        Здесь отображаются уведомления, уведомлений пока нет
                    </p>
                </div>
            </div>
            <PaginationComponent
                :perpage="5"
                :data="teacherPortfolioContests"
                :color="{ main: '#1F2A3E', hover: '#dda06b' }"
                @set-list="getRenderList"
            />
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import PaginationComponent from '@/components/pagination/PaginationComponent.vue';
import DropdownComponent from '@/components/dropdown/DropdownComponent.vue';

const renderList = ref([])
const sort = ref([])

const teacherPortfolioContests = [
    {
        id: 1,
        contest: "Городской конкурс сочинений «Деды наших дедов – герои Отечества», посвященного 79-ой годовщине Победы советского народа в Великой Отечественной войне",
        points: "260",
        contest_date: "02.03.2024",
    },
    {
        id: 2,
        contest: "Городской конкурс сочинений «Деды наших дедов – герои Отечества», посвященного 79-ой годовщине Победы советского народа в Великой Отечественной войне",
        points: "260",
        contest_date: "02.03.2024",
    },
    {
        id: 3,
        contest: "Городской конкурс сочинений «Деды наших дедов – герои Отечества», посвященного 79-ой годовщине Победы советского народа в Великой Отечественной войне",
        points: "260",
        contest_date: "02.03.2024",
    },
    {
        id: 4,
        contest: "Городской конкурс сочинений «Деды наших дедов – герои Отечества», посвященного 79-ой годовщине Победы советского народа в Великой Отечественной войне",
        points: "260",
        contest_date: "02.03.2024",
    },
    {
        id: 5,
        contest: "Городской конкурс сочинений «Деды наших дедов – герои Отечества», посвященного 79-ой годовщине Победы советского народа в Великой Отечественной войне",
        points: "260",
        contest_date: "02.03.2024",
    },
    {
        id: 6,
        contest: "Городской конкурс сочинений «Деды наших дедов – герои Отечества», посвященного 79-ой годовщине Победы советского народа в Великой Отечественной войне",
        points: "260",
        contest_date: "02.03.2024",
    },
    {
        id: 7,
        contest: "Городской конкурс сочинений «Деды наших дедов – герои Отечества», посвященного 79-ой годовщине Победы советского народа в Великой Отечественной войне",
        points: "260",
        contest_date: "02.03.2024",
    },
    {
        id: 8,
        contest: "Городской конкурс сочинений «Деды наших дедов – герои Отечества», посвященного 79-ой годовщине Победы советского народа в Великой Отечественной войне",
        points: "260",
        contest_date: "02.03.2024",
    },
    {
        id: 9,
        contest: "Городской конкурс сочинений «Деды наших дедов – герои Отечества», посвященного 79-ой годовщине Победы советского народа в Великой Отечественной войне",
        points: "260",
        contest_date: "02.03.2024",
    },
    {
        id: 10,
        contest: "Городской конкурс сочинений «Деды наших дедов – герои Отечества», посвященного 79-ой годовщине Победы советского народа в Великой Отечественной войне",
        points: "260",
        contest_date: "02.03.2024",
    },
    {
        id: 11,
        contest: "Городской конкурс сочинений «Деды наших дедов – герои Отечества», посвященного 79-ой годовщине Победы советского народа в Великой Отечественной войне",
        points: "260",
        contest_date: "02.03.2024",
    },
    {
        id: 12,
        contest: "Городской конкурс сочинений «Деды наших дедов – герои Отечества», посвященного 79-ой годовщине Победы советского народа в Великой Отечественной войне",
        points: "260",
        contest_date: "02.03.2024",
    },
    {
        id: 13,
        contest: "Городской конкурс сочинений «Деды наших дедов – герои Отечества», посвященного 79-ой годовщине Победы советского народа в Великой Отечественной войне",
        points: "260",
        contest_date: "02.03.2024",
    },
];

const portfolioSort = [
    'Новые вверху',
    'Cтарые вверху',
]

function getRenderList (list) {
    console.log(list);
    renderList.value = list
}
</script>

<style lang="scss">

.section-teacher-portfolio {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.teacher-portfolio-panel-wraper {
    width: 100%;
    background: var(--dark);
}

.teacher-portfolio-panel__container {
    max-width: 1560px;
    margin: auto;
    position: relative;
}

.teacher-portfolio-panel {
    max-width: 1560px;
    padding: 32px 60px;
    margin: auto;
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    .dropdown-selected-text {
        min-width: 107px;
    }
    
    @media(max-width: $md) {
        padding: 32px 40px;
        flex-direction: column;
        gap: 32px;

        .teacher-portfolio-panel__dropdown-sort {
            max-width: 100%;
            width: 100%;

            .dropdown-selected {
                max-width: 100%;
                width: 100%;
            }
        }
    }

    @media(max-width: 390px) {
        padding: 32px 16px;
        
    }
}

.teacher-portfolio__point {
    padding: 4px 0 4px 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media(max-width: $md) {
        padding: 0 0 0 16px;
    }

    @media(max-width: 390px) {
        padding: 0;
    }
}

.teacher-portfolio__point-text {
    color: var(--white);
    display: flex;
    gap: 24px;
    align-items: center;

    span {
        white-space: nowrap;
    }

    @media(max-width: $md) {
        justify-content: space-between;
        gap: 0;
    }

    @media(max-width: 390px) {
        flex-direction: column;
        gap: 8px;
        align-items: start;
        width: 50%;
    }
}

.teacher-portfolio__buttons {
    padding: 16px;
    display: flex;
    justify-content: space-between;
    gap: 40px;

    @media(max-width: $md) {
        padding: 0 0 0 16px;
    }

    @media(max-width: 390px) {
        padding: 0;
        flex-direction: column;
        gap: 16px;
    }
}

.btn-teacher-portfolio {
    @media(max-width: $md) {
        width: 100%;
    }
}

.teacher-portfolio-panel__coin:nth-child(1) {
    width: 35px;
    height: 35px;
    top: 98px;
    left: 576px;
    rotate: -50deg;
    position: absolute;

    @media(max-width: $lg) {
        display: none;
    }
}

.teacher-portfolio-panel__coin:nth-child(2) {
    width: 45px;
    height: 45px;
    top: 24px;
    left: 701px;
    rotate: 48deg;
    position: absolute;

    @media(max-width: $xxl) {
        left: 750px;
    }
    
    @media(max-width: $xl) {
        left: 634px;
    }

    @media(max-width: $lg) {
        display: none;
    }
}

.teacher-portfolio-panel__coin:nth-child(3) {
    width: 62px;
    height: 62px;
    top: 56px;
    left: 701px;
    rotate: -10deg;
    position: absolute;

    @media(max-width: $xxl) {
        left: 935px;
    }

    @media(max-width: $xl) {
        left: 705px;
    }
    
    @media(max-width: $lg) {
        display: none;
    }
}

.teacher-portfolio-wpaper {
    flex-grow: 1;
    background: var(--white);
}

.teacher-portfolio-container {
    max-width: 1560px;
    padding: 24px 60px;
    margin: 0 auto;
    box-sizing: border-box;

    @media(max-width: $md) {
        padding: 24px 40px;
    }

    @media(max-width: 390px) {
        padding: 24px 16px;
    }
}

.teacher-portfolio-contnent {
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 24px;
    margin-bottom: 24px;
}

.teacher-portfolio-subtitle__wraper {
    display: flex;
    align-items: center;
    gap: 16px;
}

.teacher-portfolio-subtitle__line {
    max-width: 50%;
    width: 100%;
    height: 2px;
    background: var(--dark)
}

.teacher-portfolio-subtitle__title {
    flex-shrink: 0;
    color: var(--dark);
}

.teacher-portfolio-list {
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media(max-width: 390px) {
        gap: 24px;
    }
}

.teacher-portfolio__tab-header {
    display: flex;
    justify-content: space-between;

    @media(max-width: 390px) {
        display: none;
    }
}

.teacher-portfolio__tab-contest {
    width: 100%;
    padding: 16px;
}

.teacher-portfolio__tab-point {
    text-align: center;
    min-width: 116px;
    padding: 16px;
    box-sizing: border-box;
}

.teacher-portfolio__tab-date {
    text-align: center;
    min-width: 156px;
    padding: 16px;
    box-sizing: border-box;

    @media(max-width: $sm) {
        min-width: 104px;
    }
}

.teacher-portfolio__item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background: var(--lightBege);

    .teacher-portfolio__tab-contest {
        padding: 8px;

        div:first-child {
            display: none;
        }
    }

    .teacher-portfolio__tab-point,
    .teacher-portfolio__tab-date {
        padding: 8px;

        div:first-child {
            display: none;
        }

        div:last-child {
            text-align: center;
        }
    }

    @media(max-width: 390px) {
        flex-direction: column;
        
        .teacher-portfolio__tab-contest {
            display: flex;
            flex-direction: column;
            gap: 8px;
            width: auto;

            div:first-child {
                display: block;
            }
        }

        .teacher-portfolio__tab-point,
        .teacher-portfolio__tab-date {
            width: 100%;
            display: flex;
            justify-content: space-between;

            div:first-child {
                display: block;
            }
        }

    }
}

.teacher-portfolio__decription {
    cursor: pointer;

    &.active{
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
    }
}

.teacher-portfolio__publication {
    text-align: center;
}

</style>