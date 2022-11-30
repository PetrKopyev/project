<template>
  <div class="kit">
    <div class="container">
      <h3 class="title">Набор инструментов для контроля <br> процессов продаж и маркетинга</h3>
      <div class="kit__blocks">
        <div class="block">
          <div class="block__title">
            <img src="../../assets/image/main-page/kit/add-user.png" alt="user">
            <h4>Превращайте лидов в покупателей</h4>
          </div>
          <p>Используйте чат-боты, формы подписки и&nbsp;лендинги для&nbsp;сбора контактов. Автоматически добавляйте
            контакты в&nbsp;свою СRM и&nbsp;сопровождайте их по&nbsp;воронке до&nbsp;успешного завершения сделки.</p>
        </div>
        <div class="block">
          <div class="block__title">
            <img src="../../assets/image/main-page/kit/more-circle.png" alt="more">
            <h4>Автоматизируйте коммуникацию</h4>
          </div>
          <p>Благодаря бесшовной интеграции CRM с&nbsp;другими сервисами SendPulse вы сможете общаться с&nbsp;клиентами
            по&nbsp;электронной почте или&nbsp;через чат-бота прямо из&nbsp;карточки контакта в&nbsp;вашей СRM.</p>
        </div>
        <div class="block">
          <div class="block__title">
            <img src="../../assets/image/main-page/kit/graph.png" alt="grath">
            <h4>Принимайте решения на основе данных</h4>
          </div>
          <p>Вся история взаимодействий с&nbsp;клиентом у&nbsp;вас под&nbsp;рукой. Пользуйтесь всеми данными, чтобы&nbsp;выстраивать
            успешные воронки продаж и&nbsp;сокращать время на&nbsp;заключение сделок.</p>
        </div>
        <div class="block">
          <div class="block__title">
            <img src="../../assets/image/main-page/kit/users.png" alt="users">
            <h4>Работайте слаженно в команде</h4>
          </div>
          <p>Приглашайте коллег и&nbsp;распределяйте права доступа, чтобы&nbsp;назначать ответственных за&nbsp;выполнение
            задач и&nbsp;отслеживать эффективность, будь то&nbsp;работа с&nbsp;рассылками или со&nbsp;сделками в&nbsp;СRM.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Kit"
}
</script>

<style lang="scss">
.kit {
  margin-top: 152px;
  display: flex;
  flex-direction: column;
  color: $very-dark-blue;
  @include breakpoint(1300px) {
    margin-top: 76px;
  }
  @include breakpoint(800px) {
    margin-top: 45px;
  }
  @include breakpoint(600px) {
    margin-top: 25px;
  }

  &__blocks {
    display: grid;
    grid-template-columns: repeat(2, calc(50% - 12px));
    gap: 24px;
    margin-top: 64px;
    @include breakpoint(1300px) {
      margin-top: 32px;
    }
    @include breakpoint(600px) {
      margin-top: 15px;
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
