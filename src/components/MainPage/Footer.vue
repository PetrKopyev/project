<template>
  <footer class="footer">
    <div class="container">
      <img
          class="footer__logo"
          src="@/assets/image/main-page/footer/logo.png"
          alt="logo"
      >
      <div class="footer__columns">
        <div class="footer__column">
          <h4>Email</h4>
          <a href="#">Email рассылка</a>
          <a href="#">Транзакционные письма</a>
          <a href="#">Исправление списка</a>
          <a href="#">Конструктор писем</a>
          <a href="#">Формы подписки</a>
          <a href="#">Автоматические рассылки</a>
          <a href="#">Готовые шаблоны</a>
          <a href="#">А/В тестирование</a>
          <a href="#">Расширение для Chrome</a>
        </div>
        <div class="footer__column">
          <h4>Чат-боты</h4>
          <a href="#">Конструктор чат-ботов</a>
          <a href="#">Instagram чат-боты</a>
          <a href="#">Facebook чат-боты</a>
          <a href="#">Telegram чат-боты</a>
          <a href="#">WhatsApp чат-боты</a>
          <a href="#">WhatsApp Business API</a>
          <a href="#">Виджеты подписки</a>
          <a href="#">Чат-бот приложение</a>
          <a href="#">Примеры чат-ботов</a>
        </div>
        <div class="footer__column">
          <h4>Сервисы</h4>
          <a href="#">Создание онлайн-курсов</a>
          <a href="#">CRM</a>
          <a href="#">Конструктор лендингов</a>
          <a href="#">Мультиссылка для соцсетей</a>
          <a href="#">SMS рассылка</a>
          <a href="#">Viber рассылка</a>
          <a href="#">Web push уведомления</a>
          <a href="#">Поп-ап формы</a>
        </div>
        <div class="footer__column">
          <h4>Полезное</h4>
          <a href="#">Мероприятия</a>
          <a href="#">Академия SendPulse</a>
          <a href="#">База знаний</a>
          <a href="#">Глоссарий</a>
          <a href="#">Блог</a>
          <a href="#">Маркетинг под ключ</a>
          <a href="#">Биржа email продуктов</a>
          <a href="#">Интеграции</a>
          <a href="#">API</a>
          <a href="#">Каталог экспертов</a>
        </div>
        <div class="footer__column--last">
          <div class="footer__column mb">
            <h4>Партнерам</h4>
            <a href="#">Партнёрская программа</a>
            <a href="#">Реферальная программа</a>
            <a href="#">Сертификация</a>
          </div>
          <div class="footer__column">
            <h4>О компании</h4>
            <a href="#">Команда</a>
            <a href="#">Клиенты</a>
            <a href="#">Отзывы клиентов</a>
            <a href="#">Обновление сервиса</a>
            <a href="#">Карьера</a>
          </div>
        </div>
      </div>
      <div class="footer__links">
        <div class="footer__links-useful">
          <a href="#">Правила использования</a>
          <a href="#">Безопасность SendPulse</a>
          <a href="#">Политика Cookies</a>
          <a href="#">Политика конфиденциальности</a>
        </div>
        <div class="footer__links-social">
          <a href="#"><img src="../../assets/image/main-page/footer/facebook.png" alt="facebook"></a>
          <a href="#"><img src="../../assets/image/main-page/footer/twitter.png" alt="twitter"></a>
          <a href="#"><img src="../../assets/image/main-page/footer/linkedin.png" alt="linkedin"></a>
          <a href="#"><img src="../../assets/image/main-page/footer/youtube.png" alt="youtube"></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss">
.footer {
  background-color: $white;
  margin-top: 40px;
  border-radius: 40px 40px 0 0;
  @include breakpoint(600px) {
    border-radius: 10px 10px 0 0;
    margin-top: 25px;
  }

  &__logo {
    width: 187px;
    height: 32px;
    margin-top: 72px;
    @include breakpoint(1300px) {
      margin-top: 32px;
    }
    @include breakpoint(1100px) {
      width: 140px;
      height: auto;
    }
    @include breakpoint(800px) {
      width: 110px;
    }
    @include breakpoint(800px) {
      margin-top: 25px;
    }
  }

  &__columns {
    margin-top: 83px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @include breakpoint(1300px) {
      margin-top: 42px;
    }
    @include breakpoint(600px) {
      display: grid;
      grid-template-columns: repeat(3, calc(33.33% - 17px));
      gap: 15px;
      margin-top: 25px;
    }
    @include breakpoint(370px) {
      grid-template-columns: repeat(3, 33.33%);
      gap: 0;
    }
  }

  &__column {
    display: flex;
    flex-direction: column;
    color: $very-dark-blue;
    @include breakpoint(370px) {
      margin-bottom: 10px;
    }

    h4 {
      font-size: 14px;
      line-height: 32px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 16px;
      @include breakpoint(1000px) {
        font-size: 11px;
        line-height: 5px;
        margin-bottom: 11px;
      }
      @include breakpoint(370px) {
        margin-bottom: 5px;
      }
    }

    a {
      text-decoration: none;
      font-size: 16px;
      line-height: 38px;
      opacity: 0.5;
      color: $very-dark-blue;
      @include breakpoint(1300px) {
        font-size: 13px;
        line-height: 24px;
      }
      @include breakpoint(1000px) {
        font-size: 10px;
        line-height: 19px;
      }
      @include breakpoint(700px) {
        font-size: 7px;
        line-height: 11px;
      }
    }

    &--last {
      @include breakpoint(600px) {
        display: grid;
        grid-template-columns: repeat(2, 100%);
        gap: 24px;
        width: 100%;
      }
      @include breakpoint(370px) {
        gap: 0;
      }
    }
  }

  &__links {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 80px;
    @include breakpoint(1300px) {
      padding-bottom: 40px;
    }
    @include breakpoint(600px) {
      flex-direction: column;
      padding-bottom: 25px;
    }

  }

  &__links-useful {
    display: flex;
    flex-direction: row;
    @include breakpoint(430px) {
      flex-direction: column;
      margin-top: 10px;
    }
    @include breakpoint(370px) {
      margin-top: 0;
    }

    a {
      font-style: normal;
      text-decoration: none;
      font-size: 14px;
      line-height: 32px;
      color: $main-blue;
      margin-right: 47px;
      margin-top: 76px;
      @include breakpoint(1300px) {
        margin-top: 38px;
        margin-right: 30px;
        font-size: 12px;
        line-height: 22px;
      }
      @include breakpoint(1100px) {
        margin-right: 15px;
      }
      @include breakpoint(900px) {
        font-size: 10px;
        margin-right: 10px;
      }
      @include breakpoint(700px) {
        font-size: 8px;
        margin-right: 8px;
        margin-top: 20px;
      }
      @include breakpoint(430px) {
        margin-top: 0;
        line-height: 15px;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }

  &__links-social {
    display: flex;
    flex-direction: row;
    margin-top: 68px;
    @include breakpoint(1300px) {
      margin-top: 38px;
    }
    @include breakpoint(700px) {
      margin-top: 20px;
    }
    @include breakpoint(600px) {
      margin-top: 10px;
    }
    @include breakpoint(430px) {
      justify-content: flex-end;
    }

    a {
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }

      @include breakpoint(1100px) {
        width: 25px;
        height: 25px;
        margin-right: 10px;
      }
      @include breakpoint(700px) {
        width: 20px;
        margin-right: 7px;
      }
    }
  }
}
</style>
