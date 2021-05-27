<template>
  <!-- 门票预定须知弹窗内容 -->
  <div class="ticket-tips-box">
    <h3>预定须知</h3>
    <div>
      <h4>有效期</h4>
      <p>{{ ticketDetail.expire_date }}</p>
    </div>
    <div>
      <h4>退改政策</h4>
      <p>{{ ticketDetail.return_policy }}</p>
    </div>
    <div>
      <h4>发票</h4>
      <p v-if="ticketDetail.has_invoice">我司提供发票</p>
      <p v-else>不提供发票</p>
    </div>
    <div>
      <h4>预定须知</h4>
      <div v-html="ticketDetail.tips" v-if="ticketDetail.tips"></div>
      <div v-else>暂无</div>
    </div>
    <div>
      <h4>入园方式</h4>
      <p>{{ ticketDetail.entry_way }}</p>
    </div>
    <div>
      <h4>备注信息</h4>
      <p v-if="ticketDetail.remark">{{ ticketDetail.remark }}</p>
      <p v-else>无备注信息</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['ticketDetail'],
    name: 'TicketTips'
  }
</script>

<style scoped lang="less">
  .ticket-tips-box {
    padding: 10px;

    h3, h4, p {
      text-align: left;
    }
    p {
      color: #666;
    }
  }
</style>
