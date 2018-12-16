<template>
  <div class="hire">
    <Navtop/>
    <div class="container">
      <p class="zpfb">招聘管理</p>
      <div class="d">
        <div>
          <span class="t">招聘中</span>
          <div class="n">69</div>
        </div>
        <div>
          <span class="t">停止招聘</span>
          <div class="n">35</div>
        </div>
        <div>
          <span class="t">全部</span>
          <div class="n">104</div>
        </div>
      </div>
      <div class="info">
        <span class="i1">
          <span class="i11">货车司机</span>
          <span class="tag">16</span>
        </span>
        <span class="i2">深圳市华南物流有限公司</span>
        
        <span class="i5">招聘进度 <span>2/8</span></span>
        <span class="i3">6001-8000元/月</span>
        <span class="i4">2018.10.12 发布</span>
        <button type="button" class="i6">求职名单</button>
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

.zpfb {
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

.i1,.i2,.i3,.i4,.i5,.i6{
  position: absolute;
}
.i1,.i2,.i5 {
  left: 12px;
}

.i3,.i4,.i6 {
  right: 12px;
}

.i1 {
  font-size: 14px;
  top: 12px;
}

.i11 {
  display: inline-block;
  margin: 2px 0;
}
.tag {
  display: inline-block;
  font-size: 12px;
  background: #f37938;
  color: #fff;
  width: 30px;
  height: 15px;
  text-align: center;
  border-radius: 5px;
  line-height: 150%;
  margin-left: 8px;
}

.i2,.i4 {
  font-size: 12px;
  top: 40px;
  color: #9b9b9b;
}

.i3 {
  font-size: 13px;
  top: 13px;
  color: #f14f44;
}

.i5,.i6 {
  font-size: 12px;
}

.i5 {
  color: #9b9b9b;
  top: 66px;
}

.i5>span {
  color: #000;
}

.i6 {
  color: #fff;
  background: #007aff;
  border: none;
  border-radius: 3px;
  width: 80px;
  height: 20px;
  text-align: center;
  top: 64px;
}


.add {
  font-size: 16px;
  width: 91.5%;
  height: 44px;
  text-align: center;
  border: 1px solid #007aff;
  border-radius: 5px;
  color: #ffffff;
  background: #007aff;
  margin: 0 16px;
}
</style>
