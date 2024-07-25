<template>
  <section class="cabinet-shop">
    <div class="cabinet-shop-container">
      <div class="cabinet-shop-ready">
        <div class="cabinet-shop-ready__titles-info">
          <p class="cabinet-shop-ready__title">
            <span>Готовы к получению</span>
          </p>
          <p class="cabinet-shop-ready__subtitle">
            Для получения товара покажите на одном экране свой ID и номер заказа
          </p>
          <h2 class="cabinet-shop-ready__login">IvanovAI_7a</h2>
        </div>

        <ul class="cabinet-shop-ready__list">
          <!-- <li class="cabinet-shop-ready__list-item">
            <div class="cabinet-shop-ready__list-item-img">
              <img
                src="../../../assets/image/cabinet-shop/pic.png"
                alt="image"
              />
            </div>
            <div class="cabinet-shop-ready__list-item-info">
              <p class="list-item-info">Антидвойка</p>
              <p class="list-item-info">№ 1</p>
              <p class="list-item-info">Получить</p>
              <p class="list-item-info">Предъяви учителю</p>
            </div>
          </li> -->
        </ul>
      </div>

      <div class="cabinet-shop-history">
        <p class="cabinet-shop-history__title">История покупок</p>
        <ul class="cabinet-shop-history__wrapper">
          <!-- <li class="cabinet-shop-history__wrapper-item">
            <div class="cabinet-shop-history__wrapper-left">
              <img
                src="../../../assets/image/cabinet-shop/solaris2.png"
                alt="картинка"
              />
              <p class="cabinet-shop-history__wrapper-price">200</p>
              <img
                src="../../../assets/image/cabinet-shop/currency.png"
                alt=""
              />
            </div>
            <div class="cabinet-shop-history__wrapper-info">
              <p>Антидвойка</p>
              <p>13.12.2024 <span>заказ оплачен</span></p>
            </div>
          </li> -->
        </ul>
        <div class="cabinet-shop__img-background">
          <img src="../../../assets/image/cabinet-shop/coinBege.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
document.addEventListener("DOMContentLoaded", function () {
  const infoBuyItemInfo = [
    {
      name: "Антидвойка",
      number: "№ 2598",
      text: "Для активации покажи эту карточку учителю",
      img: "/src/assets/image/cabinet-shop/pic.png",
    },
    {
      name: "Значок",
      number: "№ 3459864",
      text: "  1 корпус - кабинет В 2012 корпус - кабинет В 208",
      img: "/src/assets/image/cabinet-shop/icon.png",
    },
    {
      name: "Значок",
      number: "№ 3459864",
      text: "  1 корпус - кабинет В 2012 корпус - кабинет В 208",
      img: "/src/assets/image/cabinet-shop/icon.png",
    },
    {
      name: "Значок",
      number: "№ 3459864",
      text: "  1 корпус - кабинет В 2012 корпус - кабинет В 208",
      img: "/src/assets/image/cabinet-shop/icon.png",
    },
  ];

  const list = document.querySelector(".cabinet-shop-ready__list");

  infoBuyItemInfo.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.className = "cabinet-shop-ready__list-item";
    listItem.innerHTML = `
          <div class="cabinet-shop-ready__list-item-img">
            <img src="${item.img}" alt="image" />
          </div>
          <div class="cabinet-shop-ready__list-item-info">
            <p class="list-item-info">${item.name}</p>
            <p class="list-item-info">${item.number}</p>
            <p class="list-item-info">Получить</p>
            <p class="list-item-info">${item.text}</p>
          </div>
        `;

    list.append(listItem);
  });

  const infoBuyHistoryItem = [
    {
      imgSrc: "/src/assets/image/cabinet-shop/solaris2.png",
      amount: 200,
      orderNumber: "Стикеры солярики № 33500967",
      orderStatus: "заказ оплачен",
      time: "13.02.2024",
      currency: "/src/assets/image/cabinet-shop/currency.png",
    },
    {
      imgSrc: "/src/assets/image/cabinet-shop/solaris2.png",
      amount: 150,
      orderNumber: "Антидвойка № 33500967",
      orderStatus: "заказ оплачен",
      time: "13.02.2024",
      currency: "/src/assets/image/cabinet-shop/currency.png",
    },
    {
      imgSrc: "/src/assets/image/cabinet-shop/solaris2.png",
      amount: 150,
      orderNumber: "Антидвойка № 33500967",
      orderStatus: "заказ оплачен",
      time: "13.02.2024",
      currency: "/src/assets/image/cabinet-shop/currency.png",
    },
    {
      imgSrc: "/src/assets/image/cabinet-shop/solaris2.png",
      amount: 150,
      orderNumber: "Стикеры солярики № 33500967",
      orderStatus: "заказ оплачен",
      time: "13.02.2024",
      currency: "/src/assets/image/cabinet-shop/currency.png",
    },
    {
      imgSrc: "/src/assets/image/cabinet-shop/solaris2.png",
      amount: 150,
      orderNumber: "Стикеры солярики № 33500967",
      orderStatus: "заказ оплачен",
      time: "13.02.2024",
      currency: "/src/assets/image/cabinet-shop/currency.png",
    },
  ];

  const historyWrapper = document.querySelector(
    ".cabinet-shop-history__wrapper"
  );

  infoBuyHistoryItem.forEach((item) => {
    const historyWrapperItem = document.createElement("li");
    historyWrapperItem.className = "cabinet-shop-history__wrapper-item";
    historyWrapperItem.innerHTML = `
          <div class="cabinet-shop-history__wrapper-left">
            <img src="${item.imgSrc}" alt="картинка" />
            <p class='cabinet-shop-history__wrapper-price'>${item.amount}</p>
            <img src="${item.currency}" alt="валюта" />
          </div>
          <div class="cabinet-shop-history__wrapper-info">
            <p>${item.orderNumber}</p>
            <p>${item.time} <span>${item.orderStatus}</span></p>
          </div>
        `;
    historyWrapper.append(historyWrapperItem);
  });

  if (list.children.length === 0) {
    const emptyReady = document.createElement("p");
    emptyReady.classList.add("shop-empty-ready");
    emptyReady.textContent =
      "У тебя сейчас нет товаров готовых к получению, ты можешь выбрать их в магазине";
    list.append(emptyReady);
  }

  if (historyWrapper.children.length === 0) {
    const emptyHistory = document.createElement("p");
    emptyHistory.classList.add("shop-empty-history");
    emptyHistory.textContent =
      "Здесь отображаются полученные товары, видимо ты пока ничего не покупал";
    historyWrapper.append(emptyHistory);
  }
});
</script>
<style>
.shop-empty-ready {
  color: var(--white);
  font-size: 24px;
  text-align: center;
  font-weight: 500;
}

.shop-empty-history {
  font-size: 24px;
  text-align: center;
  font-weight: 500;
}

.cabinet-shop {
  width: 100%;
  background-color: var(--dark);
  box-sizing: border-box;
  position: relative;
}

.cabinet-shop-container {
  display: flex;
  background: var(--white);
  width: 100%;
  margin: 0 auto;
  position: relative;
  margin: 0 auto;
  max-width: 1560px;
}

.cabinet-shop::before {
  content: "";
  width: 50%;
  height: 100%;
  background: #fff;
  position: absolute;
  right: 0;
}

.cabinet-shop-ready {
  background: #1f2a3e;
  padding: 24px 60px 0 60px;
  height: auto;
  width: 40%;
}

.cabinet-shop-history__wrapper {
  max-width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.cabinet-shop-history__wrapper-item {
  display: flex;
  gap: 16px;
  border-bottom: 1px solid #dda06b;
  padding: 8px 0px;
  max-width: 100%;
  width: 100%;
}

.cabinet-shop-ready__titles-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
  position: relative;
}

.cabinet-shop-ready__titles-info p:not(:last-child) {
  margin-bottom: 8px;
}
.cabinet-shop-ready__title::before {
  content: "";
  position: absolute;
  top: 10px;
  left: 0;
  border: 2px solid var(--white);
  width: 100%;
  z-index: 0;
}

.cabinet-shop-ready__title {
  text-align: center;
  position: relative;
  width: 100%;
}

.cabinet-shop-ready__title span {
  line-height: 150%;
  color: var(--white);
  background: var(--dark);
  position: relative;
  z-index: 2;
  padding: 0 10px;
}

/* .cabinet-shop-ready__title::after {
  content: "";
  position: absolute;
  top: 11px;
  right: 0;
  border: 2px solid var(--white);
  width: 100%;
  z-index: 0;
} */

.cabinet-shop-ready__subtitle {
  line-height: 150%;
  text-align: center;
  color: var(--white);
}

.cabinet-shop-ready__login {
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  color: var(--white);
}

.cabinet-shop-ready__list {
  width: 100%;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-bottom: 72px;
  height: auto;
}

.cabinet-shop-ready__list::-webkit-scrollbar {
  display: none;
}

.cabinet-shop-ready__list li:not(:last-child) {
  margin-bottom: 24px;
}

.cabinet-shop-ready__list-item {
  border: 2px solid #dda06b;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: var(--lightBege);
}

.cabinet-shop-ready__list-item p {
  font-size: 20px;
  line-height: 150%;
  color: var(--dark);
}

.cabinet-shop-ready__list-item p:last-child {
  font-size: 16px;
  line-height: 150%;
  color: #de4700;
}

.cabinet-shop-history {
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  margin-left: 16px;
  border-bottom: 2px solid #dda06b;
  margin-bottom: 24px;
  margin-right: 24px;
}

.cabinet-shop-history__title {
  line-height: 150%;
  color: var(--dark);
  text-align: center;
  margin-top: 24px;
  margin-bottom: 8px;
  position: relative;
}

.cabinet-shop-history__title::before {
  content: "";
  position: absolute;
  top: 10px;
  left: 0;
  border: 2px solid var(--dark);
  width: 40%;
}

.cabinet-shop-history__title::after {
  content: "";
  position: absolute;
  top: 10px;
  right: 0;
  border: 2px solid #1f2a3e;
  width: 40%;
}

.cabinet-shop-history__wrapper {
  display: flex;
  gap: 16px;
  align-items: center;
  /* border-bottom: 1px solid #dda06b; */
  padding: 8px 0px;
  max-width: 100%;
  width: 100%;
}

.cabinet-shop-history__wrapper-left {
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
}

.cabinet-shop-history__wrapper-info {
  line-height: 150%;
  color: var(--dark);
}

.cabinet-shop-history__wrapper-info span {
  line-height: 150%;
  color: var(--white);
  background: #dda06b;
  padding: 0 8px;
}

.cabinet-shop-history__wrapper-price {
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  color: #1f2a3e;
}

.cabinet-shop__img-background {
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 1440px) {
  .cabinet-shop-container {
    margin: 0 auto;
    width: 100%;
  }

  .cabinet-shop-ready {
    padding: 24px 60px 0 60px;
    width: 70%;
  }

  .cabinet-shop-history__title::before {
    width: 35%;
  }

  .cabinet-shop-history__title::after {
    width: 35%;
  }

  .cabinet-shop-history {
  }
  /* 
  .cabinet-shop-ready__title::before {
    left: 0;
    width: 30%;
  }

  .cabinet-shop-ready__title::after {
    right: 0;
    width: 30%;
  } */

  .cabinet-shop-history__wrapper {
    max-width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
  }
}

@media (max-width: 1200px) {
  .cabinet-shop-container {
    max-width: 100%;
    width: 100%;
  }

  .cabinet-shop-history__title::before {
    width: 30%;
  }

  .cabinet-shop-history__title::after {
    width: 30%;
  }
}

/* @media (max-width: 1019px) {
  .cabinet-shop-history__wrapper-item {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .cabinet-shop-history {
    border-bottom: none;
  }
} */

@media (max-width: 930px) {
  .cabinet-shop__img-background {
    display: none;
  }
}

@media (max-width: 870px) {
  .cabinet-shop-ready {
    padding: 24px 40px 0 40px;
  }

  .cabinet-shop-ready__list-item {
    flex-direction: column;
  }

  .cabinet-shop-history__wrapper {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: auto;
  }
  .cabinet-shop-ready__titles-info {
    margin-top: 24px;
  }

  .cabinet-shop-history__wrapper-item {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .cabinet-shop-history__wrapper {
    border-bottom: none;
  }

  .cabinet-shop-history {
    border-bottom: none;
  }

  .cabinet-shop-history__title::before {
    width: 25%;
  }

  .cabinet-shop-history__title::after {
    width: 25%;
  }
  /* 
  .cabinet-shop-ready__title::before {
    width: 15%;
  }

  .cabinet-shop-ready__title::after {
    width: 15%;
  } */
}

@media (max-width: 750px) {
  .cabinet-shop-container {
    flex-direction: column;
  }

  .cabinet-shop-ready {
    width: 100%;
    padding: 0;
    min-height: auto;
  }

  .cabinet-shop-ready__title {
    width: 90%;
  }

  .cabinet-shop-ready__list {
    min-height: auto;
    padding-bottom: 10px;
    margin-bottom: 72px;
    height: auto;
    position: relative;
  }

  .cabinet-shop-ready__list::after {
    content: "";
    border-bottom: 2px solid #dda06b;
    display: block;
    width: 90%;
    height: 2px;
    margin: 0 auto;
    position: sticky;
    padding-top: 10px;
  }
  .cabinet-shop-ready__list-item {
    flex-direction: row;
    width: 80%;
    margin: 0 auto;
  }

  .cabinet-shop-history {
    width: auto;
    max-height: 100vh;
  }

  .cabinet-shop-history__title::before {
    width: 35%;
  }

  .cabinet-shop-history__title::after {
    width: 35%;
  }

  .cabinet-shop-ready__list {
    height: auto;
  }
}

@media (max-width: 590px) {
  /* .cabinet-shop-ready__title::before {
    width: 23%;
    left: 40px;
  }

  .cabinet-shop-ready__title::after {
    width: 23%;
    right: 40px;
  } */

  .cabinet-shop-history__title::before {
    width: 30%;
  }

  .cabinet-shop-history__title::after {
    width: 30%;
  }
}

@media (max-width: 480px) {
  /* .cabinet-shop-ready__title::before {
    width: 18%;
    left: 30px;
  }

  .cabinet-shop-ready__title::after {
    width: 18%;
    right: 30px;
  } */

  .cabinet-shop-history__title::before {
    width: 24%;
  }

  .cabinet-shop-history__title::after {
    width: 24%;
  }
}

@media (max-width: 370px) {
  /* .cabinet-shop-ready__title::before {
    width: 15%;
    left: 18px;
  }

  .cabinet-shop-ready__title::after {
    width: 15%;
    right: 18px;
  } */

  .cabinet-shop-history__title::before {
    width: 19%;
  }

  .cabinet-shop-history__title::after {
    width: 19%;
  }

  .cabinet-shop-history {
    padding-right: 10px;
  }

  .cabinet-shop-ready__list-item {
    flex-direction: column;
  }
}
</style>
