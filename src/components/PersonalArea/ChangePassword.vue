<template>
  <div class="change-pass">
    <h4>Сменить пароль</h4>
    <div class="change-pass__blocks">
      <div class="change-pass__block">
        <div class="change-pass__block--top">
          <img src="@/assets/image/personal-area/profile/lock.png" alt="lock">
          <span>Старый пароль</span>
        </div>
        <div class="change-pass__block--bottom">
          <input
              v-model="password.old"
              type="password"
              placeholder="Введите пароль..."
              name="old"
              v-show="!showPass.old"
          >
          <input
              v-model="password.old"
              type="text"
              placeholder="Введите пароль..."
              name="old"
              v-show="showPass.old"
          >
          <button :class="{show: showPass.old}" @click="showPass.old = !showPass.old">
            <app-svg icon-name="write">
              <icon-eye/>
            </app-svg>
          </button>

        </div>
      </div>
      <div class="change-pass__block">
        <div class="change-pass__block--top">
          <img src="@/assets/image/personal-area/profile/lock.png" alt="lock">
          <span>Новый пароль</span>
        </div>
        <div class="change-pass__block--bottom">
          <input
              v-model="password.new"
              type="password"
              placeholder="Введите пароль..."
              name="old"
              v-show="!showPass.new"
          >
          <input
              v-model="password.new"
              type="text"
              placeholder="Введите пароль..."
              name="old"
              v-show="showPass.new"
          >
          <button :class="{show: showPass.new}" @click="showPass.new = !showPass.new">
            <app-svg icon-name="write">
              <icon-eye/>
            </app-svg>
          </button>
        </div>
      </div>
      <div class="change-pass__block">
        <div class="change-pass__block--top">
          <img src="@/assets/image/personal-area/profile/lock.png" alt="lock">
          <span>Повторите новый пароль</span>
        </div>
        <div class="change-pass__block--bottom">
          <input
              v-model="password.confirm"
              type="password"
              placeholder="Введите пароль..."
              name="old"
              v-show="!showPass.confirm"
          >
          <input
              v-model="password.confirm"
              type="text"
              placeholder="Введите пароль..."
              name="old"
              v-show="showPass.confirm"
          >
          <button :class="{show: showPass.confirm}" @click="showPass.confirm = !showPass.confirm">
            <app-svg icon-name="write">
              <icon-eye/>
            </app-svg>
          </button>
        </div>
      </div>
    </div>
    <div class="change-pass__button">
      <button @click="changePass(password.new)">Подтвердить</button>
    </div>
  </div>
</template>

<script>
import IconEye from "@/components/icons/iconEye";
import AppSvg from "@/components/icons/AppSvg";
import {mapActions} from "vuex";
import {sameAs, required} from 'vuelidate/lib/validators'

export default {
  name: "ChangePassword",
  components: {AppSvg, IconEye},
  data() {
    return {
      password: {
        old: '',
        new: '',
        confirm: ''
      },
      showPass: {
        old: false,
        new: false,
        confirm: false
      },
    }
  },
  methods: {
    ...mapActions(['setPassword']),
    changePass(pass) {
      if (this.password.old !== this.$store.state.password) {
        this.$toast.error("Старый пароль введен неверно", {
          position: "top-right",
          timeout: 1500,
          closeButton: "button",
        });
      } else if (!this.$v.password.new.required) {
        this.$toast.error("Введите новый пароль", {
          position: "top-right",
          timeout: 1500,
          closeButton: "button",
        });
      } else if (!this.$v.password.confirm.sameAsPassword) {
        this.$toast.error("Повторите новый пароль", {
          position: "top-right",
          timeout: 1500,
          closeButton: "button",
        });
      } else {
        this.setPassword(pass)
        this.password.old = ''
        this.password.new = ''
        this.password.confirm = ''
        this.$toast.success("Успешно", {
          position: "top-right",
          timeout: 1500,
          closeButton: "button",
        });
      }

    }
  },
  validations: {
    password: {
      new: {required},
      confirm: {sameAsPassword: sameAs('new')}
    },
  },
}
</script>

<style lang="scss">
.change-pass {
  display: flex;
  flex-direction: column;
  width: 315px;
  @include breakpoint(650px) {
    margin: 0 auto;
  }
  @include breakpoint(350px) {
    width: 100%;
  }

  h4 {
    font-size: 24px;
    line-height: 32px;
    color: $dark-violet;
    margin-bottom: 29px;
    @include breakpoint(1100px) {
      font-size: 22px;
      line-height: 28px;
    }
    @include breakpoint(800px) {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 18px;
    }
    @include breakpoint(500px) {
      font-size: 15px;
      line-height: 18px;
    }
  }

  &__blocks {
    display: flex;
    flex-direction: column;
  }

  &__block {
    display: flex;
    flex-direction: column;
    padding-bottom: 13px;
    border-bottom: 1px solid rgb(42, 25, 70, 0.2);
    margin-bottom: 32px;
    @include breakpoint(800px) {
      margin-bottom: 25px;
    }
    @include breakpoint(500px) {
      padding-bottom: 5px;
      margin-bottom: 15px;
    }

    &--top {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 10px;
      @include breakpoint(500px) {
        margin-bottom: 5px;
      }

      img {
        width: 24px;
        height: auto;
        margin-right: 6px;
      }

      span {
        font-size: 15px;
        line-height: 18px;
        color: $very-dark-blue;
        opacity: 0.3;
        @include breakpoint(1100px) {
          font-size: 13px;
          line-height: 15px;
        }
        @include breakpoint(800px) {
          font-size: 11px;
          line-height: 13px;
        }
        @include breakpoint(500px) {
          font-size: 9px;
        }
      }
    }

    &--bottom {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      input {
        border: none;
        font-size: 18px;
        line-height: 21px;
        opacity: 0.5;
        outline: none;
        width: 90%;
        @include breakpoint(1100px) {
          font-size: 16px;
          line-height: 18px;
        }
        @include breakpoint(800px) {
          font-size: 14px;
          line-height: 16px;
        }
        @include breakpoint(500px) {
          font-size: 12px;
        }
      }

      input::placeholder {
        color: $very-dark-blue;
      }

      img {
        width: 24px;
        height: auto;
        cursor: pointer;
      }

      button {
        background: inherit;
        border: none;
        padding: 0;
        cursor: pointer;

        svg {
          width: 24px;
          height: 24px;
        }
      }

      button:hover {
        svg path {
          color: yellow;
          stroke: $main-blue;
        }
      }
    }
  }

  &__button {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 30px;

    button {
      font-size: 16px;
      line-height: 32px;
      color: $main-blue;
      padding: 4px 12px;
      background: #DAECFB;
      border-radius: 12px;
      border: none;
      max-width: 135px;
      cursor: pointer;
      @include breakpoint(1100px) {
        font-size: 14px;
        line-height: 28px;
      }
      @include breakpoint(650px) {
        width: 100%;
        max-width: none;
      }
    }

  }
}

.show {
  svg path {
    color: yellow;
    stroke: $main-blue;
  }
}
</style>
