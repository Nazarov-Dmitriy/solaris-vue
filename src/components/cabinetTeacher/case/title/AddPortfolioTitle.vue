<template>
    <div class="add-portfolio__header">
        <h2 class="add-portfolio__title">Добавить кейс в портфолио</h2>
        <BtnComponent emitName="form-submit" class="add-portfolio__btn" @click="handleButtonClick">
            Отправить на проверку
        </BtnComponent>
    </div>
</template>

<script setup>
import BtnComponent from '@/components/btns/BtnComponent.vue'

const emit = defineEmits(['form-submit'])

function handleButtonClick() {
    emit('form-submit')
}
</script>

<style scoped lang="scss">
.add-portfolio__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: $lg) {
        padding: 16px 40px;
    }
    @media (max-width: $sm) {
        flex-direction: column;
        padding: 16px;
        gap: 16px;
    }
}
.add-portfolio__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.5;
    color: #1f2a3e;

    @media (max-width: $lg) {
        width: 55%;
    }
    @media (max-width: $sm) {
        width: 100%;
    }
}
.add-portfolio__btn {
    @media (max-width: $sm) {
        width: 100%;
        text-align: center;
    }
}
</style>
