<template>
    <div class="cabinet-header__container">
        <div class="cabinet-header">
            <div class="cabinet-header__info">
                <div class="cabinet-header__logo-wraper">
                    <img src="../../assets/icon/cabinet-header/logo_cabinet.svg" class="cabinet-header__logo" alt="
                        icon-logo">
                    <p class="cabinet-header__logo-text p2-phone">Кабинет ученика</p>
                </div>
                <div class="cabinet-header__student-info">
                    <div class="cabinet-header__notification">
                        <p class="cabinet-header__notification-count p2-phone">1</p>
                        <img src="../../assets/icon/cabinet-header/bell.svg" alt="icon-bellt">
                    </div>
                    <p class="cabinet-header__student-initials">АИ</p>
                    <img src="../../assets/icon/cabinet-header/pointer_down.svg" alt="icon-poiner-down">
                </div>
            </div>
            <div class="cabinet-header__nav">
                <ul class="cabinet-header__list">
                    <li class="botton"><a href='#' class="cabinet-header__link"><img
                                src="../../assets/icon/cabinet-header/contest.svg" alt="icon-contest">Конкурсы</a></li>
                    <li class="botton"><a href='/cabinet-shop' class="cabinet-header__link"><img
                                src="../../assets/icon/cabinet-header/сart.svg" alt="icon-shop">Магазин</a>
                    </li>
                    <li class="botton"><a href='#' class="cabinet-header__link"><img
                                src="../../assets/icon/cabinet-header/сart.svg" alt="icon-cart">Покупки</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>
<style>
.cabinet-header__container {
    width: 100%;
    border-bottom: 2px solid var(--roseBege)
}

.cabinet-header {
    max-width: 1560px;
    padding: 8px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
}

.cabinet-header__info {
    display: flex;
    gap: 24px
}


.cabinet-header__logo {
    width: 101px;
    height: 30px;
}

.cabinet-header__logo-text {
    color: var(--roseBege)
}

.cabinet-header__student-info {
    display: flex;
    gap: 8px;
    align-items: center;
}

.cabinet-header__notification {
    position: relative;
}

.cabinet-header__notification-count {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 2px;
    left: -10px;
    color: var(--white);
    background: var(--orange);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}


.cabinet-header__student-initials {
    width: 32px;
    height: 32px;
    border: 1px solid var(--roseBege);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 16px;
    color: var(--roseBege);
}

.cabinet-header__list {
    list-style-type: none;
    display: flex;
    gap: 24px;
    align-items: center;
}

.cabinet-header__link {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--white);
    cursor: pointer;
    text-decoration: none;
}

@media (max-width: 768px) {
    .cabinet-header {
        padding: 8px 40px;
        flex-direction: column;
    }

    .cabinet-header__info {
        justify-content: space-between;
        width: 100%;
    }

    .cabinet-header__nav {
        width: 100%;

    }

    .cabinet-header__list {
        height: 48px;
        justify-content: space-between;
    }
}

@media (max-width: 576px) {
    .cabinet-header {
        padding: 8px 16px;
    }
}
</style>