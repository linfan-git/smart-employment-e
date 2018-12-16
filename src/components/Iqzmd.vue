<template>
  <div class="hire">
    <Navtop/>
    <div class="container">
      <p class="ypmd">应聘名单【货运司机】</p>
      <div class="info">
        <span class="i1">
          <span class="i11">货车司机</span>
          <span class="i12">男 东莞</span>
        </span>
        <span class="i2">9年经验 30岁 大专</span>
        <span class="i3">2018-06-08</span>
        <span class="i4">13800000000</span>
        <span class="i5">健康证认证</span>
        <button type="button" class="i6">查看</button>
        <button type="button" class="i7">不合适</button>
      </div>
    </div>
  </div>
</template>
<script>
import Navtop from '@/components/Navtop.vue'

export default {
  name: 'home',
  components: {
    Navtop
  }
}
</script>

<style scoped>

.ypmd {
  font-size: 18px;
  padding: 8px 12px;
}

.d>div {
  display: inline-block;
  text-align: center;
  margin-top: 4px;
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

.info {
  height: 71px;
}

.i1,.i2,.i3,.i4,.i5,.i6,.i7{
  position: absolute;
}
.i1,.i2,.i3 {
  left: 12px;
}

.i4,.i5,.i6 {
  right: 12px;
}

.i12,.i2,.i3,.i4,.i6,.i7 {
  font-size: 12px;
}

.i1 {
  top: 11px;
}

.i2 {
  top: 36px;
}

.i3 {
  top: 65px;
  color: #9b9b9b;
}

.i4 {
  font-size: 13px;
  top: 12px;
}

.i5 {
    font-size: 12px;
    display: inline-block;
    padding-left: 16px;
    color: #007aff;
    background: url(../assets/icon/health.png) no-repeat left; 
    background-size: 12px 12px;
    position: absolute;
    top: 35px;
}

.i6 {
  color: #fff;
  background: #007aff;
  border: none;
  border-radius: 5px;
  width: 80px;
  height: 20px;
  text-align: center;
  top: 64px;
}

.i7 {
  color: #007aff;
  background: #fff;
  border: 1px solid #007aff;
  border-radius: 3px;
  width: 80px;
  height: 20px;
  text-align: center;
  top: 64px;
  right: 106px;
}


.add {
  font-size: 16px;
  width: 91.5%;
  height: 44px;
  text-align: center;
  border: 1px solid #007aff;
  border-radius: 3px;
  color: #ffffff;
  background: #007aff;
  margin: 0 16px;
}
</style>
