<template>
    <section class="about-working-container">
        <div class="about-working">
            <h2 class="about-working-title h2">Как это работает</h2>
            <div class="about-working__list">
                <div class="about-working__card">
                    <p class="about-working__card-numering">№1</p>
                    <div class="about-working__card-content">
                        <h3 class="about-working__card-subtitle h3">Регестрируйся
                            на платформе</h3>
                        <p class="about-working__card-text p2">Идейные соображения высшего порядка, а также постоянный
                            количественный рост </p>
                    </div>
                </div>
                <div class="about-working__card">
                    <p class="about-working__card-numering">№2</p>
                    <div class="about-working__card-content">
                        <h3 class="about-working__card-subtitle h3">Выбирай
                            направления</h3>
                        <p class="about-working__card-text p2">Идейные соображения высшего порядка, а также постоянный
                            количественный рост </p>
                    </div>
                </div>
                <div class="about-working__card">
                    <p class="about-working__card-numering">№3</p>
                    <div class="about-working__card-content">
                        <h3 class="about-working__card-subtitle h3">Участвуй
                            в конкурсах</h3>
                        <p class="about-working__card-text p2">Идейные соображения высшего порядка, а также постоянный
                            количественный рост </p>
                    </div>
                </div>
                <div class="about-working__card">
                    <p class="about-working__card-numering">№4</p>
                    <div class="about-working__card-content">
                        <h3 class="about-working__card-subtitle h3">Получай <br>
                            Солярики                          
                        </h3>
                        <p class="about-working__card-text p2">Идейные соображения высшего порядка, а также постоянный
                            количественный рост

                        </p>
                    </div>
                </div>
                <div class="about-working__card">
                    <p class="about-working__card-numering">№5</p>
                    <div class="about-working__card-content">
                        <h3 class="about-working__card-subtitle h3">Покупай
                            уникальные товары</h3>
                        <p class="about-working__card-text p2">Идейные соображения высшего порядка, а также постоянный
                            количественный рост </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup></script>
<style>
.about-working-container {
    width: 100%;
    background: var(--lightBege);
    border-top:2px solid var(--roseBege);
    border-bottom:2px solid var(--roseBege);
}

.about-working {
    max-width: 1440px;
    margin: auto;
    padding: 110px 60px 136px 60px;
    display: flex;
    flex-direction: column;
    gap: 48px;
    box-sizing: border-box
}

.about-working-title {
    text-align: center;
}

.about-working__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px 16px;
}

.about-working__card {
    display: grid;
    padding: 16px;
    grid-template-rows: 164px 1fr;
    align-items: start;
    gap: 24px;
}

.about-working__card-numering {
    background: var(--white);
    width: 162px;
    padding: 48px 0px;
    text-align: center;
    box-sizing: border-box;
    border: 2px solid var(--roseBege);
    font-weight: 700;
    font-size: 64px;
    color: var(--roseBege);
    display: block;
    margin: auto;
    line-height: 1;

}

.about-working__card-content {
    display: grid;
    gap: 12px;
}

.about-working__card-subtitle {
    text-align: center;
    max-width: 350px;
    margin: auto;
}

.about-working__card-text {
    text-align: center;
}
</style>