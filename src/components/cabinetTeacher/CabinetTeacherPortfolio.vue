<template>
    <section class="section-teacher-portfolio">
        <div class="teacher-portfolio-panel-wraper">
            <div class="teacher-portfolio-panel__container">
                <div class="teacher-portfolio-panel">
                    <div class="teacher-portfolio__point">
                        <div>
                            <p class="p1">
                                Оценка качества деятельности 
                                <span class="h3">
                                    100 баллов
                                </span>
                            </p>
                        </div>
                        <div>
                            <p class="p1">
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
                            :options="notificationSort"
                        />
                        <button class="btn btn-teacher-portfolio">
                            Добавить
                        </button>
                    </div>

                    <!-- <img
                        class="teacher-portfolio-panel__coin"
                        src="@/assets/image/cabinet-teacher/notification-solaric.svg"
                        alt="solaric-img"
                    > -->

                    <!-- <img
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
                    > -->
                </div>
            </div>
        </div>
        <div class="teacher-portfolio-wpaper">
            <div class="teacher-portfolio-container">
                <div class="teacher-portfolio-contnent">
                    <div
                        v-if="notifications.length > 0"
                        class="teacher-portfolio-list"
                    >
                        <div
                            v-for="el in renderList"
                            :key="el.id"
                            class="teacher-portfolio__item"
                        > 
                            <div class="teacher-portfolio__info">
                                <p class="teacher-portfolio__publication p2">
                                    {{ el.notification_date }}
                                </p>
                            </div>
                            <p 
                                class="teacher-portfolio__decription h3"
                                :class="{'active': readNotification.includes(el.id)}"
                                @click="activeMenu(el.id)"
                            >
                                {{ el.message }}
                            </p>
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
                :perpage="6"
                :data="notifications"
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

const readNotification = ref([]);

function activeMenu (id){
    if (!readNotification.value.includes(id)) {
        readNotification.value.push(id)
    }
}

const notifications = [
    {
        id: 1,
        message: "Иванов Генадий Михайлович, 6б класс, подал заявку на наставничество в конкурсе «Деды наших дедов – герои Отечества».",
        notification_date: "02.03.2024",
    },
    {
        id: 2,
        message: "Иванов Генадий Михайлович, 6б класс, подал заявку на наставничество в конкурсе «Деды наших дедов – герои Отечества».",
        notification_date: "03.03.2024",
    },
    {
        id: 3,
        message: "Иванов Генадий Михайлович, 6б класс, подал заявку на наставничество в конкурсе «Деды наших дедов – герои Отечества».",
        notification_date: "04.03.2024",
    },
    {
        id: 4,
        message: "Иванов Генадий Михайлович, 6б класс, подал заявку на наставничество в конкурсе «Деды наших дедов – герои Отечества».",
        notification_date: "02.03.2024",
    },
    {
        id: 5,
        message: "Иванов Генадий Михайлович, 6б класс, подал заявку на наставничество в конкурсе «Деды наших дедов – герои Отечества».",
        notification_date: "02.03.2024",
    },
    {
        id: 6,
        message: "Иванов Генадий Михайлович, 6б класс, подал заявку на наставничество в конкурсе «Деды наших дедов – герои Отечества».",
        notification_date: "02.03.2024",
    },
    {
        id: 7,
        message: "Иванов Генадий Михайлович, 6б класс, подал заявку на наставничество в конкурсе «Деды наших дедов – герои Отечества».",
        notification_date: "02.03.2024",
    },
    {
        id: 8,
        message: "Иванов Генадий Михайлович, 6б класс, подал заявку на наставничество в конкурсе «Деды наших дедов – герои Отечества».",
        notification_date: "02.03.2024",
    },
    {
        id: 9,
        message: "Иванов Генадий Михайлович, 6б класс, подал заявку на наставничество в конкурсе «Деды наших дедов – герои Отечества».",
        notification_date: "02.03.2024",
    },
    {
        id: 10,
        message: "Иванов Генадий Михайлович, 6б класс, подал заявку на наставничество в конкурсе «Деды наших дедов – герои Отечества».",
        notification_date: "02.03.2024",
    },
    {
        id: 11,
        message: "Иванов Генадий Михайлович, 6б класс, подал заявку на наставничество в конкурсе «Деды наших дедов – герои Отечества».",
        notification_date: "02.03.2024",
    },
    {
        id: 12,
        message: "Иванов Генадий Михайлович, 6б класс, подал заявку на наставничество в конкурсе «Деды наших дедов – герои Отечества».",
        notification_date: "02.03.2024",
    },
    {
        id: 13,
        message: "Иванов Генадий Михайлович, 6б класс, подал заявку на наставничество в конкурсе «Деды наших дедов – герои Отечества».",
        notification_date: "02.03.2024",
    },
    {
        id: 14,
        message: "Иванов Генадий Михайлович, 6б класс, подал заявку на наставничество в конкурсе «Деды наших дедов – герои Отечества».",
        notification_date: "02.03.2024",
    },
    {
        id: 15,
        message: "Иванов Генадий Михайлович, 6б класс, подал заявку на наставничество в конкурсе «Деды наших дедов – герои Отечества».",
        notification_date: "02.03.2024",
    },
    {
        id: 16,
        message: "Иванов Генадий Михайлович, 6б класс, подал заявку на наставничество в конкурсе «Деды наших дедов – герои Отечества».",
        notification_date: "02.03.2024",
    },
    {
        id: 17,
        message: "Иванов Генадий Михайлович, 6б класс, подал заявку на наставничество в конкурсе «Деды наших дедов – герои Отечества».",
        notification_date: "02.03.2024",
    },
    {
        id: 18,
        message: "Иванов Генадий Михайлович, 6б класс, подал заявку на наставничество в конкурсе «Деды наших дедов – герои Отечества».",
        notification_date: "02.03.2024",
    },
];


const notificationSort = [
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
    padding: 36px 60px;
    margin: auto;
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    .dropdown-selected-text {
        min-width: 107px;
    }
    
    @media(max-width: $md) {
        padding: 48px 40px;
    }

    @media(max-width: 390px) {
        padding: 48px 16px;
        
        .teacher-portfolio-panel__dropdown-sort {
            max-width: 100%;
            width: 100%;

            .dropdown-selected {
                max-width: 100%;
                width: 100%;
            }
        }
    }
}

.teacher-portfolio__point {
    padding: 4px 0 4px 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    div {
        align-items: center;
    }

    p {
        color: var(--white);
        display: flex;
        gap: 24px;
        align-items: center;
    }
}

.teacher-portfolio__buttons {
    padding: 16px;
    display: flex;
    justify-content: space-between;
    gap: 40px;
}

.teacher-portfolio-panel__coin {
    position: absolute;
    height: 120px;
    bottom: 10px;
    right: 620px;
    @media (max-width: $xxl) {
        right: 365px;
    }
    @media (max-width: $xl) {
        right: 120px;
    }
    @media (max-width: $lg) {
        right: 60px;
    }
    @media (max-width: $md) {
        right: 40px;
    }
    @media (max-width: 390px) {
        display: none;
    }
}

.teacher-portfolio-wpaper {
    flex-grow: 1;
    background: var(--white);
}

.teacher-portfolio-container {
    max-width: 1560px;
    padding: 24px 60px 20px 60px;
    margin: 0 auto;
    box-sizing: border-box;

    @media(max-width: $lg) {
        padding: 24px 40px;
    }

    @media(max-width: $sm) {
        padding: 24px 16px;
    }

    @media(max-width: 390px) {
        padding: 24px 0;
    }
}

.teacher-portfolio-contnent {
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 24px;
    margin-bottom: 24px;
}

.teacher-portfolio-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.teacher-portfolio__item {
    display: flex;
    align-items: center;
    padding: 16px;
    border-bottom: 2px solid var(--roseBege);
    gap: 16px;

    &:hover {
        background: var(--lightBege)
    }

    @media(max-width: $sm) {
        flex-direction: column;
        align-items: flex-start;
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