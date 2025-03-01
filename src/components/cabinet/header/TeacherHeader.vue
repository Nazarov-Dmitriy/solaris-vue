<template>
    <div class="cabinet-header__container">
        <div class="cabinet-header">
            <div class="cabinet-header__mobile flex items-center justify-between">
                <div class="cabinet-header__info">
                    <router-link to="/cabinet/teacher" class="cabinet-header__logo-wraper">
                        <img
                            src="@/assets/icon/cabinet-header/logo_cabinet.svg"
                            class="cabinet-header__logo"
                            alt="
                        icon-logo"
                        />
                        <p class="cabinet-header__logo-text p2-phone">Кабинет учителя</p>
                    </router-link>
                    <div class="cabinet-header__student-info">
                        <div class="cabinet-header__notification">
                            <router-link to="/cabinet/teacher/notification">
                                <p class="cabinet-header__notification-count p2-phone">1</p>
                                <img src="@/assets/icon/cabinet-header/bell.svg" alt="icon-bellt" />
                            </router-link>
                        </div>
                        <p class="cabinet-header__student-initials">АИ</p>
                        <img
                            src="@/assets/icon/cabinet-header/pointer_down.svg"
                            alt="icon-poiner-down"
                        />
                    </div>
                </div>

                <div class="hamburger" :class="{ 'is-active': btnMenu }" @click="setMenuAcive()">
                    <span class="line" />
                    <span class="line" />
                    <span class="line" />
                </div>
            </div>
            <div class="cabinet-header__nav" :class="{ 'is-active': btnMenu }">
                <ul class="cabinet-header__list">
                    <li class="botton">
                        <router-link to="/cabinet/teacher/contests" class="cabinet-header__link">
                            <img src="@/assets/icon/cabinet-header/contest.svg" alt="icon-shop" />
                            Конкурсы
                        </router-link>
                    </li>
                    <li class="botton">
                        <router-link
                            to="/cabinet/teacher/case-portfolio"
                            class="cabinet-header__link"
                        >
                            <img src="@/assets/icon/cabinet-header/contest.svg" alt="icon-shop" />
                            Добавить в портфолио
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="cabinet-header__wrapper" :class="{ 'is-active': btnMenu }">
                <input
                    v-model="sertificat"
                    type="text"
                    class="cabinet-header__input"
                    placeholder="Введите номер сертификата"
                    @keypress.enter="showModal()"
                />
                <BtnComponent class="cabinet-header__btn" emit-name="action" @action="showModal()">
                    Проверить
                </BtnComponent>
            </div>
        </div>
        <Teleport to="body">
            <ModalSertificat
                :show="modal"
                :user="user"
                :sertificat="sertificat"
                :validate="validateSertificat"
                @close="closeModal()"
            />
        </Teleport>
    </div>
</template>
<script setup>
import BtnComponent from '@/components/btns/BtnComponent.vue'
import ModalSertificat from '@/components/modal/ModalSertificat.vue'

import { ref } from 'vue'
const btnMenu = ref(false)
const menuActive = ref(false)

const sertificat = ref('')
const validateSertificat = ref(false)
const modal = ref(false)

const user = ref({ name: 'Иванов Михаил Дмитриевич', class: '7А класс', date: '12/04/2024' })

function setMenuAcive() {
    btnMenu.value = !btnMenu.value
    menuActive.value = !menuActive.value
}

function showModal() {
    if (sertificat.value === '') {
        modal.value = true
    } else {
        if (sertificat.value === '1234') {
            validateSertificat.value = true
        }
        console.log(validateSertificat.value)
        modal.value = true
    }
}

function closeModal() {
    modal.value = false
    validateSertificat.value = false
}
</script>
<style lang="scss" scoped>
.cabinet-header__container {
    width: 100%;
    border-bottom: 2px solid var(--roseBege);
    background-color: var(--dark);
}

.cabinet-header {
    max-width: 1560px;
    padding: 8px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    box-sizing: border-box;

    @media (max-width: $xl) {
        flex-wrap: wrap;
        gap: 8px;
    }
}

.cabinet-header__mobile {
    @media (max-width: $xl) {
        width: 100%;
    }
}

.cabinet-header__info {
    display: flex;
    gap: 24px;
}

.cabinet-header__logo {
    width: 101px;
    height: 30px;
}

.cabinet-header__logo-text {
    color: var(--roseBege);
}

.cabinet-header__student-info {
    display: flex;
    gap: 8px;
    align-items: center;
}

.cabinet-header__notification {
    position: relative;
    cursor: pointer;
}

.cabinet-header__notification-count {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 2px;
    left: -10px;
    color: var(--white);
    background: var(--orange);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cabinet-header__student-initials {
    width: 32px;
    height: 32px;
    border: 1px solid var(--roseBege);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 16px;
    color: var(--roseBege);
}

.cabinet-header__nav {
    @media (max-width: $xl) {
        display: none;

        &.is-active {
            display: flex;
        }
    }
}

.cabinet-header__list {
    list-style-type: none;
    display: flex;
    gap: 24px;
    align-items: center;
}

.cabinet-header__link {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--white);
    cursor: pointer;
    text-decoration: none;

    @media (max-width: $lg) {
        flex-direction: column;
        gap: 0;
    }
}

.cabinet-header__wrapper {
    display: flex;
    gap: 16px;

    @media (max-width: $xl) {
        display: none;

        &.is-active {
            display: flex;
        }
    }

    @media (max-width: $lg) {
        flex-direction: column;
    }

    @media (max-width: $md) {
        margin-top: 12px;
    }
}

.cabinet-header__btn {
    height: 36px;
    padding: 6px 16px;

    @media (max-width: $lg) {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.cabinet-header__input {
    max-width: 260px;
    width: 100%;
    border: 2px solid var(--roseBege);
    color: var(--roseBege);
    background: rgba($color: #ffffff, $alpha: 0.2);
    padding: 6px 16px;
    box-sizing: border-box;
    height: 36px;
    font-size: 16px;
    line-height: 24px;

    @media (max-width: $lg) {
        max-width: 240px;
        padding: 6px 6px;
        box-sizing: border-box;
    }
}

@media (max-width: 768px) {
    .cabinet-header {
        padding: 8px 40px;
        flex-direction: column;
    }

    .cabinet-header__nav {
        width: 100%;
        justify-content: center;
    }

    .cabinet-header__list {
        height: 48px;
        justify-content: space-between;
    }
}

@media (max-width: 576px) {
    .cabinet-header {
        padding: 8px 16px;
        gap: 12px;
    }
}

.hamburger {
    width: 24px;
    height: 24px;
    padding: 4px 1px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    display: none;

    @media (max-width: $xl) {
        display: flex;
    }
}

.hamburger .line {
    width: 22px;
    height: 2px;
    background-color: var(--roseBege);
    display: block;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.hamburger:hover {
    cursor: pointer;
}

.hamburger.is-active .line:nth-child(2) {
    opacity: 0;
}

.hamburger.is-active .line:nth-child(1) {
    -webkit-transform: translateY(7px) rotate(45deg);
    -ms-transform: translateY(7px) rotate(45deg);
    -o-transform: translateY(7px) rotate(45deg);
    transform: translateY(7px) rotate(45deg);
}

.hamburger.is-active .line:nth-child(3) {
    -webkit-transform: translateY(-7px) rotate(-45deg);
    -ms-transform: translateY(-7px) rotate(-45deg);
    -o-transform: translateY(-7px) rotate(-45deg);
    transform: translateY(-7px) rotate(-45deg);
}
</style>
