<template>
  <div class="improve">
    <img src="../../assets/image/main-page/improve/bg.png" alt="bg">
    <h2 class="improve__title title">Совершенствуйте процессы отдела продаж и маркетинга</h2>
    <p class="improve__text">Развивайте бизнес и увеличивайте продажи, используя email маркетинг, чат-боты и бесплатную СRM</p>
    <button class="btn-white improve__btn">Начать бесплатно</button>
  </div>
</template>

<script>
export default {
  name: "Improve"
}
</script>

<style lang="scss">
.improve {
  background-color: $main-blue;
  background-repeat: no-repeat;
  background-size: cover;
  padding-left: 98px;
  margin-top: 112px;
  border-radius: 40px;
  position: relative;
  @include breakpoint(1300px) {
    margin-top: 66px;
    padding-left: 50px;
  }
  @include breakpoint(800px) {
    margin-top: 45px;
  }
  @include breakpoint(600px) {
    border-radius: 10px;
    padding-left: 15px;
    margin-top: 25px;
  }

  img {
    position: absolute;
    width: 750.66px;
    height: 440px;
    right: 24px;
    top: 50%;
    transform: translate(0%, -50%);

    @include breakpoint(1800px) {
      display: none;
    }
  }


  &__title {
    max-width: 800px;
    color: $white;
    padding-top: 76px;
    @include breakpoint(1300px) {
      padding-top: 38px;
      max-width: 500px;
    }
    @include breakpoint(600px) {
      padding-top: 25px;
    }
    @include breakpoint(500px) {
      max-width: 350px;
    }
  }

  &__text {
    max-width: 720px;
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
    color: $white;
    @include breakpoint(1300px) {
      font-size: 18px;
      line-height: 20px;
      max-width: 460px;
    }
    @include breakpoint(1100px) {
      font-size: 14px;
      line-height: 20px;
    }
    @include breakpoint(600px) {
      font-size: 10px;
      line-height: 15px;
      max-width: 360px;
    }
  }

  &__btn {
    margin-top: 40px;
    margin-bottom: 76px;
    @include breakpoint(1300px) {
      margin-bottom: 38px;
    }
    @include breakpoint(600px) {
      margin-top: 25px;
      margin-bottom: 25px;
    }
  }

}
</style>
