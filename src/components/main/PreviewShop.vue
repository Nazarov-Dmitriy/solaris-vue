<template>
    <section class="previewshop" id="previewshop">
        <div class="previewshop__container">
            <div class="previewshop__description">
                <img 
                class="previewshop__img" 
                src="../../assets/image/previewshop/solaric.png" 
                alt="Солярик">
                <h2 class="previewshop__title h2">На что потратить Солярики?</h2>
                <p class="previewshop__text p2">Продукция магазина представляет собой награды и поощрения, помогающие учащимся ощутить удовлетворение от достижений и продемонстрировать прогресс в Лицее «Солярис». Надеемся, что эти вознаграждения будут вдохновлять и стимулировать их на дальнейшие успехи и развитие.</p>
            </div>
            <div class="previewshop__list">
                <div class="previewshop__card">
                    <img src="" alt="" class="previewshop-img">
                    <div class="previewshop__card-footer">
                        <p class="previewshop__card-subtitle p1">Сертификат АНТИДВОЙКА</p>
                        <p class="previewshop__card-cost h2"> 200<img src="../../assets/icon/valute.svg" alt="icon valute"
                                class="previewshop__card-icon"></p>
                    </div>
                </div>
                <div class="previewshop__card">
                    <img src="" alt="" class="previewshop-img">
                    <div class="previewshop__card-footer">
                        <p class="previewshop__card-subtitle p1">Стикеры
                            с Соляриком</p>
                        <p class="previewshop__card-cost h2"> 50<img src="../../assets/icon/valute.svg" alt="icon valute"
                                class="previewshop__card-icon"></p>
                    </div>
                </div>
                <div class="previewshop__card">
                    <img src="" alt="" class="previewshop-img">
                    <div class="previewshop__card-footer">
                        <p class="previewshop__card-subtitle p1">Значек
                            Соляриса</p>
                        <p class="previewshop__card-cost h2">70 <img src="../../assets/icon/valute.svg" alt="icon valute"
                                class="previewshop__card-icon"></p>
                    </div>
                </div>
                <div class="previewshop__card previewshop__card__hidden">
                    <img src="" alt="" class="previewshop-img">
                    <div class="previewshop__card-footer">
                        <p class="previewshop__card-subtitle p1">Сертификат АНТИДВОЙКА</p>
                        <p class="previewshop__card-cost h2"> 200<img src="../../assets/icon/valute.svg" alt="icon valute"
                                class="previewshop__card-icon"></p>
                    </div>
                </div>
                <div class="previewshop__card previewshop__card__hidden">
                    <img src="" alt="" class="previewshop-img">
                    <div class="previewshop__card-footer">
                        <p class="previewshop__card-subtitle p1">Стикеры
                            с Соляриком</p>
                        <p class="previewshop__card-cost h2"> 50<img src="../../assets/icon/valute.svg" alt="icon valute"
                                class="previewshop__card-icon"></p>
                    </div>
                </div>
                <div class="previewshop__card previewshop__card__hidden">
                    <img src="" alt="" class="previewshop-img">
                    <div class="previewshop__card-footer">
                        <p class="previewshop__card-subtitle p1">Значек
                            Соляриса</p>
                        <p class="previewshop__card-cost h2">70 <img src="../../assets/icon/valute.svg" alt="icon valute"
                                class="previewshop__card-icon"></p>
                    </div>
                </div>
            </div>
            <button class="previewshop-btn btn">Показать еще товары</button>
        </div>
    </section>
</template>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const previewshop = document.querySelector(".previewshop");
  const previewshopImg = document.querySelector(".previewshop__img");
  const previewshopText = document.querySelector(".previewshop__text");

  function setVisible() {
    const elementPosition = previewshop.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (elementPosition.top < windowHeight * 0.3) {
        previewshopImg.classList.add("previewshop__img__animated");
        previewshopText.classList.add("previewshop__text__animate");

      window.removeEventListener("scroll", setVisible);
    }
  }
  window.addEventListener("scroll", setVisible);

  const button = document.querySelector('.previewshop-btn');
  const previewshopCard = document.querySelectorAll('.previewshop__card__hidden');

    button?.addEventListener('click', function () {
        previewshopCard.forEach(function(card) {
            card.classList.remove("previewshop__card__hidden");
        })
  });
});
</script>

<style>
.previewshop {
    width: 100%;
    background: var(--dark);
    scroll-margin: 88px;
}

.previewshop__container {
    max-width: 1440px;
    margin: auto;
    padding: 65px 60px 80px 60px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    @media (max-width: 991px){
        padding: 40px;
      }
    
      @media (max-width: 576px){
        padding: 40px 16px;
      }
}

.previewshop__description {
    display: flex;
    flex-direction: column;
    padding-left: 34%;
    margin-bottom: 148px;
    position: relative;
    z-index: 0;

    @media (max-width: 991px){
        padding-left: 300px;
        margin-bottom: 54px;
    }

    @media (max-width: 675px){
        padding-left: 0px;
        padding-top: 68px;
        margin-bottom: 24px;
    }
}

.previewshop__img{
    position: absolute;
    top: -65px;
    left: -38%;
    z-index: -1;
    width: 90%;
    opacity: 0;
    transform: translateY(-100%);
    
    @media (max-width: 991px){
        top: -40px;
    }

    @media (max-width: 675px){
        left: -34%;
        min-width: 332px;
    }

    @media (max-width: 416px){
        left: -130px;
    }
}

.previewshop__img__animated{
    opacity: 1;
    transition: ease-out 1s;
    transform: translateY(0%);
}

.previewshop__title {
    color: var(--white);
    max-width: 500px;
    margin-bottom: 48px;

    @media (max-width: 991px){
        font-size: 24px;
        line-height: 36px;
        margin-bottom: 16px;
    }
}

.previewshop__text {
    color: var(--white);
    opacity: 0 ;
}
.previewshop__text__animate{
    opacity: 1;
    transition: ease-out 1s;
}

.previewshop__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 30px;

    @media (max-width: 675px){
        grid-template-columns: 1fr;
    }
}

.previewshop__card {
    padding: 24px;
    border: 2px solid var(--roseBege);
    display: block;
    @media (max-width: 991px){
        padding: 16px;
    }
}

.previewshop__card__hidden{
    display: none;
}

.previewshop-img {
    width: 100%;
    height: 380px;
    border: 2px solid var(--roseBege);
    position: relative;
    box-sizing: border-box;
    margin-bottom: 16px;

    @media (max-width: 991px){
        height: 198px;
    }

    @media (max-width: 675px){
        height: 256px;
    }
}

.previewshop-img::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--lightBege);
}

.previewshop__card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1182px){
        flex-direction: column;
        align-items: flex-start;
    }
}

.previewshop__card-subtitle {
    color: var(--white);

    @media (max-width: 991px){
        margin-bottom: 10px;
        height: 60px;
    }

    @media (max-width: 675px){
        height: auto;
    }
}

.previewshop__card-cost {
    display: flex;
    align-items: center;
    color: var(--roseBege);

    @media (max-width: 991px){
        font-size: 24px;
        line-height: 36px;
    }
}

.previewshop__card-icon {
    margin-left: 8px;

    @media (max-width: 991px){
        width: 25px;
    }
}

.previewshop-btn {
    padding: 16px;
    border: 2px solid var(--roseBege);
    width: 210px;
    margin: auto;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 991px){
        width: 336px;
    }

    @media (max-width: 576px){
        width: 100%;
        text-align: center;
    }
}

.previewshop-btn:hover {
    border: 2px solid var(--roseBege);
    color: var(--white);
    background: var(--roseBege);
}

.previewshop-btn:active {
    border: 2px solid var(--gray);
    color: var(--dark);
    background: var(--roseBege);
}
</style>