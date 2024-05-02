<template>
    <section class="about-solaric">
        <div class="about-solaric__header">
            <img src="../../assets/icon/solaric.svg" alt="" class="about-solaric-icon">
            <div>
                <h2 class="about-solaric-title h2">Солярики</h2>
                <p class="h3">Школьная криптовалюта</p>
            </div>
        </div>
        <p class="about-solaric__text p2">Солярик - официальный талисман и маскот нашего лицея. Внедрение криптовалюты
            «Солярики» в образовательный процесс не только способствует мотивации и развитию участников, но и создает
            уникальную и инновационную среду, где образование сочетается с современными технологиями и цифровыми
            решениями. Стимулируя учащихся к активности и достижению целей и помогая развивать навыки финансовой
            грамотности, управления ресурсами и экономического мышления.</p>
        <img class="about-solaric__coin" src="../../assets/icon/solaric.svg" alt="coin">
        <img class="about-solaric__coin" src="../../assets/icon/solaric.svg" alt="coin">
        <img class="about-solaric__coin" src="../../assets/icon/solaric.svg" alt="coin">
    </section>
</template>

<script setup>
document.addEventListener("DOMContentLoaded", function () {
    let title = document.querySelector(".about-solaric-title");

    window.addEventListener('resize', () => {
        changeClass()
    })

    changeClass()

    function changeClass() {
        if (window.innerWidth <= 991) {
            title.classList.remove("h2")
            title.classList.add("h3")
        }

        if (window.innerWidth >= 991) {
            title.classList.remove("h3")
            title.classList.add("h2")
        }
    }


})
</script>

<style>
.about-solaric {
    max-width: 1440px;
    margin: 0 auto;
    padding: 148px 60px 90px 60px;
    display: flex;
    flex-direction: column;
    gap: 48px;
    box-sizing: border-box;
    position: relative;
}

.about-solaric__header {
    display: flex;
    gap: 16px;
    z-index: 1;
}

.about-solaric-icon {
    width: 95px;
    height: 95px;
}

.about-solaric__text {
    max-width: 64%;
}

.about-solaric__coin {
    opacity: 0.5;
}

.about-solaric__coin:nth-child(3) {
    position: absolute;
    top: 85px;
    right: 8.2%;
    width: 248px;
    height: 247px;
    rotate: -20deg;
    animation: solaric-img1 1s ease-out;

}

.about-solaric__coin:nth-child(4) {
    position: absolute;
    top: 306px;
    right: 22.6%;
    width: 167px;
    height: 166px;
    rotate: 39deg;
    animation: solaric-img2 1s ease-out;
}

.about-solaric__coin:nth-child(5) {
    position: absolute;
    top: 378px;
    right: 10.5%;
    width: 95px;
    height: 95px;
    rotate: -55deg;
    animation: solaric-img3 1s ease-out;
}

@media (max-width: 991px) {
    .about-solaric {
        padding: 64px 40px;
    }

    .about-solaric__text {
        max-width: 100%;
    }

    .about-solaric__coin:nth-child(3) {
        top: 31px;
        right: 10.8%;
        width: 105px;
        height: 105px;
        animation: none;
    }

    .about-solaric__coin:nth-child(4) {
        top: 121px;
        right: 23.5%;
        width: 71px;
        height: 71px;
        animation: none;
    }

    .about-solaric__coin:nth-child(5) {
        top: 158px;
        right: 9.5%;
        width: 40px;
        height: 40px;
        animation: none;
    }
}

@media (max-width: 576px) {
    .about-solaric {
        padding: 40px 16px;
        gap: 24px;
    }

    .about-solaric__coin:nth-child(4) {
        top: 17px;
        right: 9px;
        width: 57px;
        height: 56px;
    }

    .about-solaric__coin:nth-child(3),
    .about-solaric__coin:nth-child(5) {
        display: none;
    }
}

@keyframes solaric-img1 {
    from {
        top: 16px;
        rotate: 39deg;

    }

    to {
        top: 85px;
        rotate: -20deg;
    }
}

@keyframes solaric-img2 {
    from {
        top: 207px;
        rotate: -29deg;

    }

    to {
        top: 306px;
        rotate: 39deg;
    }
}

@keyframes solaric-img3 {
    from {
        top: 256px;
        rotate: 0deg;

    }

    to {
        top: 378px;
        rotate: -55deg;
    }
}
</style>