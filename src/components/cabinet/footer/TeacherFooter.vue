<template>
    <footer class="teachcabinet-footer">
        <div class="teachcabinet-footer__container">
            <div class="teachcabinet-footer__wrap">
                <p class="teachcabinet-footer__subtitle p2">
                    <span>Баланс</span>
                </p>
                <div class="teachcabinet-footer__balance">
                    <p class="teachcabinet-footer__balance-price h3">
                        500 Баллов
                    </p>
                </div>
                <p class="teachcabinet-footer__text p2">
                    Для обмена стимулирующих баллов обратитесь к модератору
                </p>
                <p class="teachcabinet-footer__subtitle p2">
                    <span>Статистика деятельности</span>
                </p>
                <div class="teachcabinet-footer__level">
                    <p class="teachcabinet-footer__level-text h3">
                        Оценка качества деятельности:
                    </p>
                    <p class="teachcabinet-footer__level-text point h3">
                        3 Баллов
                    </p>
                </div>
                <div class="teachcabinet-footer__level">
                    <p class="teachcabinet-footer__level-text point h3">
                        Аттестация:
                    </p>
                    <p class="teachcabinet-footer__level-text h3">
                        20 Баллов
                    </p>
                </div>
            </div>
            <div class="teachcabinet-footer__wrap">
                <p class="teachcabinet-footer__subtitle p2">
                    <span>Портфолио</span>
                </p>
                <p class="teachcabinet-footer__text p2">
                    Ваши результаты сохраняются в течение учебного года в портфолио, где можно подробно ознакомиться с колличеством стимулирующих баллов по каждой активности
                </p>
                <button
                    class="teachcabinet-footer__button botton btn"
                    @click="$router.push('#')"
                >
                    Портфолио
                </button>
                <p class="teachcabinet-footer__text p2">
                    Если вы приняли участие в конкурсе вне лицея, добавьте свои достижения
                </p>
                <button
                    class="teachcabinet-footer__button botton btn"
                    @click="$router.push('/cabinet-teacher/case/portfolio')"
                >
                    &#8853; Добавить
                </button>
                <p class="teachcabinet-footer__text p2">
                    Посмотрите все конкурсы, в которых вы участвуете
                </p>
                <button
                    class="teachcabinet-footer__button botton btn"
                    @click="$router.push('/cabinet-teacher/contests')"
                >
                    Мои конкурсы
                </button>
            </div>
        </div>
    </footer>
</template>
<script setup>
</script>
<style lang="scss">
.teachcabinet-footer {
    background-color: var(--lightBege);
    flex-grow: 2;
}

.teachcabinet-footer p {
    color: var(--dark);
}

.teachcabinet-footer__container {
    max-width: 1560px;
    margin: auto;
    box-sizing: border-box;
    padding: 0px 60px 60px 60px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    @media (max-width: $lg) {
        padding: 0px 40px 40px 40px;
    }
    @media (max-width: $md) {
        grid-template-columns: repeat(1, 1fr);
    }
    @media (max-width: 390px) {
        padding: 0px 16px 16px 16px;
        gap: 0px;
    }
}

.teachcabinet-footer__wrap {
    box-sizing: border-box;
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    @media (max-width: $md) {
        padding: 8px 0;
    }
}

.teachcabinet-footer__subtitle:nth-child(2n) {
    margin-top: 16px;
}

.teachcabinet-footer__subtitle {
    text-align: center;
    position: relative;
    width: 100%;
}

.teachcabinet-footer__subtitle span {
    background: var(--lightBege);
    padding: 0px 16px;
    position: relative;
    z-index: 1;
}

.teachcabinet-footer__subtitle::after {
    position: absolute;
    content: '';
    bottom: 12px;
    left: 0px;
    width: 100%;
    height: 0px;
    border: 1px solid var(--dark);
    z-index: 0;
}

.teachcabinet-footer__balance {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 36px;
    width: 100%;
    position: relative;
}

.teachcabinet-footer__balance-price {
    margin-top: 8px;
}

.teachcabinet-footer__balance-coin {
    position: absolute;
    right: 0px;
}

.teachcabinet-footer__text {
    text-align: center;
    @media (max-width: $lg) {
        font-size: 14px;
        line-height: 20px;
    }
    @media (max-width: 390px) {
        font-size: 12px;
        line-height: 18px;
    }
}

.teachcabinet-footer__level {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 10px;
    margin-top: 8px;
    @media (max-width: $sm) {
        align-items: center;
        gap: 30px;
    }
    @media (max-width: 390px) {
        flex-direction: column;
        align-items: start;
        gap: 8px;
    }
}

.point {
    white-space: nowrap;
}

.teachcabinet-footer__rating {
    padding-top: 8px;
    width: 100%;
    position: relative;
}

.teachcabinet-footer__rating:last-child {
    margin-bottom: 8px;
}

.teachcabinet-footer__rating::after {
    position: absolute;
    content: '';
    bottom: -8px;
    width: 100%;
    height: 0px;
    border: 1px solid var(--white);
}

.teachcabinet-footer__text_orange {
    color: var(--orange);
}

.teachcabinet-footer__button {
    margin: 16px 0 16px 0;
    @media (max-width: 390px) {
        width: 100%;
    }
}
</style>