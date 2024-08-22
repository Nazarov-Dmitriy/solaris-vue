<template>
    <div
        v-if="params.totalPage > 1"
        class="pagination__container"
    >
        <ul
            class="pagination-list"
            :class="{ 'show-arrow': showPiganationElement === 'arrow' }"
        >
            <li
                class="pagination-prev"
                @click="prevPage()"
            >
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M18 10L12 16L18 22"
                        stroke="#DDA06B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <circle
                        cx="16"
                        cy="16"
                        r="14"
                        stroke="#DDA06B"
                        stroke-width="2"
                    />
                </svg>
            </li>
            <li
                class="pagination-dots--left"
                :class="{ 'active': showLeftDots }"
                @click="getStartPage"
            >
                ...
            </li>
            <li
                v-for="item in params.getListPage"
                :key="item"
                class="pagination-item h3"
                :class="{ 'active': item === params.currentPage }"
                @click="setCurrentPage(item)"
            >
                {{ item }}
            </li>
            <li
                class="pagination-dots--right"
                :class="{ 'active': showRightDots }"
                @click="getEndtPage"
            >
                ...
            </li>
            <li
                class="pagination-next"
                @click="nextPage()"
            >
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14 10L20 16L14 22"
                        stroke="#DDA06B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <circle
                        cx="15"
                        cy="15"
                        r="14"
                        transform="matrix(-1 0 0 1 31 1)"
                        stroke="#DDA06B"
                        stroke-width="2"
                    />
                </svg>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { computed, onMounted, reactive, watch } from 'vue';

const props = defineProps({
    perpage: {
        type: Number,
        default: 3
    },
    data: {
        type: Array,
        default: () => []
    },
    renderList: {
        type: Array,
        default: () => []
    },
    showPiganationElement: {
        type: String,
        default: 'all'
    },
    color: {
        type: Object,
        default: () => ({
            main: '#dda06b',
            hover: '#de4700',
        })
    }
})

const emit = defineEmits(['setList'])

const params = reactive({
    totalPage: 0,
    perPage: 3,
    currentPage: 1,
    showCountPage: 3,
    rangeCountPage: [],
    content: [],
    listPage: [],
    showPiganation: 'all'
})

const showLeftDots = computed(() => {
    if (params.showPiganation === 'all') {
        return params.totalPage > params.showCountPage && params.rangeCountPage[0] !== 1 ? true : false
    } else {
        return false
    }
})

const showRightDots = computed(() => {
    if (params.showPiganation === 'all') {
        return params.totalPage > params.showCountPage && params.rangeCountPage[1] !== params.totalPage ? true : false
    } else {
        return false
    }
})

const showPrev = computed(() => {

    if (params.showPiganation === 'all') {
        return params.currentPage == 1 ? true : false
    } else {
        return false
    }
})

const showNext = computed(() => {
    if (params.showPiganation === 'all') {
        return params.currentPage === params.totalPage ? true : false
    } else {
        return false
    }
})

onMounted(() => {
    document.documentElement.style.setProperty('--piganation-main', props.color.main);
    document.documentElement.style.setProperty('--piganation-hover', props.color.hover);

    params.perPage = props.perpage;
    params.showPiganation = props.showPiganationElement;
    getTotalPage();
    getRangeCountPage();
    getContentPage()
})

function getTotalPage () {
    params.totalPage = Math.ceil(props.data.length / params.perPage);
}

function getRangeCountPage () {
    let start;
    let end;

    if (params.showCountPage > params.totalPage) {
        start = 1;
        end = params.totalPage;
    } else {
        let halfShowCountPage = (params.showCountPage - 1) / 2;

        if (params.currentPage - halfShowCountPage <= 0) {
            start = 1;
            end = params.showCountPage
        } else if (params.currentPage - halfShowCountPage > 0 && params.currentPage + halfShowCountPage <= params.totalPage) {
            start = params.currentPage - halfShowCountPage;
            end = params.currentPage + halfShowCountPage;
        } else {
            start = params.totalPage - params.showCountPage + 1;
            end = params.totalPage;
        }
    }
    params.rangeCountPage[0] = start;
    params.rangeCountPage[1] = end;
}


function prevPage () {
    if (params.currentPage > 1) params.currentPage--
}

function nextPage () {
    if (params.currentPage < params.totalPage) params.currentPage++;
}

function getStartPage () {
    params.currentPage = 1;
}

function getEndtPage () {
    params.currentPage = params.totalPage;
}

function getListPage () {
    let arr = [];
    for (let i = params.rangeCountPage[0]; i <= params.rangeCountPage[1]; i++) {
        arr.push(i)
    }
    params.getListPage = params.showPiganation === 'all' ? arr : []
}

function setCurrentPage (page) {
    params.currentPage = page;
}

function getContentPage () {
    params.content = [];
    const startIndex = params.perPage * (params.currentPage - 1);
    const endIndex =
        startIndex + params.perPage - 1 <= props.data.length - 1
            ? startIndex + params.perPage - 1
            : props.data.length - 1;

    for (let i = startIndex; i <= endIndex; i++) {
        params.content.push(props.data[i]);
    }
    emit('setList', params.content)
}

watch(() => params.currentPage, () => {
    getRangeCountPage();
    getContentPage()
})
watch(() => params.content, () => {
    getListPage();
}, { deep: true })

watch(() => props.data, () => {
    getTotalPage()
    getRangeCountPage();
    getContentPage()
})
</script>

<style lang="scss">
.pagination__container {
    display: flex;
    justify-content: center;
}

.pagination-list {
    display: flex;
    align-items: center;
    gap: 16px;
}

.pagination-prev,
.pagination-next {
    width: 32px;
    height: 32px;

    cursor: pointer;

    &.hidden {
        opacity: 1;
    }

    svg path {
        stroke: var(--piganation-main);
    }

    svg circle {
        stroke: var(--piganation-main);
    }
}

.pagination-prev:hover,
.pagination-next:hover {
    svg path {
        stroke: var(--piganation-hover);
    }

    svg circle {
        stroke: var(--piganation-hover);
    }
}

.pagination-item {
    font-size: 20px;
    line-height: 1;
    cursor: pointer;
    color: var(--piganation-main);

    &.active {
        color: var(--piganation-main);
        text-decoration:2px solid underline var(--piganation-main);
        text-underline-offset: 4px
    }

    &:hover{
        color: var(--piganation-hover);
    }
}

.pagination-prev {
    margin-right: 16px;
}

.pagination-next {
    margin-left: 16px;
}


.pagination-dots--left,
.pagination-dots--right {
    user-select: none;
    opacity: 0;
    cursor: pointer;
    color: var(--piganation-main);

    &.active {
        opacity: 1;
    }

    &:hover{
        color: var(--piganation-hover);
    }
}

.show-arrow {
    .pagination-list {
        gap: 60px;
    }

    .pagination-dots--left,
    .pagination-dots--right {
        display: none;
    }
}
</style>