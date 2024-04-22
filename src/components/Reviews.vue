<template>
  <section class="reviews">
    <div class="reviews__wrap">
        <h2 class="reviews__title h2">
          Отзывы
        </h2>
        <img 
        class="reviews__img" 
        :class="{ reviews__animate: reviewsAnimated }"
        src="../assets/image/reviews/reviews.png" 
        alt="Солярик">
    </div>
    <div class="reviews__cards"> 
      <div class="reviews__empty-card"></div>
        <div class="reviews__card">
          <div class="reviews__card__wrap">
            <img class="reviews__card__img" src="../assets/image/reviews/reviews-card-avatar.png" alt="avatar">
            <div>
              <p class="reviews__card__name">Марина И.</p>
              <p class="reviews__card__date p2">01.04.1024</p>
            </div>
          </div>
          <div class="reviews__card__text p2">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
        </div>

        <div class="reviews__card">
          <div class="reviews__card__wrap">
            <img class="reviews__card__img" src="../assets/image/reviews/reviews-card-avatar.png" alt="avatar">
            <div>
              <p class="reviews__card__name">Марина И.</p>
              <p class="reviews__card__date p2">01.04.1024</p>
            </div>
          </div>
          <div class="reviews__card__text p2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum tenetur quos dolores odio quisquam accusamus minima? Enim cupiditate error laboriosam! Cum totam ad facere eveniet molestiae odio dolorem, perferendis est.</div>
        </div>

        <div class="reviews__card">
          <div class="reviews__card__wrap">
            <img class="reviews__card__img" src="../assets/image/reviews/reviews-card-avatar.png" alt="avatar">
            <div>
              <p class="reviews__card__name">Марина И.</p>
              <p class="reviews__card__date p2">01.04.1024</p>
            </div>
          </div>
          <div class="reviews__card__text p2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum tenetur quos dolores odio quisquam accusamus minima? Enim cupiditate error laboriosam! Cum totam ad facere eveniet molestiae odio dolorem, perferendis est.</div>
        </div>

        <div class="reviews__card">
          <div class="reviews__card__wrap">
            <img class="reviews__card__img" src="../assets/image/reviews/reviews-card-avatar.png" alt="avatar">
            <div>
              <p class="reviews__card__name">Марина И.</p>
              <p class="reviews__card__date p2">01.04.1024</p>
            </div>
          </div>
          <div class="reviews__card__text p2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum tenetur quos dolores odio quisquam accusamus minima? Enim cupiditate error laboriosam! Cum totam ad facere eveniet molestiae odio dolorem, perferendis est.</div>
        </div>

        <div class="reviews__card">
          <div class="reviews__card__wrap">
            <img class="reviews__card__img" src="../assets/image/reviews/reviews-card-avatar.png" alt="avatar">
            <div>
              <p class="reviews__card__name">Марина И.</p>
              <p class="reviews__card__date p2">01.04.1024</p>
            </div>
          </div>
          <div class="reviews__card__text p2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum tenetur quos dolores odio quisquam accusamus minima? Enim cupiditate error laboriosam! Cum totam ad facere eveniet molestiae odio dolorem, perferendis est.</div>
        </div>

        <div class="reviews__card">
          <div class="reviews__card__wrap">
            <img class="reviews__card__img" src="../assets/image/reviews/reviews-card-avatar.png" alt="avatar">
            <div>
              <p class="reviews__card__name">Марина И.</p>
              <p class="reviews__card__date p2">01.04.1024</p>
            </div>
          </div>
          <div class="reviews__card__text p2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum tenetur quos dolores odio quisquam accusamus minima? Enim cupiditate error laboriosam! Cum totam ad facere eveniet molestiae odio dolorem, perferendis est.</div>
        </div>

        <div class="reviews__card">
          <div class="reviews__card__wrap">
            <img class="reviews__card__img" src="../assets/image/reviews/reviews-card-avatar.png" alt="avatar">
            <div>
              <p class="reviews__card__name">Марина И.</p>
              <p class="reviews__card__date p2">01.04.1024</p>
            </div>
          </div>
          <div class="reviews__card__text p2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum tenetur quos dolores odio quisquam accusamus minima? Enim cupiditate error laboriosam! Cum totam ad facere eveniet molestiae odio dolorem, perferendis est.</div>
        </div>

        <div class="reviews__card">
          <div class="reviews__card__wrap">
            <img class="reviews__card__img" src="../assets/image/reviews/reviews-card-avatar.png" alt="avatar">
            <div>
              <p class="reviews__card__name">Марина И.</p>
              <p class="reviews__card__date p2">01.04.1024</p>
            </div>
          </div>
          <div class="reviews__card__text p2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum tenetur quos dolores odio quisquam accusamus minima? Enim cupiditate error laboriosam! Cum totam ad facere eveniet molestiae odio dolorem, perferendis est.</div>
        </div>

    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const reviewsAnimated = ref(false);

    const setVisible = () => {
      const elementPosition = document
        .querySelector(".reviews")
        .getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (elementPosition.top < windowHeight * 0.3) {
        reviewsAnimated.value = true;
        window.removeEventListener("scroll", setVisible);
      }
    };

    onMounted(() => {
      setVisible();
      window.addEventListener("scroll", setVisible);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", setVisible);
    });

    return {
      reviewsAnimated,
      setVisible,
    };
  },
};
</script>

<style>
.reviews {
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 60px 0px 60px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 991px){
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: 576px){
    flex-direction: column;
    padding-left: 16px;
    padding-right: 16px;
  }
}
.reviews__title {
  color: var(--dark);
  position: relative;

  @media (max-width: 991px){
    font-size: 24px;
    line-height: 36px;
  }
}
.reviews__img{
  max-width: 401px;
  width: calc(100% + 60px);
  margin-left: -60px;
  margin-top: -30px;
  opacity: 0;
  transform: translateX(-100%);
  
  @media (max-width: 991px){
    margin-left: -40px;
    margin-top: -40px;
    width: 100%;
  }

  @media (max-width: 576px){
    width: 65px;
    margin-left: -16px;
    margin-top: 0px;
  }
}
.reviews__animate{
  opacity: 1;
  transition: all 1.5s;
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

  @media (max-width: 991px){
    grid-template-columns: 1fr;
    height: 476px;
  }

  @media (max-width: 576px){
    align-self: center;
  }
}
.reviews__cards::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.reviews__empty-card{
  height: 126px;

  @media (max-width: 991px){
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