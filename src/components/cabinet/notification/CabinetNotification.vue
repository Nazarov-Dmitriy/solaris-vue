<template>
    <section class="section-notification">
        <div class="notification-panel-wraper">
            <div class="notification-panel__container">
                <div class="notification-panel">
                    <DropdownComponent
                        v-model:modelValue="sort"
                        class="notification-panel__dropdown-sort"
                        :options="notificationSort"
                    />
                    <img
                        class="notification-panel__coin"
                        src="@/assets/image/cabinet-teacher/notification-solaric.svg"
                        alt="solaric-img"
                    />
                </div>
            </div>
        </div>
        <div class="notification-wpaper">
            <div class="notification-container">
                <div class="notification-contnent">
                    <div
                        v-if="notifications.length > 0"
                        class="notification-list"
                    >
                        <div
                            v-for="el in renderList"
                            :key="el.id"
                            class="notification__item"
                        >
                            <div class="notification__info">
                                <p class="notification__publication p2">
                                    {{ el.notification_date }}
                                </p>
                            </div>
                            <p
                                class="notification__decription h3"
                                :class="{
                                    active: readNotification.includes(el.id),
                                }"
                                @click="activeMenu(el.id)"
                            >
                                {{ el.message }}
                            </p>
                        </div>
                    </div>
                    <p v-else class="p1 notification-contnent-empty">
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

const renderList = ref([]);
const sort = ref([]);

const readNotification = ref([]);

function activeMenu(id) {
    if (!readNotification.value.includes(id)) {
        readNotification.value.push(id);
    }
}

const notificationSort = ['Новые вверху', 'Cтарые вверху'];

function getRenderList(list) {
    renderList.value = list;
}
</script>

<style lang="scss" scoped>
.section-notification {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    :deep(.dashboard__dropdown-wrapper) {
        z-index: 1;
    }
}

.notification-panel-wraper {
    width: 100%;
    background: var(--dark);
}

.notification-panel__container {
    max-width: 1560px;
    margin: auto;
    position: relative;
}

.notification-panel {
    max-width: 1560px;
    padding: 48px 60px;
    margin: auto;
    position: relative;
    box-sizing: border-box;

    .dropdown-selected-text {
        min-width: 107px;
    }

    @media (max-width: $md) {
        padding: 48px 40px;
    }
    @media (max-width: 390px) {
        padding: 48px 16px;

        .notification-panel__dropdown-sort {
            max-width: 100%;
            width: 100%;

            .dropdown-selected {
                max-width: 100%;
                width: 100%;
            }
        }
    }
}
.notification-panel__coin {
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

.notification-wpaper {
    flex-grow: 1;
    background: var(--white);
}

.notification-container {
    max-width: 1560px;
    padding: 24px 60px 20px 60px;
    margin: 0 auto;
    box-sizing: border-box;

    @media (max-width: $lg) {
        padding: 24px 40px;
    }

    @media (max-width: $sm) {
        padding: 24px 16px;
    }

    @media (max-width: 390px) {
        padding: 24px 0;
    }
}

.notification-contnent {
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 24px;
    margin-bottom: 24px;
}

.notification-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.notification__item {
    display: flex;
    align-items: center;
    padding: 16px;
    border-bottom: 2px solid var(--roseBege);
    gap: 16px;

    &:hover {
        background: var(--lightBege);
    }

    @media (max-width: $sm) {
        flex-direction: column;
        align-items: flex-start;
    }
}

.notification__decription {
    cursor: pointer;
    color: var(--dark);

    &.active {
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
    }
}

.notification__publication {
    text-align: center;
}
</style>
