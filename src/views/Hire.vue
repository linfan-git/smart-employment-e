<template>
  <div class="hire">
    <Navtop/>
    <div class="container">
      <p class="zpfb">招聘发布</p>
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
        <span class="i1">仓管员</span>
        <span class="i2">3人 大专</span>
        <span class="i3">6001-8000元/月</span>
        <span class="i4">发布时间：2018.10.12 14:23</span>
      </div>
      <div class="info">
        <span class="i1">仓管员</span>
        <span class="i2">3人 大专</span>
        <span class="i3">6001-8000元/月</span>
        <span class="i4">发布时间：2018.10.12 14:23</span>
      </div>
      <div class="info">
        <span class="i1">仓管员</span>
        <span class="i2">3人 大专</span>
        <span class="i3">6001-8000元/月</span>
        <span class="i4">发布时间：2018.10.12 14:23</span>
      </div>
      <button type="button" class="add">新增</button>
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
  height: 44px;
}

.i1,.i2,.i3,.i4 {
  position: absolute;
}
.i1,.i2 {
  left: 12px;
}

.i3,.i4 {
  right: 12px;
}

.i1 {
  font-size: 14px;
  top: 12px;
}
.i2,.i4 {
  font-size: 12px;
  top: 40px;
}

.i3 {
  font-size: 13px;
  top: 13px;
  color: #f14f44;
}

.i4 {
  color: #9b9b9b;
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
