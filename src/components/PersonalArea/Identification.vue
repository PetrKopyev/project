<template>
  <div class="identification">
    <h4>Добро пожаловать, Иван Иванович!</h4>
    <div class="identification__blocks">
      <div class="identification__block">
        <div class="identification__block--first">
          <img src="@/assets/image/personal-area/sidebar/user-blue.png" alt="user">
          <span>Имя</span>
        </div>
        <div class="identification__block--second">
          <span
              v-show="!showInput.name"
              @click="showInput.name = !showInput.name"
          >
            {{ this.$store.state.name }}
          </span>
          <input
              v-show="showInput.name"
              v-model="name"
              type="text"
          >
          <img
              v-show="!showInput.name"
              @click="showInput.name = !showInput.name"
              src="@/assets/image/personal-area/profile/edit.png"
              alt="edit"
          >
          <img
              v-show="showInput.name"
              @click="renameName"
              src="@/assets/image/personal-area/profile/edit.png"
              alt="edit"
          >
        </div>
      </div>
      <div class="identification__block">
        <div class="identification__block--first">
          <img src="@/assets/image/personal-area/profile/message.png" alt="email">
          <span>Email</span>
        </div>
        <div class="identification__block--second">
          <span
              v-show="!showInput.email"
              @click="showInput.email = !showInput.email"
          >
            {{ this.$store.state.email }}
          </span>
          <input
              v-show="showInput.email"
              v-model="email"
              type="text"
          >
          <img
              v-show="!showInput.email"
              @click="showInput.email = !showInput.email"
              src="@/assets/image/personal-area/profile/edit.png"
              alt="edit">
          <img
              v-show="showInput.email"
              @click="renameEmail"
              src="@/assets/image/personal-area/profile/edit.png"
              alt="edit"
          >
        </div>
      </div>
      <div class="identification__block">
        <div class="identification__block--first">
          <img src="@/assets/image/personal-area/profile/call.png" alt="phone">
          <span>Телефон</span>
        </div>
        <div class="identification__block--second">
          <span
              v-show="!showInput.phone"
              @click="showInput.phone = !showInput.phone"
          >
            {{ this.$store.state.phone }}
          </span>
          <input
              v-show="showInput.phone"
              v-model="phone"
              type="text"
              v-mask="'+# ### ### ## ##'"
          >
          <img
              v-show="!showInput.phone"
              @click="showInput.phone = !showInput.phone"
              src="@/assets/image/personal-area/profile/edit.png"
              alt="edit"
          >
          <img
              v-show="showInput.phone"
              @click="renamePhone"
              src="@/assets/image/personal-area/profile/edit.png"
              alt="edit"
          >
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import {mapActions} from "vuex";
import {helpers, email, minLength} from "vuelidate/lib/validators";

const alpha = helpers.regex('alpha', /^[а-яёА-ЯЁ ]*$/)

export default {
  name: "Identification",
  data() {
    return {
      name: this.$store.state.name,
      email: this.$store.state.email,
      phone: this.$store.state.phone,
      showInput: {
        name: false,
        email: false,
        phone: false
      }
    }
  },
  methods: {
    ...mapActions(['changeName', 'changeEmail', 'changePhone']),
    renameName() {
      this.showInput.name = !this.showInput.name
      if (!this.$v.name.alpha) {
        this.$toast.error("Только русские буквы в имени", {
          position: "top-right",
          timeout: 1500,

          closeButton: "button",
        });
        this.name = this.$store.state.name
      } else {
        this.$toast.success("Сохранено", {
          position: "top-right",
          timeout: 1500,
          closeButton: "button",
        });
        this.changeName(this.name)
      }
    },

    renameEmail() {
      this.showInput.email = !this.showInput.email
      if (!this.$v.email.email || !this.email) {
        this.$toast.error("Введите корректный email", {
          position: "top-right",
          timeout: 1500,
          closeButton: "button",
        });
        this.email = this.$store.state.email
      } else {
        this.$toast.success("Сохранено", {
          position: "top-right",
          timeout: 1500,
          closeButton: "button",
        });
        this.changeEmail(this.email)
      }
    },

    renamePhone() {
      this.showInput.phone = !this.showInput.phone
      if (!this.$v.phone.minLength) {
        this.$toast.error("Введите корректный номер телефона из 11 цифр", {
          position: "top-right",
          timeout: 1500,
          closeButton: "button",
        });
        this.phone = this.$store.state.phone
      } else {
        this.$toast.success("Сохранено", {
          position: "top-right",
          timeout: 1500,
          closeButton: "button",
        });
        this.changePhone(this.phone)
      }
    },
  },
  validations: {
    name: {alpha},
    email: {email},
    phone: {minLength: minLength(16)}
  },
}
</script>

<style lang="scss">

.identification {
  display: flex;
  flex-direction: column;
  @include breakpoint(650px) {
    margin: 0 auto;
  }

  h4 {
    font-size: 26px;
    line-height: 40px;
    margin-bottom: 24px;
    @include breakpoint(1100px) {
      font-size: 24px;
      line-height: 36px;
    }
    @include breakpoint(800px) {
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 18px;
    }
    @include breakpoint(500px) {
      font-size: 16px;
      line-height: 22px;
    }
  }

  &__blocks {
    display: flex;
    flex-direction: row;
    margin-bottom: 53px;
    @include breakpoint(1200px) {
      flex-direction: column;
    }
    @include breakpoint(800px) {
      margin-bottom: 30px;
    }
  }

  &__block {
    display: flex;
    flex-direction: column;
    margin-right: 54px;
    @include breakpoint(1400px) {
      margin-right: 25px;
    }
    @include breakpoint(1200px) {
      margin-right: 0;
      margin-bottom: 10px;
      flex-direction: row;
    }

    &:last-child {
      margin-right: 0;
    }

    &--first {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 20px;
      @include breakpoint(1200px) {
        margin-bottom: 0;
        margin-right: 20px;
      }

      img {
        width: 24px;
        height: auto;
        margin-right: 6px;
      }

      span {
        font-style: normal;
        font-size: 15px;
        line-height: 18px;
        color: $main-blue;
        @include breakpoint(1100px) {
          font-size: 13px;
          line-height: 14px;
        }
        @include breakpoint(800px) {
          font-size: 12px;
          line-height: 12px;
        }
        @include breakpoint(500px) {
          font-size: 10px;
        }
      }
    }

    &--second {
      display: flex;
      flex-direction: row;
      align-items: center;

      span {
        font-size: 18px;
        line-height: 21px;
        margin-right: 3px;

        @include breakpoint(1100px) {
          font-size: 16px;
          line-height: 18px;
        }
        @include breakpoint(800px) {
          font-size: 14px;
          line-height: 14px;
        }
        @include breakpoint(500px) {
          font-size: 11px;
        }
      }

      img {
        width: 24px;
        height: auto;
        cursor: pointer;
        display: none;
      }

      &:hover {
        img {
          display: block;
        }
      }

      input {
        border: none;
        border-bottom: 1px solid black;
        outline: none;
      }

      input::placeholder {
        font-style: italic;
      }
    }
  }
}


</style>
