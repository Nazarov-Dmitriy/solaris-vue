<template>
    <section>
        <div
            id="contest"
            class="contest"
        >
            <h2 class="contest__title h2">
                Конкурсы сегодняшнего дня
            </h2>
            <div class="contest-container">
                <div
                    v-for="el of arr"
                    :key="el.id"
                    class="item-container"
                >
                    <div class="contest__item">
                        <div class="contest__item-wraper">
                            <p class="contest__item-subtitle p1">
                                {{ el.title }}
                            </p>
                            <p class="contest__item-publication p2">
                                {{ el.date_publication }}
                            </p>
                        </div>
                        <svg
                            class="contest__item-btn"
                            :class="{ 'current': active == el.id }"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            @click="setActive(el.id)"
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
                    <transition name="show">
                        <div
                            v-if="active === el.id"
                            class="contest-content"
                        >
                            <h3 class="contest-content__title h3">
                                {{ el.title }}
                            </h3>
                            <div class="contest-content__subtitle">
                                <p class="contest-content__subtitle-text p2">
                                    {{ el.trend }}
                                </p>
                                <p class="contest-content__subtitle-start p2">
                                    начало {{ el.start_date }}
                                </p>
                            </div>
                            <p class="contest-content__description p2">
                                {{ el.descption }}
                            </p>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

function setActive (ind){
    ind !== active.value ? active.value= ind : active.value = null
}

const active = ref(null);
let arr = [
    {
        title: "Название конкурса",
        date_publication: "04.08.2024",
        direction: "Направление",
        start_date: "01.05.2024",
        descption:
      "Идейные соображения высшего порядка, а также постоянный количественный рост ",
        trend: "Направление",
        id: 1
    },
    {
        title: "Название конкурса 2",
        date_publication: "04.08.2024",
        direction: "Направление",
        start_date: "01.05.2024",
        descption:
      "Идейные соображения высшего порядка, а также постоянный количественный рост ",
        trend: "Направление",
        id: 2

    },
    {
        title: "Название конкурса 3",
        date_publication: "04.08.2024",
        direction: "Направление",
        start_date: "01.05.2024",
        descption:
      "Идейные соображения высшего порядка, а также постоянный количественный рост ",
        trend: "Направление",
        id: 3

    },
    {
        title: "Название конкурса 4",
        date_publication: "04.08.2024",
        direction: "Направление",
        start_date: "01.05.2024",
        descption:
      "Идейные соображения высшего порядка, а также постоянный количественный рост ",
        trend: "Направление",
        id: 5

    },
    {
        title: "Название конкурса 5",
        date_publication: "04.08.2024",
        direction: "Направление",
        start_date: "01.05.2024",
        descption:
      "Идейные соображения высшего порядка, а также постоянный количественный рост ",
        trend: "Направление",
        id: 6

    },
    {
        title: "Название конкурса 6",
        date_publication: "04.08.2024",
        direction: "Направление",
        start_date: "01.05.2024",
        descption:
      "Идейные соображения высшего порядка, а также постоянный количественный рост ",
        trend: "Направление",
        id: 7

    },
];
</script>

<style lang="scss">
.contest {
  max-width: 1440px;
  padding: 80px 60px;
  margin: auto;
  box-sizing: border-box;
  scroll-margin: 88px;
}

.contest__title {
  color: var(--dark);

  @media(max-width:$lg) {
        &.h2 {
            font-size: 24px;
            line-height: 36px;
        }
    }
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

.contest__item-btn.current {
  fill: var(--roseBege);
  transform: translateX(40px);
}

.contest__item-btn.current rect {
  stroke: var(--roseBege);
}

.contest__item-btn.current path {
  stroke: var(--white);
}

.contest-content {
  max-width: 49.5%;
  height: fit-content;
  border: 2px solid var(--roseBege);
  background: var(--lightBege);
  transition: 0.4s;
  transition: opacity 0.4s ease;
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

.show-enter-active,
.show-leave-active {
  transition: all 0.5s ease;
}

.show-enter-from,
.show-leave-to {
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.5s ease;
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

  .contest__item-btn.current {
    transform: none;
    rotate: 90deg;
  }

  .contest-content {
    max-width: 100%;
    position: static;
  }

  .show-enter-from,
  .show-leave-to {
    opacity: 0;
    transform: translateX(0);
    transition: all 0.5s ease;
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
