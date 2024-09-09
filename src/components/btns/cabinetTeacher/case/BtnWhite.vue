<template>
    <button
        class="btn-white"
        @click="submitEmit"
    >
        <slot name="img" />
        <span :class="[props.additionalClass, 'btn-white__text']">
            <slot />
        </span>
    </button>
</template>

<script setup>
const props = defineProps({
    emitName: {
        type: String,
        default: null
    },
    additionalClass: {
        type: String,
        default: ''
    }
})
const emit = defineEmits(['form-submit', 'offer'])

function submitEmit () {
    emit(props.emitName)
}
</script>

<style lang="scss">
.btn-white {
    border: 2px solid #dda06b;
    padding: 16px;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: #fff;
    transition: background-color 0.4s;

    &:hover {
        background-color: #dda06b;
        > .btn-white__text {
            color: white;
        }

        > .btn-white__text--img {
            background: url('/cabinteTeacher/case/portfolio-white-button.svg') no-repeat left center;
        }
    }

    &:active {
        border: 2px solid var(--dark);
        .btn-white__text {
            color: var(--dark);
        }

        .btn-white__text--img {
            background: url('/cabinteTeacher/case/portfolio-black-button.svg') no-repeat left center;
        }
    }
}
.btn-white__text {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #dda06b;
    cursor: pointer;

    &--img {
        padding-left: 30px;
        background: url('/cabinteTeacher/case/portfolio-button-svg.svg') no-repeat left center;
    }
}
</style>
