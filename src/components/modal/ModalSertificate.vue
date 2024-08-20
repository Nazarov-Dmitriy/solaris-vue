<template>
    <Teleport to="body">
        <div class="modal-sertificate-wrapper" @click="closeModal">
            <div class="activate-certificate" @click.stop>
                <div class="modal__close-btn-wrapper">
                    <button class="modal__close-btn" @click="closeModal">
                        <img src="/public/cabinteTeacher/case/modal-close.png" alt="Close" />
                    </button>
                </div>
                <div class="activate-certificate-wrapper">
                    <span>№ сертификата</span>
                </div>
                <div class="activate-certificate-wrapper">
                    <span>002</span>
                </div>
                <div class="activate-certificate-wrapper">
                    <span>ФИО ученика</span>
                </div>
                <div class="activate-certificate-wrapper">
                    <span>ФИО</span>
                </div>
                <div class="activate-certificate-wrapper">
                    <span>Класс</span>
                </div>
                <div class="activate-certificate-wrapper">
                    <span>7А класс</span>
                </div>
                <div class="activate-certificate-wrapper">
                    <span>Дата приобретения</span>
                </div>
                <div class="activate-certificate-wrapper">
                    <span>01.01.2024</span>
                </div>
                <div class="activate-certificate-button-wrapper">
                    <span>Активация</span>
                </div>
                <div class="activate-certificate-button-wrapper">
                    <BtnWhite class="activate-certificate-btn">Активировать</BtnWhite>
                </div>
            </div>
        </div>
    </Teleport>
</template>
<script setup>
import BtnWhite from '../btns/cabinetTeacher/case/BtnWhite.vue'
import { onMounted, onBeforeUnmount } from 'vue'

const emit = defineEmits('close')
function closeModal() {
    emit('close')
}
onMounted(() => {
    document.body.classList.add('no-scroll')
})
onBeforeUnmount(() => {
    document.body.classList.remove('no-scroll')
})
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
</style>
