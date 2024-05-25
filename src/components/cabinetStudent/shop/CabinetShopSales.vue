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
          <li class="cabinet-shop-ready__list-item">
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
          </li>
        </ul>
      </div>

      <div class="cabinet-shop-history">
        <p class="cabinet-shop-history__title">История покупок</p>
        <ul class="cabinet-shop-history__wrapper">
          <li class="cabinet-shop-history__wrapper-item">
            <div class="cabinet-shop-history__wrapper-left">
              <img
                src="../../../assets/image/cabinet-shop/solaris2.png"
                alt="картинка"
              />
              <p>200</p>
              <img
                src="../../../assets/image/cabinet-shop/currency.png"
                alt=""
              />
            </div>
            <div class="cabinet-shop-history__wrapper-info">
              <p>Антидвойка</p>
              <p>13.12.2024 <span>заказ оплачен</span></p>
            </div>
          </li>
        </ul>
        <div>
          <img class="cabinet-shop__img-background"
            src="../../../assets/image/cabinet-shop/coinBege.png"
            alt=""
          />
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
      name: "Футболка",
      number: "№ 3459864",
      text: "1 корпус - кабинет В 2012 корпус - кабинет В 208",
      img: "/src/assets/image/cabinet-shop/t-shirt.png",
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
            <p>${item.amount}</p>
            <img src="${item.currency}" alt="валюта" />
          </div>
          <div class="cabinet-shop-history__wrapper-info">
            <p>${item.orderNumber}</p>
            <p>${item.time} <span>${item.orderStatus}</span></p>
          </div>
        `;
    historyWrapper.append(historyWrapperItem);
  });
});
</script>
<style>
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
  padding: 24px 60px 3px 60px;
  min-height: 91vh;
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
  min-height: 100vh;
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
  padding-left: 16px;
  padding-right: 240px;
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

.cabinet-shop__img-background {
}

@media (max-width: 1440px) {
  .cabinet-shop-container {
    margin: 0 auto;
    width: 100%;
  }

  .cabinet-shop-ready {
    padding: 24px 60px 28px 60px;
    width: 70%;
  }

  .cabinet-shop-history {
    padding-right: 60px;
  }

  .cabinet-shop-history__title::before {
    width: 35%;
  }

  .cabinet-shop-history__title::after {
    width: 35%;
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
  /* 
  .cabinet-shop-ready__title::before {
    width: 20%;
  }

  .cabinet-shop-ready__title::after {
    width: 20%;
  } */
}

@media (max-width: 1019px) {
  .cabinet-shop-history__wrapper-item {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .cabinet-shop__img-background {
    display: none;
  }
}

@media (max-width: 870px) {
  .cabinet-shop-ready {
    padding: 24px 40px 28px 40px;
  }

  .cabinet-shop-ready__list-item {
    flex-direction: column;
  }

  .cabinet-shop__img-background {
    display: none;
  }

  .cabinet-shop-history__wrapper {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: auto;
  }

  .cabinet-shop-history__wrapper-item {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
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
    padding-bottom: 72px;
  }

  .cabinet-shop-ready__title {
    width: 90%;
  }

  .cabinet-shop-ready__list-item {
    flex-direction: row;
    width: 80%;
    margin: 0 auto;
  }
  /* 
  .cabinet-shop-ready__title::before {
    width: 28%;
    left: 40px;
  }

  .cabinet-shop-ready__title::after {
    width: 28%;
    right: 40px;
  } */

  .cabinet-shop-history {
    width: auto;
  }

  .cabinet-shop-history__title::before {
    width: 35%;
  }

  .cabinet-shop-history__title::after {
    width: 35%;
  }

  .cabinet-shop-ready__list {
    height: 696px;
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
