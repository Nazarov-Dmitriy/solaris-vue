<template>
  <section>
    <div class="contest" id="contest">
      <h2 class="contest__title h2">Конкурсы сегодняшнего дня</h2>
      <div class="contest-container">
        <div class="item-container">
          <div class="contest__item">
            <div class="contest__item-wraper">
              <p class="contest__item-subtitle p1">Название конкурса</p>
              <p class="contest__item-publication p2">Дата публикации</p>
            </div>
            <svg
              class="contest__item-btn"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
          <div class="contest-content">
            <h3 class="contest-content__title h3">Название конкурса1</h3>
            <div class="contest-content__subtitle">
              <p class="contest-content__subtitle-text p2">Направление</p>
              <p class="contest-content__subtitle-start p2">
                начало 01.05.2024
              </p>
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
let arr = [
  {
    title: "Название конкурса",
    date_publication: "Дата публикации",
    direction: "Нарпавление",
    start_date: "01.05.2024",
    descption:
      "Идейные соображения высшего порядка, а также постоянный количественный рост ",
  },
  {
    title: "Название конкурса2",
    date_publication: "Дата публикации",
    direction: "Нарпавление",
    start_date: "01.05.2024",
    descption:
      "Идейные соображения высшего порядка, а также постоянный количественный рост ",
  },
  {
    title: "Название конкурса3",
    date_publication: "Дата публикации",
    direction: "Нарпавление",
    start_date: "01.05.2024",
    descption:
      "Идейные соображения высшего порядка, а также постоянный количественный рост ",
  },
  {
    title: "Название конкурса4",
    date_publication: "Дата публикации",
    direction: "Нарпавление",
    start_date: "01.05.2024",
    descption:
      "Идейные соображения высшего порядка, а также постоянный количественный рост ",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  let container = document.querySelector(".contest-container");
  let title = document.querySelector(".contest__title");

  arr.forEach((item) => {
    let elem = `
    <div class="item-container">
        <div class="contest__item">
          <div class="contest__item-wraper">
            <p class="contest__item-subtitle p1">${item.title}</p>
            <p class="contest__item-publication p2">${item.date_publication}</p>
          </div>
            <svg class="contest__item-btn" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#1F2A3E"/>
              <path d="M14 22L20 16L14 10" stroke="#1F2A3E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class="contest-content">
          <h3 class="contest-content__title h3">${item.title}</h3>
          <div class="contest-content__subtitle">
            <p class="contest-content__subtitle-text p2">${item.direction}</p>
            <p class="contest-content__subtitle-start p2">${item.start_date}</p>
          </div>
          <p class="contest-content__description p2">${item.descption}
          </p>
        </div>
    </div>
    `;
    container.insertAdjacentHTML("beforeEnd", elem);
    changeClass();
  });

  window.addEventListener("resize", () => {
    changeClass();
  });

  changeClass();

  function changeClass() {
    if (window.innerWidth <= 991) {
      title.classList.remove("h2");
      title.classList.add("h3");
    }

    if (window.innerWidth >= 991) {
      title.classList.remove("h3");
      title.classList.add("h2");
    }
  }

  const contestBtns = document.querySelectorAll(".contest__item-btn");
  const contestContent = document.querySelectorAll(".contest-content");
  let activeBtnIndex = false;

  contestBtns.forEach((btn, index) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault();

      btn.classList.toggle("contest__item-btn--current");
      contestContent[index].classList.toggle("contest-content--visible");
      if (activeBtnIndex !== false && activeBtnIndex !== index) {
        contestBtns[activeBtnIndex].classList.remove(
          "contest__item-btn--current"
        );
        contestContent[activeBtnIndex].classList.remove(
          "contest-content--visible"
        );
      }

      activeBtnIndex = activeBtnIndex === index ? false : index;
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
  scroll-margin: 88px;
}

.contest__title {
  color: var(--dark);
}

.contest-container {
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
}

.item-container {
  display: flex;
  gap: 75px;
  width: 100%;
  position: relative;
}

.contest__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--dark);
  width: 44.6%;
  height: fit-content;
}

.contest__item-btn {
  cursor: pointer;
  transition: 0.4s;
}

.contest__item-btn--current {
  fill: var(--roseBege);
  transform: translateX(40px);
}
.contest__item-btn--current rect {
  stroke: var(--roseBege);
}
.contest__item-btn--current path {
  stroke: var(--white);
}

.contest-content {
  max-width: 49.5%;
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

@media (max-width: 991px) {
  .contest {
    padding: 64px 40px;
  }

  .contest-container {
    gap: 20px;
  }

  .item-container {
    gap: 20px;
    flex-direction: column;
  }

  .contest__item {
    width: 100%;
  }
  .contest__item-btn {
    rotate: -90deg;
  }

  .contest__item-btn--current {
    transform: none;
    rotate: 90deg;
  }

  .contest-content {
    max-width: 100%;
    position: static;
  }
}

@media (max-width: 576px) {
  .contest {
    padding: 40px 16px;
  }

  .contest-content__subtitle {
    flex-direction: column;
    padding: 8px;
    gap: 8px;
    align-items: flex-start;
  }
}
</style>
