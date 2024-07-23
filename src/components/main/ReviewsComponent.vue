<template>
    <section
        id="reviews"
        class="reviews"
    >
        <div class="reviews__wrap">
            <h2 class="reviews__title h2">
                Отзывы
            </h2>
            <img
                class="reviews__img"
                src="../../assets/image/reviews/reviews.png"
                alt="Солярик"
            >
        </div>
        <div class="reviews__cards">
            <div class="reviews__empty-card" />
            <div
                v-for="el in arr"
                :key="el"
                class="reviews__card"
            >
                <div class="reviews__card-wrap">
                    <img
                        class="reviews__card-img"
                        src="../../assets/image/reviews/reviews-card-avatar.png"
                        alt="avatar"
                    >
                    <div>
                        <p class="reviews__card-name">
                            {{ el.avtor }}
                        </p>
                        <p class="reviews__card-date p2">
                            {{ el.date }}
                        </p>
                    </div>
                </div>
                <div class="reviews__card-text p2">
                    {{ el.text }}
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue';


const arr = [
    {
        avtor: 'Марина И.',
        date: '01.04.1024',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        avtor: 'Марина И.',
        date: '01.04.1024',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        avtor: 'Марина И.',
        date: '01.04.1024',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        avtor: 'Марина И.',
        date: '01.04.1024',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        avtor: 'Марина И.',
        date: '01.04.1024',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        avtor: 'Марина И.',
        date: '01.04.1024',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
]
let reviews;
let reviewsImg;

onMounted(()=>{
    reviews = document.querySelector(".reviews");
    reviewsImg = document.querySelector(".reviews__img");
    window.addEventListener("scroll", setVisible);
})

function setVisible () {
    const elementPosition = reviews.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (elementPosition.top < windowHeight * 0.3) {
        reviewsImg.classList.add("reviews__animate");

        window.removeEventListener("scroll", setVisible);
    }
}

</script>
<style lang="scss">
.reviews {
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 60px 0px 60px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  scroll-margin: 88px;

  @media (max-width: 991px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    padding-left: 16px;
    padding-right: 16px;
  }
}

.reviews__title {
  color: var(--dark);
  position: relative;


}

.reviews__title.h2 {
  @media (max-width: 991px) {
    font-size: 24px;
    line-height: 36px;
  }
}

.reviews__img {
  max-width: 401px;
  width: calc(100% + 60px);
  margin-left: -60px;
  margin-top: -30px;
  opacity: 0;
  transform: translateX(-100%);

  @media (max-width: 991px) {
    margin-left: -40px;
    margin-top: -40px;
    width: 100%;
  }

  @media (max-width: 576px) {
    width: 65px;
    margin-left: -16px;
    margin-top: 0px;
  }
}

.reviews__animate {
  opacity: 1;
  transition: ease-out 1s;
  transform: translateX(0%);
}

.reviews__cards {
  display: grid;
  gap: 14px;
  grid-template-columns: 1fr 1fr;
  height: 676px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    height: 476px;
  }

  @media (max-width: 576px) {
    align-self: center;
  }
}

.reviews__cards::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.reviews__empty-card {
  height: 126px;

  @media (max-width: 991px) {
    display: none;
  }
}

.reviews__card {
  max-width: 430px;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid var(--roseBege);
  background-color: var(--lightBege);
  padding: 24px;
  grid-row: span 2;
}

.reviews__card__wrap {
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
  align-items: center;
}

.reviews__card__img {
  width: 60px;
  height: 60px;
}

.reviews__card__name {
  color: var(--dark);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
}

.reviews__card__date {
  color: var(--dark);
}

.reviews__card__text {
  color: var(--dark);
}
</style>