<template>
  <section>
    <div class="solaris-faq">
      <h2 class="solaris-faq__title h2">Часто задаваемые вопросы</h2>
      <div class="solaris-faq-container">
        <div class="solaris-faq__list">
          <div class="solaris-faq__item">
            <div class="solaris-faq__item-wraper">
              <p class="solaris-faq__item-subtitle p1">Название конкурса</p>
            </div>
            <button class="solaris-faq__item-btn">
              <i class="arrow-right faq-arrow-right"></i>
            </button>
          </div>
          <div class="solaris-faq__item">
            <div class="solaris-faq__item-wraper">
              <p class="solaris-faq__item-subtitle p1">Название конкурса</p>
            </div>
            <button class="solaris-faq__item-btn">
              <i class="arrow-right faq-arrow-right"></i>
            </button>
          </div>
          <div class="solaris-faq__item">
            <div class="solaris-faq__item-wraper">
              <p class="solaris-faq__item-subtitle p1">Название конкурса</p>
            </div>
            <button class="solaris-faq__item-btn">
              <i class="arrow-right faq-arrow-right"></i>
            </button>
          </div>
          <div class="solaris-faq__item">
            <div class="solaris-faq__item-wraper">
              <p class="solaris-faq__item-subtitle p1">Название конкурса</p>
            </div>
            <button class="solaris-faq__item-btn">
              <i class="arrow-right faq-arrow-right"></i>
            </button>
          </div>
        </div>
        <div class="solaris-faq-content">
          <p class="solaris-faq__description p2">Текст1</p>
        </div>
        <div class="solaris-faq-content">
          <p class="solaris-faq__description p2">Текст2</p>
        </div>
        <div class="solaris-faq-content">
          <p class="solaris-faq__description p2">Текст3</p>
        </div>
        <div class="solaris-faq-content">
          <p class="solaris-faq__description p2">Текст4</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
document.addEventListener("DOMContentLoaded", function () {
  const faqBtns = document.querySelectorAll(".solaris-faq__item-btn");
  const faqContent = document.querySelectorAll(".solaris-faq-content");
  const arrowRights = document.querySelectorAll(".faq-arrow-right");

  let activeBtnIndex = null;

  faqBtns.forEach((btn, index) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault();

      if (activeBtnIndex !== null) {
        faqBtns[activeBtnIndex].classList.remove("solaris__item-btn--current");
        arrowRights[activeBtnIndex].classList.remove("faq-arrow-right--current");
        faqContent[activeBtnIndex].classList.remove("faq-content--visible");
      }

      btn.classList.add("solaris__item-btn--current");
      arrowRights[index].classList.add("faq-arrow-right--current");
      faqContent[index].classList.add("faq-content--visible");

      activeBtnIndex = index;
    });
  });
});
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
  position: relative;
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
}

.solaris__item-btn--current {
  border: none;
  background: #dda06b;
  color: var(--white);
  transform: translateX(40px) scale(1.15);
}

.faq-arrow-right {
  border: solid var(--dark);
  border-width: 0 1.5px 1.5px 0;
  padding: 3px;
  display: inline-block;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  position: relative;
  left: -1px;
}

.faq-arrow-right--current {
  border: solid var(--white);
  border-width: 0 1.5px 1.5px 0;
  transform: scale(1.5) rotate(-45deg);
}

.solaris-faq-content {
  min-width: 606px;
  height: fit-content;
  border: 2px solid var(--roseBege);
  min-height: 195px;
  /* position: absolute; */
  /* top: 0; */
  /* right: 30px; */
  transition: 0.4s;
  display: none;
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
  max-width: 585px;
}
.faq-content--visible {
  display: flex;
  flex-direction: column;
}
</style>
