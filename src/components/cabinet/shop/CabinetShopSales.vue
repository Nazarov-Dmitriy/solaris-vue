<template>
    <section class="cabinet-shop">
        <div class="cabinet-shop-container">
            <div class="cabinet-shop-ready">
                <div class="cabinet-shop-ready__titles-info">
                    <p class="cabinet-shop-ready__title">
                        <span>Готовы к получению</span>
                    </p>
                    <template v-if="infoBuyItemInfo.length > 0">
                        <p class="cabinet-shop-ready__subtitle">
                            Для получения товара покажите на одном экране свой ID и номер заказа
                        </p>
                        <h2 class="cabinet-shop-ready__login">IvanovAI_7a</h2>
                    </template>
                </div>
                <template v-if="infoBuyItemInfo.length > 0">
                    <ul class="cabinet-shop-ready__list">
                        <li
                            v-for="el in infoBuyItemInfo"
                            :key="el.id"
                            class="cabinet-shop-ready__list-item"
                        >
                            <div class="cabinet-shop-ready__list-item-img">
                                <img src="/src/assets/image/cabinet-shop/pic.png" alt="image" />
                            </div>
                            <div class="cabinet-shop-ready__list-item-info">
                                <p class="list-item-info">
                                    {{ el.name }}
                                </p>
                                <p class="list-item-info">
                                    {{ el.number }}
                                </p>
                                <p class="list-item-info">Получить</p>
                                <p class="list-item-info">
                                    {{ el.text }}
                                </p>
                            </div>
                        </li>
                    </ul>
                </template>
                <p v-else class="shop-empty-ready">
                    У тебя сейчас нет товаров готовых к получению, ты можешь выбрать их в магазине
                </p>
            </div>

            <div class="cabinet-shop-history">
                <p class="cabinet-shop-history__title">История покупок</p>
                <template v-if="infoBuyHistoryItem.length > 0">
                    <ul class="cabinet-shop-history__wrapper">
                        <li
                            v-for="el in infoBuyHistoryItem"
                            :key="el.id"
                            class="cabinet-shop-history__wrapper-item"
                        >
                            <div class="cabinet-shop-history__wrapper-left">
                                <img
                                    src="/src/assets/image/cabinet-shop/solaris2.png"
                                    alt="<?php echo $value['orderNumber'] ?>"
                                />
                                <p class="cabinet-shop-history__wrapper-price">
                                    {{ el.amount }}
                                </p>
                                <img
                                    src="/src/assets/image/cabinet-shop/currency.png"
                                    alt="solaris-valute"
                                />
                            </div>
                            <div class="cabinet-shop-history__wrapper-info">
                                <p>{{ el.orderNumber }}</p>
                                <p>{{ el.time }} <span>заказ оплачен</span></p>
                            </div>
                        </li>
                    </ul>
                    <div class="cabinet-shop__img-background">
                        <img src="@/assets/image/cabinet-shop/coinBege.png" alt="coin" />
                    </div>
                </template>
                <div v-else class="shop-empty__container">
                    <p class="shop-empty-history">У вас еще не было покупок</p>
                    <div class="shop-empty-history__content">
                        <p class="shop-empty-history">Cамый популярный товар в магазине -</p>
                        <p class="shop-empty-history__popular">Cертификат Антидвойка</p>
                        <p class="shop-empty-history">Улучши свои оценки в один клик.</p>
                    </div>
                    <button
                        class="btn shop-empty-history__btn"
                        @click="$router.push('/cabinet-shop')"
                    >
                        В магазин
                    </button>
                </div>
                <div
                    v-if="infoBuyHistoryItem.length === 0"
                    class="cabinet-shop__img-background--empty"
                >
                    <img src="@/assets/image/cabinet-shop/coinBege.png" alt="" />
                </div>
                <span class="cabinet-shop-history__line" />
            </div>
        </div>
    </section>
</template>


<script setup>
const infoBuyItemInfo = [
    {
        name: 'Антидвойка',
        number: '№ 2598',
        text: 'Для активации покажи эту карточку учителю',
        img: '/src/assets/image/cabinet-shop/pic.png',
        id: 1
    },
    {
        name: 'Значок',
        number: '№ 3459864',
        text: '  1 корпус - кабинет В 2012 корпус - кабинет В 208',
        img: '/src/assets/image/cabinet-shop/icon.png',
        id: 2
    },
    {
        name: 'Значок',
        number: '№ 3459864',
        text: '  1 корпус - кабинет В 2012 корпус - кабинет В 208',
        img: '/src/assets/image/cabinet-shop/icon.png',
        id: 12
    },
    {
        name: 'Значок',
        number: '№ 3459864',
        text: '  1 корпус - кабинет В 2012 корпус - кабинет В 208',
        img: '/src/assets/image/cabinet-shop/icon.png',
        id: 11
    },
    {
        name: 'Значок',
        number: '№ 3459864',
        text: '  1 корпус - кабинет В 2012 корпус - кабинет В 208',
        img: '/src/assets/image/cabinet-shop/icon.png',
        id: 11
    },
    {
        name: 'Значок',
        number: '№ 3459864',
        text: '  1 корпус - кабинет В 2012 корпус - кабинет В 208',
        img: '/src/assets/image/cabinet-shop/icon.png',
        id: 11
    },
    {
        name: 'Значок',
        number: '№ 3459864',
        text: '  1 корпус - кабинет В 2012 корпус - кабинет В 208',
        img: '/src/assets/image/cabinet-shop/icon.png',
        id: 11
    },
];


const infoBuyHistoryItem = [
    {
        imgSrc: '/src/assets/image/cabinet-shop/solaris2.png',
        amount: 200,
        orderNumber: 'Стикеры солярики № 33500967',
        orderStatus: 'заказ оплачен',
        time: '13.02.2024',
        currency: '/src/assets/image/cabinet-shop/currency.png',
        id: 1
    },
    {
        imgSrc: '/src/assets/image/cabinet-shop/solaris2.png',
        amount: 150,
        orderNumber: 'Антидвойка № 33500967',
        orderStatus: 'заказ оплачен',
        time: '13.02.2024',
        currency: '/src/assets/image/cabinet-shop/currency.png',
        id: 13
    },
    {
        imgSrc: '/src/assets/image/cabinet-shop/solaris2.png',
        amount: 150,
        orderNumber: 'Антидвойка № 33500967',
        orderStatus: 'заказ оплачен',
        time: '13.02.2024',
        currency: '/src/assets/image/cabinet-shop/currency.png',
        id: 11
    },
    {
        imgSrc: '/src/assets/image/cabinet-shop/solaris2.png',
        amount: 150,
        orderNumber: 'Стикеры солярики № 33500967',
        orderStatus: 'заказ оплачен',
        time: '13.02.2024',
        currency: '/src/assets/image/cabinet-shop/currency.png',
        id: 12
    },
    {
        imgSrc: '/src/assets/image/cabinet-shop/solaris2.png',
        amount: 150,
        orderNumber: 'Стикеры солярики № 33500967',
        orderStatus: 'заказ оплачен',
        time: '13.02.2024',
        currency: '/src/assets/image/cabinet-shop/currency.png',
        id: 15
    },
    {
        imgSrc: '/src/assets/image/cabinet-shop/solaris2.png',
        amount: 150,
        orderNumber: 'Стикеры солярики № 33500967',
        orderStatus: 'заказ оплачен',
        time: '13.02.2024',
        currency: '/src/assets/image/cabinet-shop/currency.png',
        id: 15
    },
    {
        imgSrc: '/src/assets/image/cabinet-shop/solaris2.png',
        amount: 150,
        orderNumber: 'Стикеры солярики № 33500967',
        orderStatus: 'заказ оплачен',
        time: '13.02.2024',
        currency: '/src/assets/image/cabinet-shop/currency.png',
        id: 15
    },
    {
        imgSrc: "/src/assets/image/cabinet-shop/solaris2.png",
        amount: 150,
        orderNumber: "Стикеры солярики № 33500967",
        orderStatus: "заказ оплачен",
        time: "13.02.2024",
        currency: "/src/assets/image/cabinet-shop/currency.png",
        id: 15
    },
    {
        imgSrc: "/src/assets/image/cabinet-shop/solaris2.png",
        amount: 150,
        orderNumber: "Стикеры солярики № 33500967",
        orderStatus: "заказ оплачен",
        time: "13.02.2024",
        currency: "/src/assets/image/cabinet-shop/currency.png",
        id: 15
    },
    {
        imgSrc: "/src/assets/image/cabinet-shop/solaris2.png",
        amount: 150,
        orderNumber: "Стикеры солярики № 33500967",
        orderStatus: "заказ оплачен",
        time: "13.02.2024",
        currency: "/src/assets/image/cabinet-shop/currency.png",
        id: 15
    },
    {
        imgSrc: "/src/assets/image/cabinet-shop/solaris2.png",
        amount: 150,
        orderNumber: "Стикеры солярики № 33500967",
        orderStatus: "заказ оплачен",
        time: "13.02.2024",
        currency: "/src/assets/image/cabinet-shop/currency.png",
        id: 15
    },
    {
        imgSrc: "/src/assets/image/cabinet-shop/solaris2.png",
        amount: 150,
        orderNumber: "Стикеры солярики № 33500967",
        orderStatus: "заказ оплачен",
        time: "13.02.2024",
        currency: "/src/assets/image/cabinet-shop/currency.png",
        id: 15
    },
    {
        imgSrc: "/src/assets/image/cabinet-shop/solaris2.png",
        amount: 150,
        orderNumber: "Стикеры солярики № 33500967",
        orderStatus: "заказ оплачен",
        time: "13.02.2024",
        currency: "/src/assets/image/cabinet-shop/currency.png",
        id: 15
    },
];

</script>
<style lang="scss">
.cabinet-shop {
  width: 100%;
  background-color: var(--dark);
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 0;
  height: 100%;
  max-height: 100%;
  min-height: 0;
}

.cabinet-shop-container {
    display: flex;
    width: 100%;
    position: relative;
    margin: 0 auto;
    max-width: 1560px;
    flex-grow: 1;
    padding: 0 60px;
    box-sizing: border-box;
    gap: 60px;
    height: 100%;
}

.cabinet-shop::before {
    content: '';
    width: 50%;
    height: 100%;
    background: #fff;
    position: absolute;
    right: 0;
}

.cabinet-shop-ready {
  background: #1f2a3e;
  padding-top: 24px;
  height: 100%;
  width: 40%;
  overflow: hidden;
  box-sizing: border-box;
  padding-bottom: 24px;
}

.cabinet-shop-history {
    width: 100%;
    max-width: 100%;
    max-height: 100vh;
    padding: 16px 0 24px 16px;
    position: relative;
    background: var(--white);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.cabinet-shop-history__wrapper {
    max-width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    z-index: 1;
    background: rgba(255, 255, 255, 0.7);
    display: flex;
    gap: 16px;
    align-items: center;
    padding: 8px 0px;
    width: 100%;
    overflow: auto;
    scrollbar-width: none;
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
    content: '';
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
  height: 100%;
  min-height: 100px;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: calc(100% - 148px);
}

.cabinet-shop-ready__list::-webkit-scrollbar {
    display: none;
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

.shop-empty-ready {
    color: var(--white);
    font-size: 20px;
    text-align: center;
    font-weight: 500;
    margin-bottom: 24px;
}

.shop-empty-history {
    font-size: 20px;
    text-align: center;
    font-weight: 500;
}

.cabinet-shop-history__line {
    display: block;
    margin-top: auto;
    width: 100%;
    height: 2px;
    background: var(--roseBege);
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
    content: '';
    position: absolute;
    top: 10px;
    left: 0;
    border: 2px solid var(--dark);
    width: 40%;
}

.cabinet-shop-history__title::after {
    content: '';
    position: absolute;
    top: 10px;
    right: 0;
    border: 2px solid #1f2a3e;
    width: 40%;
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
    position: absolute;
    bottom: 24px;
    right: 63px;
    display: flex;
    justify-content: flex-end;
    z-index: 0;
    width: 100%;
    max-width: 515px;
}

.cabinet-shop__img-background img {
    width: 100%;
    height: 100%;
}

.shop-empty-history__popular {
    font-size: 20px;
    text-align: center;
    font-weight: 500;
    color: var(--orange);
}

.shop-empty-history__btn {
    max-width: 292px;
    width: 100%;
    display: flex;
    justify-content: center;
}

.cabinet-shop__img-background--empty {
    position: absolute;
    top: 406px;
    right: 63px;
    display: flex;
    justify-content: flex-end;
    z-index: 0;
    width: 100%;
    max-width: 515px;
}

.cabinet-shop__img-background--empty img {
    width: 100%;
    height: 100%;
}

@media (max-width: 1440px) {
  .cabinet-shop-ready {
    padding: 24px 0 24px 0;
    width: 70%;
  }

    .cabinet-shop-history__title::before {
        width: 35%;
    }

    .cabinet-shop-history__title::after {
        width: 35%;
    }

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

    .cabinet-shop::before {
        width: 30%;
    }

    .cabinet-shop-history__title::before {
        width: 30%;
    }

    .cabinet-shop-history__title::after {
        width: 30%;
    }

    .cabinet-shop__img-background {
        right: 0;
        left: 0;
    }

    .cabinet-shop__img-background--empty {
        right: 50%;
        transform: translateX(50%);
    }
}

@media (max-width: 991px) {
    .cabinet-shop-history__line {
        display: none;
    }

    .cabinet-shop__img-background {
        display: none;
    }

    .cabinet-shop-ready {
        min-width: 0;
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
}

@media (max-width: 768px) {
    .cabinet-shop {
        background: var(--white);
    }

    .cabinet-shop-container {
        height: auto;
        gap: 0;
    }

    .cabinet-shop::before {
        display: none;
    }

    .cabinet-shop-container {
        flex-direction: column;
        padding: 0 40px;
    }

  .cabinet-shop-ready {
    width: calc(100% + 80px);
    padding: 0 40px;
    left: -40px;
    max-height: 900px;
    position: relative;
  }

    .cabinet-shop-ready__list {
        min-height: auto;
        padding-bottom: 10px;
        margin-bottom: 62px;
        max-height: 696px;
        position: relative;
    }

  .cabinet-shop-ready__list::after {
    content: "";
    border-bottom: 2px solid #dda06b;
    display: block;
    height: 2px;
    margin: 0 auto;
    position: sticky;
    padding-top: 10px;
    width: 100%;
  }

    .cabinet-shop-ready__list-item {
        flex-direction: row;
        margin: 0 auto;
    }

    .cabinet-shop-history {
        width: auto;
        max-height: 100vh;
        position: relative;
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

@media (max-width: 576px) {
    .cabinet-shop-container {
        flex-direction: column;
        padding: 0 16px;
    }

  .cabinet-shop-ready {
    width: calc(100% + 32px);
    padding: 0 16px;
    left: -16px;
    height: auto;
  }

    .cabinet-shop-history__title::before {
        width: 30%;
    }

    .cabinet-shop-history__title::after {
        width: 30%;
    }
}

@media (max-width: 480px) {
    .cabinet-shop-history__title::before {
        width: 24%;
    }

    .cabinet-shop-history__title::after {
        width: 24%;
    }
}

@media (max-width: 370px) {
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

.shop-empty__container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
}
</style>
