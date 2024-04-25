<template>
    <section class="wrap-container">
        <div class="intro">
            <div class="intro__description">
                <h1 class="intro__title h1">
                    Общее и дополнительное образование вместе с Соляриком!
                </h1>
                <p class="intro__text p1">Муниципальное автономное общеобразовательное учреждение «Лицей «Солярис» – одно из современных и крупнейших учреждений Саратовской области</p>
            </div>
            <div class="intro__form-container">
                <form action="" class="intro__form">
                    <input type="text" class="intro__input p2" placeholder="Логин">
                    <input type="text" class="intro__input p2" placeholder="Пароль">
                    <button class="btn">Воити в кабинет</button>
                    <button class="btn-text">Забыли пароль?</button>
                    <img class="into__bg-rays" src="../assets/image/animation-main/rays.svg" alt="rays">
                    <img class="into__bg-hare" src="../assets/image/animation-main/hare.svg" alt="hare">
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style>
.wrap-container {
    width: 100%;
    background: var(--dark);
    overflow: hidden;
}

.intro {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 60px;
    display: flex;
    justify-content: space-between;
    min-height: 668px;
    box-sizing: border-box;
    position: relative;
    z-index: 0;

}

.intro:before{
    content: '';
    position: absolute;
    top: 0px;
    left: 250px;
    width: 100%;
    height: 100%;    
    background: radial-gradient(circle farthest-side at 50% 50%, rgba(221, 160, 107, 1) 0%, rgba(31, 42, 62, 1) 100%);
    z-index: -1;
}

.intro__description {
    padding-top: 80px;
    max-width: 660px;
}

.intro__title {
    color: var(--white);
}

.intro__text {
    margin-top: 90px;
    color: var(--white);
    max-width: 517px;
}


.intro__form-container {
    padding-top: 220px;
}

.intro__form {
    padding: 24px;
    background: var(--dark);
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    position: relative;
    z-index: 1;
}




.into__bg-rays {
    position:absolute;
    width: 546px;
    height: 650px;
    top: -231px;
    left: -374px;
    z-index: -1;
    rotate: -24deg;
}

.into__bg-hare {
    position:absolute;
    width: 379px;
    height: 384px;
    top: -110px;
    left: -304px;
    z-index: -1;
    rotate: -24deg;
}

.intro__form::after{
    content:'';
    position:absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: var(--dark);
    z-index: -1;
}

.intro__input {
    padding: 16px;
    border: 2px solid var(--roseBege);
    background: var(--white);
    color: var(--roseBege)
}

.intro__input::placeholder {
    color: var(--roseBege)
}

.intro__input:hover {
    background: var(--lightBege);
}

.intro__input:focus {
    background: var(--white);
    color: var(--dark)
}

.intro__input:active,
.intro__input:focus {
    outline: none;
}

.intro__input:first-child {
    margin-top: 32px;
    margin-bottom: 8px;
}



</style>