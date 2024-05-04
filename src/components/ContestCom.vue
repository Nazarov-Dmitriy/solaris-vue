<template>
  <section>
    <div class="contest">
      <h2 class="contest__title h2">Конкурсы сегодняшнего дня</h2>
      <div class="contest-container">

        <div class="item-container">
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
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
let arr = [
  {
    title: 'Название конкурса',
    date_publication: "Дата публикации",
    direction: 'Нарпавление',
    start_date: '01.05.2024',
    descption: "Идейные соображения высшего порядка, а также постоянный количественный рост "
  },
  {
    title: 'Название конкурса2',
    date_publication: "Дата публикации",
    direction: 'Нарпавление',
    start_date: '01.05.2024',
    descption: "Идейные соображения высшего порядка, а также постоянный количественный рост "
  },
  {
    title: 'Название конкурса3',
    date_publication: "Дата публикации",
    direction: 'Нарпавление',
    start_date: '01.05.2024',
    descption: "Идейные соображения высшего порядка, а также постоянный количественный рост "
  },
  {
    title: 'Название конкурса4',
    date_publication: "Дата публикации",
    direction: 'Нарпавление',
    start_date: '01.05.2024',
    descption: "Идейные соображения высшего порядка, а также постоянный количественный рост "
  },
]


document.addEventListener("DOMContentLoaded", function () {
  let container = document.querySelector('.contest-container')
  let title = document.querySelector(".contest__title");


  arr.forEach(item => {
    console.log(item);
    let elem = `
    <div class="item-container">
        <div class="contest__item">
          <div class="contest__item-wraper">
            <p class="contest__item-subtitle p1">${item.title}</p>
            <p class="contest__item-publication p2">${item.date_publication}</p>
          </div>
          <button class="contest__item-btn">
            <i class="arrow-right"></i>
          </button>
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
    `
    container.insertAdjacentHTML("beforeEnd", elem);
    changeClass();

  })


  window.addEventListener('resize', () => {
    changeClass()
  })

  changeClass()

  function changeClass() {
    if (window.innerWidth <= 991) {
      title.classList.remove("h2")
      title.classList.add("h3")
    }

    if (window.innerWidth >= 991) {
      title.classList.remove("h3")
      title.classList.add("h2")
    }
  }


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
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
}

.item-container {
  display: flex;
  gap: 75px;
  width: 100%;
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

.contest__item-btn--current {
  border-radius: 100px;
  border: none;
  width: 32px;
  height: 32px;
  background: #dda06b;
  color: var(--white);
  transform: translateX(40px);
}

.arrow-right--current {
  border: solid var(--white);
  border-width: 0 1.5px 1.5px 0;
  transform: scale(1.5) rotate(-45deg);
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

  .arrow-right {
    rotate: 270deg;
    top: 2px;
    left: 0;
  }

  .contest__item-btn--current {
    transform: none;
    rotate: 135deg;
    width: 24px;
    height: 24px;
  }

  .arrow-right--current {
    transform: none;
    top: 1px;
    left: -1px;
  }

  .contest-content {
    max-width: 100%;
  }
}

@media (max-width: 576px) {
  .contest {
    padding: 40px 16px;
  }
}
</style>