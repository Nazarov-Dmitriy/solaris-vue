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
                        v-if="notificationsStore.isLoading"
                        class="p1 notification-contnent-empty"
                    >
                        Загрузка уведомлений...
                    </div>
                    <div
                        v-else-if="notificationsStore.error"
                        class="p1 notification-contnent-empty notification-contnent-error"
                    >
                        {{ notificationsStore.error }}
                    </div>
                    <div
                        v-else-if="notifications.length > 0"
                        class="notification-list"
                    >
                        <div
                            v-for="el in renderList"
                            :key="el.id"
                            class="notification__item"
                        >
                            <div class="notification__info">
                                <p class="notification__publication p2">
                                    {{ el.watch_at }}
                                </p>
                            </div>
                            <p
                                class="notification__decription h3"
                                :class="{
                                    active: readNotification.includes(el.id),
                                }"
                                @click="activeMenu(el.id)"
                            >
                                {{ el.text }}
                            </p>
                        </div>
                    </div>
                    <p v-else class="p1 notification-contnent-empty">
                        Здесь отображаются уведомления, уведомлений пока нет
                    </p>
                </div>
            </div>
            <PaginationComponent
                v-if="!notificationsStore.isLoading && !notificationsStore.error && notifications.length"
                :per-page="perPage"
                :current-page="currentPage"
                :total-pages="totalPages"
                :data="notifications"
                :color="{ main: '#1F2A3E', hover: '#dda06b' }"
                @set-list="getRenderList"
                @set-page="setPage"
            />
        </div>
    </section>
</template>
<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import PaginationComponent from '@/components/pagination/PaginationComponent.vue';
import DropdownComponent from '@/components/dropdown/DropdownComponent.vue';
import { useNotificationStore } from '@/stores/useNotificationStore';

const notificationsStore = useNotificationStore();
const renderList = ref([]);
const sort = ref('Новые вверху');
const currentPage = ref(1);
const perPage = 6;

const readNotification = ref([]);
const notifications = computed(() => sortNotifications(notificationsStore.messages));
const totalPages = computed(() => Math.ceil(notifications.value.length / perPage));

function activeMenu(id) {
    if (!readNotification.value.includes(id)) {
        readNotification.value.push(id);
    }
}

const notificationSort = ['Новые вверху', 'Старые вверху'];

onMounted(() => {
    notificationsStore.fetchMessages();
})

watch(sort, () => {
    currentPage.value = 1;
})

function getRenderList(list) {
    renderList.value = list;
}

function setPage(page) {
    currentPage.value = page;
}

function sortNotifications(list) {
    const sortedList = [...list];

    sortedList.sort((a, b) => {
        const firstDate = getDateTime(a.watch_at);
        const secondDate = getDateTime(b.watch_at);

        return sort.value === 'Старые вверху'
            ? firstDate - secondDate
            : secondDate - firstDate;
    });

    return sortedList;
}

function getDateTime(date) {
    if (!date) return 0;

    const [day, month, rest] = date.split('.');
    const [year, time = '00:00:00'] = (rest || '').split(' ');
    const [hours = '0', minutes = '0', seconds = '0'] = time.split(':');

    return new Date(
        Number(year),
        Number(month) - 1,
        Number(day),
        Number(hours),
        Number(minutes),
        Number(seconds)
    ).getTime();
}
</script>

<style lang="scss" scoped>
.section-notification {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-height: 0;

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
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-height: 0;
    background: var(--white);
}

.notification-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-height: 0;
    width: 100%;
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
    flex-grow: 1;
    min-height: 0;
    position: relative;
    gap: 24px;
}

.notification-contnent-error {
    color: #de4700;
}

.notification-list {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-height: 0;
    overflow-y: auto;
    gap: 16px;
}

.section-notification :deep(.pagination__container) {
    flex-shrink: 0;
    margin-top: auto;
    padding: 0 60px 24px;

    @media (max-width: $lg) {
        padding: 0 40px 24px;
    }

    @media (max-width: $sm) {
        padding: 0 16px 24px;
    }
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
