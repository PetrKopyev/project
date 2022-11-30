<template>
  <div class="sidebar">
    <div class="sidebar__links">
      <router-link
          to="/profile"
          active-class="active"
          class="sidebar__link"
      >
        <span>Профиль</span>
      </router-link>
      <router-link
          to="/text-1"
          active-class="active"
          class="sidebar__link"
      >
        <span>Текст 1</span>
      </router-link>
      <router-link
          to="/text-2"
          active-class="active"
          class="sidebar__link"
      >
        <span>Текст 2</span>
      </router-link>
    </div>
    <div class="sidebar__logout">
      <img src="@/assets/image/personal-area/sidebar/logout.png" alt="logout">
      <span>Выйти</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
}
</script>

<style lang="scss">
.sidebar {
  min-width: 377px;
  margin-right: 96px;
  @include breakpoint(1500px) {
    min-width: 315px;
    margin-right: 48px;
  }
  @include breakpoint(1300px) {
    margin-right: 25px;
  }
  @include breakpoint(1100px) {
    min-width: 250px;
    margin-right: 18px;
  }
  @include breakpoint(700px) {
    min-width: 220px;
  }
  @include breakpoint(650px) {
    min-width: none;
    width: 100%;
  }

  &__links {
    background: $very-pale-blue;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    padding: 36px 24px;
    @include breakpoint(1300px) {
      padding: 18px 12px;
    }
    @include breakpoint(650px) {
      margin-bottom: 30px;
    }
  }

  &__link {
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 32px;
    margin-bottom: 40px;
    color: $very-dark-blue;
    cursor: pointer;
    background-image: url("../../assets/image/personal-area/sidebar/user-blue.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-origin: content-box;

    &:last-child {
      margin-bottom: 0;
    }

    @include breakpoint(1100px) {
      margin-bottom: 25px;
      font-size: 16px;
      line-height: 28px;
    }
    @include breakpoint(800px) {
      margin-bottom: 20px;
      font-size: 14px;
      line-height: 23px;
    }
    @include breakpoint(500px) {
      font-size: 11px;
      line-height: 17px;
    }

    span {
      margin-left: 58px;
      @include breakpoint(1100px) {
        margin-left: 35px;
      }
    }
  }

  &__logout {
    display: flex;
    flex-direction: row;
    margin-top: 32px;
    align-items: center;
    margin-left: 28px;
    cursor: pointer;
    font-size: 18px;
    line-height: 32px;
    @include breakpoint(1100px) {
      font-size: 16px;
      line-height: 28px;
    }
    @include breakpoint(800px) {
      font-size: 14px;
      line-height: 23px;
    }
    @include breakpoint(650px) {
      display: none;
    }

    img {
      width: 19px;
      height: auto;
      margin-right: 13px;
      @include breakpoint(800px) {
        width: 14px;
        margin-right: 8px;
      }
    }
  }
}
</style>
