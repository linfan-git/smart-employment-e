<template>
    <van-tabbar v-model="active">
        <van-tabbar-item info="" to="/">
            <span>首页</span>
            <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? home.active : home.normal"
            >
        </van-tabbar-item>
        <van-tabbar-item info="" to="/hire">
            <span>招聘发布</span>
            <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? hire.active : hire.normal"
            >
        </van-tabbar-item>
        <van-tabbar-item info="" to="/inspect">
            <span>应聘管理</span>
            <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? processing.active : processing.normal"
            >
        </van-tabbar-item>
        <van-tabbar-item info="" to="/me">
            <span>我的</span>
            <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? me.active : me.normal"
            >
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      home: {
        normal: require('../assets/icon/navbot/home-nor.png'),
        active: require('../assets/icon/navbot/home-act.png')
      },
      hire: {
        normal: require('../assets/icon/navbot/hire-nor.png'),
        active: require('../assets/icon/navbot/hire-act.png')
      },
      processing: {
        normal: require('../assets/icon/navbot/processing-nor.png'),
        active: require('../assets/icon/navbot/processing-act.png')
      },
      me: {
        normal: require('../assets/icon/navbot/me-nor.png'),
        active: require('../assets/icon/navbot/me-act.png')
      }
    }
  }
}
</script>
