<template>
    <section class="shop-balance">
        <div class="balance">
            <div
                ref="activeWindow"
                class="balance-description"
                :class="{ active: active }"
                @click="toggleActiveWindow"
            >
                <p class="balance-text p2">Как получить товар</p>
                <svg
                    class="balance-question"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#1F2A3E" />
                    <path
                        d="M10.4773 14.7273V14.6591C10.4848 13.9356 10.5606 13.3598 10.7045 12.9318C10.8485 12.5038 11.053 12.1572 11.3182 11.892C11.5833 11.6269 11.9015 11.3826 12.2727 11.1591C12.4962 11.0227 12.697 10.8617 12.875 10.6761C13.053 10.4867 13.1932 10.2689 13.2955 10.0227C13.4015 9.77652 13.4545 9.50379 13.4545 9.20455C13.4545 8.83333 13.3674 8.51136 13.1932 8.23864C13.0189 7.96591 12.786 7.75568 12.4943 7.60795C12.2027 7.46023 11.8788 7.38636 11.5227 7.38636C11.2121 7.38636 10.9129 7.45076 10.625 7.57955C10.3371 7.70833 10.0966 7.91098 9.90341 8.1875C9.71023 8.46401 9.59848 8.82576 9.56818 9.27273H8.13636C8.16667 8.62879 8.33333 8.07765 8.63636 7.61932C8.94318 7.16098 9.34659 6.81061 9.84659 6.56818C10.3504 6.32576 10.9091 6.20455 11.5227 6.20455C12.1894 6.20455 12.7689 6.33712 13.2614 6.60227C13.7576 6.86742 14.1402 7.23106 14.4091 7.69318C14.6818 8.1553 14.8182 8.68182 14.8182 9.27273C14.8182 9.68939 14.7538 10.0663 14.625 10.4034C14.5 10.7405 14.3182 11.0417 14.0795 11.3068C13.8447 11.572 13.5606 11.8068 13.2273 12.0114C12.8939 12.2197 12.6269 12.4394 12.4261 12.6705C12.2254 12.8977 12.0795 13.1686 11.9886 13.483C11.8977 13.7973 11.8485 14.1894 11.8409 14.6591V14.7273H10.4773ZM11.2045 18.0909C10.9242 18.0909 10.6837 17.9905 10.483 17.7898C10.2822 17.589 10.1818 17.3485 10.1818 17.0682C10.1818 16.7879 10.2822 16.5473 10.483 16.3466C10.6837 16.1458 10.9242 16.0455 11.2045 16.0455C11.4848 16.0455 11.7254 16.1458 11.9261 16.3466C12.1269 16.5473 12.2273 16.7879 12.2273 17.0682C12.2273 17.2538 12.1799 17.4242 12.0852 17.5795C11.9943 17.7348 11.8712 17.8598 11.7159 17.9545C11.5644 18.0455 11.3939 18.0909 11.2045 18.0909Z"
                        fill="#1F2A3E"
                    />
                </svg>
                <div class="balance__tolltip" :class="{ active: active }" @click.stop>
                    <p class="balance__tolltip-text">
                        Для активации Сертификата “Антидвойка” покажи карточку покупки учителю.
                    </p>
                    <p class="balance__tolltip-text">Товар после покупки можно получть:</p>
                    <p class="balance__tolltip-text">1 корпус - кабинет В 201;</p>
                    <p class="balance__tolltip-text">2 корпус - кабинет В 208.</p>
                    <p class="balance__tolltip-text">
                        Для получения покажи картку покупки учителю.
                    </p>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="balance__tolltip-close"
                        @click="toggleActiveWindow"
                    >
                        <line
                            x1="5.16421"
                            y1="4.65991"
                            x2="19.6599"
                            y2="19.1556"
                            stroke="#1F2A3E"
                            stroke-width="2"
                            stroke-linecap="round"
                        />
                        <line
                            x1="3.75"
                            y1="18.9957"
                            x2="18.2457"
                            y2="4.50001"
                            stroke="#1F2A3E"
                            stroke-width="2"
                            stroke-linecap="round"
                        />
                    </svg>
                </div>
            </div>
            <div class="balance-account">
                Баланс
                <span class="balance-account-number"
                    >500
                    <svg
                        width="39"
                        height="40"
                        viewBox="0 0 39 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="2.6543"
                            y="2"
                            width="34.3448"
                            height="36"
                            rx="17.1724"
                            fill="white"
                        />
                        <rect
                            x="2.6543"
                            y="2"
                            width="34.3448"
                            height="36"
                            rx="17.1724"
                            stroke="#DDA06B"
                            stroke-width="4"
                        />
                        <path
                            d="M8.65492 20.1632C8.65492 21.8719 8.97653 23.4511 9.61946 24.9021C10.2627 26.353 11.1333 27.607 12.232 28.6649C13.3303 29.7222 14.6162 30.5425 16.0896 31.1257C17.563 31.7086 19.1306 32 20.7916 32C22.024 32 23.2227 31.8918 24.3884 31.6745C25.5538 31.4578 26.6052 31.1116 27.5429 30.6372C28.4805 30.1625 29.2575 29.5458 29.8739 28.7862C30.49 28.027 30.865 27.0917 30.9991 25.9797C30.9991 25.3017 30.7779 24.7185 30.3358 24.2304C29.8937 23.7425 29.2841 23.4983 28.5074 23.4983C27.9714 23.4983 27.5626 23.7016 27.2815 24.1087C27.0003 24.5152 26.8594 24.9627 26.8594 25.4512C26.8594 25.9121 26.9867 26.3255 27.2416 26.6917C27.4959 27.0579 27.8913 27.2405 28.4271 27.2405C28.1592 28.1083 27.6501 28.7453 26.8999 29.1524C26.1498 29.559 25.3329 29.7625 24.4487 29.7625C23.2159 29.7625 22.1711 29.437 21.3137 28.7862C20.4567 28.1355 19.7532 27.3084 19.2039 26.3052C18.6545 25.3017 18.2594 24.2238 18.0181 23.0714C17.7768 21.9185 17.6566 20.8271 17.6566 19.797C17.6566 19.2001 17.6968 18.5293 17.7768 17.7835C17.8574 17.0377 17.998 16.2922 18.1988 15.5467C18.4 14.8009 18.6678 14.0891 19.0027 13.4112C19.3376 12.7332 19.7597 12.15 20.2685 11.6622C21.1527 10.8485 22.1306 10.4417 23.202 10.4417C23.6037 10.4417 23.9988 10.5095 24.3878 10.6449C24.7762 10.7803 25.158 11.0111 25.5328 11.3366C25.2112 11.2553 24.9167 11.2147 24.6486 11.2147C24.0325 11.2147 23.4699 11.357 22.9608 11.6418C22.4516 11.9264 22.0098 12.306 21.6344 12.7804C21.2596 13.2551 20.9649 13.7911 20.7502 14.3871C20.5361 14.9841 20.4286 15.5942 20.4286 16.2177C20.4286 16.7872 20.5358 17.3363 20.7502 17.8651C20.9646 18.3939 21.2596 18.848 21.6344 19.2276C22.0095 19.6072 22.4516 19.9121 22.9608 20.1426C23.4699 20.3734 24.0192 20.4881 24.6084 20.4881C25.3051 20.4881 25.9412 20.339 26.5174 20.041C27.0933 19.7426 27.5824 19.3427 27.9844 18.8405C28.386 18.3392 28.7008 17.7694 28.9288 17.1321C29.1568 16.4951 29.2702 15.8509 29.2702 15.1999C29.2702 14.0066 28.9758 12.9558 28.386 12.0474C27.7968 11.139 27.0535 10.3866 26.1556 9.78997C25.2581 9.19363 24.2605 8.74615 23.1619 8.44751C22.0635 8.14949 21.0187 8 20.0272 8C18.5001 8 17.0532 8.32552 15.687 8.97628C14.3205 9.62734 13.1153 10.4951 12.0701 11.5796C11.0249 12.6644 10.1944 13.9115 9.57869 15.3218C8.96232 16.7318 8.6543 18.1963 8.6543 19.7151V20.1623L8.65492 20.1632Z"
                            fill="#DDA06B"
                        /></svg
                ></span>
            </div>
        </div>
    </section>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
const active = ref(false)
const activeWindow = ref(null)

function toggleActiveWindow() {
    active.value = !active.value
}

function handleClickOutside(event) {
    if (activeWindow.value && !activeWindow.value.contains(event.target)) {
        active.value = false
    }
}

function handleKeydown(event) {
    if (event.key === 'Escape') {
        active.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
    document.removeEventListener('keydown', handleKeydown)
})
</script>
<style lang="scss">
.shop-balance {
    width: 100%;
    background: var(--lightBege);
}

.balance {
    max-width: 1560px;
    padding: 17px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    box-sizing: border-box;
    position: relative;
}

.balance-description {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    &:active,
    &.active {
        .balance-text {
            color: var(--orange);
        }

        .balance-question path {
            fill: var(--orange);
        }

        .balance-question rect {
            stroke: var(--orange);
        }
    }
}

.balance-text {
    color: var(--dark);
    font-size: 16px;
    line-height: 24px;
}

.balance-account {
    display: flex;
    gap: 16px;
    align-items: center;
    font-size: 24px;
    font-weight: 500;
    color: var(--dark);
}

.balance-account-number {
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 36px;
    font-weight: 500;
}

.balance__tolltip {
    width: 343px;
    padding: 16px;
    background: var(--lightBege);
    border: 1px solid var(--orange);
    position: absolute;
    display: none;
    top: 88px;
    left: 60px;

    &.active {
        display: block;
    }

    @media (max-width: $md) {
        top: 78px;
        left: 40px;
    }

    @media (max-width: $sm) {
        top: 68px;
        left: 16px;
        max-width: 343px;
        width: calc(100% - 32px);
        box-sizing: border-box;
    }
}

.balance__tolltip-text {
    font-size: 16px;
    line-height: 24px;
    color: var(--dark);

    &:first-child {
        margin-bottom: 8px;
        width: 80%;
    }
}

.balance__tolltip-close {
    width: 24px;
    height: 24px;
    top: 16px;
    right: 16px;
    position: absolute;
    cursor: pointer;
}

@media (max-width: 992px) {
    .balance {
        padding: 8px 60px;
    }

    .balance-account-number {
        font-size: 32px;
    }
}

@media (max-width: 768px) {
    .balance {
        padding: 8px 40px;
    }

    .balance-account {
        font-weight: 400;
        font-size: 20px;
        line-height: 150%;
    }

    .balance-account {
        gap: 8px;
    }

    .balance-account-number {
        font-size: 24px;
    }
}

@media (max-width: 576px) {
    .balance {
        padding: 8px 16px;
        gap: 40px;
    }

    .balance-description {
        flex-wrap: wrap;
        justify-content: center;
    }

    .balance-text {
        font-size: 12px;
        flex-shrink: 0;
    }

    .balance-account {
        flex-wrap: wrap;
    }

    .balance-account {
        font-size: 16px;
        justify-content: end;
    }

    .balance-account-number {
        font-size: 24px;
    }
}
</style>
