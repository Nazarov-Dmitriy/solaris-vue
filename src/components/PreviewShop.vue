<template>
    <section class="preview-show-container">
        <div class="preview-show">
            <div class="preview-show__description">
                <h2 class="preview-show-title h2">На что потратить Солярики?</h2>
                <p class="preview-show-text p2">Идейные соображения высшего порядка, а также постоянный количественный
                    рост и сфера нашей активности в значительной степени обуславливает создание соответствующий условий
                    активизации. </p>

            </div>
            <div class="preview-show__list">
                <div class="preview-show__card">
                    <img src="" alt="" class="preview-show-img">
                    <div class="preview-show__card-footer">
                        <p class="preview-show__card-subtitle p1">Сертификат АНТИДВОЙКА</p>
                        <p class="preview-show__card-cost h2"> 200<img src="../assets/valute.svg" alt="icon valute"
                                class="preview-show__card-icon"></p>
                    </div>
                </div>
                <div class="preview-show__card">
                    <img src="" alt="" class="preview-show-img">
                    <div class="preview-show__card-footer">
                        <p class="preview-show__card-subtitle p1">Стикеры
                            с Соляриком</p>
                        <p class="preview-show__card-cost h2"> 50<img src="../assets/valute.svg" alt="icon valute"
                                class="preview-show__card-icon"></p>
                    </div>
                </div>
                <div class="preview-show__card">
                    <img src="" alt="" class="preview-show-img">
                    <div class="preview-show__card-footer">
                        <p class="preview-show__card-subtitle p1">Значек
                            Соляриса</p>
                        <p class="preview-show__card-cost h2">70 <img src="../assets/valute.svg" alt="icon valute"
                                class="preview-show__card-icon"></p>
                    </div>
                </div>
            </div>
            <button class="preview-show-btn p31">Показать еще товары</button>
        </div>
    </section>
</template>

<script setup>
</script>

<style>
.preview-show-container {
    width: 100%;
    background: var(--dark)
}

.preview-show {
    max-width: 1440px;
    margin: auto;
    padding: 74px 60px 48px 60px;
    display: flex;
    flex-direction: column;
    gap: 48px;
    box-sizing: border-box
}

.preview-show__description {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-left: 510px;
}

.preview-show-title {
    color: var(--white);
    max-width: 500px;
}

.preview-show-text {
    color: var(--white);
}

.preview-show__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
}

.preview-show__card {
    display: grid;
    padding: 24px;
    border: 2px solid var(--roseBege);
    gap: 16px;
}

.preview-show-img {
    width: 100%;
    height: 380px;
    border: 2px solid var(--roseBege);
    position: relative;
    box-sizing: border-box;
}

.preview-show-img::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--lightBege);
}

.preview-show__card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.preview-show__card-subtitle {
    color: var(--white);
    max-width: 228px;
}

.preview-show__card-cost {
    display: flex;
    align-items: center;
    color: var(--roseBege);
}

.preview-show__card-icon {
    margin-left: 8px;
}

.preview-show-btn {
    padding: 16px;
    border: 2px solid var(--roseBege);
    color: var(--roseBege);
    background: transparent;
    width: 210px;
    margin: auto;
    cursor: pointer;
}

.preview-show-btn:hover {
    border: 2px solid var(--roseBege);
    color: var(--white);
    background: var(--roseBege);
}

.preview-show-btn:active {
    border: 2px solid var(--gray);
    color: var(--dark);
    background: var(--roseBege);
}
</style>