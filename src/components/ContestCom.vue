<template>
  <section>
    <div class="contest">
      <h2 class="contest__title h2">Конкурсы сегодняшнего дня</h2>
      <div class="contest-container">
        <div class="content__list">
          
          <div class="contest__item">
            <div class="contest__item-wraper">
              <p class="contest__item-subtitle p1">Название конкурса</p>
              <p class="contest__item-publication p2">Дата публикации</p>
            </div>
            <button class="contest__item-btn">
              <i class="arrow-right"></i>
            </button>
          </div>
          <div class="contest__item">
            <div class="contest__item-wraper">
              <p class="contest__item-subtitle p1">Название конкурса</p>
              <p class="contest__item-publication p2">Дата публикации</p>
            </div>
            <button class="contest__item-btn">
              <i class="arrow-right"></i>
            </button>
          </div>
          <div class="contest__item">
            <div class="contest__item-wraper">
              <p class="contest__item-subtitle p1">Название конкурса</p>
              <p class="contest__item-publication p2">Дата публикации</p>
            </div>
            <button class="contest__item-btn">
              <i class="arrow-right"></i>
            </button>
          </div>
          <div class="contest__item">
            <div class="contest__item-wraper">
              <p class="contest__item-subtitle p1">Название конкурса</p>
              <p class="contest__item-publication p2">Дата публикации</p>
            </div>
            <button class="contest__item-btn">
              <i class="arrow-right"></i>
            </button>
          </div>
        </div>
        <div class="contest-content">
          <h3 class="contest-content__title h3">Название конкурса1</h3>
          <div class="contest-content__subtitle">
            <p class="contest-content__subtitle-text p2">Направление</p>
            <p class="contest-content__subtitle-start p2">начало 01.05.2024</p>
          </div>
          <p class="contest-content__description p2">
            Идейные соображения высшего порядка, а также постоянный
            оличественный рост
          </p>
        </div>
        <div class="contest-content">
          <h3 class="contest-content__title h3">Название конкурса2</h3>
          <div class="contest-content__subtitle">
            <p class="contest-content__subtitle-text p2">Направление</p>
            <p class="contest-content__subtitle-start p2">начало 01.05.2024</p>
          </div>
          <p class="contest-content__description p2">
            Идейные соображения высшего порядка, а также постоянный
            оличественный рост
          </p>
        </div>
        <div class="contest-content">
          <h3 class="contest-content__title h3">Название конкурса3</h3>
          <div class="contest-content__subtitle">
            <p class="contest-content__subtitle-text p2">Направление</p>
            <p class="contest-content__subtitle-start p2">начало 01.05.2024</p>
          </div>
          <p class="contest-content__description p2">
            Идейные соображения высшего порядка, а также постоянный
            оличественный рост
          </p>
        </div>
        <div class="contest-content">
          <h3 class="contest-content__title h3">Название конкурса4</h3>
          <div class="contest-content__subtitle">
            <p class="contest-content__subtitle-text p2">Направление</p>
            <p class="contest-content__subtitle-start p2">начало 01.05.2024</p>
          </div>
          <p class="contest-content__description p2">
            Идейные соображения высшего порядка, а также постоянный
            оличественный рост
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
document.addEventListener("DOMContentLoaded", function () {
  const contestBtns = document.querySelectorAll(".contest__item-btn");
  const contestContent = document.querySelectorAll(".contest-content");
  const arrowRights = document.querySelectorAll(".arrow-right");

  let activeBtnIndex = null;

  contestBtns.forEach((btn, index) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault();

      if (activeBtnIndex !== null) {
        contestBtns[activeBtnIndex].classList.remove(
          "contest__item-btn--current"
        );
        arrowRights[activeBtnIndex].classList.remove("arrow-right--current");
        contestContent[activeBtnIndex].classList.remove(
          "contest-content--visible"
        );
      }

      btn.classList.add("contest__item-btn--current");
      arrowRights[index].classList.add("arrow-right--current");
      contestContent[index].classList.add("contest-content--visible");

      activeBtnIndex = index;
    });
  });
});
</script>

<style>
.contest {
  max-width: 1440px;
  padding: 80px 60px;

  margin: auto;
  box-sizing: border-box;
}

.contest__title {
  color: var(--dark);
}

.contest-container {
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.content__list {
  display: flex;
  flex-direction: column;
  max-width: 589px;
  width: 100%;
  gap: 30px;
}

.contest__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--dark);
}

.contest__item-subtitle {
  margin-right: 20px;
  min-width: 225px;
}

.contest__item-publication {
  margin-right: 25px;
}

.contest__item-btn {
  width: 24px;
  height: 24px;
  border-radius: 100%;
  border: 1px solid var(--dark);
  background: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: .4s;
}

.contest__item-btn--current {
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

.contest-content {
  max-width: 653px;
  height: fit-content;
  border: 2px solid var(--roseBege);
  background: var(--lightBege);
  display: none;
  opacity: 0;
  transition: 0.4s;
  transition: opacity 0.4s ease;
}

.contest-content--visible {
  opacity: 1;
  display: flex;
  flex-direction: column;

  transition: opacity 0.4s ease, transform 0.4s ease;
}

.contest-content__title {
  color: var(--white);
  padding: 16px;
  background: var(--roseBege);
}

.contest-content__subtitle {
  display: flex;
  gap: 16px;
  padding: 16px;
}
.contest-content__subtitle-text,
.contest-content__subtitle-start {
  background: var(--roseBege);
  color: var(--white);
  padding: 8px;
}

.contest-content__description {
  padding: 16px;
  color: var(--dark);
}
</style>