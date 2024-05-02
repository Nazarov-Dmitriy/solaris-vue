<template>
    <section class="wrap-container">
        <div class="intro">
            <div class="intro__description">
                <h1 class="intro__title h1 ">
                    Общее и дополнительное образование вместе с Соляриком!
                </h1>
                <p class="intro__text p1 ">Муниципальное автономное общеобразовательное учреждение «Лицей «Солярис» –
                    одно из современных и крупнейших учреждений Саратовской области</p>
            </div>
            <div class="intro__form-container">
                <form action="" class="intro__form">
                    <input type="text" class="intro__input p2" placeholder="Логин">
                    <input type="text" class="intro__input p2" placeholder="Пароль">
                    <button class="btn">Воити в кабинет</button>
                    <button class="btn-text">Забыли пароль?</button>
                    <img class="into__bg-rays" src="../../assets/image/animation-main/rays.svg" alt="rays">
                    <img class="into__bg-hare" src="../../assets/image/animation-main/hare.svg" alt="hare">
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>
document.addEventListener("DOMContentLoaded", function () {
    let title = document.querySelector(".intro__title");
    let decription = document.querySelector('.intro__text');

    window.addEventListener('resize', () => {
        introClass()
    })

    introClass()

    function introClass() {
        if (window.innerWidth <= 991) {
            title.classList.remove("h1")
            title.classList.remove("h3")
            title.classList.add("h2")
            decription.classList.remove("p1")
            decription.classList.add("p2")
        }

        if (window.innerWidth >= 991) {
            title.classList.remove("h2")
            title.classList.add("h1")
            decription.classList.remove("p2")
            decription.classList.add("p1")
        }

        if (window.innerWidth <= 767) {
            title.classList.remove("h2")
            title.classList.add("h3")
            decription.classList.remove("p1")
            decription.classList.add("p2")
        }
    }


})
</script>

<style>
.wrap-container {
    width: 100%;
    background: var(--dark);
    overflow: hidden;
    padding-top: 88px;
}

.intro {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 60px 80px 60px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    position: relative;
    z-index: 0;

}

.intro:before {
    content: '';
    position: absolute;
    top: 0px;
    left: 250px;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle farthest-side at 50% 50%, rgba(221, 160, 107, 1) 0%, rgba(31, 42, 62, 1) 100%);
    z-index: -1;
    animation: intro-gradient 0.8s ease-in-out;
}

.intro__description {
    padding-top: 80px;
    max-width: 660px;
    position: relative;
    z-index: 10;
}

.intro__title {
    color: var(--white);
}

.intro__text {
    margin-top: 48px;
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
    position: absolute;
    top: 40px;
    width: 650px;
    height: 546px;
    top: -180px;
    left: -426px;
    z-index: -1;
    animation: intro-rays 1.0s ease-in-out;
    rotate: -91deg;
}

.into__bg-hare {
    position: absolute;
    width: 379px;
    height: 384px;
    top: -110px;
    left: -304px;
    z-index: -1;
    rotate: -24deg;
    animation: intro-hair 0.8s ease-in-out;
}

.intro__form::after {
    content: '';
    position: absolute;
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

@media (max-width: 1250px) {
    .intro {
        padding: 0 60px;
    }

    .intro__description {
        max-width: 456px;
    }

    .intro__text {
        padding-bottom: 40px;
    }

    .into__bg-rays {
        height: calc(207px * 1.7);
        width: calc(246px * 1.7);
        top: -14px;
        left: -250px;
    }

    .into__bg-hare {
        width: calc(143px * 1.7);
        height: calc(145px * 1.7);
        top: 31px;
        left: -180px;
    }

    .intro:before {
        left: 150px;
        width: 100%;
    }
}

@media (max-width: 1200px) {
    .wrap-container {
        padding-top: 65px;
    }
}

@media (max-width: 991px) {
    .intro {
        padding: 40px;
    }

    .intro:before {
        top: -63px;
        left: 118px;
        width: calc(100% - 118px);
        border-radius: 100%;
        height: calc(100% + 63px);
        background: var(--roseBege);
        filter: blur(250px);
    }

    .intro__description {
        padding-top: 0;
    }

    .intro__text {
        padding-bottom: 0;
        margin-top: 40px;
        max-width: 330px;
    }

    .intro__form-container {
        padding-top: 160px;
    }

    .intro__form {
        flex-direction: column;
        width: 245px;
        box-sizing: border-box;
    }

    .intro__input {
        box-sizing: border-box;
        width: 100%;
    }

    .intro__form .btn {
        width: 100%;
    }

    .into__bg-rays {
        height: 207px;
        width: 246px;
        top: 0px;
        left: -145px;
        transform: rotate(-24deg);
    }

    .into__bg-hare {
        width: 143px;
        height: 145px;
        top: 31px;
        left: -109px;
    }
}

@media (max-width: 767px) {
    .intro {
        padding: 40px;
        gap: clamp(20px, 1vw, 100px);
    }

    .intro__description {
        max-width: 330px;
    }

    .intro__text {
        max-width: 230px;
    }

    .intro__form-container {
        padding-top: 40px;
    }
}

@media (max-width: 576px) {
    .wrap-container {
        padding-top: 49px;
    }

    .intro {
        padding: 16px 16px 156px 16px;
        flex-direction: column;
        gap: 24px;
    }

    .intro:before {
        top: initial;
        left: initial;
        bottom: -103px;
        right: -80px;
        width: 286px;
        height: 290px;
        border-radius: 100%;
        background: var(--roseBege);
        filter: blur(110px);
        z-index: 0;
    }

    .intro__description {
        max-width: 100%;
    }

    .intro__text {
        margin-top: 20px;
        max-width: 100%;
    }

    .intro__form-container {
        padding-top: 0;
    }

    .intro__form {
        padding: 16px;
        width: 100%;
        position: initial;

    }

    .intro__form .btn {
        max-width: 256px;
        justify-content: center;
    }

    .into__bg-rays {
        height: 207px;
        width: 246px;
        top: initial;
        left: initial;
        bottom: -51px;
        right: -47px;
        z-index: 1;
    }

    .into__bg-hare {
        width: 143px;
        height: 145px;
        top: initial;
        left: initial;
        bottom: -34px;
        right: -8px;
        z-index: 1;

    }
}

@keyframes intro-gradient {
    from {
        background: var(--dark)
    }

    to {
        background: radial-gradient(circle farthest-side at 50% 50%, rgba(221, 160, 107, 1) 0%, rgba(31, 42, 62, 1) 100%);
    }
}

@keyframes intro-rays {
    from {
        opacity: 0;
        rotate: 45deg
    }

    to {
        opacity: 1;
        rotate: 0
    }
}

@keyframes intro-hair {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>