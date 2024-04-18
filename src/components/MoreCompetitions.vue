<template>
  <section class="more-competitions">
    <div @scroll="setVisible" class="more-competitions__body">
      <h2 class="more-competitions__title">
        Еще больше конкурсов
        <span class="more-competitions__span">от Солярика </span>
        <span class="more-competitions__span">в телеграмм - канале</span>
      </h2>

      <img
        src="../assets/image/more-competitions/Солярик_утвержденный 5 (1).png"
        alt=""
        class="more-competitions__img"
      />
      <div class="more-competitions__text-wrap">
        <p class="more-competitions__text">
          Хочешь всегда быть
          <span class="more-competitions__span more-competitions__span--center"
            >в курсе событий?</span
          >
          Подпишись на наш чат-бот в
          <span class="more-competitions__span more-competitions__span--center"
            >телеграмм!</span
          >
        </p>
      </div>
      <div class="more-competitions__text-wrap-bottom">
        <img
          class="more-competitions__img-bottom"
          src="../assets/image/more-competitions/text-wrap-bottom.png"
          alt=""
        />
      </div>
      <img
        class="more-competitions__img-coin more-competitions__img-coin--left"
        src="../assets/image/more-competitions/coin.png"
        alt=""
      />
      <img
        class="more-competitions__img-coin more-competitions__img-coin--right"
        src="../assets/image/more-competitions/coin.png"
        alt=""
      />
      <button class="more-competitions__btn">Подписаться на чат-бот</button>
      <div class="more-competitions__img-tg">
        <a href="#" class="more-competitions__link-tg">
          <svg
            width="140"
            height="140"
            viewBox="0 0 140 140"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="hover-path"
              fill-rule="evenodd"
              d="
      M69.507 140C107.895 140 139.014 108.66 139.014 70C139.014 31.3401 107.895 0 69.507 0C31.1194 0 0 31.3401 0 70C0 108.66 31.1194 140 69.507 140Z
      M31.4629 69.2611C51.7256 60.3703 65.2373 54.509 71.9978 51.6771C91.3007 43.5914 95.3117 42.1869 97.9259 42.1405C98.5009 42.1303 99.7866 42.2738 100.619 42.9543C101.323 43.529 101.516 44.3052 101.609 44.85C101.701 45.3948 101.816 46.6359 101.725 47.6057C100.679 58.6743 96.1526 85.535 93.85 97.9321C92.8756 103.178 90.9572 104.937 89.0998 105.109C85.0634 105.483 81.9984 102.422 78.0889 99.8414C71.9714 95.8029 68.5154 93.2889 62.5773 89.348C55.7147 84.7936 60.1634 82.2904 64.0744 78.1996C65.0979 77.129 82.8823 60.8379 83.2266 59.36C83.2696 59.1752 83.3096 58.4862 82.9032 58.1224C82.4967 57.7586 81.8969 57.8831 81.464 57.982C80.8505 58.1222 71.0776 64.6275 52.1456 77.4979C49.3716 79.4162 46.859 80.3509 44.6078 80.3019C42.126 80.2479 37.3521 78.8887 33.8032 77.7269C29.4503 76.3019 25.9907 75.5485 26.292 73.1285C26.4489 71.8679 28.1725 70.5788 31.4629 69.2611Z
    "
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<!-- Анимация появления text-wrap (на макете сначала появляется солярик, потом этот блок) -->
<script>
// import { ref, onMounted } from "vue";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default {
//   setup() {
//     const visible = ref(true);

//     const useEffect = () => {
//       gsap.from(".more-competitions__text-wrap", {
//         opacity: 0,
//         y: 800,
//         duration: 0.4,

//         scrollTrigger: {
//           trigger: ".more-competitions__text-wrap",
//         },
//       });
//       gsap.from(".more-competitions__text-wrap-bottom", {
//         opacity: 0,
//         y: 800,
//         duration: 0.4,
//         scrollTrigger: {
//           trigger: ".more-competitions__text-wrap",
//         },
//       });
//     };

//     onMounted(useEffect);

//     return {
//       visible,
//     };
//   },
// };
import { ref } from "vue";

export default {
  setup() {
    const hoverPath = (isHovered) => {
      if (isHovered) {
        // Действия при наведении
        // Используйте ref для доступа к элементам DOM
        pathWrap.value.style.fill = "var(--white)";
        pathTg.value.style.fill = "blue";
      } else {
        // Действия при покидании
        pathWrap.value.style.fill = "#1f2a3e";
        pathTg.value.style.fill = "initial";
      }
    };

    const hoverTg = (isHovered) => {
      if (isHovered) {
        // Действия при наведении
        pathTg.value.style.fill = "blue";
        pathWrap.value.style.fill = "var(--white)";
      } else {
        // Действия при покидании
        pathTg.value.style.fill = "initial";
        pathWrap.value.style.fill = "#1f2a3e";
      }
    };

    const pathWrap = ref(null);
    const pathTg = ref(null);

    return {
      hoverPath,
      hoverTg,
      pathWrap,
      pathTg,
    };
  },
};
</script>

<style>
.more-competitions {
  background: radial-gradient(
    65% 65% at 70% 47%,
    rgb(221, 160, 107) 0%,
    rgb(48, 58, 76) 100%
  );
  overflow: hidden;
}

.more-competitions__body {
  position: relative;
  margin-bottom: 500px;

  max-width: 1440px;
  height: auto;

  margin: auto;
  box-sizing: border-box;
}

.more-competitions__title {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 48px;
  line-height: 133%;
  color: var(--white);

  margin-left: 90px;
  margin-bottom: 47px;
  padding-top: 80px;
  padding-bottom: 242px;
}

.more-competitions__span {
  display: block;
}

.more-competitions__span--center {
  text-align: center;
}

.more-competitions__text-wrap {
  position: absolute;
  top: 264px;
  right: 512px;

  transform: translate(0, 60px);
  padding: 16px 79px;
  background-color: var(--white);

  border-radius: 16px;

  transition: 0.4s;
}

.more-competitions__text {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
  color: #1f2a3e;
}

.more-competitions__text-wrap-bottom {
  position: absolute;
  top: 381px;
  right: 493px;
  transform: translate(0, 60px);

  transition: 0.4s;
}

.more-competitions__img {
  position: absolute;
  top: 57px;
  right: -93px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 823px;
  height: 620px;
}

.more-competitions__btn {
  border: 2px solid var(--white);
  padding: 14px 15px;
  background: #de4700;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--white);

  cursor: pointer;

  margin-left: 89px;
  margin-bottom: 58px;

  transition: 0.4s;
}

.more-competitions__btn:hover {
  background: var(--lightBege);
  color: black;
}

.more-competitions__img-coin--left {
  width: 167px;
  height: 166px;

  position: absolute;
  top: 351px;
  left: 104px;
  transform: rotate(-45deg);
}

.more-competitions__img-coin--right {
  position: absolute;
  bottom: 37px;
  left: 354px;
}

.more-competitions__img-tg {
  position: absolute;
  top: 407px;
  right: 17px;

  cursor: pointer;

  transition: 0.4s;
}

.more-competitions__link-tg {
  color: #1F2A3E;
  transition: 0.4s;
}



/* Примерный адаптив на планшеты */

@media (max-width: 1240px) {
  .more-competitions__body {
    max-width: 770px;
  }
  .more-competitions__title {
    font-size: 24px;

    margin-bottom: -69px;
    padding-top: 32px;
    padding-bottom: 183px;
    margin-bottom: 0;
    margin-left: 39px;

    line-height: 150%;
    max-width: 385px;
  }

  .more-competitions__span {
    display: inline;
  }

  .more-competitions__img {
    width: 290px;
    height: 219px;

    top: 143px;
    right: 42px;

  }

  .more-competitions__img-tg {
    width: 45px;
    top: 272px;
    right: 85px;


  }


  .more-competitions__text {
    font-size: 16px;
    max-width: 223px;
  }

  .more-competitions__text-wrap {
    font-size: 14px;
    right: 260px;
    top: 66px;
    padding: 16px 57px;
  }

  .more-competitions__text-wrap-bottom {
    top: 147px;
    right: 243px;
  }

  .more-competitions__img-coin--left {
    display: none;
  }

  .more-competitions__img-coin--right {
    width: 37px;
    bottom: 29px;
  }

  .more-competitions__btn {
    margin-bottom: 20px;
    padding: 14px 28px;
    margin-left: 39px;
  }
}

/* Примерный адаптив на мобилки */

@media (max-width: 650px) {
  .more-competitions__body {
    max-width: 280px;
  }
  .more-competitions__title {
    max-width: 249px;
    margin-bottom: 205px;
    padding-top: 40px;
    margin-left: 16px;
  }

  .more-competitions__text-wrap {
    top: 140px;
    right: 0;
    max-width: 250px;
  }

  .more-competitions__text-wrap-bottom {
    top: 244px;
    right: -18px;
  }

  .more-competitions__img {
    top: 352px;
    left: 0;
  }

  .more-competitions__btn {
    margin-left: 18px;
  }

  .more-competitions__img-tg {
    top: 480px;
    right: 33px;
  }

  .more-competitions__img-coin--right {
    display: none;
  }
}
</style>
