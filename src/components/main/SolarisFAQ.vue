<template>
    <section id="solarisFaq">
        <div class="solaris-faq">
            <h2 class="solaris-faq__title h2">
                Часто задаваемые вопросы
            </h2>
            <div class="solaris-faq-container">
                <div class="solaris-faq__list">
                    <div
                        v-for="(el, ind) in arr "
                        :key="ind"
                        class="solaris-faq__item"
                        :class="{ 'current': active === ind }"
                    >
                        <div class="solaris-faq__item-wraper">
                            <p class="solaris-faq__item-subtitle p1">
                                Как получить доступ к личному кабинету?
                            </p>
                            <svg
                                class="solaris-faq__item-btn"
                                :class="{ 'current': active === ind }"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                @click="setActive(ind)"
                            >
                                <rect
                                    x="0.5"
                                    y="0.5"
                                    width="31"
                                    height="31"
                                    rx="15.5"
                                    stroke="#1F2A3E"
                                />
                                <path
                                    d="M14 22L20 16L14 10"
                                    stroke="#1F2A3E"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>

                        <transition name="show">
                            <div
                                v-if="active === ind"
                                class="solaris-faq-content"
                            >
                                <p class="solaris-faq__description p2">
                                    {{ el }}
                                </p>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
const active = ref(null);

function setActive (ind){
    console.log( ind !== active.value);
    ind !== active.value ? active.value= ind : active.value = null
}

const arr = [
    'Доступ к личному кабинету выдает классный руководитель учащегося с лицее «Солярис».',
    'Доступ к личному кабинету выдает классный руководитель учащегося с лицее «Солярис».',
    'Доступ к личному кабинету выдает классный руководитель учащегося с лицее «Солярис».',
    'Доступ к личному кабинету выдает классный руководитель учащегося с лицее «Солярис».',
    'Доступ к личному кабинету выдает классный руководитель учащегося с лицее «Солярис».',
    'Доступ к личному кабинету выдает классный руководитель учащегося с лицее «Солярис».',
]

</script>

<style>
.solaris-faq {
  max-width: 1440px;
  padding: 80px 60px;

  margin: auto;
  box-sizing: border-box;
}

.solaris-faq__title {
  color: var(--dark);
}

.solaris-faq-container {
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
}

.solaris-faq__list {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
}


.solaris-faq__item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: var(--dark);
  position: relative;
  width: 100%;
  gap: 80px;

  &.current {
    margin-bottom: -33px;
  }
}

.solaris-faq__item-wraper {
  width: 46%;
  display: flex;
  justify-content: space-between;
  max-width: 589px
}

.solaris-faq__item-subtitle {
  margin-right: 20px;
  min-width: 225px;
}

.solaris-faq__item-btn.current {
  fill: var(--roseBege);
  transform: translateX(40px);
}

.solaris-faq__item-btn.current rect {
  stroke: var(--roseBege);
}

.solaris-faq__item-btn.current path {
  stroke: var(--white);
}


.solaris-faq-content {
  width: 50.4%;
  height: fit-content;
  border: 2px solid var(--roseBege);
  min-height: 195px;
  transition: 0.4s;
  display: flex;
  top: -33px;
  position: relative;
}

.solaris-faq__description {
  padding: 24px;
  color: var(--dark);
  max-width: 585px;
}

@media (max-width: 991px) {
  .solaris-faq {
    padding-left: 40px;
    padding-right: 40px;
  }

  .solaris-faq__item{
    gap: 33px;  
    flex-direction: column;
    &.current{
        margin-bottom: 0;
    }
}

.solaris-faq__item-wraper{
  max-width: 100%;
  width: 100%;
}

  .solaris-faq__title.h2 {
    font-size: 24px;
    line-height: 150%;
  }

  .solaris-faq-container {
    display: block;
  }

  .solaris-faq-content{
    width: 100%;
    box-sizing: border-box;
  }

  .solaris-faq__list {
    width: 100%;
  }

  .solaris-faq__item-btn {
    width: 32px;
    height: 32px;
    rotate: -90deg;
    transition: all 0.4s;
  }

  .solaris-faq__item-btn.current {
    transform: none;
    rotate: 90deg;
  }
 
  .solaris-faq-content {
    top: 0;
  }

  .solaris-faq__list {
    width: 100%;
    max-width: 100%;
  }
}

@media (max-width: 576px) {
  .solaris-faq {
    padding: 0 16px;
  }

  .solaris-faq__description {
    word-wrap: break-word;
  }


  .solaris-faq__title {
    line-height: 150%;
    text-align: center;
    margin-top: 24px;
  }

  .solaris-faq-content {
    min-width: auto;
  }

  .solaris-faq__item-subtitle {
    max-width: 90%;
  }
 
}
</style>
