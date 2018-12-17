<template>
    <div class="con">
        <div>
            <span class="t1">套餐名称</span>
            <spam class="t2">套餐一</spam>
        </div>
        <div>
            <span class="t1">可发布职位数</span>
            <spam class="t2">50/200</spam>
        </div>
        <div>
            <span class="t1">购买日期</span>
            <spam class="t2">2017-10-03</spam>
        </div>
        <p>您的套餐即将到期，请点击下方重新购买</p>
        <button type="button" class="buy">确认查看</button>
    </div>
</template>

<style scoped>
.con {
      margin-top: 46px;
  margin-bottom: 60px;
  padding: 0 15px;
  background: #fff;
}

.con>div {
    padding: 10px 0;
    border-bottom: 1px solid #e6e6e6;
    font-size: 14px;
    position: relative;
}

.t2 {
    position: absolute;
    right: 0;
}

p {
    font-size: 12px;
    margin: 10px 0 40px 0;
}

.buy {
    border: none;
    border-radius: 5px;
    text-align: center;
    font-size: 16px;
    width: 96%;
    height: 40px;
    color: #fff;
    background: #007aff;
    margin: 0 2%;
}



</style>

