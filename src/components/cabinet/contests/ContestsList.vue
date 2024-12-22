<template>
    <section class="section-contests">
        <div v-if="user === 'teacher'" class="teacher-panel-wraper">
            <div class="teacher-panel__container">
                <div class="teacher-panel">
                    <div class="teacher-under-panel-group">
                        <div class="teacher-panel__btn-request">
                            <button
                                class="btn btn-request-contest"
                                @click="$router.push('/cabinet/teacher/offer-contests')"
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
                            <div class="teacher-panel-group-down">
                                <DropdownComponent
                                    v-model:modelValue="sort"
                                    class="teacher-panel__dropdown-sort"
                                    :options="optionSort"
                                />
                                <button class="btn btn-contest" @click="filterContestsByRole">
                                    Мои конкурсы
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="uc-panel-wraper">
            <div class="uc-panel__container">
                <div class="uc-panel">
                    <div class="uc-panel-group">
                        <DropdownComponent
                            v-model:modelValue="role"
                            class="uc-panel__dropdown-role"
                            :options="optionRole"
                        />
                        <div class="teacher-panel-group-down">
                            <DropdownComponent
                                v-model:modelValue="sort"
                                class="teacher-panel__dropdown-sort"
                                :options="optionSort"
                            />
                            <button class="btn btn-contest" @click="filterContestsByRole">
                                Мои конкурсы
                            </button>
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

                    <div v-if="list.length" class="teacher-list">
                        <div v-for="el in renderList" :key="el.id" class="teacher__item">
                            <p class="teacher__decription h3">{{ el.name }}</p>
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
                                <button class="teacher__info-btn btn" @click="linkContest(el.id)">
                                    Узнать подробнее
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Пустое состояние -->
                    <p v-else class="p1 teacher-contnent-empty">
                        Здесь отображаются полученные конкурсы, конкурсов пока нет
                    </p>
                </div>
            </div>

            <PaginationComponent
                :perpage="4"
                :data="list"
                :color="{ main: '#1F2A3E', hover: '#dda06b' }"
                @set-list="getRenderList"
            />
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import PaginationComponent from '@/components/pagination/PaginationComponent.vue'
import DropdownComponent from '@/components/dropdown/DropdownComponent.vue'
import { useRouter } from 'vue-router'
import { useCompetitionsStore } from '@/stores/useCompetitions'

const props = defineProps({
    user: {
        type: String,
        default: ''
    },
    contests: {
        type: Array,
        default: () => []
    }
})

const optionRole = ['Выберите роль', 'Журналист', 'Историк', 'Патриот', 'Юнармеец']
const optionSort = ['Новые вверху', 'Новые внизу']
const renderList = ref([])
const role = ref(null)
const sort = ref('Новые вверху')
const list = ref([])
const router = useRouter()

function sortContests() {
    list.value = list.value.sort((a, b) => {
        return sort.value === 'Новые вверху'
            ? new Date(b.publication_date) - new Date(a.publication_date)
            : new Date(a.publication_date) - new Date(b.publication_date)
    })
}

function filterContestsByRole() {
    if (!role.value || role.value === 'Выберите роль') {
        list.value = [...contests.value]
    } else {
        list.value = contests.value.filter((contest) => contest.tags.includes(role.value))
    }
    sortContests()
}

function linkContest(id) {
    if (props.user === 'teacher') {
        router.push(`/cabinet/teacher/contests/${id}`)
    } else {
        router.push(`/cabinet/student/contests/${id}`)
    }
}

const useCompetitions = useCompetitionsStore()
const contests = ref([])

onMounted(async () => {
    try {
        await useCompetitions.fetchCompetitions()
        contests.value = useCompetitions.competitions
        list.value = [...contests.value]
        filterContestsByRole()
        console.log(list.value)
    } catch (error) {
        console.error('Ошибка при получении данных', error)
    }
})

function getRenderList(list) {
    renderList.value = list
}
</script>

<style lang="scss" scoped>
.section-contests {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.teacher-panel-wraper {
    width: 100%;
    background: var(--dark);
}

.teacher-panel-wraper :deep(.dashboard__dropdown-wrapper) {
    width: 100%;
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

    @media (max-width: $md) {
        gap: 20px;
        flex-direction: column;
    }
}

.teacher-panel-group-down {
    display: flex;
    gap: 16px;
    @media (max-width: $lg) {
        width: 100%;
    }
    @media (max-width: $md) {
        flex-direction: column;
    }

    :deep(.dashboard__dropdown-wrapper) {
        max-width: 100%;
        width: 100%;
    }
}

.teacher-panel-group,
.uc-panel-group {
    display: flex;
    gap: 16px;
    padding: 16px 0;
    justify-content: end;
    width: 100%;
    position: relative;
    z-index: 5;

    :deep(.dashboard__dropdown-wrapper) {
        position: relative;
    }

    :deep(.dropdown-icon) {
        position: absolute;
        right: 16px;
        width: auto;
        height: auto;
    }
    .dropdown-selected-text {
        min-width: 111px;
        width: 100%;
    }

    .dropdown-selected {
        max-width: 100%;
    }

    .teacher-panel__dropdown-role {
        width: 100%;
        max-width: 318px;

        .dropdown-selected-text {
            min-width: 120px;
        }
    }

    @media (max-width: $lg) {
        width: 100%;
        flex-wrap: wrap;
        gap: 20px;
        padding: 0;
        justify-content: center;

        .teacher-panel__dropdown-role {
            width: 100%;
            max-width: 100%;

            .dropdown-selected {
                width: 100%;
                max-width: 100%;
            }
        }

        .btn-contest {
            width: 100%;
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

    @media (max-width: $md) {
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

.uc-panel-wraper {
    width: 100%;
    background: var(--dark);
}

.uc-panel__container {
    max-width: 1920px;
    margin: auto;
    position: relative;
}

.uc-panel {
    max-width: 1560px;
    padding: 32px 60px;
    margin: auto;
    position: relative;
    box-sizing: border-box;

    @media (max-width: 991px) {
        padding: 32px 40px;
    }

    @media (max-width: 576px) {
        padding: 32px 16px 80px 16px;
    }
}

.uc-panel__coin {
    position: absolute;
}

.uc-panel__coin:nth-child(1) {
    width: 45px;
    height: 45px;
    top: 7px;
    left: 379px;
    rotate: 86deg;

    @media (max-width: 1440px) {
        left: 314px;
    }

    @media (max-width: 1200px) {
        left: 245px;
    }

    @media (max-width: 991px) {
        top: 5px;
        left: 164px;
    }

    @media (max-width: 768px) {
        top: 10px;
        left: 35px;
    }

    @media (max-width: 576px) {
        top: 249px;
        left: 161px;
    }
}

.uc-panel__coin:nth-child(2) {
    width: 35px;
    height: 35px;
    top: 85px;
    left: 335px;
    rotate: -15deg;

    @media (max-width: 1440px) {
        left: 270px;
    }

    @media (max-width: 1200px) {
        left: 248px;
        top: 103px;
    }

    @media (max-width: 768px) {
        top: 70px;
        left: 151px;
    }

    @media (max-width: 576px) {
        top: 256px;
        left: 291px;
    }
}

.uc-panel__coin:nth-child(3) {
    width: 62px;
    height: 62px;
    top: 68px;
    left: 414px;
    rotate: 36deg;

    @media (max-width: 1440px) {
        left: 348px;
    }

    @media (max-width: 1200px) {
        display: none;
    }
}

.uc-panel__hair {
    position: absolute;
    left: 153px;
    bottom: 0;

    @media (max-width: 1440px) {
        left: 93px;
    }

    @media (max-width: 1200px) {
        left: 53px;
        height: 114px;
        width: 171px;
    }

    @media (max-width: 991px) {
        left: 40px;
        height: 150px;
        width: 229px;
    }

    @media (max-width: 768px) {
        left: 11px;
        height: 141px;
        width: 207px;
    }

    @media (max-width: 576px) {
        left: 16px;
        height: 70px;
        width: 114px;
    }
}

.uc-panel-group {
    display: flex;
    gap: 16px;
    padding: 16px;
    justify-content: end;

    @media (max-width: 991px) {
        width: 423px;
        margin-left: auto;
        flex-wrap: wrap;
        gap: 20px;
        padding: 0;

        .uc-panel__dropdown-role {
            width: 423px;
            max-width: 100%;

            .dropdown-selected {
                width: 100%;
                max-width: 100%;
            }
        }

        .btn-contest {
            margin-left: 0;
            width: 236px;
            @media (max-width: $lg) {
                width: 100%;
            }
        }
    }

    @media (max-width: $md) {
        width: 58%;

        .uc-panel__dropdown-role {
            width: 100%;
            max-width: 100%;
        }

        .uc-panel__dropdown-sort {
            width: 100%;
            max-width: 100%;

            .dropdown-selected {
                width: 100%;
                max-width: 100%;
            }
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

.uc-dropdowns {
    display: flex;
    gap: 16px;
}

.uc-dropdown__role {
    width: 318px;

    @media (max-width: 1200px) {
        max-width: 252px;
    }

    @media (max-width: 991px) {
        width: 100%;
        max-width: none;
    }
}

.uc-dropdown__sort {
    width: 171px;

    @media (max-width: 991px) {
        flex-grow: 1;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
}

.btn-contest {
    width: 100%;

    &--student {
        width: auto;
    }
}
</style>
