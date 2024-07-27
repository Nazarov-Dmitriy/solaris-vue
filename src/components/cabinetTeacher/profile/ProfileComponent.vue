<template>
    <section class="teachcabinet-profile">
        <div class="teachcabinet-profile__container">
            <div class="teachcabinet-profile__avatar">
                <h2 class="teachcabinet-profile__avatar-initial h2">
                    АИ
                </h2>
                <button class="teachcabinet-profile__avatar-button">
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
            <div class="teachcabinet-profile__wrap">
                <p class="teachcabinet-profile__name p1">
                    Иванов<span>Андрей Иванович</span>
                </p>
                <p class="teachcabinet-profile__class p2">
                    Русский язык
                </p>
                <p class="teachcabinet-profile__text p2">
                    Литература
                </p>
                <p class="teachcabinet-profile__id p1">
                    IvanovAI_Russian and literature
                </p>
            </div>
            <img
                class="teachcabinet-profile__img"
                src="@/assets/image/cabinet-teacher/cabinet-teacher-solaric.png"
                alt="#"
            >
        </div>
    </section>
</template>
<script>
</script>
<style lang="scss">
.teachcabinet-profile {
    background-color: var(--dark);
}

.teachcabinet-profile__container {
    max-width: 1560px;
    margin: auto;
    box-sizing: border-box;
    padding: 50px 60px;
    position: relative;
    display: flex;
    gap: 16px;
    align-items: center;
    overflow: hidden;
    @media (max-width: $md) {
        padding: 40px;
    }
    @media (max-width: 390px) {
        padding: 16px;
        flex-direction: column;
    }
}

.teachcabinet-profile__avatar {
    width: 148px;
    height: 148px;
    border-radius: 50%;
    border: 2px solid var(--roseBege);
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: center;
}

.teachcabinet-profile__avatar-initial {
    color: var(--roseBege);
    margin-top: 26px;
}

.teachcabinet-profile__avatar-button {
    position: absolute;
    bottom: 24px;
    left: 56px;
    width: 32px;
    height: 32px;
    background: transparent;
    border: none;
    cursor: pointer;
}

.teachcabinet-profile__wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    @media (max-width: 390px) {
        align-items: center;
        gap: 0px;
    }
}

.teachcabinet-profile__wrap p {
    @media (max-width: 390px) {
        text-align: center;
    }
}

.teachcabinet-profile__name span {
    display: block;
}

.teachcabinet-profile__name,
.teachcabinet-profile__class,
.teachcabinet-profile__text,
.teachcabinet-profile__id {
    color: var(--white);
}

.teachcabinet-profile__img {
    position: absolute;
    bottom: 20px;
    right: 260px;
    width: 680px;
    height: 222px;
    @media (max-width: $xxl) {
        right: 190px;
    }

    @media (max-width: $xl) {
        bottom: 32px;
        right: 68px;
        width: 562px;
        height: 200px;
    }

    @media (max-width: $lg) {
        bottom: 56px;
        right: 60px;
        width: 363px;
        height: 143px;
    }
    @media (max-width: $md) {
        bottom: 56px;
        right: 40px;
        width: 291px;
        height: 115px;
    }
    @media (max-width: $sm) {
        right: -144px;
    }
    @media (max-width: 390px) {
        display: none;
    }
}

.teachcabinet-profile__class {
    @media (max-width: $lg) {
        font-size: 14px;
        line-height: 20px;
    }
    @media (max-width: 390px) {
        font-size: 12px;
        line-height: 18px;
    }
}

.teachcabinet-profile__text {
    @media (max-width: $lg) {
        font-size: 14px;
        line-height: 20px;
    }

    @media (max-width: 390px) {
        font-size: 12px;
        line-height: 18px;
    }
}
</style>