<template>
    <section class="trend-container">
        <div class="trend">
            <div class="trend__content">
                <p class="trend__text p1"> В лицее каждую неделю проводятся конкурсы по различным направлениям,
                    учитывая пожелания и инициативы всех участников образовательного процесса</p>
                <div class="trend__list">
                    <h2 class="trend-subtitle h2">Направления</h2>
                    <div class="trend-item">
                        <img src="" alt="" class="trend-img">

                        <button class="trend-item-btn h3">Название направления</button>
                    </div>
                    <div class="trend-item">
                        <img src="" alt="" class="trend-img">
                        <button class="trend-item-btn h3">Название направления</button>
                    </div>
                    <div class="trend-item">
                        <img src="" alt="" class="trend-img">

                        <button class="trend-item-btn h3">Название направления</button>
                    </div>
                    <div class="trend-item">
                        <img src="" alt="" class="trend-img">
                        <button class="trend-item-btn h3">Название направления</button>
                    </div>
                    <div class="trend-item">
                        <img src="" alt="" class="trend-img">
                        <div class="trend-item-btn h3">Название направления</div>
                    </div>
                    <div class="trend-item">
                        <img src="" alt="" class="trend-img">
                        <button class="trend-item-btn h3">Название направления</button>
                    </div>
                    <div class="trend-item">
                        <img src="" alt="" class="trend-img">
                        <button class="trend-item-btn h3">Название направления</button>
                    </div>
                    <div class="trend-item">
                        <img src="" alt="" class="trend-img">
                        <button class="trend-item-btn h3">Название направления</button>
                    </div>
                </div>
            </div>
            <div class="trend-container-img">
                <img src="../assets/trend.png" class="trend-main-img" alt="img">
            </div>

        </div>
    </section>
</template>

<script setup></script>
<style>
.trend-container {
    width: 100%;
    background: var(--lightBege)
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
}

.trend__content {
    display: flex;
    gap: 16px;
    width: 100%;
    padding: 110px 67px 0 60px;
    box-sizing: border-box;
}

.trend__text {
    max-width: 425px;
}

.trend__list {
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr 1fr;
    width: 100%;
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
}

.trend-item {
    min-height: 260px;
    width: 100%;
    height: 100%;
    position: relative;
    grid-row: span 2;
    border:2px solid var(--roseBege)
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
    content: '';
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
    padding: 16px;
    background: var(--roseBege);
    box-sizing: border-box;
    border: 2px solid var(--roseBege);
    cursor: pointer;
}

.trend-item-btn:hover {
    border: 2px solid var(--bage);
    background: var(--white);
    color: var(--bage)
}

.trend-item-btn:active {
    border: 2px solid var(--gray);
    background: var(--white);
    color: var(--gray)
}

.trend-container-img {
    width: 100%;
    height: 283px;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    background-image: url("../assets/trend.png");

}

.trend-container-img::-webkit-scrollbar {
    width: 0;
    height: 0;
}

.trend-main-img {
    width: 100%;
}

.trend__list::-webkit-scrollbar {
    width: 0;
    height: 0;
}
</style>