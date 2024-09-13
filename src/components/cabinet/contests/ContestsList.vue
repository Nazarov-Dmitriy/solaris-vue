<template>
    <section class="section-contests">
        <div v-if="user === 'teacher'" class="teacher-panel-wraper">
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
                                <button @click="filterContestsByRole" class="btn btn-contest">
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
                <svg
                    class="uc-panel__coin"
                    width="46"
                    height="47"
                    viewBox="0 0 46 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M16.7488 36.5536C14.9405 35.6022 13.3571 34.2629 11.9979 32.5343L11.9965 32.5339L11.6408 32.0815C10.4326 30.5449 9.58097 28.816 9.08631 26.8944C8.59077 24.9731 8.44351 23.0444 8.64379 21.1073C8.84431 19.1707 9.38001 17.3247 10.2522 15.5684C11.1243 13.8126 12.3371 12.3211 13.8906 11.0944C14.8992 10.2981 16.081 9.60999 17.4353 9.02924C18.7905 8.44887 20.1613 8.10024 21.5487 7.9826C22.9366 7.86504 24.2913 8.02908 25.6133 8.47484C26.9359 8.92011 28.0712 9.74659 29.0205 10.9538C29.5384 11.6125 29.9355 12.3552 30.2103 13.1828C30.4853 14.0107 30.6183 14.84 30.6085 15.6697C30.5992 16.5007 30.4198 17.2981 30.0713 18.0625C29.7222 18.8268 29.1938 19.4887 28.485 20.0483C27.8857 20.5216 27.2356 20.8467 26.5341 21.0223C25.8328 21.1981 25.1405 21.2448 24.457 21.162C23.7738 21.079 23.1124 20.8566 22.4737 20.4939C21.8349 20.1311 21.289 19.6617 20.836 19.0856C20.34 18.4548 19.964 17.7512 19.707 16.9753C19.4513 16.1999 19.3247 15.4209 19.3283 14.6396C19.3328 13.8582 19.4802 13.1192 19.7718 12.4224C20.0631 11.7252 20.5222 11.1293 21.1489 10.6345C21.4217 10.4191 21.7536 10.2237 22.1454 10.0476C21.5053 10.0193 20.9332 10.0926 20.4304 10.2675C19.927 10.443 19.4711 10.6917 19.0625 11.0144C17.9726 11.875 17.3015 13.0721 17.0493 14.6055C16.9198 15.5077 16.9544 16.4367 17.153 17.3916C17.3516 18.3465 17.6453 19.2817 18.034 20.1978C18.4228 21.1133 18.8728 21.9804 19.3841 22.7997C19.896 23.6185 20.3887 24.3293 20.8636 24.9332C21.683 25.9753 22.6734 26.9829 23.8361 27.9555C24.9982 28.9274 26.2577 29.7005 27.6147 30.2745C28.9715 30.8481 30.3451 31.1198 31.7346 31.0897C33.1244 31.0594 34.4463 30.5494 35.7003 29.5592C36.5998 28.8489 37.2688 27.9868 37.7085 26.973C38.1477 25.9586 38.1589 24.9052 37.7411 23.8121C37.1961 24.2425 36.6486 24.3754 36.0986 24.2091C35.548 24.0434 35.0897 23.7274 34.723 23.2611C34.3344 22.767 34.1218 22.2011 34.0844 21.564C34.0465 20.9263 34.3006 20.3923 34.8459 19.9617C35.636 19.3379 36.4504 19.0953 37.2882 19.2337C38.1262 19.3724 38.8152 19.7847 39.3545 20.4706C40.1027 21.7032 40.4652 22.9507 40.4425 24.2137C40.4197 25.4772 40.1199 26.7252 39.5436 27.9587C38.9672 29.1918 38.173 30.3865 37.1599 31.5418C36.147 32.698 35.0137 33.7704 33.76 34.7603C32.0704 36.0945 30.2439 37.0589 28.2814 37.6527C26.3186 38.2462 24.3581 38.4492 22.3997 38.2619C20.4406 38.0741 18.5574 37.5049 16.7488 36.5536Z"
                        fill="#434C59"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M41.035 9.53022C48.7529 19.3453 47.0694 33.5718 37.2749 41.3059C27.4803 49.04 13.2837 47.353 5.56582 37.5378C-2.15206 27.7227 -0.468571 13.4962 9.32598 5.76215C19.1205 -1.97193 33.3172 -0.284916 41.035 9.53022ZM40.0359 10.3192C47.319 19.5813 45.7303 33.0063 36.4876 40.3047C27.2448 47.603 13.848 46.011 6.56495 36.7489C-0.718115 27.4867 0.870521 14.0617 10.1133 6.76338C19.356 -0.534984 32.7528 1.05699 40.0359 10.3192Z"
                        fill="#434C59"
                    />
                </svg>
                <svg
                    class="uc-panel__coin"
                    width="46"
                    height="47"
                    viewBox="0 0 46 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M16.7488 36.5536C14.9405 35.6022 13.3571 34.2629 11.9979 32.5343L11.9965 32.5339L11.6408 32.0815C10.4326 30.5449 9.58097 28.816 9.08631 26.8944C8.59077 24.9731 8.44351 23.0444 8.64379 21.1073C8.84431 19.1707 9.38001 17.3247 10.2522 15.5684C11.1243 13.8126 12.3371 12.3211 13.8906 11.0944C14.8992 10.2981 16.081 9.60999 17.4353 9.02924C18.7905 8.44887 20.1613 8.10024 21.5487 7.9826C22.9366 7.86504 24.2913 8.02908 25.6133 8.47484C26.9359 8.92011 28.0712 9.74659 29.0205 10.9538C29.5384 11.6125 29.9355 12.3552 30.2103 13.1828C30.4853 14.0107 30.6183 14.84 30.6085 15.6697C30.5992 16.5007 30.4198 17.2981 30.0713 18.0625C29.7222 18.8268 29.1938 19.4887 28.485 20.0483C27.8857 20.5216 27.2356 20.8467 26.5341 21.0223C25.8328 21.1981 25.1405 21.2448 24.457 21.162C23.7738 21.079 23.1124 20.8566 22.4737 20.4939C21.8349 20.1311 21.289 19.6617 20.836 19.0856C20.34 18.4548 19.964 17.7512 19.707 16.9753C19.4513 16.1999 19.3247 15.4209 19.3283 14.6396C19.3328 13.8582 19.4802 13.1192 19.7718 12.4224C20.0631 11.7252 20.5222 11.1293 21.1489 10.6345C21.4217 10.4191 21.7536 10.2237 22.1454 10.0476C21.5053 10.0193 20.9332 10.0926 20.4304 10.2675C19.927 10.443 19.4711 10.6917 19.0625 11.0144C17.9726 11.875 17.3015 13.0721 17.0493 14.6055C16.9198 15.5077 16.9544 16.4367 17.153 17.3916C17.3516 18.3465 17.6453 19.2817 18.034 20.1978C18.4228 21.1133 18.8728 21.9804 19.3841 22.7997C19.896 23.6185 20.3887 24.3293 20.8636 24.9332C21.683 25.9753 22.6734 26.9829 23.8361 27.9555C24.9982 28.9274 26.2577 29.7005 27.6147 30.2745C28.9715 30.8481 30.3451 31.1198 31.7346 31.0897C33.1244 31.0594 34.4463 30.5494 35.7003 29.5592C36.5998 28.8489 37.2688 27.9868 37.7085 26.973C38.1477 25.9586 38.1589 24.9052 37.7411 23.8121C37.1961 24.2425 36.6486 24.3754 36.0986 24.2091C35.548 24.0434 35.0897 23.7274 34.723 23.2611C34.3344 22.767 34.1218 22.2011 34.0844 21.564C34.0465 20.9263 34.3006 20.3923 34.8459 19.9617C35.636 19.3379 36.4504 19.0953 37.2882 19.2337C38.1262 19.3724 38.8152 19.7847 39.3545 20.4706C40.1027 21.7032 40.4652 22.9507 40.4425 24.2137C40.4197 25.4772 40.1199 26.7252 39.5436 27.9587C38.9672 29.1918 38.173 30.3865 37.1599 31.5418C36.147 32.698 35.0137 33.7704 33.76 34.7603C32.0704 36.0945 30.2439 37.0589 28.2814 37.6527C26.3186 38.2462 24.3581 38.4492 22.3997 38.2619C20.4406 38.0741 18.5574 37.5049 16.7488 36.5536Z"
                        fill="#434C59"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M41.035 9.53022C48.7529 19.3453 47.0694 33.5718 37.2749 41.3059C27.4803 49.04 13.2837 47.353 5.56582 37.5378C-2.15206 27.7227 -0.468571 13.4962 9.32598 5.76215C19.1205 -1.97193 33.3172 -0.284916 41.035 9.53022ZM40.0359 10.3192C47.319 19.5813 45.7303 33.0063 36.4876 40.3047C27.2448 47.603 13.848 46.011 6.56495 36.7489C-0.718115 27.4867 0.870521 14.0617 10.1133 6.76338C19.356 -0.534984 32.7528 1.05699 40.0359 10.3192Z"
                        fill="#434C59"
                    />
                </svg>
                <svg
                    class="uc-panel__coin"
                    width="46"
                    height="47"
                    viewBox="0 0 46 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M16.7488 36.5536C14.9405 35.6022 13.3571 34.2629 11.9979 32.5343L11.9965 32.5339L11.6408 32.0815C10.4326 30.5449 9.58097 28.816 9.08631 26.8944C8.59077 24.9731 8.44351 23.0444 8.64379 21.1073C8.84431 19.1707 9.38001 17.3247 10.2522 15.5684C11.1243 13.8126 12.3371 12.3211 13.8906 11.0944C14.8992 10.2981 16.081 9.60999 17.4353 9.02924C18.7905 8.44887 20.1613 8.10024 21.5487 7.9826C22.9366 7.86504 24.2913 8.02908 25.6133 8.47484C26.9359 8.92011 28.0712 9.74659 29.0205 10.9538C29.5384 11.6125 29.9355 12.3552 30.2103 13.1828C30.4853 14.0107 30.6183 14.84 30.6085 15.6697C30.5992 16.5007 30.4198 17.2981 30.0713 18.0625C29.7222 18.8268 29.1938 19.4887 28.485 20.0483C27.8857 20.5216 27.2356 20.8467 26.5341 21.0223C25.8328 21.1981 25.1405 21.2448 24.457 21.162C23.7738 21.079 23.1124 20.8566 22.4737 20.4939C21.8349 20.1311 21.289 19.6617 20.836 19.0856C20.34 18.4548 19.964 17.7512 19.707 16.9753C19.4513 16.1999 19.3247 15.4209 19.3283 14.6396C19.3328 13.8582 19.4802 13.1192 19.7718 12.4224C20.0631 11.7252 20.5222 11.1293 21.1489 10.6345C21.4217 10.4191 21.7536 10.2237 22.1454 10.0476C21.5053 10.0193 20.9332 10.0926 20.4304 10.2675C19.927 10.443 19.4711 10.6917 19.0625 11.0144C17.9726 11.875 17.3015 13.0721 17.0493 14.6055C16.9198 15.5077 16.9544 16.4367 17.153 17.3916C17.3516 18.3465 17.6453 19.2817 18.034 20.1978C18.4228 21.1133 18.8728 21.9804 19.3841 22.7997C19.896 23.6185 20.3887 24.3293 20.8636 24.9332C21.683 25.9753 22.6734 26.9829 23.8361 27.9555C24.9982 28.9274 26.2577 29.7005 27.6147 30.2745C28.9715 30.8481 30.3451 31.1198 31.7346 31.0897C33.1244 31.0594 34.4463 30.5494 35.7003 29.5592C36.5998 28.8489 37.2688 27.9868 37.7085 26.973C38.1477 25.9586 38.1589 24.9052 37.7411 23.8121C37.1961 24.2425 36.6486 24.3754 36.0986 24.2091C35.548 24.0434 35.0897 23.7274 34.723 23.2611C34.3344 22.767 34.1218 22.2011 34.0844 21.564C34.0465 20.9263 34.3006 20.3923 34.8459 19.9617C35.636 19.3379 36.4504 19.0953 37.2882 19.2337C38.1262 19.3724 38.8152 19.7847 39.3545 20.4706C40.1027 21.7032 40.4652 22.9507 40.4425 24.2137C40.4197 25.4772 40.1199 26.7252 39.5436 27.9587C38.9672 29.1918 38.173 30.3865 37.1599 31.5418C36.147 32.698 35.0137 33.7704 33.76 34.7603C32.0704 36.0945 30.2439 37.0589 28.2814 37.6527C26.3186 38.2462 24.3581 38.4492 22.3997 38.2619C20.4406 38.0741 18.5574 37.5049 16.7488 36.5536Z"
                        fill="#434C59"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M41.035 9.53022C48.7529 19.3453 47.0694 33.5718 37.2749 41.3059C27.4803 49.04 13.2837 47.353 5.56582 37.5378C-2.15206 27.7227 -0.468571 13.4962 9.32598 5.76215C19.1205 -1.97193 33.3172 -0.284916 41.035 9.53022ZM40.0359 10.3192C47.319 19.5813 45.7303 33.0063 36.4876 40.3047C27.2448 47.603 13.848 46.011 6.56495 36.7489C-0.718115 27.4867 0.870521 14.0617 10.1133 6.76338C19.356 -0.534984 32.7528 1.05699 40.0359 10.3192Z"
                        fill="#434C59"
                    />
                </svg>
                <div class="uc-panel">
                    <img
                        src="@/assets/image/user-cabinet/contest/hare.png"
                        alt="Солярик"
                        class="uc-panel__hair"
                    />

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
                            <button @click="filterContestsByRole" class="btn btn-contest">
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
                    <div v-if="list.length > 0" class="teacher-list">
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
                                <button class="teacher__info-btn btn" @click="linkContest(el.id)">
                                    Узнать подробнее
                                </button>
                            </div>
                        </div>
                    </div>
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

const props = defineProps({
    contests: {
        type: Array,
        default: () => []
    },
    user: {
        type: String,
        default: ''
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
    if (role.value === null || role.value === 'Выберите роль') {
        list.value = [...props.contests]
    } else {
        list.value = props.contests.filter((contest) => contest.tags.includes(role.value))
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
onMounted(() => {
    list.value = props.contests
    filterContestsByRole()
})
// watch([sort, role], () => {
//     filterContestsByRole()
// })

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

    :deep(.dashboard__dropdown-wrapper) {
        position: relative;
        z-index: 5;
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
            @media(max-width: $lg){
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
