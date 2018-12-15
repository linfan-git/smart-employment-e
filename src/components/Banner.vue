<template>
    <div class="banner">
        <van-swipe :autoplay="3000" height="150">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        123,
        456,
        789,
        require('../assets/icon/navbot/home-nor.png'),
        require('../assets/icon/navbot/home-act.png')
      ]
    }
  }
}
</script>

