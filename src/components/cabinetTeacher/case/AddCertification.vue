<template>
    <section class="add-certification">
        <div class="add-certification__container">
            <div class="add-certification__wrapper">
                <div class="add-certification__certification">
                    <div class="add-certification__certification-header">
                        <h2 class="add-certification__certification-title">Аттестация</h2>
                        <span>максимум 20 баллов</span>
                    </div>
                    <p class="add-certification__text">
                        Критерий оценки по результатам освоения обучающимися образовательных
                        программ. Заполняется модератором, вы можете запросить актуалтзацию данных и
                        они обновятся в вашем портфолио
                    </p>
                    <div class="add-certification__btn-wrapper">
                        <BtnComponent class="add-certification__btn"
                            >Актуализировать данные</BtnComponent
                        >
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import BtnComponent from '@/components/btns/BtnComponent.vue'
</script>

<style lang="scss">
.add-certification {
    background-color: var(--white);
}

.add-certification__wrapper {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    height: max-content;
    @media (max-width: $lg) {
        flex-direction: column;
        gap: 24px;
    }
}
.add-certification__certification {
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media (max-width: $lg) {
        padding: 24px 40px;
        box-sizing: border-box;
    }
    @media (max-width: $sm) {
        padding: 24px 16px;
    }
}
.add-certification__certification-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    span {
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        color: var(--dark);
    }
    @media (max-width: $sm) {
        flex-direction: column;
        gap: 10px;
        align-items: start;
    }
}
.add-certification__certification-title {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.5;
    color: var(--dark);
}
.add-certification__btn-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}
.add-certification__btn {
    @media (max-width: $sm) {
        width: 100%;
        text-align: center;
    }
}
</style>
