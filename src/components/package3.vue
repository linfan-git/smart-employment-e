<template>
    <div class="con">
        <h1>套餐一</h1>
        <p>有效期限：2018-09-11~2020-09-11</p>
        <h2>使用说明：</h2>
        <p>
        1.本套餐包括100次发布数量；<br>
        2.支持500次简历下载；<br>
        3.免费不限次数查看在线人才；<br>
        4.赠送广告位使用一个月。
        </p>
        <img src="../assets/logo.png" alt="">
        <div class="pay">
            <span>支付方式</span>
            <span class="wpay">微信支付</span>
        </div>
        <div class="buy">
            <span class="t1">总价：￥200</span>
            <span class="t2">立即开通 >></span>
        </div>
    </div>
</template>

<style>
.con {
    margin-top: 46px;
    margin-bottom: 60px;
    padding: 0 12px;
    background: #fff;
    line-height: 150%;

}

h1 {
    font-size: 18px;
}

p {
    font-size: 14px;
    color: #4a4a4a;
}

h2 {
    font-size: 16px;
    margin-top: 15px;
}

img {
    height: 140px;
    margin: 12px 0 23px 0;
}

.pay {
    padding: 10px 0;
    position: relative;
}

.wpay {
    position: absolute;
    right: 0;
}

.buy {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid #e6e6e6;
    font-size: 16px;
    font-weight: bold;
}

.t1 {
    position: absolute;
    left: 0;
    width: 68%;
    height: 50px;
    text-align: center;
    padding: 15px 0;
}
.t2 {
    position: absolute;
    right: 0;
    width: 32%;
    height: 50px;
    background: #007aff;
    color: #fff;
    text-align: center;
    padding: 15px 0;
}
</style>

