<template>
  <div class="home">
    <Navtop/>
    <div class="container">
      <div>
        <Banner/>
      </div>
      <div class="info">
        <span class="i1">泰康饮食有限公司</span>
        <span class="i2">健康证认证</span>
        <span class="i3">注册时间：2018.10.07 10:45</span>
        <span class="i4">免费试用系统剩15天</span>
        <button type="button" class="buy">马上购买</button>
        <button type="button" class="search">简历搜索</button>
      </div>
      <div class="d1">
        <div>
          <span class="t">已发布（条）</span>
          <div class="n">200</div>
        </div>
        <div>
          <span class="t">被浏览（次）</span>
          <div class="n">55000</div>
        </div>
      </div>
      <div class="d2">
        <div>
          <span class="t">已投递（份）</span>
          <div class="n">152</div>
        </div>
        <div>
          <span class="t">待处理（份）</span>
          <div class="n">69</div>
        </div>
        <div>
          <span class="t">已录用（份）</span>
          <div class="n">60</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Login from '@/components/Login.vue'
import Navtop from '@/components/Navtop.vue'
import Banner from '@/components/Banner.vue'

export default {
  name: 'home',
  components: {
    Navtop,
    Banner
  }
}
</script>

<style scoped>

.i1 {
  font-size: 16px;
  color: #000;
  position: absolute;
  left: 12px;
  top: 12px;
}

.i2 {
    font-size: 12px;
    display: inline-block;
    padding-left: 16px;
    color: #007aff;
    text-decoration: underline;
    background: url(../assets/icon/health.png) no-repeat left; 
    background-size: 12px 12px;
    position: absolute;
    left: 12px;
    top: 40px;
}

.i3 {
  font-size: 12px;
  color: #9b9b9b;
  position: absolute;
  left: 12px;
  top: 63px;
}

.i4 {
  font-size: 12px;
  color: #9b9b9b;
  position: absolute;
  right: 12px;
  top: 15px;
}

.buy {
  font-size: 12px;
  color: #fff;
  background: #007aff;
  text-align: center;
  width: 121px;
  height: 30px;
  border: none;
  border-radius: 5px;
  position: absolute;
  right: 12px;
  top: 48px;
}

.search {
  font-size: 16px;
  margin: 81px 0 6px 0;
  width: 100%;
  height: 44px;
  text-align: center;
  border: 1px solid #007aff;
  border-radius: 5px;
  color: #007aff;
  background: #fff;
}

.d1>div ,.d2>div {
  display: inline-block;
  text-align: center;
  margin-top: 4px;
}

.d1>div {
  width: 50%;
}

.d2>div {
  width: 33%;
}

.t {
  font-size: 14px;
  color: #4a4a4a;
  border-left: 4px solid #007aff;
  padding-left: 7px;
  border-radius: 3px;
}
.n {
  display: block;
  font-size: 24px;
  color: #000;
  margin-top: 8px;
}

</style>
