<template>
  <div class="tools">
    <div class="container">
      <h3 class="title">Инструменты</h3>
      <div class="tools__blocks">
        <div class="block">
          <div class="block__title">
            <img src="../../assets/image/main-page/tools/Activity.png" alt="activity">
            <h4>CRM</h4>
          </div>
          <p>Отслеживайте наиболее эффективные сделки в&nbsp;СRM. Так вы сможете выделять в&nbsp;отдельный сегмент
            наиболее активных клиентов и&nbsp;поощрять их за&nbsp;преданность бренду.</p>
        </div>
        <div class="block">
          <div class="block__title">
            <img src="../../assets/image/main-page/tools/Calendar.png" alt="calendar">
            <h4>Лендинги</h4>
          </div>
          <p>Создавайте лендинги, не&nbsp;вникая в&nbsp;азы программирования. Привлекательный дизайн и&nbsp;полезный
            контент лендинга помогут мотивировать потенциальных клиентов к&nbsp;целевому действию.</p>
        </div>
        <div class="block">
          <div class="block__title">
            <img src="../../assets/image/main-page/tools/robot-one.png" alt="robot">
            <h4>Чат-боты</h4>
          </div>
          <p>Используйте чат-ботов в&nbsp;Facebook, Telegram и WhatsApp, чтобы&nbsp;генерировать новых лидов,
            дополнительно их прогревать и&nbsp;доводить до&nbsp;сделки.</p>
        </div>
        <div class="block">
          <div class="block__title">
            <img src="../../assets/image/main-page/tools/Notification.png" alt="Notification">
            <h4>Push уведомления</h4>
          </div>
          <p>Дополните свои кампании web push уведомлениями, чтобы&nbsp;возвращать посетителей на&nbsp;свой сайт и&nbsp;информировать
            их, например, о&nbsp;новостях и&nbsp;последних распродажах.</p>
        </div>
        <div class="block">
          <div class="block__title">
            <img src="../../assets/image/main-page/tools/Chat.png" alt="chat">
            <h4>SMS</h4>
          </div>
          <p>Сделайте SMS рассылку частью воронки продаж. Быстро доставляйте подписчикам актуальную информацию о
            выгодных акциях, предстоящих мероприятиях, доставке или&nbsp;хранении товара.</p>
        </div>
        <div class="block">
          <div class="block__title">
            <img src="../../assets/image/main-page/tools/Message.png" alt="message">
            <h4>Email</h4>
          </div>
          <p>Создавайте отдельные сегменты аудитории, анализируйте взаимодействие подписчиков с&nbsp;вашим брендом,
            чтобы&nbsp;вовремя устранить их сомнения, наладить контакт и&nbsp;увеличить продажи.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tools"
}
</script>

<style lang="scss">
.tools {
  margin-top: 105px;
  @include breakpoint(1300px) {
    margin-top: 62px;
  }
  @include breakpoint(800px) {
    margin-top: 45px;
  }
  @include breakpoint(600px) {
    margin-top: 25px;
  }

  &__blocks {
    display: grid;
    grid-template-columns: repeat(3, calc(33.33% - 17px));
    gap: 24px;
    margin-top: 48px;
    @include breakpoint(1300px) {
      margin-top: 24px;
    }
    @include breakpoint(700px) {
      grid-template-columns: repeat(2, calc(50% - 10px));
    }
    @include breakpoint(600px) {
      gap: 15px;
    }
    @include breakpoint(500px) {
      grid-template-columns: repeat(1, 100%);
    }
  }
}
</style>
