<template>
  <section class="trend-container">
    <div class="trend">
      <img
        src="../assets/image/trend/trend-coin.png"
        alt=""
        class="trend__img"
      />
      <img
        src="../assets/image/trend/trend-coin.png"
        alt=""
        class="trend__img"
      />
      <img
        src="../assets/image/trend/trend-coin.png"
        alt=""
        class="trend__img"
      />
      <div class="trend__content">
        <p class="trend__text p1">
          В лицее каждую неделю проводятся конкурсы по различным направлениям,
          учитывая пожелания и инициативы всех участников образовательного
          процесса
        </p>
        <div class="trend__list">
          <h2 class="trend-subtitle h2">Направления</h2>
          <div class="trend-item">
            <img
              src="../assets/image/trend/trendName.png"
              alt=""
              class="trend-img"
            />

            <button class="trend-item-btn h3">Название направления</button>
          </div>
          <div class="trend-item">
            <img
              src="../assets/image/trend/trendName.png"
              alt=""
              class="trend-img"
            />
            <button class="trend-item-btn h3">Название направления</button>
          </div>
          <div class="trend-item">
            <img
              src="../assets/image/trend/trendName.png"
              alt=""
              class="trend-img"
            />

            <button class="trend-item-btn h3">Название направления</button>
          </div>
          <div class="trend-item">
            <img
              src="../assets/image/trend/trendName.png"
              alt=""
              class="trend-img"
            />
            <button class="trend-item-btn h3">Название направления</button>
          </div>
          <div class="trend-item">
            <img
              src="../assets/image/trend/trendName.png"
              alt=""
              class="trend-img"
            />
            <div class="trend-item-btn h3">Название направления</div>
          </div>
          <div class="trend-item">
            <img
              src="../assets/image/trend/trendName.png"
              alt=""
              class="trend-img"
            />
            <button class="trend-item-btn h3">Название направления</button>
          </div>
          <div class="trend-item">
            <img
              src="../assets/image/trend/trendName.png"
              alt=""
              class="trend-img"
            />
            <button class="trend-item-btn h3">Название направления</button>
          </div>
          <div class="trend-item">
            <img
              src="../assets/image/trend/trendName.png"
              alt=""
              class="trend-img"
            />
            <button class="trend-item-btn h3">Название направления</button>
          </div>
        </div>
      </div>
      <div class="trend-container-img">
        <img
          src="../assets/image/trend/trend.png"
          class="trend-main-img"
          alt="img"
        />
      </div>
    </div>
  </section>
</template>

<script setup></script>
<style>
.trend-container {
  width: 100%;
  background: var(--lightBege);
}

.trend {
  max-width: 1440px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 80px;
  position: relative;
}

.trend__img {
  width: 248px;
  position: absolute;
  top: 0;
  left: 0;
}

.trend__img:nth-child(1) {
  top: 30px;
  transform: scale(1.37) translateY(205px) translateX(35px);
}
.trend__img:nth-child(2) {
  bottom: 0;
  width: 167px;
  transform: translateY(521px) translateX(258px) scale(1.35) rotate(9deg);
}
.trend__img:nth-child(3) {
  transform: translateY(606px) translateX(113px) scale(1.35) rotate(-81deg);
  width: 95px;
}

.trend__content {
  display: flex;
  gap: 16px;
  width: 100%;
  padding: 110px 60px 0 60px;
  box-sizing: border-box;
}

.trend__text {
  max-width: 425px;
}

.trend__list {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  max-height: 576px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.trend__list::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.trend-subtitle {
  grid-column: 2/3;
  padding: 16px 0;
  background: var(--dark);
  color: var(--white);
  text-align: center;
}

.trend-item {
  min-height: 260px;
  /* width: 100%; */
  height: 100%;
  position: relative;
  grid-row: span 2;
  border: 2px solid var(--roseBege);
}

.trend-item:nth-child(2) {
  grid-row: 1 / 3;
}

.trend-img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: relative;
}

.trend-img::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--orange);
}

.trend-item-btn {
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 0;
  padding: 8px 0;
  text-align: center;
  background: var(--roseBege);
  box-sizing: border-box;
  border: 2px solid var(--roseBege);
  cursor: pointer;
  width: 100%;
}

.trend-item-btn:hover {
  border: 2px solid var(--bage);
  background: var(--white);
  color: var(--bage);
}

.trend-item-btn:active {
  border: 2px solid var(--gray);
  background: var(--white);
  color: var(--gray);
}

.trend-container-img {
  width: 100%;
  height: 283px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  background-image: url("../assets/trend.png");
}

.trend-container-img::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.trend-main-img {
  width: 100%;
}

.trend__list::-webkit-scrollbar {
  width: 0;
  height: 0;
}

/* адаптив для планшетов */
@media (max-width: 900px) {
  .trend__list {
    display: flex;
    flex-direction: column;
    margin-top: 64px;
    margin-right: 40px;
  }

  .trend__content {
    padding: 0;
  }

  .trend-subtitle {
    margin-bottom: 19px;
    font-size: 24px;
    line-height: 150%;
    text-align: center;
  }

  .trend-item:not(:last-child) {
    margin-bottom: 19px;
  }

  .trend__text {
    max-width: 336px;
    margin-left: 40px;
    margin-top: 64px;
  }

  .trend-item-btn {
    font-family: var(--font-family);
    font-size: 24px;
    width: 100%;
    padding: 8px 0;
    text-align: center;
  }

  .trend-container-img {
    height: 149px;
  }

  .trend__img:nth-child(1){
    width: 167px;
    transform: translate(1);
  }
  .trend__img:nth-child(2){
    transform: translateX(201px) translateY(461px) scale(1.5) rotate(35deg);
    width: 112px;
  }
  .trend__img:nth-child(3){
    transform: translateX(71px) translateY(511px) scale(1.5) rotate(-54deg);
    width: 63px;
  }
}

/* адаптив для мобилок */
@media (max-width: 500px) {
  .trend {
    gap: 40px;
  }
  .trend__content {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0;
  }
  .trend__list {
    max-width: 300px;
    width: 100%;
    margin-right: 0;
    margin-top: 19px;
  }
  .trend__content {
    width: 100%;
    height: 100%;
  }
  .trend__text {
    max-width: 288px;
    margin-bottom: 16px;
  }
  .trend-item {
    /* width: 100%; */
  }
  .trend__text {
    margin: 0;
    padding-top: 40px;
  }

  .trend-container-img {
    height: 91px;
  }

  .trend-item {
    min-height: auto;
  }

  .trend__img:nth-child(1){
    display: none;
  }
  .trend__img:nth-child(2){
    display: none;
  }
  .trend__img:nth-child(3){
    top: 0;
    left: 0;
    transform: translateX(312px) translateY(10px) rotate(-65deg) scale(1.4);
  }
}
</style>
