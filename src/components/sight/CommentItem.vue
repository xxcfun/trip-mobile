<template>
  <!-- 评论列表的每一项 -->
  <div class="comment-item-box">
    <div class="cmt-header">
      <div class="rate">
        <van-rate v-model="item.score" allow-half readonly void-icon="star" void-color="#eee"/>
      </div>
      <div class="user">{{ item.user.nickname || '匿名用户' | unameFormat }} {{ item.created_at }}</div>
    </div>
    <div class="cmt-content">
      <p>{{ item.content }}</p>
    </div>
    <!-- 图片列表 -->
    <div class="cmt-imgs" @click="show=true">
      <van-image width="100" height="100" v-for="(image, index) in item.images" :key="index" :src="image.img"/>
<!--      <van-image width="100" height="100" src="/static/sight/comment4.jpg"/>-->
<!--      <van-image width="100" height="100" src="/static/sight/comment5.jpg"/>-->
    </div>
    <van-image-preview v-model="show" :images="imageUrls" @change="onChange">
      <template v-slot:index>第{{ index + 1 }}张 / 共{{ item.images.length }}张</template>
    </van-image-preview>
  </div>
</template>

<script>
  export default {
    name: 'CommentItem',
    props: ['item'],
    data () {
      return {
        show: false,
        index: 0
      }
    },
    computed: {
      /**
       * 图片大图预览需要处理的数据
       */
      imageUrls () {
        return this.item.images.map(i => i.img)
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
