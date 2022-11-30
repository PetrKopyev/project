<template>
  <header class="header">
    <div class="container">
      <nav class="header__nav">
        <img
            class="header__nav-logo"
            src="@/assets/image/navbar/logo.png"
            alt="logo"
        >
        <div class="header__nav-links">
          <div class="header__nav-links-routes">
            <router-link to="/">Главная</router-link>
            <router-link to="/profile">Профиль</router-link>
          </div>
          <div class="header__nav-links-auth">
            <router-link class="header__nav-links-auth--enter" to="/">
              <img src="@/assets/image/navbar/login-light.png" alt="login">
              <span>Войти</span>
            </router-link>
            <router-link class="btn-blue" to="/">Регистрация</router-link>
          </div>
        </div>

      </nav>
      <h2 class="header__title">Единая платформа для&nbsp;маркетинга и&nbsp;продаж</h2>
      <p class="header__text">Выстраивайте диалоги с&nbsp;клиентами через email, SMS и&nbsp;чат-боты в&nbsp;мессенджерах</p>
      <div class="header__buttons">
        <button class="btn-white">Начать бесплатно</button>
        <router-link class="btn-blue" to="/">Войти</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss">
.header {
  background-image: url("../../assets/image/main-page/header/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 40px;
  color: $light-grayish-blue;
  padding-bottom: 133px;
  padding-top: 32px;
  @include breakpoint(1920px) {
    background-size: contain;
  }
  @include breakpoint(1800px) {
    background-image: none;
    background-color: $main-blue;
  }
  @include breakpoint(1600px) {
    padding-bottom: 60px;
  }
  @include breakpoint(800px) {
    padding-bottom: 30px;
    padding-top: 20px;
  }
  @include breakpoint(600px) {
    padding: 15px 0;
    border-radius: 0 0 10px 10px;
  }

  &__nav {
    display: flex;
    flex-direction: row;
    align-items: center;

    a {
      text-decoration: none;
      color: $light-grayish-blue;
      font-size: 18px;
      line-height: 32px;
      @include breakpoint(1300px) {
        font-size: 12px;
        line-height: 22px;
      }
      @include breakpoint(500px) {
        font-size: 8px;
      }
    }
  }

  &__nav-logo {
    width: 187px;
    height: 32px;
    margin-right: 66px;
    @include breakpoint(1100px) {
      width: 140px;
      height: auto;
    }
    @include breakpoint(800px) {
      margin-right: 20px;
      width: 110px;
    }
    @include breakpoint(500px) {
      margin-right: 14px;
      width: 80px;
    }
    @include breakpoint(370px) {
      margin-right: 10px;
      width: 70px;
    }
  }

  &__nav-links {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__nav-links-routes {
    a {
      margin-right: 48px;
      @include breakpoint(800px) {
        margin-right: 15px;
      }
      @include breakpoint(500px) {
        margin-right: 10px;
      }
    }
  }

  &__nav-links-auth {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      width: 16.98px;
      height: 18.5px;
      @include breakpoint(800px) {
        width: 13px;
        height: 11px;
      }
    }

    &--enter {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-right: 29px;
      @include breakpoint(800px) {
        margin-right: 15px;
      }
      @include breakpoint(370px) {
        margin-right: 5px;
      }

      img {
        margin-right: 13px;
        @include breakpoint(800px) {
          margin-right: 4px;
        }
      }
    }

  }

  &__title {
    max-width: 670px;
    margin-top: 123px;
    font-size: 72px;
    line-height: 80px;
    color: $white;
    @include breakpoint(1600px) {
      margin-top: 60px;
    }
    @include breakpoint(1300px) {
      font-size: 36px;
      line-height: 40px;
      max-width: 450px;
    }
    @include breakpoint(700px) {
      font-size: 30px;
      line-height: 34px;
      max-width: 400px;
      margin-top: 30px;
    }
    @include breakpoint(500px) {
      font-size: 20px;
      line-height: 22px;
      max-width: 300px;
      margin-top: 14px;
    }
  }

  &__text {
    max-width: 395px;
    margin-top: 32px;
    font-size: 24px;
    line-height: 32px;
    @include breakpoint(1300px) {
      font-size: 18px;
      line-height: 20px;
      max-width: 350px;
    }
    @include breakpoint(700px) {
      margin-top: 21px;
      font-size: 12px;
      line-height: 16px;
      max-width: 300px;
    }
    @include breakpoint(500px) {
      margin-top: 15px;
      font-size: 10px;
      line-height: 13px;
      max-width: 200px;
    }
  }

  &__buttons {
    display: flex;
    flex-direction: row;
    margin-top: 40px;
    @include breakpoint(700px) {
      margin-top: 20px;
    }

    button {
      margin-right: 18px;
      @include breakpoint(700px) {
        margin-right: 10px;
      }
    }
  }
}

</style>
