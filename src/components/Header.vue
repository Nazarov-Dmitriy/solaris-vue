<template>
  <div class="header">
    <div class="header-logo">
      <img src="../assets/icon/logo.svg" alt="">
    </div>
    <nav>
      <ul class="header__list">
        <li class="botton"><a href='#' class="header__link">О проекте</a></li>
        <li class="botton"><a href='#' class="header__link">Cолярики</a></li>
        <li class="botton"><a href='#' class="header__link">Магазин</a></li>
        <li class="botton"><a href='#' class="header__link">Направления</a></li>
        <li class="botton"><a href='#' class="header__link">Конкурсы</a></li>
        <li class="botton"><a href='#' class="header__link">Чат-бот</a></li>
        <li class="botton"><a href='#' class="header__link">Вопросы</a></li>
        <li class="botton"><a href='#' class="header__link">Отзывы</a></li>
        <li class="botton"><a href='#' class="header__link">Написать нам</a></li>
      </ul>
    </nav>
      <button class=" btn">ВХОД</button>
  </div>
</template>

<style>
.header {
  padding: 16px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  box-sizing: border-box
}

.header-logo {
  width: 159px;
  height: 47px;
}


.header__list {
  display: flex;
  gap: 36px;
  list-style-type: none;

}

.header__link {
  text-decoration: none;
  color: var(--dark)
}

.header__link:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.header__link:active {
  color: var(--orange);
  text-decoration: underline  var(--orange);
  text-underline-offset: 4px;
}
</style>
