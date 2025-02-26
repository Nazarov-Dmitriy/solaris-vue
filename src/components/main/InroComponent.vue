<template>
    <section id="intro" class="wrap-container">
        <div class="intro">
            <div class="intro__description">
                <h1 class="intro__title h1">
                    Общее и дополнительное образование вместе с Соляриком!
                </h1>
                <p class="intro__text p1">
                    Муниципальное автономное общеобразовательное учреждение
                    «Лицей «Солярис» – одно из современных и крупнейших
                    учреждений Саратовской области
                </p>
            </div>

            <div class="intro__form-container">
                <form class="intro__form" @submit.prevent>
                    <div>
                        <input
                            v-model="payload.username"
                            type="text"
                            class="intro__input p2"
                            placeholder="Логин"
                            style="margin-top: 32px"
                            :class="{ error: loginError }"
                            @change="changeLogin"
                        />
                        <div v-if="loginError" class="form__error">
                            <span class="form__icon-error">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM12 2C6.47 2 2 6.5 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                                        fill="#DE4700"
                                    />
                                </svg>
                            </span>
                            <p class="form__text-error">
                                Поле заполнено некорректно
                            </p>
                        </div>
                    </div>
                    <div>
                        <input
                            v-model="payload.password"
                            type="text"
                            class="intro__input p2"
                            placeholder="Пароль"
                            style="margin-top: 8px"
                            :class="{ error: passwordError }"
                            @change="changePassword"
                        />
                        <div v-if="passwordError" class="form__error">
                            <span class="form__icon-error">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM12 2C6.47 2 2 6.5 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                                        fill="#DE4700"
                                    />
                                </svg>
                            </span>
                            <p class="form__text-error">
                                Поле заполнено некорректно
                            </p>
                        </div>
                    </div>
                    <ButtonComponent
                        :config="{ label: 'Войти в кабинет', className: 'btn' }"
                        @on-click="onLogin()"
                    ></ButtonComponent>
                    <ButtonComponent
                        :config="{
                            label: 'Забыли пароль?',
                            className: 'intro__form-btn btn-text',
                        }"
                        @on-click="forgetPassword()"
                    ></ButtonComponent>
                    <img
                        class="into__bg-rays"
                        src="../../assets/image/animation-main/rays.svg"
                        alt="rays"
                    />
                    <img
                        class="into__bg-hare"
                        src="../../assets/image/animation-main/hare.svg"
                        alt="hare"
                    />
                    <transition name="show">
                        <div v-if="modal" class="intro__modal">
                            <svg
                                class="intro__modal-close"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                @click="modal = false"
                            >
                                <line
                                    x1="6.06066"
                                    y1="6.21313"
                                    x2="26.2132"
                                    y2="26.3657"
                                    stroke="white"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                />
                                <line
                                    x1="5"
                                    y1="26.1525"
                                    x2="25.1525"
                                    y2="5.99993"
                                    stroke="white"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                />
                            </svg>
                            <p class="intro__modal-text p1">
                                Если вы забыли пароль от своего личного
                                кабинета, то обратитесь к вашему классному
                                руководителю.
                            </p>
                        </div>
                    </transition>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { inject, reactive, ref } from 'vue';
import { useAuthStore } from '@/stores/useAuthStore';
import ButtonComponent from '../button-component/ButtonComponent.vue';
import { UserService } from '@/plugins/UserService';
const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();

const userService: UserService = inject('UserService');

const modal = ref(false);
const payload = reactive({
    username: '',
    password: '',
});
const loginError = ref(false);
const passwordError = ref(false);

function changeLogin(evt) {
    loginError.value = evt.target.value.length < 3 ? true : false;
}
function changePassword(evt) {
    passwordError.value = evt.target.value.length < 3 ? true : false;
}

const onLogin = () => {
    userService
        .loginUser(payload)
        .then((user) => {
            localStorage.setItem('token', user.data.token);
            localStorage.setItem('category', user.data.category);
            authStore.loadUser(user.data);
            userService.getCurrentUser().then((user) => {
                authStore.loadUser(user.data);
            });
            router.push('/cabinet');
        })
        .catch((e) => {});
};

const forgetPassword = () => {};
</script>

<style lang="scss">
.wrap-container {
    width: 100%;
    background: var(--dark);
    overflow: hidden;
    padding-top: 88px;
    scroll-margin: 88px;
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
    background: radial-gradient(
        circle farthest-side at 50% 50%,
        rgba(221, 160, 107, 1) 0%,
        rgba(31, 42, 62, 1) 100%
    );
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

    @media (max-width: $lg) {
        &.h1 {
            font-size: 48px;
            line-height: 64px;
        }
    }

    @media (max-width: $md) {
        &.h1 {
            font-size: 24px;
            line-height: 150%;
        }
    }
}

.intro__text {
    margin-top: 48px;
    color: var(--white);
    max-width: 517px;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;

    @media (max-width: $lg) {
        &.p1 {
            font-size: 16px;
            line-height: 150%;
        }
    }
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
    animation: intro-rays 1s ease-in-out;
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
    color: var(--roseBege);

    &.error {
        border: 2px solid var(--orange);
    }
}

.intro__input::placeholder {
    color: var(--roseBege);
}

.intro__input:hover {
    background: var(--lightBege);
}

.intro__input:focus {
    background: var(--white);
    color: var(--dark);
}

.intro__input:active,
.intro__input:focus {
    outline: none;
}

.intro__modal {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: var(--dark);
    box-sizing: border-box;
    padding: 80px 24px;
}

.intro__modal-close {
    position: absolute;
    top: 24px;
    right: 24px;
    cursor: pointer;
}

.intro__modal-text {
    color: var(--roseBege);
}

.show-enter-active {
    transition: all 0.2s ease-out;
}

.show-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.show-enter-from,
.show-leave-to {
    opacity: 0.5;
}

.intro .form__error {
    margin: 8px 0 0 0;

    .form__text-error {
        font-size: 14px;
    }
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
        z-index: 2;
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
        z-index: 2;
    }

    .into__bg-hare {
        width: 143px;
        height: 145px;
        top: initial;
        left: initial;
        bottom: -34px;
        right: -8px;
        z-index: 2;
    }

    .intro__modal {
        height: 392px;
        top: 30%;
    }

    .intro__input {
        width: 256px;
    }
}

@media (max-width: 376px) {
    .intro__modal {
        height: 392px;
        top: 38%;
    }
}

@keyframes intro-gradient {
    from {
        background: var(--dark);
    }

    to {
        background: radial-gradient(
            circle farthest-side at 50% 50%,
            rgba(221, 160, 107, 1) 0%,
            rgba(31, 42, 62, 1) 100%
        );
    }
}

@keyframes intro-rays {
    from {
        opacity: 0;
        rotate: 45deg;
    }

    to {
        opacity: 1;
        rotate: 0;
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
