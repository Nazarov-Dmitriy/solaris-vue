<template>
    <section class="uc-portfolio">
        <div class="uc-portfolio__container">
            <DropdownComponent
                v-model:modelValue="selected"
                :options="option"
            />
            <table class="uc-portfolio__table">
                <thead>
                    <tr>
                        <th class="uc-portfolio__head-title">
                            Название конкурса
                        </th>
                        <th class="uc-portfolio__head-role">
                            Название роли
                        </th>
                        <th class="uc-portfolio__head-teacher">
                            Наставник
                        </th>
                        <th class="uc-portfolio__head-money">
                            Солярики
                        </th>
                        <th class="uc-portfolio__head-balls">
                            Баллы
                        </th>
                        <th class="uc-portfolio__head-status">
                            Статус
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="el in renderList"
                        :key="el.id"
                    >
                        <td class="uc-portfolio__title">
                            {{ el.title }}
                        </td>
                        <td class="uc-portfolio__role">
                            <p
                                v-for="role in el.role"
                                :key="role"
                            >
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
            <table
                v-for="el in renderList"
                :key="el.id"
                class="uc-portfolio__table tablet"
            >
                <thead>
                    <tr>
                        <th
                            colspan="5"
                            class="uc-portfolio__title"
                            @click="setActive(el.id)"
                        >
                            {{ el.title }}
                        </th>
                    </tr>
                </thead>
                <tbody v-if="active.includes(el.id)">
                    <tr>
                        <th class="uc-portfolio__head-role">
                            Название роли
                        </th>
                        <th class="uc-portfolio__head-teacher">
                            Наставник
                        </th>
                        <th class="uc-portfolio__head-money">
                            Солярики
                        </th>
                        <th class="uc-portfolio__head-balls">
                            Баллы
                        </th>
                        <th class="uc-portfolio__head-status">
                            Статус
                        </th>
                    </tr>
                    <tr>
                        <td class="uc-portfolio__role">
                            <p
                                v-for="role in el.role"
                                :key="role"
                            >
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
            <table
                v-for="el in renderList"
                :key="el.id"
                class="uc-portfolio__table mobile"
            >
                <thead>
                    <tr>
                        <th
                            colspan="6"
                            class="uc-portfolio__title"
                            @click="setActiveMobile(el.id)"
                        >
                            {{ el.title }}
                        </th>
                    </tr>
                </thead>
                
                <tbody v-if="activeMobile.includes(el.id)">
                    <tr>
                        <th
                            class="uc-portfolio__head-role"
                            colspan="3"
                        >
                            Название роли
                        </th>
                        <th
                            class="uc-portfolio__head-teacher"
                            colspan="3"
                        >
                            Наставник
                        </th>
                    </tr>
                    <tr>
                        <td
                            class="uc-portfolio__role"
                            colspan="3"
                        >
                            <p
                                v-for="role in el.role"
                                :key="role"
                            >
                                {{ role }}
                            </p>
                        </td>
                        <td
                            colspan="3"
                            class="uc-portfolio__teacher"
                        >
                            {{ el.teacher }}
                        </td>
                    </tr>
                    <tr>
                        <th
                            class="uc-portfolio__head-money"
                            colspan="2"
                        >
                            Солярики
                        </th>
                        <th
                            class="uc-portfolio__head-balls"
                            colspan="2"
                        >
                            Баллы
                        </th>
                        <th
                            class="uc-portfolio__head-status"
                            colspan="2"
                        >
                            Статус
                        </th>
                    </tr>
                    <tr>
                        <td
                            class="uc-portfolio__money"
                            colspan="2"
                        >
                            {{ el.money }}
                        </td>
                        <td
                            class="uc-portfolio__balls"
                            colspan="2"
                        >
                            {{ el.balls }}
                        </td>
                        <td
                            class="uc-portfolio__status"
                            colspan="2"
                        >
                            {{ el.status }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <PaginationComponent
                :perpage="5"
                :data="data"
                show-piganation-element="arrow"
                :color="{ main: '#dda06b', hover: '#de4700' }"
                @set-list="getRenderList"
            />
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import PaginationComponent from '@/components/pagination/PaginationComponent.vue';
import DropdownComponent from '@/components/dropdown/DropdownComponent.vue';

const selected = ref("")
const active = ref([])
const activeMobile = ref([])
const renderList = ref([])

const data = [
    {
        id: 1,
        title: "Городской конкурс сочинений  «Деды наших дедов – герои Отечества», посвященного 79-ойГородской конкурс сочинений  «Деды наших дедов – герои Отечества», по годовщине Победы советского народа в Великой Отечественной войне",
        role: ["журналист", "историк", "патриот", "юнармеец"],
        money: 300,
        balls: 200,
        status: '1 место 1 этап',
        teacher: 'Иванова М.И'
    },
    {
        id: 11,
        title: " «Деды наших дедов – герои Отечества», посвященного 79-ойГородской конкурс сочинений  «Деды наших дедов – герои Отечества», по годовщине Победы советского народа в Великой Отечественной войне",
        role: ["журналист", "историк", "патриот", "юнармеец"],
        money: 300,
        balls: 200,
        status: '1 место 1 этап',
        teacher: 'Иванова М.И'

    },
    {
        id: 2,
        title: "Городской конкурс сочинений  «Деды наших дедов – герои Отечества», посвященного 79-ойГородской конкурс сочинений  «Деды наших дедов – герои Отечества», по годовщине Победы советского народа в Великой Отечественной войне",
        role: ["журналист", "историк", "патриот", "юнармеец"],
        money: 300,
        balls: 400,
        status: '1 место 1 этап',
        teacher: 'Иванова М.И'

    },
    {
        id: 3,
        title: " «Деды наших дедов – герои Отечества», посвященного 79-ойГородской конкурс сочинений  «Деды наших дедов – герои Отечества», по годовщине Победы советского народа в Великой Отечественной войне",
        role: ["журналист", "историк", "патриот", "юнармеец"],
        money: 700,
        balls: 200,
        status: '1 место 1 этап',
        teacher: 'Иванова М.И'

    },
    {
        id: 4,
        title: "Городской конкурс сочинений  «Деды наших дедов – герои Отечества», посвященного 79-ойГородской конкурс сочинений  «Деды наших дедов – герои Отечества», по годовщине Победы советского народа в Великой Отечественной войне",
        role: ["журналист", "историк", "патриот", "юнармеец"],
        money: 300,
        balls: 200,
        status: '1 место 1 этап',
        teacher: 'Иванова М.И'

    },
    {
        id: 6,
        title: "«Деды наших дедов – герои Отечества», посвященного 79-ойГородской конкурс сочинений  «Деды наших дедов – герои Отечества», по годовщине Победы советского народа в Великой Отечественной войне",
        role: ["журналист", "историк", "патриот", "юнармеец"],
        money: 200,
        balls: 200,
        status: '1 место 1 этап',
        teacher: 'Иванова М.И'

    },
    {
        id: 7,
        title: "Городской конкурс сочинений  «Деды наших дедов – герои Отечества», посвященного 79-ойГородской конкурс сочинений  «Деды наших дедов – герои Отечества», по годовщине Победы советского народа в Великой Отечественной войне",
        role: ["журналист", "историк", "патриот", "юнармеец"],
        money: 500,
        balls: 200,
        status: '1 место 1 этап',
        teacher: 'Иванова М.И'
    },
    {
        id: 8,
        title: " «Деды наших дедов – герои Отечества», посвященного 79-ойГородской конкурс сочинений  «Деды наших дедов – герои Отечества», по годовщине Победы советского народа в Великой Отечественной войне",
        role: ["журналист", "историк", "патриот", "юнармеец"],
        money: 500,
        balls: 200,
        status: '1 место 1 этап',
        teacher: 'Иванова М.И'
    },
    {
        id: 9,
        title: "Городской конкурс сочинений  «Деды наших дедов – герои Отечества», посвященного 79-ойГородской конкурс сочинений  «Деды наших дедов – герои Отечества», по годовщине Победы советского народа в Великой Отечественной войне",
        role: ["журналист", "историк", "патриот", "юнармеец"],
        money: 500,
        balls: 200,
        status: '1 место 1 этап',
        teacher: 'Иванова М.И'
    },
    {
        id: 17,
        title: " «Деды наших дедов – герои Отечества», посвященного 79-ойГородской конкурс сочинений  «Деды наших дедов – герои Отечества», по годовщине Победы советского народа в Великой Отечественной войне",
        role: ["журналист", "историк", "патриот", "юнармеец"],
        money: 500,
        balls: 200,
        status: '1 место 1 этап',
        teacher: 'Иванова М.И'
    },
    {
        id: 27,
        title: "Городской конкурс сочинений  «Деды наших дедов – герои Отечества», посвященного 79-ойГородской конкурс сочинений  «Деды наших дедов – герои Отечества», по годовщине Победы советского народа в Великой Отечественной войне",
        role: ["журналист", "историк", "патриот", "юнармеец"],
        money: 500,
        balls: 200,
        status: '1 место 1 этап',
        teacher: 'Иванова М.И'
    },

];

const option = [
    'сортировка 1',
    'сортировка 2',
    'сортировка 3',
    'сортировка 4',
    'сортировка 5',
    'сортировка 6',
]

function getRenderList (list) {
    renderList.value = list
}

function setActive (id) {
    if (!active.value.includes(id)) {
        active.value.push(id)
    } else {
        active.value.splice(active.value.indexOf(id), 1)
    }
}
function setActiveMobile (id) {
    if (!activeMobile.value.includes(id)) {
        activeMobile.value.push(id)
    } else {
        activeMobile.value.splice(activeMobile.value.indexOf(id), 1)
    }
}
</script>
<style lang="scss">
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

    @media(max-width: 991px) {
        padding: 24px 40px;
    }

    @media(max-width:576px) {
        padding: 24px 16px;
    }
}

.uc-dropdown__portfolio {
    width: 243px;
}

.uc-portfolio__table {
    height: fit-content;
    border-collapse: collapse;

    @media(max-width: 991px) {
        display: none;
    }
}

thead th:nth-child(1) {
    min-width: 222px;
    max-width: 722px;
}

thead th:nth-child(2) {
    width: 158px;
    min-width: 158px;
    box-sizing: border-box
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
    box-sizing: border-box
}

thead th:nth-child(6) {
    min-width: 80px;
    max-width: 156px;
    box-sizing: border-box
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
    background: var(--lightBege)
}

.uc-portfolio__table td p {
    text-align: center;
}

.uc-portfolio__table.tablet {
    display: none;

    @media(max-width: 991px) {
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

    @media(max-width: $sm) {
        display: none;
    }
}

.uc-portfolio__table.mobile {
    display: none;

    @media(max-width: $sm) {
        display: table;

        thead .uc-portfolio__title {
            background: var(--lightBege);
            padding: 8px;
            cursor: pointer;
        }

        tbody td,
        tbody th,
        tbody tr  {
            text-align: center;
            margin-bottom: 0;
            border-bottom:none;
            padding: 8px;
        }
    }
}
</style>