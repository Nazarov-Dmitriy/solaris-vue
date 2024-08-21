<template>
    <Teleport to="body">
        <div
            class="modal"
            @click="handleCancel"
        >
            <div
                class="modal__container"
                :class="props.additionalClass"
                @click.stop
            >
                <div class="modal__content">
                    <div class="modal__close-btn-wrapper">
                        <button
                            class="modal__close-btn"
                            @click="handleCancel"
                        >
                            <img
                                :src="
                                    getPath('/cabinteTeacher/case/modal-close.png')
                                "
                                alt="Close"
                            >
                        </button>
                    </div>
                    <slot name="title" />
                    <slot name="text" />
                    <div class="modal__btn-wrapper">
                        <slot name="btn" />
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import { defineEmits, defineProps, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
    additionalClass: {
        type: String,
        default: ''
    }
})
const emit = defineEmits(['closeModal'])

function handleCancel () {
    emit('closeModal')
}

function getPath (img) {
    return new URL(img, import.meta.url).href
}

onMounted(() => {
    document.body.classList.add('no-scroll')
})

onBeforeUnmount(() => {
    document.body.classList.remove('no-scroll')
})
</script>

<style lang="scss">
.modal {
    background: rgba(31, 42, 62, 0.25);
    width: 100%;
    height: 100%;
    position: fixed;
    overflow: hidden;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal__container {
      max-width: 1560px;
      margin: 0 auto;
      width: 100%;
      height: 100%;
      position: relative;
}

.modal__content{
    border: 2px solid #dda06b;
    padding: 16px;
    box-sizing: border-box;
    background: #fff;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 288px;
    position: absolute;
    right: 60px;
    top: 80px;
    
    @media (max-width: $lg) {
        right: 40px;
    }
     

    @media (max-width: $sm) {
        max-width: 100%;
        width: calc(100% - 32px) ;
        right: 16px;
    }
}


.modal__close-btn-wrapper {
    display: flex;
    justify-content: flex-end;
}
.modal__close-btn {
    border: none;
    background-color: #fff;
    cursor: pointer;
}

.modal__error-title {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: #de4700;
}
.modal__text {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: #1f2a3e;
}
.modal__btn-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 27px;
}
.modal__btn {
    padding: 16px;
    box-sizing: border-box;
    background: #fff;
    cursor: pointer;

    &--cancel {
        border: 2px solid #dda06b;
        color: #dda06b;
    }
    &--send {
        border: 2px solid #fff;
        background: #de4700;
        color: white;
    }
}

.no-scroll {
    overflow: hidden;
}
</style>
