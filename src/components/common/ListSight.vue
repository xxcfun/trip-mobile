<template>
  <router-link class="sight-item" :to="{name: 'SightDetail', params: {id: item.id}}">
    <img :src="item.main_img" :alt="item.name">
    <div class="right">
      <h5>{{ item.name }}</h5>
      <van-rate v-model="item.score" color="#ffd21e" void-icon="star" void-color="#eee" readonly/>
      <div class="tips">{{ item.comment_count }}人点评 | 100%满意</div>
      <div class="tips light">{{ item.province }} - {{ item.city }}</div>
      <div class="line-price">￥ {{ item.min_price }} 起</div>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: 'ListSight',
    props: ['item']
  }
</script>

<style scoped lang="less">
  // 景点列表
  .sight-item {
    display: flex;
    margin-top: 10px;
    border-bottom: 1px solid #f6f6f6;

    img {
      width: 100px;
      height: 100px;
    }

    .right {
      flex-grow: 1;
      text-align: left;
      justify-content: left;
      padding-left: 15px;
      position: relative;

      h5 {
        color: #212121;
        font-size: 14px;
        padding: 5px 0;
        margin: 0;
      }

      .tips {
        font-size: 12px;
        color: #666;

        &.light {
          color: #999;
        }
      }

      .line-price {
        position: absolute;
        right: 10px;
        top: 20px;
        display: inline-block;
        color: #f50;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
</style>
