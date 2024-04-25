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
          <div class="contest-content">
            <h3 class="contest-content__title">Название конкурса1</h3>
            <div class="contest-content__subtitle">
              <div>
                <p class="contest-content__subtitle-text p2">Направление</p>
              </div>
              <div>
                <p class="contest-content__subtitle-start p2">начало 01.05.2024</p>
              </div>
            </div>
            <p class="contest-content__description p2">
              Идейные соображения высшего порядка, а также постоянный
              оличественный рост
            </p>
          </div>
        </div>

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
          <div class="contest-content">
            <h3 class="contest-content__title">Название конкурса2</h3>
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
          <div class="contest-content">
            <h3 class="contest-content__title">Название конкурса3</h3>
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
          <div class="contest-content">
            <h3 class="contest-content__title">Название конкурса4</h3>
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
          <div class="contest-content">
            <h3 class="contest-content__title">Название конкурса4</h3>
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

  @media (max-width: 991px){
    padding: 64px 40px;
  }

  @media (max-width: 576px){
    padding: 40px 16px;
  }
}

.contest__title {
  color: var(--dark);
  margin-bottom: 48px;

  @media (max-width: 991px){
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 40px;
  }

  @media (max-width: 576px){
    margin-bottom: 24px;
  }
}

.contest-container {
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 991px){
    gap: 20px;
  }
}

.content__list {
  display: flex;
  position: relative;

  @media (max-width: 991px) {
    flex-direction: column;
  }
}

.contest__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--dark);
  width: 45%;

  @media (max-width: 991px) {
    width: 100%;
  }

}

.contest__item-btn {
  width: 32px;
  height: 32px;
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

  @media (max-width: 991px){
    transform: none;
  }
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

  @media (max-width: 991px){
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }
}

.arrow-right--current {
  border: solid var(--white);
  border-width: 0 1.5px 1.5px 0;
  transform: scale(1.5) rotate(-45deg);

  @media (max-width: 991px){
    transform: scale(1.5) rotate(45deg);
  }
}

.contest-content {
  width: 50%;
  height: fit-content;
  border: 2px solid var(--roseBege);
  background: var(--lightBege);
  display: none;
  opacity: 0;
  transition: 0.4s;
  transition: opacity 0.4s ease;
  box-sizing: border-box;
  position: absolute;
  right: 0px;

  @media (max-width: 991px) {
    position: static;
    overflow-y: hidden;
    max-height: 0px;
    width: 100%;
  }

}

.contest-content--visible {
  opacity: 1;
  display: flex;
  flex-direction: column;

  transition: opacity 0.4s ease, transform 0.4s ease;

  @media (max-width: 991px) {
    max-height: 1000px;
    margin-top: 20px;
  }
}

.contest-content__title {
  color: var(--white);
  padding: 16px;
  background: var(--roseBege);

  font-size: 24px;
  font-weight: 700;
  line-height: 150%;
}

.contest-content__subtitle {
  display: flex;
  gap: 16px;
  padding: 16px;

  @media (max-width: 576px){
    flex-direction: column;
    padding: 8px;
    gap: 8px;
    align-items: flex-start;
  }
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