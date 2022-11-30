<template>
  <div class="personal-area">
    <div class="container">
      <nav class="personal-area__nav">
        <img
            class="personal-area__nav-logo"
            src="@/assets/image/main-page/footer/logo.png"
            alt="logo"
        >
        <div class="personal-area__nav-links">
          <div class="personal-area__nav-links-routes">
            <router-link to="/">Главная</router-link>
            <router-link to="/personal">Профиль</router-link>
          </div>
          <div class="personal-area__nav-links-auth">
            <router-link class="personal-area__nav-links-auth--enter" to="/">
              <img src="@/assets/image/navbar/login-dark.png" alt="login">
            </router-link>
            <img
                class="personal-area__nav-links-auth-bell"
                src="@/assets/image/navbar/bell.png"
                alt="bell"
            >
            <div class="personal-area__nav-links-auth-user">
              <p>Иван Иванович</p>
              <img
                  v-if="image"
                  class="profile__photo-img"
                  :src="imgURL"
                  alt="photo"
              >
              <img
                  v-else
                  class="profile__photo-img"
                  src="@/assets/image/personal-area/photo.png"
                  alt="photo"
              >
              <span></span>
            </div>
          </div>
        </div>
      </nav>
      <h2>Личный кабинет</h2>
      <div class="personal-area__blocks">
        <Sidebar/>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/PersonalArea/Sidebar";
import {mapState} from "vuex";

export default {
  name: "PersonalArea",
  components: {Sidebar},
  computed: {
    ...mapState(['image']),
    imgURL() {
      return 'https://tinn.io/' + localStorage.getItem('image')
    }
  },
}
</script>

<style lang="scss">
.personal-area {
  color: $very-dark-blue;

  &__nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 76px;
    @include breakpoint(1000px) {
      margin-top: 38px;
    }

    a {
      text-decoration: none;
      color: $very-dark-blue;
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
    @include breakpoint(900px) {
      margin-right: 20px;
      width: 110px;
    }
    @include breakpoint(550px) {
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
      @include breakpoint(900px) {
        margin-right: 20px;
      }
      @include breakpoint(550px) {
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
        width: 14px;
        height: auto;
      }
    }

    &--enter {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-right: 46px;
      @include breakpoint(900px) {
        margin-right: 15px;
      }
      @include breakpoint(550px) {
        margin-right: 10px;
      }

      img {
        margin-right: 13px;
        @include breakpoint(900px) {
          margin-right: 0;
        }
      }
    }

  }

  &__nav-links-auth-bell {
    margin-right: 51px;
    cursor: pointer;
    @include breakpoint(900px) {
      margin-right: 15px;
    }
    @include breakpoint(500px) {
      margin-right: 10px;
    }
  }

  &__nav-links-auth-user {
    display: flex;
    align-items: center;

    p {
      font-size: 18px;
      line-height: 32px;
      margin-right: 20px;
      cursor: pointer;
      @include breakpoint(1300px) {
        font-size: 12px;
        line-height: 22px;
      }
      @include breakpoint(500px) {
        font-size: 8px;
        margin-right: 10px;
      }
      @include breakpoint(400px) {
        display: none;
      }
    }

    img {
      width: 35px;
      height: auto;
      border-radius: 50%;
      margin-right: 20px;
      cursor: pointer;
      @include breakpoint(500px) {
        margin-right: 10px;
      }
    }

    span {
      border-top: 2px solid $very-dark-violet;
      border-right: 2px solid $very-dark-violet;
      transform: rotate(135deg);
      width: 11px;
      height: 11px;
      cursor: pointer;
    }
  }

  h2 {
    margin-top: 79px;
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 32px;
    @include breakpoint(1100px) {
      font-size: 30px;
      line-height: 36px;
    }
    @include breakpoint(800px) {
      font-size: 26px;
      line-height: 26px;
    }
    @include breakpoint(500px) {
      font-size: 18px;
      line-height: 10px;
      margin-top: 20px;
      margin-bottom: 16px;
    }
  }

  &__blocks {
    display: flex;
    flex-direction: row;
    @include breakpoint(650px) {
      flex-direction: column;
    }
  }
}
</style>
