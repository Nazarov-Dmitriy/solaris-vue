<template>
    <section
        id="trend"
        class="trend-container"
    >
        <div class="trend">
            <div class="trend__content">
                <div class="trend__coin">
                    <img
                        src="../../assets/image/trend/trend-coin.png"
                        alt=""
                        class="trend__coin-img"
                    >
                    <img
                        src="../../assets/image/trend/trend-coin.png"
                        alt=""
                        class="trend__coin-img"
                    >
                    <img
                        src="../../assets/image/trend/trend-coin.png"
                        alt=""
                        class="trend__coin-img"
                    >
                </div>
                <p class="trend__text p1">
                    В лицее каждую неделю проводятся конкурсы по различным направлениям,
                    учитывая пожелания и инициативы всех участников образовательного
                    процесса
                </p>
                <div
                    v-if="arr.length > 0"
                    class="trend__list"
                >
                    <h2 class="trend-subtitle h2">
                        Направления
                    </h2>
                    <div
                        v-for="el in arr"
                        :key="el.id"
                        class="trend-item"
                    >
                        <img
                            src="../../assets/image/trend/trendName.png"
                            alt=""
                            class="trend-img"
                        >

                        <button class="trend-item-btn h3">
                            {{ el.title }}
                        </button>
                    </div>
                </div>
                <div
                    v-else
                    class="trend__empty"
                >
                    <p class="trend-subtitle p1">
                        Направлений нет , в скором времени их добавят
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const arr = [
    {
        "title": "Направление",
        'id': 1
    },

    {
        "title": "Направление 1",
        'id': 1
    },

    {
        "title": "Направление 2",
        'id': 1
    },

    {
        "title": "Направление 3",
        'id': 1
    },

    {
        "title": "Направление 4",
        'id': 1
    },

    {
        "title": "Направление 5",
        'id': 1
    },

];
</script>
<style>
.trend-container {
    width: 100%;
    background: var(--lightBege);
    scroll-margin: 88px;
}

.trend {
    max-width: 1440px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 48px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 80px;
    position: relative;
    min-height: 732px;
}

.trend__coin {
    position: relative;
    top: 30%;
}

.trend__img {
    width: 248px;
    position: absolute;
    top: 0;
    left: 0;
}

.trend__content {
    display: flex;
    gap: 16px;
    width: 100%;
    padding: 110px 60px 0 60px;
    box-sizing: border-box;
    position: relative;
    min-height: 732px;
}


.trend__coin {
    position: absolute;
    top: 39%;
    left: 0%;
}

.trend__coin-img {
    position: absolute;
}

.trend__coin-img:nth-child(1) {
    top: -1px;
    left: 10px;
}

.trend__coin-img:nth-child(2) {
    top: 251px;
    left: 267px;
    width: 167px;
    transform: scale(1.33) rotate(17deg);
}

.trend__coin-img:nth-child(3) {
    top: 342px;
    left: 120px;
    width: 95px;
    transform: scale(1.33) rotate(17deg) rotate(-73deg);
}

.trend__text {
    max-width: 31%;
    position: relative;
    z-index: 2;
    margin-right: 20px;
    color: var(--dark);
}

.trend__list {
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    max-width: 70%;
    max-height: 576px;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.trend__list::-webkit-scrollbar {
    width: 0;
    height: 0;
}

.trend-subtitle {
    grid-column: 2/3;
    padding: 16px 0;
    background: var(--dark);
    color: var(--white);
    text-align: center;
    font-weight: 700;
    font-size: 48px;
    line-height: 64px;
    max-height: 92px;
    box-sizing: border-box;
}

.trend__empty {
    width: 100%;

    .trend-subtitle {
        color: var(--dark);
        text-align: center;
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        background: none;
        max-height: none;
        text-align: start;
    }
}

.trend-item {
    min-height: 260px;
    height: 100%;
    position: relative;
    grid-row: span 2;
    border: 2px solid var(--roseBege);
    max-height: 262px;
}

.trend-item:nth-child(2) {
    grid-row: 1 / 3;
}

.trend-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: relative;
}

.trend-img::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--orange);
}

.trend-item-btn {
    position: absolute;
    z-index: 1;
    left: 0;
    bottom: 0;
    padding: 8px 0;
    text-align: center;
    background: var(--roseBege);
    box-sizing: border-box;
    border: 2px solid var(--roseBege);
    width: 100%;
    color: var(--dark);
}


.trend-container-img {
    width: 100%;
    height: 283px;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    background-image: url("../../../assets/image/trend/trend.png");
}

.trend-container-img::-webkit-scrollbar {
    width: 0;
    height: 0;
}

.trend-main-img {
    width: 100%;
    margin-bottom: -4px;
}

.trend__list::-webkit-scrollbar {
    width: 0;
    height: 0;
}

@media (max-width: 1230px) {
    .trend-item-btn {
        font-size: 24px;
    }

    .trend-subtitle {
        font-size: 40px;
    }

    .trend__coin-img:nth-child(1) {
        top: 5px;
        left: -35px;
    }

    .trend__coin-img:nth-child(2) {
        top: 251px;
        left: 207px;
    }

    .trend__coin-img:nth-child(3) {
        top: 342px;
        left: 60px;
    }
}

@media (max-width: 1025px) {
    .trend-item-btn {
        font-size: 20px;
    }

    .trend-subtitle {
        font-size: 36px;
    }

    .trend__text {
        font-size: 18px;
    }
}

@media (max-width: 991px) {
    .trend__list {
        display: flex;
        flex-direction: column;
        margin-top: 64px;
        margin-right: 40px;
    }

    .trend__content {
        padding: 0;
    }

    .trend-subtitle {
        margin-bottom: 19px;
        font-size: 24px;
        line-height: 150%;
        text-align: center;
    }

    .trend__text {
        width: 100%;
    }

    .trend-item:not(:last-child) {
        margin-bottom: 19px;
    }

    .trend__text {
        max-width: 336px;
        margin-left: 40px;
        margin-top: 64px;
        font-family: var(--font-family);
    }

    .trend-item-btn {
        font-family: var(--font-family);
        font-size: 24px;
        width: 100%;
        padding: 8px 0;
        text-align: center;
    }

    .trend-container-img {
        height: 149px;
    }

    .trend__coin {
        top: 0;
        right: 0;
    }

    .trend__coin-img:nth-child(1) {
        top: 233px;
        left: 0;
        width: 230px;
    }

    .trend__coin-img:nth-child(2) {
        top: 379px;
        left: 190px;
        width: 154px;
    }

    .trend__coin-img:nth-child(3) {
        top: 481px;
        left: 70px;
        width: 91px;
        transform: scale(1.33) rotate(17deg) rotate(-73deg);
    }
}

@media (max-width: 688px) {
    .trend-item-btn {
        font-size: 16px;
    }

    .trend__coin-img:nth-child(1) {
        top: 233px;
        left: -20px;
        width: 230px;
    }

    .trend__coin-img:nth-child(2) {
        top: 379px;
        left: 150px;
        width: 154px;
    }

    .trend__coin-img:nth-child(3) {
        top: 481px;
        left: 40px;
        width: 91px;
        transform: scale(1.33) rotate(17deg) rotate(-73deg);
    }
}

@media (max-width: 636px) {
    .trend__text {
        font-size: 16px;
    }
}

@media (max-width: 576px) {
    .trend {
        gap: 40px;
        margin: 0 auto;
        padding-bottom: 40px;
    }

    .trend__content {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 0;
    }

    .trend-item {
        height: 292px;
    }

    .trend__list {
        max-width: 100%;
        width: 90%;
        margin-right: 0;
        margin-top: 19px;
        gap: 0;
    }

    .trend__content {
        width: 100%;
        height: 100%;
    }

    .trend__text {
        margin: 0;
        padding-top: 40px;
        width: 100%;
        max-width: 90%;
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 20px;
        line-height: 150%;
        color: #1f2a3e;
    }

    .trend-item-btn {
        font-family: var(--font-family);
        font-weight: 700;
        font-size: 24px;
        line-height: 150%;
        color: #1f2a3e;
    }

    .trend-container-img {
        height: 100%;
    }

    .trend__coin {
        position: relative;
        width: 100%;
    }

    .trend__coin-img:nth-child(1) {
        display: none;
    }

    .trend__coin-img:nth-child(2) {
        display: none;
    }

    .trend__coin-img:nth-child(3) {
        top: 0;
        left: initial;
        right: 46px;
        width: 70px;
        transform: translateX(48%) rotate(-60deg);
    }
}
</style>
