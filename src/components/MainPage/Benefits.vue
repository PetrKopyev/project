<template>
  <div class="benefits">
    <div class="container benefits__transform">
      <h3 class="title">Преимущества платформы</h3>
      <div class="benefits__blocks">
        <div class="benefits__blocks-item">
          <span>Принимайте решения на основе данных</span>
        </div>
        <div class="benefits__blocks-item">
          <span>Принимайте решения на основе данных</span>
        </div>
        <div class="benefits__blocks-item">
          <span>Принимайте решения на основе данных</span>
        </div>
        <div class="benefits__blocks-item">
          <span>Принимайте решения на основе данных</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Benefits"
}
</script>

<style lang="scss">
.benefits {
  margin-top: 134px;
  background-color: $white;
  border-radius: 40px;
  padding-top: 156px;
  padding-bottom: 165px;
  transform: rotate(-2deg);
  @include breakpoint(1300px) {
    margin-top: 77px;
    padding-top: 86px;
    padding-bottom: 82px;
  }
  @include breakpoint(800px) {
    margin-top: 45px;
    padding-top: 35px;
    padding-bottom: 45px;
  }
  @include breakpoint(600px) {
    transform: none;
    border-radius: 10px;
    margin-top: 25px;
    padding-top: 25px;
    padding-bottom: 25px;
  }

  &__transform {
    transform: rotate(2deg);
    @include breakpoint(600px) {
      transform: none;
    }
  }

  &__blocks {
    width: 100%;
    margin-top: 80px;
    display: grid;
    grid-template-columns: repeat(4, calc(25% - 18px));
    gap: 24px;
    @include breakpoint(1300px) {
      margin-top: 40px;
    }
    @include breakpoint(600px) {
      gap: 15px;
      grid-template-columns: repeat(4, calc(25% - 12px));
      margin-top: 25px;
    }
    @include breakpoint(400px) {
      grid-template-columns: repeat(1, 100%);
    }
  }

  &__blocks-item {
    background-color: $main-blue;
    border-radius: 0 32px 0 32px;
    height: 336px;
    display: flex;
    align-items: flex-end;
    padding: 0 32px 40px;
    @include breakpoint(1100px) {
      height: 200px;
    }
    @include breakpoint(800px) {
      padding: 0 14px 20px;
      height: 150px;
    }
    @include breakpoint(600px) {
      border-radius: 0 10px 0 10px;
      padding: 0 10px 15px;
      height: 100px;
    }

    &:nth-child(2n) {
      background-color: $light-orange;
    }

    span {
      font-size: 24px;
      line-height: 32px;
      color: $white;
      @include breakpoint(1100px) {
        font-size: 14px;
        line-height: 18px;
      }
      @include breakpoint(700px) {
        font-size: 11px;
        line-height: 14px;
      }
      @include breakpoint(500px) {
        font-size: 10px;
        line-height: 12px;
      }
    }
  }
}

</style>
