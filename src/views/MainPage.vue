<template>
  <div class="main-page">
    <Header/>
    <Kit/>
    <Benefits/>
    <Tools/>
    <Improve/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/MainPage/Header";
import Footer from "@/components/MainPage/Footer";
import Kit from "@/components/MainPage/Kit";
import Benefits from "@/components/MainPage/Benefits";
import Tools from "@/components/MainPage/Tools";
import Improve from "@/components/MainPage/Improve";

export default {
  name: "MainPage",
  components: {Improve, Tools, Benefits, Kit, Footer, Header}
}
</script>

<style lang="scss">
.main-page {
  background-color: $very-pale-blue;
  padding: 32px 32px 0 32px;
  @include breakpoint(800px) {
    padding: 14px 14px 0 14px;
  }
  @include breakpoint(600px) {
    padding: 0;
  }
}
</style>
