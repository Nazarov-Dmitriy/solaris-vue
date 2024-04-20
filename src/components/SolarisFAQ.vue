<template>
  <section>
    <div class="solaris-faq">
      <h2 class="solaris-faq__title h2">Часто задаваемые вопросы</h2>
      <div
        v-for="(item, index) in faqItems"
        :key="index"
        class="solaris-faq__container"
      >
        <div class="solaris-faq__list">
          <div class="solaris-faq__item">
            <div class="solaris-faq__item-wrap contest__item-wraper">
              <p class="solaris-faq__item-subtitle p1">
                {{ item.title }}
              </p>
            </div>
            <button
              @click="toggleContent(index)"
              class="solaris-faq__item-btn"
              :class="{
                'solaris__item-btn--current': isButtonActive === index,
              }"
            >
              <i
                class="arrow-right"
                :class="{ 'arrow-right--current': isButtonActive === index }"
              ></i>
            </button>
          </div>
        </div>
        <div
          class="solaris-faq-content"
          :class="{ 'solaris-faq-content--current': isContentActive === index }"
        >
          <p class="solaris-faq__description p2">
            {{ faqItems[index].content }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const isButtonActive = ref(false);
const isContentActive = ref(false);
const faqItems = ref([
  {
    title: "Как получить доступ к личному кабинету?",
    content:
      "Доступ к личному кабинету выдает классный руководитель учащегося с лицее «Солярис». ",
  },
  {
    title: "Название конкурса 1",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, quisLorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, quisLorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, quisLorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, quis.",
  },
  {
    title: "Название конкурса 2",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, quis.",
  },
  {
    title: "Название конкурса 3",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, quis.",
  },
  {
    title: "Название конкурса 4",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, quis.",
  },
  {
    title: "Название конкурса 5",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, quis.",
  },
]);

function toggleContent(index) {
  isButtonActive.value = index;

  if (isContentActive === index) {
    isContentActive.value = null;
  } else {
    isContentActive.value = index;
  }
}

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

.solaris-faq__container {
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
  position: relative;
}

.solaris-faq__list {
  display: flex;
  flex-direction: column;
  max-width: 589px;
  width: 100%;
  gap: 30px;
}

.solaris-faq__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--dark);
}

.solaris-faq__item-subtitle {
  margin-right: 20px;
  min-width: 225px;
}

.solaris-faq__item-btn {
  width: 24px;
  height: 24px;
  border-radius: 100%;
  border: 1px solid var(--dark);
  background: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.4s;
}

.solaris-faq__item-btn:not(.solaris__item-btn--current):hover {
  transform: scale(1.25);
}

.solaris__item-btn--current {
  border-radius: 100px;
  border: none;
  width: 32px;
  height: 32px;
  background: #dda06b;
  color: var(--white);
  transform: translateX(40px);
}

.arrow-right {
  border: solid var(--dark);
  border-width: 0 1.5px 1.5px 0;
  padding: 3px;
  display: inline-block;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  position: relative;
  left: -1px;
}

.arrow-right--current {
  border: solid var(--white);
  border-width: 0 1.5px 1.5px 0;
  transform: scale(1.5) rotate(-45deg);
}

.solaris-faq-content {
  display: none;
  min-width: 653px;
  height: fit-content;
  border: 2px solid var(--roseBege);
  min-height: 195px;
  position: absolute;
  top: 0;
  right: 30px;
  transition: 0.4s;
}

.solaris-faq-content--current {
  display: flex;
  transform: translate(30px, -30px);
  max-width: 653px;
  height: fit-content;
  border: 2px solid var(--roseBege);
}
.solaris-faq__description {
  padding: 24px;
  color: var(--dark);
}
</style>
