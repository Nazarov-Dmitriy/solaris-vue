<template>
    <div class="header__container">
        <div class="header">
            <div class="header-logo">
                <img
                    src="@/assets/icon/logo.svg"
                    alt=""
                >
            </div>
            <div
                class="header-menu"
                :class="{ 'active': active }"
            >
                <nav>
                    <ul class="header__list">
                        <router-link
                            to="/#intro"
                            class="header__link botton"
                        >
                            О проекте
                        </router-link>
                        <router-link
                            to="/#aboutSolaric"
                            class="header__link botton"
                        >
                            Cолярики
                        </router-link>
                        <router-link
                            to="/#previewshop"
                            class="header__link botton"
                        >
                            Магазин
                        </router-link>
                        <router-link
                            to="/#moreCompetitions"
                            class="header__link botton"
                        >
                            Чат-бот
                        </router-link>
                        <router-link
                            to="/#solarisFaq"
                            class="header__link botton"
                        >
                            Вопросы
                        </router-link>
                        <router-link
                            to="/#reviews"
                            class="header__link botton"
                        >
                            Отзывы
                        </router-link>
                        <router-link
                            to="#feedback"
                            class="header__link botton"
                        >
                            Написать нам
                        </router-link>
                    </ul>
                </nav>
                <button class="btn btn-login">
                    ВХОД
                </button>
                <span class="header-line" />
            </div>
            <button class="btn btn-login">
                ВХОД
            </button>
            <div class="burger-menu">
                <input
                    id="burger-checkbox"
                    v-model="checkbox"
                    type="checkbox"
                    class="burger-checkbox"
                    @click.stop="avtiveMenu(!active)"
                >
                <label
                    class="burger"
                    for="burger-checkbox"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const active = ref(false);
const checkbox = ref(false);

function avtiveMenu (par) {
    active.value = par
}

onMounted(() => {
    window.addEventListener("resize", resizeHandler);
})

function resizeHandler () {
    if (window.innerWidth >= 1200) {
        active.value = false
        checkbox.value = false
    }
}

</script>

<style>
.header__container {
  position: fixed;
  width: 100%;
  z-index: 9999;
  background: var(--white)
}

.header {
  padding: 16px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  box-sizing: border-box;
  gap: 8px;

  @media (max-width: 1200px) {
    border-bottom: 2px solid var(--roseBege);
    padding: 8px 0;
    margin: 0 60px;
  }

  @media (max-width: 991px) {
    margin: 0 40px;
    border-bottom: 2px solid var(--roseBege)
  }

  @media (max-width: 576px) {
    margin: 0 16px;
  }
}

.header__burger-menu {
  border-bottom: none;
}

.header-logo {
  width: 159px;
  height: 47px;

  @media (max-width: 576px) {
    width: 108px;
    height: 31px;
  }

  img {
    width: 100%;
    height: 100%;
  }
}

.header-menu {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;

  @media (max-width: 1200px) {
    display: none
  }
}

.header-menu nav {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;

  @media (max-width: 1200px) {
    width: calc(100% - 32px);
    justify-content: center;
    padding-top: 40px;

  }

  @media (max-width: 576px) {
    order: 1;
    width: calc(100% - 32px);
    border-bottom: 2px solid var(--roseBege);
    padding-top: 0;
    padding-bottom: 16px;
  }
}

.header-menu .btn {
  display: none;

  @media (max-width: 1200px) {
    display: block;
    margin-bottom: 16px;
  }

  @media (max-width: 576px) {
    margin-bottom: 0;
  }
}

.header-line {
  @media (max-width: 1200px) {
    width: calc(100% - 120px);
    border-bottom: 2px solid var(--roseBege);
    margin-top: -40px;
  }

  @media (max-width: 991px) {
    width: calc(100% - 80px);
  }

  @media (max-width: 576px) {
    display: none;
  }
}


.header-menu.active {
  display: flex;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    position: absolute;
    background: var(--white);
    flex-direction: column;
    left: 0;
    right: 0;
    top: 62px;
    gap: 40px;
    width: 100%;
  }

  @media (max-width: 576px) {
    width: 100%;
    top: 47px;
    padding-top: 20px;
    gap: 20px;
  }
}

.header>.btn {
  @media (max-width: 1200px) {
    display: none
  }
}

.header__list {
  display: flex;
  gap: clamp(8px, 1vw, 24px);
  list-style-type: none;

  @media (max-width: 1200px) {
    max-width: 540px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
}

.header__link {
  text-decoration: none;
  color: var(--dark);
  white-space: nowrap;
}

.header__link:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.header__link:active {
  color: var(--orange);
  text-decoration: underline var(--orange);
  text-underline-offset: 4px;
}

.btn-login {
  padding: 16px 64px;
}

.burger-menu {
  display: none;

  @media (max-width: 1200px) {
    display: block;
  }
}

.burger-checkbox {
  position: absolute;
  visibility: hidden;
}

.burger {
  cursor: pointer;
  display: block;
  position: relative;
  border: none;
  background: transparent;
  width: 30px;
  height: 32px;
  padding: 0 1px;
}

.burger::before,
.burger::after {
  content: '';
  width: 30px;
  position: absolute;
  display: block;
  height: 1.5px;
  border-radius: 10px;
  background: #000;

  @media (max-width: 576px) {
    width: 24px !important;
  }
}

.burger::before {
  top: 7px;
  box-shadow: 0 8px 0 #000;
  transition: box-shadow .3s .15s, top .3s .15s, transform .3s;
}

.burger::after {
  bottom: 7px;
  transition: bottom .3s .15s, transform .3s;
}

.burger-checkbox:checked+.burger::before {
  top: 15px;
  transform: rotate(45deg);
  box-shadow: 0 6px 0 rgba(0, 0, 0, 0);
  transition: box-shadow .15s, top .3s, transform .3s .15s;
}

.burger-checkbox:checked+.burger::after {
  bottom: 15px;
  transform: rotate(-45deg);
  transition: bottom .3s, transform .3s .15s;
}



@media (max-width: 576px) {
  .burger {
    width: 22px;
    height: 24px;
  }

  .burger::after,
  .burger::before {
    width: 22px !important;
  }

  .burger::before {
    top: 6px;
    box-shadow: 0 6px 0 #000;
  }

  .burger::after {
    bottom: 5px;
    transition: bottom .3s .15s, transform .3s;
  }

  .burger-checkbox:checked+.burger::before {
    top: 11px;
  }

  .burger-checkbox:checked+.burger::after {
    bottom: 11px;
  }
}
</style>
