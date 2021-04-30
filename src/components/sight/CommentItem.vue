<template>
  <!-- 评论列表的每一项 -->
  <div class="comment-item-box">
    <div class="cmt-header">
      <div class="rate">
        <van-rate v-model="value" allow-half readonly void-icon="star" void-color="#eee"/>
      </div>
      <div class="user">往** 2021-4-29</div>
    </div>
    <div class="cmt-content">
      <p>评论内容</p>
    </div>
    <!-- 图片列表 -->
    <div class="cmt-imgs" @click="show=true">
      <van-image width="100" height="100" src="/static/sight/comment1.jpg"/>
      <van-image width="100" height="100" src="/static/sight/comment2.jpg"/>
      <van-image width="100" height="100" src="/static/sight/comment3.jpg"/>
<!--      <van-image width="100" height="100" src="/static/sight/comment4.jpg"/>-->
<!--      <van-image width="100" height="100" src="/static/sight/comment5.jpg"/>-->
    </div>
    <van-image-preview v-model="show" :images="images" @change="onChange">
      <template v-slot:index>第{{ index + 1 }}页</template>
    </van-image-preview>
  </div>
</template>

<script>
  export default {
    name: 'CommentItem',
    data () {
      return {
        value: 4.5,
        show: false,
        index: 1,
        images: [
          '/static/sight/comment1.jpg',
          '/static/sight/comment2.jpg',
          '/static/sight/comment3.jpg'
        ]
      }
    },
    methods: {
      onChange (index) {
        this.index = index
      }
    }
  }
</script>

<style lang="less">
  .comment-item-box {
    padding: 5px 10px;
    border-bottom: 1px solid #f6f6f6;

    .cmt-header {
      display: flex;
      justify-content: space-between;

      .user {
        font-size: 12px;
      }
    }

    .cmt-content {
      color: #616161;
      padding: 5px 0;
      text-align: left;
      font-size: 12px;
      line-height: 2.0;
    }

    .cmt-imgs {
      padding: 5px;
      text-align: left;
      display: flex;
      justify-content: space-around;
    }
  }
</style>
