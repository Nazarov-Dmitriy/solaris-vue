<template>
    <section class="uc-portfolio">
        <div class="uc-portfolio__container">
            <DropdownComponent
                class="uc-portfolio__dropdown"
                v-model:modelValue="selected"
                :options="option"
            />
            <p v-if="isLoading" class="uc-portfolio__message">
                Загрузка портфолио...
            </p>
            <p v-else-if="errorMessage" class="uc-portfolio__message uc-portfolio__message--error">
                {{ errorMessage }}
            </p>
            <p v-else-if="!data.length" class="uc-portfolio__message">
                Портфолио пока пустое
            </p>
            <div v-else class="uc-portfolio__table-container">
                <table class="uc-portfolio__table">
                    <thead>
                        <tr>
                            <th class="uc-portfolio__head-title">Название конкурса</th>
                            <th class="uc-portfolio__head-role">Название роли</th>
                            <th class="uc-portfolio__head-teacher">Наставник</th>
                            <th class="uc-portfolio__head-money">Солярики</th>
                            <th class="uc-portfolio__head-balls">Баллы</th>
                            <th class="uc-portfolio__head-status">Статус</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="el in renderList" :key="el.id">
                            <td class="uc-portfolio__title">
                                {{ el.title }}
                            </td>
                            <td class="uc-portfolio__role">
                                <p v-for="role in el.role" :key="role">
                                    {{ role }}
                                </p>
                            </td>
                            <td class="uc-portfolio__teacher">
                                {{ el.teacher }}
                            </td>
                            <td class="uc-portfolio__money">
                                {{ el.money }}
                            </td>
                            <td class="uc-portfolio__balls">
                                {{ el.balls }}
                            </td>
                            <td class="uc-portfolio__status">
                                {{ el.status }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-if="!isLoading && !errorMessage && data.length" class="uc-portfolio__table-container tablet">
                <table v-for="el in renderList" :key="el.id" class="uc-portfolio__table tablet">
                    <thead>
                        <tr>
                            <th colspan="5" class="uc-portfolio__title" @click="setActive(el.id)">
                                {{ el.title }}
                            </th>
                        </tr>
                    </thead>
                    <tbody v-if="active.includes(el.id)">
                        <tr>
                            <th class="uc-portfolio__head-role">Название роли</th>
                            <th class="uc-portfolio__head-teacher">Наставник</th>
                            <th class="uc-portfolio__head-money">Солярики</th>
                            <th class="uc-portfolio__head-balls">Баллы</th>
                            <th class="uc-portfolio__head-status">Статус</th>
                        </tr>
                        <tr>
                            <td class="uc-portfolio__role">
                                <p v-for="role in el.role" :key="role">
                                    {{ role }}
                                </p>
                            </td>
                            <td class="uc-portfolio__teacher">
                                {{ el.teacher }}
                            </td>
                            <td class="uc-portfolio__money">
                                {{ el.money }}
                            </td>
                            <td class="uc-portfolio__balls">
                                {{ el.balls }}
                            </td>
                            <td class="uc-portfolio__status">
                                {{ el.status }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-if="!isLoading && !errorMessage && data.length" class="uc-portfolio__table-container mobile">
                <table v-for="el in renderList" :key="el.id" class="uc-portfolio__table mobile">
                    <thead>
                        <tr>
                            <th colspan="6" class="uc-portfolio__title" @click="setActiveMobile(el.id)">
                                {{ el.title }}
                            </th>
                        </tr>
                    </thead>
                    <tbody v-if="activeMobile.includes(el.id)">
                        <tr>
                            <th class="uc-portfolio__head-role" colspan="3">Название роли</th>
                            <th class="uc-portfolio__head-teacher" colspan="3">Наставник</th>
                        </tr>
                        <tr>
                            <td class="uc-portfolio__role" colspan="3">
                                <p v-for="role in el.role" :key="role">
                                    {{ role }}
                                </p>
                            </td>
                            <td colspan="3" class="uc-portfolio__teacher">
                                {{ el.teacher }}
                            </td>
                        </tr>
                        <tr>
                            <th class="uc-portfolio__head-money" colspan="2">Солярики</th>
                            <th class="uc-portfolio__head-balls" colspan="2">Баллы</th>
                            <th class="uc-portfolio__head-status" colspan="2">Статус</th>
                        </tr>
                        <tr>
                            <td class="uc-portfolio__money" colspan="2">
                                {{ el.money }}
                            </td>
                            <td class="uc-portfolio__balls" colspan="2">
                                {{ el.balls }}
                            </td>
                            <td class="uc-portfolio__status" colspan="2">
                                {{ el.status }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <PaginationComponent
                v-if="!isLoading && !errorMessage && data.length"
                :per-page="perPage"
                :current-page="currentPage"
                :total-pages="totalPages"
                :data="data"
                show-piganation-element="arrow"
                :color="{ main: '#dda06b', hover: '#de4700' }"
                @set-list="getRenderList"
                @set-page="setPage"
            />
        </div>
    </section>
</template>

<script setup>
import { computed, inject, onMounted, ref, watch } from 'vue'
import PaginationComponent from '@/components/pagination/PaginationComponent.vue'
import DropdownComponent from '@/components/dropdown/DropdownComponent.vue'

const userService = inject('UserService')

const selected = ref('Новые вверху')
const active = ref([])
const activeMobile = ref([])
const renderList = ref([])
const sourceData = ref([])
const data = ref([])
const isLoading = ref(false)
const errorMessage = ref('')
const currentPage = ref(1)
const perPage = 5
const totalPages = computed(() => Math.ceil(data.value.length / perPage))

const option = computed(() => {
    const roles = [...new Set(sourceData.value.flatMap(item => item.role))]
        .filter(Boolean)
        .sort((a, b) => a.localeCompare(b, 'ru'))

    return [
        'Новые вверху',
        'Старые вверху',
        ...roles.map(role => `Роль: ${role}`)
    ]
})

onMounted(loadPortfolio)

watch(selected, () => {
    applyPortfolioView()
    currentPage.value = 1
})

function getRenderList(list) {
    renderList.value = list
}

function setPage(page) {
    currentPage.value = page
}

async function loadPortfolio() {
    if (!userService) {
        errorMessage.value = 'Сервис пользователя недоступен'
        return
    }

    isLoading.value = true
    errorMessage.value = ''

    try {
        const response = await userService.getUserPortfolio()
        const items = Array.isArray(response.data?.data) ? response.data.data : []
        sourceData.value = items.map(mapPortfolioItem)
        applyPortfolioView()
    } catch (error) {
        console.error('Portfolio loading error', error)
        errorMessage.value = 'Не удалось загрузить портфолио'
    } finally {
        isLoading.value = false
    }
}

function mapPortfolioItem(item) {
    return {
        id: item.id,
        title: item.text || 'Без названия',
        role: Array.isArray(item.roles) ? item.roles : [],
        money: item.solariki ?? 0,
        balls: item.balls ?? 0,
        status: item.status || '-',
        teacher: item.nastavnik?.full_name || '-',
        createdAt: item.created_at
    }
}

function applyPortfolioView() {
    const selectedValue = selected.value || 'Новые вверху'
    const rolePrefix = 'Роль: '
    const filteredList = selectedValue.startsWith(rolePrefix)
        ? sourceData.value.filter(item => item.role.includes(selectedValue.slice(rolePrefix.length)))
        : sourceData.value

    data.value = sortPortfolio(filteredList)
}

function sortPortfolio(list) {
    const sortedList = [...list]

    sortedList.sort((a, b) => {
        const firstDate = getDateTime(a.createdAt)
        const secondDate = getDateTime(b.createdAt)

        return selected.value === 'Старые вверху'
            ? firstDate - secondDate
            : secondDate - firstDate
    })

    return sortedList
}

function getDateTime(date) {
    if (!date) return 0

    const [day, month, rest] = date.split('.')
    const [year, time = '00:00:00'] = (rest || '').split(' ')
    const [hours = '0', minutes = '0', seconds = '0'] = time.split(':')

    return new Date(
        Number(year),
        Number(month) - 1,
        Number(day),
        Number(hours),
        Number(minutes),
        Number(seconds)
    ).getTime()
}

function setActive(id) {
    if (!active.value.includes(id)) {
        active.value.push(id)
    } else {
        active.value.splice(active.value.indexOf(id), 1)
    }
}
function setActiveMobile(id) {
    if (!activeMobile.value.includes(id)) {
        activeMobile.value.push(id)
    } else {
        activeMobile.value.splice(activeMobile.value.indexOf(id), 1)
    }
}
</script>

<style lang="scss" scoped>
.uc-portfolio {
    background-color: var(--white);
    display: flex;
    flex-grow: 1;
}

.uc-portfolio__container {
    max-width: 1560px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 24px 60px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;

    .dropdown-icon {
        width: 24px;
        height: 24px;
    }

    @media (max-width: $lg) {
        padding: 24px 40px;
    }

    @media (max-width: $md) {
        padding: 24px 16px;
    }
}

.uc-portfolio__dropdown :deep(.dropdown-icon) {
    width: 12px;
}

.uc-dropdown__portfolio {
    width: 243px;
}

.uc-portfolio__message {
    color: var(--dark);
    font-size: 18px;
    line-height: 1.5;
}

.uc-portfolio__message--error {
    color: #de4700;
}

.uc-portfolio__table-container {
    overflow-x: auto;

    @media (min-width: $lg) {
        overflow-x: visible;
    }
}

.uc-portfolio__table {
    height: fit-content;
    border-collapse: collapse;

    @media (max-width: $lg) {
        overflow: auto;
    }
}

thead th:nth-child(1) {
    min-width: 222px;
    max-width: 722px;
}

thead th:nth-child(2) {
    width: 158px;
    min-width: 158px;
    box-sizing: border-box;
}

thead th:nth-child(3) {
    width: 180px;
}

thead th:nth-child(4) {
    width: 112px;
}

thead th:nth-child(5) {
    min-width: 100px;
    max-width: 112px;
    box-sizing: border-box;
}

thead th:nth-child(6) {
    min-width: 80px;
    max-width: 156px;
    box-sizing: border-box;
}

tbody tr {
    vertical-align: top;
    border-bottom: 16px solid #fff;
}

.uc-portfolio__table th,
.uc-portfolio__table td {
    text-align: center;
    font-size: 16px;
    color: var(--dark);
    line-height: 1.5;
    font-weight: 400;
}

.uc-portfolio__table th {
    padding: 16px;
}

.uc-portfolio__table th:first-child {
    text-align: start;
}

.uc-portfolio__table td:first-child {
    text-align: start;
}

.uc-portfolio__table td {
    padding: 8px;
}

.uc-portfolio__table tbody td {
    background: var(--lightBege);
}

.uc-portfolio__table td p {
    text-align: center;
}

.uc-portfolio__table.tablet {
    display: none;

    @media (max-width: 991px) {
        display: table;

        thead .uc-portfolio__title {
            background: var(--lightBege);
            padding: 8px;
            cursor: pointer;
        }

        tbody th:first-child {
            text-align: center;
        }

        tbody td:first-child {
            text-align: center;
        }
    }

    tbody tr {
        border-bottom: none;

        thead th:nth-child(1) {
            min-width: 158px;
        }
    }

    @media (max-width: $sm) {
        display: none;
    }
}

.uc-portfolio__table.mobile {
    display: none;

    @media (max-width: $sm) {
        display: table;

        thead .uc-portfolio__title {
            background: var(--lightBege);
            padding: 8px;
            cursor: pointer;
        }

        tbody td,
        tbody th,
        tbody tr {
            text-align: center;
            margin-bottom: 0;
            border-bottom: none;
            padding: 8px;
        }
    }
}
</style>
