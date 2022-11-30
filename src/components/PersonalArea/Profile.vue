<template>
  <div class="profile">
    <div class="profile__photo">
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
      <div class="profile__buttons">
        <label for="file">
          <input
              type="file"
              id="file"
              @change="handleFileUpload"
              ref="file"
          >
          <img src="@/assets/image/personal-area/profile/camera.png" alt="add"/>
        </label>
        <button @click="deleteImage">
          <img src="@/assets/image/personal-area/profile/delete.png" alt="delete">
        </button>
      </div>
    </div>
    <div class="profile__blocks">
      <Identification/>
      <ChangePassword/>
    </div>

  </div>
</template>

<script>
import Identification from "@/components/PersonalArea/Identification";
import ChangePassword from "@/components/PersonalArea/ChangePassword";
import {mapActions, mapState} from "vuex"

export default {
  name: "Profile",
  components: {ChangePassword, Identification},
  data() {
    return {
      file: '',
    }
  },
  computed: {
    ...mapState(['image']),
    imgURL() {
      return 'https://tinn.io/' + localStorage.getItem('image')
    }
  },
  methods: {
    ...mapActions(['setImage', 'deleteImage']),
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      this.setImage(this.file);
    },
  },
}
</script>

<style lang="scss">
.profile {
  display: flex;
  flex-direction: row;
  @include breakpoint(1000px) {
    flex-direction: column;
  }

  &__blocks {
    display: flex;
    flex-direction: column;
  }

  &__photo {
    margin-right: 56px;
    @include breakpoint(1300px) {
      margin-right: 20px;
    }
    @include breakpoint(1000px) {
      margin-right: 0;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    }
  }

  &__photo-img {
    width: 119px;
    height: auto;
    border-radius: 50%;
    margin: 0 auto;
  }

  &__buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 16px;

    button {
      background-color: inherit;
      border: none;
      margin-left: 16px;
      cursor: pointer;
    }

    img {
      width: 24px;
      height: auto;
      @include breakpoint(500px) {
        width: 20px;
      }
    }

    label {
      cursor: pointer;

      input {
        display: none;
      }
    }
  }


}


</style>
