<template>
    <div ref="dropDown" class="dashboard__dropdown-wrapper">
        <div
            :class="[props.additionalClass, 'dropdown-selected']"
            @click="isDropDownVisible = !isDropDownVisible"
        >
            <p :class="['dropdown-selected-text']">
                {{ selectedOption || defaultValue }}
            </p>
            <img
                class="dropdown-icon"
                src="../../assets/icon/appearance.svg"
                alt="icon-appearance"
            />
        </div>

        <transition name="slide-fade">
            <div v-if="isDropDownVisible" class="option-wrapper">
                <template v-for="(option, ind) in props.options" :key="ind">
                    <div class="option" @click="toggleOptionSelect(option)">
                        {{ option }}
                    </div>
                </template>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { defineProps, ref, computed, defineEmits, onMounted, onBeforeUnmount } from 'vue'
const dropDown = ref(null)

const props = defineProps({
    options: {
        type: Array,
        default: () => []
    },
    modelValue: {
        type: String,
        default: null
    },
    additionalClass: {
        type: String,
        default: ''
    }
})
const emit = defineEmits(['update:modelValue'])

const selectedOption = ref(null)

const isDropDownVisible = ref(false)

const toggleOptionSelect = (option) => {
    selectedOption.value = option
    emit('update:modelValue', option)
    setTimeout(() => {
        isDropDownVisible.value = false
    }, 100)
}
const closeDropDown = (element) => {
    if (!dropDown.value.contains(element.target)) {
        isDropDownVisible.value = false
    }
}

const defaultValue = computed(() => {
    return props.options[0]
})

onMounted(() => {
    window.addEventListener('click', closeDropDown)
})

onBeforeUnmount(() => {
    window.removeEventListener('click', closeDropDown)
})
</script>

<style scoped>
.dashboard__dropdown-wrapper {
    cursor: pointer;
    position: relative;
    padding: 16px 16px;
    max-width: fit-content;
    border: 2px solid var(--roseBege);
    box-sizing: border-box;
    height: 56px;
    background: var(--white);
}

.dropdown-selected {
    background: var(--white);
    display: flex;
    align-items: center;
    max-width: fit-content;
    justify-content: space-between;
}

.dropdown-selected-text {
    min-width: 187px;
    color: var(--roseBege);
    font-size: 16px;
    font-weight: 400;
    outline: none;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.option-wrapper {
    position: absolute;
    width: 100%;
    background-color: #fff;
    border: 1px solid var(--roseBege);
    top: 50px;
    left: -1px;
    z-index: 999;
}

.option {
    padding: 8px 16px;
    color: var(--dark);
    border: 1px solid var(--roseBege);
    border-top: none;
}

.dropdown-icon {
    width: 12px;
    height: 6px;
    padding: 9px 6px;
}

.option:hover {
    color: var(--roseBege);
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-4px);
    opacity: 0;
}
</style>
