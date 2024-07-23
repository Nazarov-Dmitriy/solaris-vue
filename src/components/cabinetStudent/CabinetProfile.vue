<template>
    <section class="cabinet-profile">
        <div class="cabinet-profile__container">
            <div class="cabinet-profile__avatar">
                <h2 class="cabinet-profile__avatar-initial h2">
                    АИ
                </h2>
                <button class="cabinet-profile__avatar-button">
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.3914 7.26343H7.21357C5.45171 7.26343 4.02344 8.6917 4.02344 10.4536V24.8097C4.02344 26.5716 5.45171 27.9999 7.21357 27.9999H23.1642C24.9261 27.9999 26.3544 26.5716 26.3544 24.8097V17.6314"
                            stroke="#DDA06B"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M26.3549 5.61514C27.2401 6.52976 27.2281 7.98522 26.3282 8.88521L15.1895 20.0239L10.4043 21.6189L11.9994 16.8337L23.1448 5.5955C24.0186 4.71434 25.4414 4.70844 26.3225 5.58232C26.3334 5.59315 26.3443 5.60409 26.3549 5.61514Z"
                            stroke="#DDA06B"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M23.1641 8.85864L24.6842 10.4537"
                            stroke="#DDA06B"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
            </div>
            <div class="cabinet-profile__wrap">
                <p class="cabinet-profile__name p1">
                    Иванов<span>Анатолий Иванович</span>
                </p>
                <p class="cabinet-profile__class p2">
                    7A класс
                </p>
                <p class="cabinet-profile__text p2">
                    ID используется для входа на сайт
                </p>
                <p class="cabinet-profile__id p1">
                    IvanovAI_7a
                </p>
            </div>
            <img
                class="cabinet-profile__img"
                src="../../assets/image/cabinet-profile/cabinet-profile-solaric.png"
                alt="#"
            >
        </div>
    </section>
</template>
<script>
export default {

}
</script>
<style>
.cabinet-profile {
    background-color: var(--dark);
}

.cabinet-profile__container {
    max-width: 1560px;
    margin: auto;
    box-sizing: border-box;
    padding: 80px 60px;
    position: relative;
    display: flex;
    gap: 16px;
    align-items: center;
}

.cabinet-profile__avatar {
    width: 148px;
    height: 148px;
    border-radius: 50%;
    border: 2px solid var(--roseBege);
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: center;
}

.cabinet-profile__avatar-initial {
    color: var(--roseBege);
    margin-top: 26px;
}

.cabinet-profile__avatar-button {
    position: absolute;
    bottom: 24px;
    left: 56px;
    width: 32px;
    height: 32px;
    background: transparent;
    border: none;
    cursor: pointer;
}

.cabinet-profile__wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
}

.cabinet-profile__name span {
    display: block;
}

.cabinet-profile__name,
.cabinet-profile__class,
.cabinet-profile__text,
.cabinet-profile__id {
    color: var(--white);
}

.cabinet-profile__img {
    position: absolute;
    bottom: 0px;
    right: 260px;
    width: 552px;
    height: 298px;
}

@media (max-width: 1440px) {
    .cabinet-profile__img {
        right: 140px;
    }
}

@media (max-width: 1200px) {
    .cabinet-profile__img {
        right: 56px;
    }
}

@media (max-width: 991px) {
    .cabinet-profile__container {
        padding: 80px 40px;
    }
}

@media (max-width: 860px) {
    .cabinet-profile__img {
        display: none;
    }
}

@media (max-width: 576px) {
    .cabinet-profile__container {
        padding: 16px;
        flex-direction: column;
    }

    .cabinet-profile__wrap {
        align-items: center;
        gap: 0px;
    }

    .cabinet-profile__wrap p {
        text-align: center;
    }
}
</style>