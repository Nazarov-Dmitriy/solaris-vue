<template>
    <Transition name="modal">
        <div
            v-if="props.show"
            class="modal-sertificate-wrapper"
            @click="closeModal"
            @keyup.esc="closeModal()"
        >
            <div v-if="props.validate" class="activate-certificate" @click.stop>
                <div class="modal__close-btn-wrapper">
                    <button class="modal__close-btn" @click="closeModal">
                        <img src="/public/cabinteTeacher/case/modal-close.png" alt="Close" />
                    </button>
                </div>
                <div class="activate-certificate-wrapper">
                    <span>№ сертификата</span>
                </div>
                <div class="activate-certificate-wrapper">
                    <span>{{ props.sertificat }}</span>
                </div>
                <div class="activate-certificate-wrapper">
                    <span>ФИО ученика</span>
                </div>
                <div class="activate-certificate-wrapper">
                    <span>{{ props.user.name }}</span>
                </div>
                <div class="activate-certificate-wrapper">
                    <span>Класс</span>
                </div>
                <div class="activate-certificate-wrapper">
                    <span>{{ props.user.class }}</span>
                </div>
                <div class="activate-certificate-wrapper">
                    <span>Дата приобретения</span>
                </div>
                <div class="activate-certificate-wrapper">
                    <span>{{ props.user.date }}</span>
                </div>
                <div v-if="!active" class="activate-certificate-button-wrapper">
                    <span>Активация</span>
                </div>
                <div v-if="!active" class="activate-certificate-button-wrapper">
                    <BtnWhite
                        class="activate-certificate-btn"
                        emit-name="action"
                        @action="activeteSertificat()"
                    >
                        Активировать
                    </BtnWhite>
                </div>
            </div>
            <div v-else class="certificate__blocck-error">
                <div class="modal__close-btn-wrapper">
                    <button class="modal__close-btn" @click="closeModal">
                        <img src="/public/cabinteTeacher/case/modal-close.png" alt="Close" />
                    </button>
                </div>
                <div class="certificate__error">
                    <p class="certificate__text certificate__text-error">Ошибка</p>
                    <p class="certificate__text">Такого сертификата нет</p>
                </div>
            </div>
        </div>
    </Transition>
</template>
<script setup>
import BtnWhite from '../btns/cabinetTeacher/case/BtnWhite.vue'
import { ref } from 'vue'

const props = defineProps({
    show: {
        type: Boolean,
        default: false
    },
    user: {
        type: Object,
        default: () => ({})
    },
    validate: {
        type: Boolean,
        default: false
    },
    sertificat: {
        type: String,
        default: ''
    }
})

const emit = defineEmits('close')

const active = ref(false)

function activeteSertificat() {
    active.value = true
}

function closeModal() {
    emit('close')
}
</script>
<style lang="scss" scoped>
.modal-sertificate-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(31, 42, 62, 0.75);
    z-index: 1000;
}

.activate-certificate {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 2px solid #dda06b;
    padding: 16px;
    background-color: var(--white);
    position: relative;
    padding: 56px 16px 16px 16px;
    box-sizing: border-box;
    max-width: 652px;
    width: 100%;

    @media (max-width: $lg) {
        align-items: stretch;
    }
}

.modal__close-btn-wrapper {
    position: absolute;
    top: 16px;
    right: 16px;
}

.activate-certificate-wrapper {
    border: 1px solid #dda06b;
    background-color: var(--white);
    padding: 0px 16px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px 0;
}

.activate-certificate-button-wrapper {
    border: 1px solid #dda06b;
    padding: 8px;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.activate-certificate-btn {
    width: 144px;
    height: 56px;
}

.certificate__blocck-error {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 2px solid #dda06b;
    padding: 16px;
    background-color: var(--white);
    position: relative;
    padding: 56px 16px 16px 16px;
    box-sizing: border-box;
    max-width: 652px;
    width: 100%;
}

.certificate__error {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.certificate__text {
    font-size: 16px;
    line-height: 24px;
    color: var(--dark);
    text-align: center;
}

.certificate__text-error {
    color: var(--orange);
}

.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>
