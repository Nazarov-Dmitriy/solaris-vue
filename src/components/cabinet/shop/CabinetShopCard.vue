<template>
    <section class="shop-card">
        <div class="shop-card__container">
            <div class="card">
                <div class="card-header">
                    <img
                        class="card-img"
                        src="@/assets/image/cabinet/image.png"
                        alt="Изображение отсутствует"
                    />
                    <h2 class="card-header-text">{{ product.name }}</h2>
                    <div class="card-price-wraper">
                        <p class="card-price">{{ product.price }}</p>
                        <svg
                            class="card-icon"
                            width="41"
                            height="44"
                            viewBox="0 0 41 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.00113489 22.2992C0.00113489 25.4318 0.591256 28.327 1.77096 30.9871C2.95123 33.6472 4.54874 35.9462 6.56462 37.8857C8.57992 39.824 10.9394 41.3278 13.6429 42.397C16.3464 43.4657 19.2228 44 22.2704 44C24.5318 44 26.7313 43.8016 28.8702 43.4032C31.0085 43.0059 32.9377 42.3712 34.6582 41.5015C36.3787 40.6313 37.8044 39.5007 38.9354 38.1081C40.0658 36.7161 40.754 35.0014 41 32.9627C41 31.7198 40.5941 30.6506 39.7829 29.7557C38.9717 28.8613 37.8532 28.4136 36.428 28.4136C35.4444 28.4136 34.6945 28.7862 34.1786 29.5326C33.6627 30.2779 33.4042 31.0984 33.4042 31.9939C33.4042 32.8389 33.6378 33.5968 34.1055 34.2682C34.572 34.9395 35.2976 35.2743 36.2806 35.2743C35.7891 36.8652 34.8549 38.033 33.4785 38.7795C32.1021 39.5248 30.6032 39.898 28.9807 39.898C26.7188 39.898 24.8016 39.3012 23.2285 38.1081C21.6559 36.9151 20.3651 35.3987 19.3571 33.5595C18.3492 31.7198 17.6242 29.7436 17.1814 27.631C16.7387 25.5172 16.5181 23.5164 16.5181 21.6279C16.5181 20.5335 16.5918 19.3038 16.7387 17.9364C16.8866 16.5691 17.1446 15.2023 17.5131 13.8356C17.8821 12.4682 18.3736 11.1634 18.9881 9.92046C19.6026 8.67754 20.377 7.60834 21.3107 6.71399C22.9331 5.22225 24.7273 4.47637 26.6933 4.47637C27.4303 4.47637 28.1553 4.60077 28.8691 4.84901C29.5816 5.09725 30.2823 5.52036 30.97 6.11717C30.3798 5.96811 29.8396 5.89356 29.3475 5.89356C28.2171 5.89356 27.1848 6.15442 26.2506 6.6767C25.3163 7.19841 24.5057 7.89441 23.8169 8.76411C23.1293 9.63439 22.5884 10.617 22.1944 11.7097C21.8016 12.8042 21.6043 13.9227 21.6043 15.0659C21.6043 16.1099 21.801 17.1166 22.1944 18.086C22.5879 19.0555 23.1293 19.8879 23.8169 20.5839C24.5051 21.2799 25.3163 21.8389 26.2506 22.2614C27.1848 22.6845 28.1928 22.8949 29.2738 22.8949C30.5522 22.8949 31.7194 22.6214 32.7767 22.0751C33.8334 21.5281 34.7307 20.7949 35.4683 19.8742C36.2052 18.9552 36.7829 17.9106 37.2013 16.7422C37.6196 15.5744 37.8277 14.3934 37.8277 13.1998C37.8277 11.012 37.2874 9.08571 36.2052 7.42026C35.1242 5.75481 33.7602 4.37547 32.1128 3.28161C30.466 2.18832 28.6355 1.36794 26.6196 0.82043C24.6043 0.274071 22.6871 0 20.8679 0C18.0658 0 15.411 0.596794 12.9042 1.78984C10.3968 2.98346 8.18538 4.57438 6.26758 6.5626C4.34978 8.55139 2.82596 10.8377 1.69614 13.4233C0.565188 16.0084 0 18.6932 0 21.4777L0 22.2975L0.00113489 22.2992Z"
                                fill="#DDA06B"
                            />
                        </svg>
                    </div>
                </div>
                <div class="card-text">
                    <p class="card-text-header h3">О товаре</p>
                    <p class="card-text-word p1">
                        {{ product.description }}
                    </p>
                </div>
                <div class="card-buttons">
                    <button type="button" class="cancel-btn" @click="$router.go(-1)">
                        Отменить
                    </button>
                    <div class="quantity-block">
                        <div class="quantity-text p2">Количество</div>
                        <button class="decrease h3" @click="decrement">-</button>
                        <span class="quantity h3">{{ countValue }}</span>
                        <button class="increase h3" @click="increment">+</button>
                    </div>
                    <button type="button" class="exchange-btn">Обменять</button>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { useShopStore } from '@/stores/useShop'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const countValue = ref(1)

function increment() {
    countValue.value++
}
function decrement() {
    if (countValue.value > 1) {
        countValue.value--
    } else {
        return
    }
}
const shopStore = useShopStore()

const product = computed(() =>
    shopStore.getProducts.find((item) => item.product_id == route.params.id)
)
</script>

<style lang="scss">
.shop-card {
    width: 100%;
    background: var(--dark);
    flex-grow: 1;
    display: flex;
}

.shop-card__container {
    width: 100%;
    padding: 32px 60px;
    max-width: 1560px;
    margin: 0 auto;
    box-sizing: border-box;
}

.card {
    box-sizing: border-box;
    padding: 24px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin: auto;
    border: 2px solid var(--roseBege);
    width: 100%;
}

.card-header {
    width: 100%;
    display: grid;
    grid-template-columns: 381px 382px 1fr;
    grid-template-areas: 'img text price';
    justify-content: space-between;
    align-items: start;
    gap: 39px;
}

.card-img {
    grid-area: img;
    aspect-ratio: 18 / 10;
    object-fit: cover;
    max-width: 381px;
}

.card-header-text {
    grid-area: text;
    color: var(--white);
}

.card-price-wraper {
    justify-self: end;
    grid-area: price;
    display: flex;
    align-items: center;
    color: var(--roseBege);
    gap: 8px;
}

.card-text {
    margin-top: 40px;
    margin-bottom: 40px;
    color: var(--white);
    width: 100%;
}

.card-text-header {
    margin-bottom: 24px;
}

.card-header-text,
.card-price {
    font-size: 48px;
    line-height: 64px;
    font-weight: 700;
}

.card-text-word {
    text-align: justify;
}

.card-buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 32px;
}

.cancel-btn {
    border: 2px solid var(--roseBege);
    width: 295px;
    height: 56px;
    vertical-align: middle;
    text-align: center;
    background-color: rgba(255, 255, 255, 0);
    color: var(--roseBege);
    cursor: pointer;

    &:hover {
        border: 2px solid var(--roseBege);
        background-color: var(--roseBege);
        color: var(--white);
    }

    &:active {
        border: 2px solid var(--dark);
        color: var(--dark);
        background: var(--roseBege);
    }
}

.exchange-btn {
    border: 2px solid white;
    width: 295px;
    height: 56px;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    background-color: rgba(222, 71, 0, 1);
    color: white;
    cursor: pointer;

    &:hover {
        border: 2px solid var(--roseBege);
        color: white;
        background: var(--roseBege);
    }

    &:active {
        border: 2px solid var(--dark);
        color: var(--dark);
        background: var(--roseBege);
    }
}

.quantity-block {
    display: flex;
    justify-content: flex-end;
    color: white;
    gap: 16px;
    flex-grow: 1;
}

.quantity {
    border: 2px solid white;
    width: 50px;
    height: 50px;
    color: white;
    font-family: Inter;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
}

.increase,
.decrease {
    color: white;
    border: none;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0);
}

.quantity-text {
    color: white;
    display: flex;
    align-items: center;
}

@media (max-width: 1200px) {
    .card-header {
        grid-template-columns: 381px 1fr;
        grid-template-areas:
            'img text'
            'img price';
        gap: 16px 39px;
    }
}

@media (max-width: 992px) {
    .card-header {
        grid-template-columns: 313px 1fr;
        grid-template-rows: 72px auto;
    }

    .card-img {
        max-width: 100%;
    }

    .cancel-btn {
        width: 111px;
    }

    .card-header-text,
    .card-price {
        font-size: 24px;
        line-height: 36px;
    }

    .card-text-word {
        font-size: 16px;
    }

    .card-price-wraper {
        float: right;
    }

    .exchange-btn {
        width: 111px;
    }
}

@media (max-width: 768px) {
    .shop-card__container {
        padding: 20px 40px;
    }

    .card {
        padding: 24px 16px;
    }

    .card-header {
        grid-template-columns: 313px 1fr;
        grid-template-rows: 36px auto;
        grid-template-areas:
            'text text'
            'img price';
        gap: 24px 16px;
    }

    .card-header-text {
        font-family: Inter;
        font-size: 24px;
        font-weight: 700;
        line-height: 36px;
        text-align: left;
    }

    .card-text {
        margin-top: 32px;
        margin-bottom: 32px;
    }

    .card-price {
        font-size: 24px;
        line-height: 150%;
    }

    .card-img {
        height: 170px;
    }

    .card-icon {
        width: 30px;
        height: 32px;
    }

    .exchange-btn {
        width: 111px;
    }

    .quantity-text {
        display: none;
    }

    .quantity {
        width: 32px;
        height: 32px;
    }

    .decrease {
        height: 32px;
    }

    .increase {
        height: 32px;
    }

    .card-buttons {
        align-items: center;
    }
}

@media (max-width: 576px) {
    .shop-card__container {
        padding: 16px;
    }

    .card-text {
        margin-top: 24px;
        margin-bottom: 24px;
    }

    .card-header {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-template-areas:
            'text'
            'img'
            'price';
        gap: 24px;
    }

    .card-img {
        width: 100%;
        aspect-ratio: 18 / 10;
        height: auto;
    }

    .card-buttons {
        flex-wrap: wrap;
        gap: 16px;
    }

    .cancel-btn {
        order: 1;
        width: 100%;
    }

    .exchange-btn {
        width: 185px;
        flex-grow: 1;
    }

    .quantity-block {
        justify-content: space-between;
        flex-grow: 10;
        max-width: 109px;
        width: 109px;
        margin-right: 16px;
        margin: 0 auto;
    }

    .quantity.h3 {
        font-size: 20px;
        line-height: 30px;
    }
}
</style>
