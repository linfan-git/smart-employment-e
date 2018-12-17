<template>
    <div class="container">
        <div class="w1">
            <div class="wtag">可退回资金（元）</div>
            <span class="wmoney1">￥ 350.00</span>
        </div>
        <a href="" class="wbank">
                <span>银行卡卡绑定</span>
                <span class="wbn">未绑定</span>
                <span class="go"></span>
        </a>
        <p class="t">退回记录</p>
        <div class="d">
            <p class="d1">微信退回</p>
            <p class="d2">2018.10.23 18:23:45</p>
            <span class="d3">￥200.00</span>
        </div>
        <button type="button" class="tx">申请提现</button>
    </div>
</template>
<style scoped>

.w1 {
    background-color: #4083ff;
    padding: 40px 12px 12px 12px;
    color: #fff;
    margin-bottom: 10px;
    text-align: center;
    height: 100px;
    border-bottom: 3px solid #fff;
}

.w1>span {
    font-size: 40px;
    
}

.wtag {
    font-size: 12px;
    text-align: center;
    padding: 5px 10px 5px 20px;
    display: block;
    background-color: #1d60db;
    border-radius: 15px;
    width: 30%;
    margin: auto;
}

.wbank {
    display: block;
    border-bottom: 1px solid #e6e6e6;
    font-size: 14px;
    padding: 15px 0 14px 5px;
    border-left: 8px solid #ffffff;
    position: relative;
    color: black;
    background: #fff;
    margin-bottom: 10px;
}

.wbank>.go {
    background: url(../assets/go.png) no-repeat right;
    background-size: 20px 20px;
    padding: 10px;
    position: absolute;
    right: 10px;
    top: 15px;
}

.wbn {
    color: #9b9b9b;
    position: absolute;
    right: 35px;
}

.t {
    font-size: 14px;
    height: 30px;
    padding: 0 12px;
    text-align: left;
}

.d1 {
    font-size: 14px;
    line-height: 150%;
}
.d2 {
    font-size: 12px;
    color: #9b9b9b;
}

.d3 {
    color: #007aff;
    position: absolute;
    right: 12px;
    top: 22px;
}

.tx {
    border: none;
    border-radius: 5px;
    text-align: center;
    font-size: 16px;
    width: 92%;
    height: 44px;
    color: #fff;
    background: #007aff;
    margin: 0 4%;
    position: fixed;
    bottom: 16px;
}
</style>
