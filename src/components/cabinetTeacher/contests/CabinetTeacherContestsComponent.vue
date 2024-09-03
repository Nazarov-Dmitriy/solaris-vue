<template>
    <section class="section-teacher">
        <div class="teacher-panel-wraper">
            <div class="teacher-panel__container">
                <img
                    class="teacher-panel__contests-coin"
                    src="@/assets/image/cabinet-teacher/solaric-single.svg"
                    alt="solaric-img"
                />
                <img
                    class="teacher-panel__contests-coin"
                    src="@/assets/image/cabinet-teacher/solaric-single.svg"
                    alt="solaric-img"
                />
                <img
                    class="teacher-panel__contests-coin"
                    src="@/assets/image/cabinet-teacher/solaric-single.svg"
                    alt="solaric-img"
                />
                <div class="teacher-panel">
                    <div class="teacher-under-panel-group">
                        <div class="teacher-panel__btn-request">
                            <button
                                @click="$router.push('/cabinet-teacher/teacher-contest/propose')"
                                class="btn btn-request-contest"
                            >
                                Предложить конкурс
                            </button>
                        </div>
                        <div class="teacher-panel-group">
                            <DropdownComponent
                                v-model:modelValue="role"
                                class="teacher-panel__dropdown-role"
                                :options="optionRole"
                            />
                            <DropdownComponent
                                v-model:modelValue="sort"
                                class="teacher-panel__dropdown-sort"
                                :options="optionSort"
                            />
                            <button class="btn btn-contest">Мои конкурсы</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="teacher-wpaper">
            <div class="teacher-container">
                <div class="teacher-contnent">
                    <div class="teacher-subtitle__wraper">
                        <span class="teacher-subtitle__line" />
                        <p class="teacher-subtitle__title p2">Конкурсы</p>
                        <span class="teacher-subtitle__line" />
                    </div>
                    <div v-if="contests.length > 0" class="teacher-list">
                        <div v-for="el in renderList" :key="el.id" class="teacher__item">
                            <p class="teacher__decription h3">
                                {{ el.title }}
                            </p>
                            <div class="teacher__directions">
                                <p
                                    v-for="(item, number) in el.tags"
                                    :key="number"
                                    class="teacher__direction p2"
                                >
                                    {{ item }}
                                </p>
                            </div>
                            <div class="teacher__info">
                                <p class="teacher__publication p2">
                                    Дата публикации {{ el.publication_date }}
                                </p>
                                <buttom
                                    class="teacher__info-btn btn"
                                    @click="$router.push(`/teacher-contest-view/${el.id}`)"
                                >
                                    Узнать подробнее
                                </buttom>
                            </div>
                        </div>
                    </div>
                    <p v-else class="p1 teacher-contnent-empty">
                        Здесь отображаются полученные конкрусы, конкурсов пока нет
                    </p>
                </div>
            </div>
            <PaginationComponent
                :perpage="4"
                :data="contests"
                :color="{ main: '#1F2A3E', hover: '#dda06b' }"
                @set-list="getRenderList"
            />
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue'
import PaginationComponent from '@/components/pagination/PaginationComponent.vue'
import DropdownComponent from '@/components/dropdown/DropdownComponent.vue'
import { getAll } from '@/db/db'

const renderList = ref([])
const role = ref([])
const sort = ref([])

const contests = getAll()

// const contests = ref([
//     {
//         id: 1,
//         title: 'Городской конкурс сочинений  «Деды наших дедов – герои Отечества», посвященного 79-ойГородской конкурс сочинений  «Деды наших дедов – герои Отечества», по годовщине Победы советского народа в Великой Отечественной войне',
//         directions: [
//             { direction: 'Журналист' },
//             { direction: 'Историк' },
//             { direction: 'Патриот' },
//             { direction: 'Юнармеец' }
//         ]
//     },
//     {
//         id: 2,
//         title: 'Городской конкурс сочинений  «Деды наших дедов – герои Отечества», посвященного 79-ойГородской конкурс сочинений  «Деды наших дедов – герои Отечества», по годовщине Победы советского народа в Великой Отечественной войне',
//         directions: [
//             { direction: 'Журналист' },
//             { direction: 'Историк' },
//             { direction: 'Патриот' },
//             { direction: 'Юнармеец' }
//         ]
//     },
//     {
//         id: 3,
//         title: 'Городской конкурс сочинений  «Деды наших дедов – герои Отечества», посвященного 79-ойГородской конкурс сочинений  «Деды наших дедов – герои Отечества», по годовщине Победы советского народа в Великой Отечественной войне',
//         directions: [
//             { direction: 'Журналист' },
//             { direction: 'Историк' },
//             { direction: 'Патриот' },
//             { direction: 'Юнармеец' }
//         ]
//     },
//     {
//         id: 4,
//         title: 'Городской конкурс сочинений  «Деды наших дедов – герои Отечества», посвященного 79-ойГородской конкурс сочинений  «Деды наших дедов – герои Отечества», по годовщине Победы советского народа в Великой Отечественной войне',
//         directions: [
//             { direction: 'Журналист' },
//             { direction: 'Историк' },
//             { direction: 'Патриот' },
//             { direction: 'Юнармеец' }
//         ]
//     },
//     {
//         id: 5,
//         title: 'Городской конкурс сочинений  «Деды наших дедов – герои Отечества», посвященного 79-ойГородской конкурс сочинений  «Деды наших дедов – герои Отечества», по годовщине Победы советского народа в Великой Отечественной войне',
//         directions: [
//             { direction: 'Журналист' },
//             { direction: 'Историк' },
//             { direction: 'Патриот' },
//             { direction: 'Юнармеец' }
//         ]
//     },
//     {
//         id: 6,
//         title: 'Городской конкурс сочинений  «Деды наших дедов – герои Отечества», посвященного 79-ойГородской конкурс сочинений  «Деды наших дедов – герои Отечества», по годовщине Победы советского народа в Великой Отечественной войне',
//         directions: [
//             { direction: 'Журналист' },
//             { direction: 'Историк' },
//             { direction: 'Патриот' },
//             { direction: 'Юнармеец' }
//         ]
//     },
//     {
//         id: 7,
//         title: 'Городской конкурс сочинений  «Деды наших дедов – герои Отечества», посвященного 79-ойГородской конкурс сочинений  «Деды наших дедов – герои Отечества», по годовщине Победы советского народа в Великой Отечественной войне',
//         directions: [
//             { direction: 'Журналист' },
//             { direction: 'Историк' },
//             { direction: 'Патриот' },
//             { direction: 'Юнармеец' }
//         ]
//     },
//     {
//         id: 8,
//         title: 'Городской конкурс сочинений  «Деды наших дедов – герои Отечества», посвященного 79-ойГородской конкурс сочинений  «Деды наших дедов – герои Отечества», по годовщине Победы советского народа в Великой Отечественной войне',
//         directions: [
//             { direction: 'Журналист' },
//             { direction: 'Историк' },
//             { direction: 'Патриот' },
//             { direction: 'Юнармеец' }
//         ]
//     },
//     {
//         id: 9,
//         title: 'Городской конкурс сочинений  «Деды наших дедов – герои Отечества», посвященного 79-ойГородской конкурс сочинений  «Деды наших дедов – герои Отечества», по годовщине Победы советского народа в Великой Отечественной войне',
//         directions: [
//             { direction: 'Журналист' },
//             { direction: 'Историк' },
//             { direction: 'Патриот' },
//             { direction: 'Юнармеец' }
//         ]
//     },
//     {
//         id: 10,
//         title: 'Городской конкурс сочинений  «Деды наших дедов – герои Отечества», посвященного 79-ойГородской конкурс сочинений  «Деды наших дедов – герои Отечества», по годовщине Победы советского народа в Великой Отечественной войне',
//         directions: [
//             { direction: 'Журналист' },
//             { direction: 'Историк' },
//             { direction: 'Патриот' },
//             { direction: 'Юнармеец' }
//         ]
//     },
//     {
//         id: 11,
//         title: 'Городской конкурс сочинений  «Деды наших дедов – герои Отечества», посвященного 79-ойГородской конкурс сочинений  «Деды наших дедов – герои Отечества», по годовщине Победы советского народа в Великой Отечественной войне',
//         directions: [
//             { direction: 'Журналист' },
//             { direction: 'Историк' },
//             { direction: 'Патриот' },
//             { direction: 'Юнармеец' }
//         ]
//     },
//     {
//         id: 12,
//         title: 'Городской конкурс сочинений  «Деды наших дедов – герои Отечества», посвященного 79-ойГородской конкурс сочинений  «Деды наших дедов – герои Отечества», по годовщине Победы советского народа в Великой Отечественной войне',
//         directions: [
//             { direction: 'Журналист' },
//             { direction: 'Историк' },
//             { direction: 'Патриот' },
//             { direction: 'Юнармеец' }
//         ]
//     },
//     {
//         id: 13,
//         title: 'Городской конкурс сочинений  «Деды наших дедов – герои Отечества», посвященного 79-ойГородской конкурс сочинений  «Деды наших дедов – герои Отечества», по годовщине Победы советского народа в Великой Отечественной войне',
//         directions: [
//             { direction: 'Журналист' },
//             { direction: 'Историк' },
//             { direction: 'Патриот' },
//             { direction: 'Юнармеец' }
//         ]
//     },
//     {
//         id: 14,
//         title: 'Городской конкурс сочинений  «Деды наших дедов – герои Отечества», посвященного 79-ойГородской конкурс сочинений  «Деды наших дедов – герои Отечества», по годовщине Победы советского народа в Великой Отечественной войне',
//         directions: [
//             { direction: 'Журналист' },
//             { direction: 'Историк' },
//             { direction: 'Патриот' },
//             { direction: 'Юнармеец' }
//         ]
//     },
//     {
//         id: 15,
//         title: 'Городской конкурс сочинений  «Деды наших дедов – герои Отечества», посвященного 79-ойГородской конкурс сочинений  «Деды наших дедов – герои Отечества», по годовщине Победы советского народа в Великой Отечественной войне',
//         directions: [
//             { direction: 'Журналист' },
//             { direction: 'Историк' },
//             { direction: 'Патриот' },
//             { direction: 'Юнармеец' }
//         ]
//     },
//     {
//         id: 16,
//         title: 'Городской конкурс сочинений  «Деды наших дедов – герои Отечества», посвященного 79-ойГородской конкурс сочинений  «Деды наших дедов – герои Отечества», по годовщине Победы советского народа в Великой Отечественной войне',
//         directions: [
//             { direction: 'Журналист' },
//             { direction: 'Историк' },
//             { direction: 'Патриот' },
//             { direction: 'Юнармеец' }
//         ]
//     }
// ])

const optionRole = ['Выберите роль', 'Роль1', 'Роль2']

const optionSort = ['Новые вверху', 'Новые внизу']

function getRenderList(list) {
    renderList.value = list
}
</script>

<style lang="scss">
.section-teacher {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.teacher-panel-wraper {
    width: 100%;
    background: var(--dark);
}

.teacher-panel__container {
    max-width: 1560px;
    margin: auto;
    position: relative;
}

.teacher-panel {
    max-width: 1560px;
    padding: 32px 60px;
    margin: auto;
    position: relative;
    box-sizing: border-box;

    @media (max-width: $md) {
        padding: 32px 40px;
    }

    @media (max-width: 390px) {
        padding: 32px 16px 32px 16px;
    }
}

.teacher-panel__contests-coin:nth-child(1) {
    width: 35px;
    height: 35px;
    top: 82px;
    left: 136px;
    rotate: -50deg;
    position: absolute;
    z-index: 1;

    @media (max-width: $xxl) {
        left: 309px;
    }

    @media (max-width: $xl) {
        left: 295px;
    }

    @media (max-width: $lg) {
        display: none;
    }
}

.teacher-panel__contests-coin:nth-child(2) {
    width: 45px;
    height: 45px;
    top: 24px;
    left: 225px;
    rotate: 48deg;
    position: absolute;
    z-index: 1;

    @media (max-width: $xxl) {
        left: 405px;
    }

    @media (max-width: $xl) {
        left: 359px;
    }

    @media (max-width: $lg) {
        display: none;
    }
}

.teacher-panel__contests-coin:nth-child(3) {
    width: 62px;
    height: 62px;
    top: 56px;
    left: 352px;
    rotate: -10deg;
    position: absolute;
    z-index: 1;

    @media (max-width: $xxl) {
        left: 514px;
    }

    @media (max-width: $xl) {
        display: none;
    }
}

.teacher-under-panel-group {
    display: flex;
    justify-content: space-between;
    gap: 40px;

    @media (max-width: $sm) {
        gap: 20px;
        flex-direction: column;
    }
}

.teacher-panel-group {
    display: flex;
    gap: 16px;
    padding: 16px;
    justify-content: end;
    width: 100%;

    .btn-contest {
        min-width: 151px;
        margin-left: 24px;
    }

    .dropdown-selected-text {
        min-width: 111px;
        width: 100%;
    }

    .dropdown-selected {
        max-width: 100%;
    }

    .teacher-panel__dropdown-sort {
        width: 171px;
    }

    .teacher-panel__dropdown-role {
        width: 100%;
        max-width: 318px;

        .dropdown-selected-text {
            min-width: 120px;
        }
    }

    @media (max-width: $lg) {
        .btn-contest {
            margin-left: 8px;
        }

        .teacher-panel__dropdown-role {
            max-width: 206px;
        }
    }

    @media (max-width: $md) {
        width: 100%;
        flex-wrap: wrap;
        gap: 20px;
        padding: 0;

        .teacher-panel__dropdown-role {
            width: 100%;
            max-width: 100%;

            .dropdown-selected {
                width: 100%;
                max-width: 100%;
            }
        }

        .btn-contest {
            margin-left: 0;
            width: calc(100% - 20px - 171px);
        }
    }

    @media (max-width: $sm) {
        flex-direction: column;

        .teacher-panel__dropdown-sort {
            width: 100%;
            max-width: 100%;
        }

        .btn-contest {
            margin-left: 0;
            width: 100%;
        }
    }

    @media (max-width: $sm) {
        width: 100%;
    }
}

.teacher-panel__btn-request {
    padding: 16px 0 0 16px;
    @media (max-width: $md) {
        padding: 0 0 0 16px;
    }

    @media (max-width: $sm) {
        padding: 0;
    }
}

.btn-request-contest {
    border: 2px solid var(--roseBege);
    width: 206px;
    vertical-align: middle;
    text-align: center;
    background-color: rgba(255, 255, 255, 0);
    color: var(--roseBege);
    cursor: pointer;
    box-sizing: border-box;

    @media (max-width: $sm) {
        width: 100%;
    }
}

.teacher-wpaper {
    flex-grow: 1;
    background: var(--white);
    padding-bottom: 20px;
}

.teacher-container {
    max-width: 1560px;
    padding: 24px 60px 20px 60px;
    margin: 0 auto;
    box-sizing: border-box;

    @media (max-width: $md) {
        padding: 24px 40px;
    }

    @media (max-width: 390px) {
        padding: 24px 16px;
    }
}

.teacher-contnent {
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 24px;
    margin-bottom: 24px;
}

.teacher-subtitle__wraper {
    display: flex;
    align-items: center;
    gap: 16px;
}

.teacher-subtitle__line {
    max-width: 50%;
    width: 100%;
    height: 2px;
    background: var(--dark);
}

.teacher-subtitle__title {
    flex-shrink: 0;
    color: var(--dark);
}

.teacher-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.teacher__item {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 32px auto;
    grid-template-areas:
        'teacher-deccription teacher-directions'
        'teacher-deccription  teacher-info';
    padding: 16px;
    border-bottom: 2px solid var(--roseBege);
    gap: 56px 0;

    @media (max-width: $lg) {
        grid-template-columns: 1fr;
        grid-template-rows: 32px auto;
        grid-template-areas:
            'teacher-directions'
            'teacher-deccription '
            'teacher-info';
        gap: 20px 0;
    }

    @media (max-width: $sm) {
        grid-template-rows: auto;
    }

    @media (max-width: 390px) {
        padding: 0 0 16px 0;
    }
}

.teacher__item:hover {
    background: var(--lightBege);

    @media (max-width: $sm) {
        background: unset;
    }
}

.teacher__decription {
    grid-area: teacher-deccription;
    max-width: 652px;
    color: var(--dark);

    @media (max-width: $xl) {
        max-width: 100%;
    }
}

.teacher__directions {
    justify-self: end;
    grid-area: teacher-directions;
    display: flex;
    justify-content: flex-end;
    gap: 16px;

    @media (max-width: $sm) {
        flex-wrap: wrap;
        flex-grow: 1;
        justify-content: space-between;
        width: 100%;
    }
}

.teacher__direction {
    padding: 4px 8px;
    background: var(--roseBege);
    color: var(--white);

    @media (max-width: 390px) {
        font-size: 12px;
    }
}

.teacher__info {
    grid-area: teacher-info;
    justify-self: end;
    display: flex;
    gap: 16px;
    justify-content: flex-end;
    align-items: flex-end;

    @media (max-width: 390px) {
        flex-wrap: wrap;
        width: 100%;
        gap: 8px;
        flex-direction: column;
    }
}

.teacher__info-btn {
    @media (max-width: 390px) {
        flex-grow: 1;
        justify-content: center;
        width: 100%;
        max-width: 100%;
    }
}

.teacher__publication {
    max-width: 136px;
    text-align: end;
    margin-top: 4px;
    color: var(--dark);
}
</style>
