<template>
    <div>
        <div class="con">
            <div>
                <span class="t1">张三</span>
                <span class="tel">138*********</span>
                <p>未婚 东莞</p>
                <p>9年经验 男 30岁 大专</p>
                <span class="avatar"></span>
                <span class="tag">健康证认证</span>
            </div>
            <div>
                <span class="t2">求职意向</span>
                <p>货运司机</p>
                <p>3000-5000元/月</p>
                <p>东莞 汽车/制造业</p>
            </div>
            <div>
                <span class="t2">工作经历</span>
                <p>普利司通公司 | 货运司机 <span class="time">2010.03-2016.09</span></p>
                <p>
                1.主要负责公司货物运输，在深圳和东莞两地配送；<br>
                2.车队管理，管理10人的短途货运车队，建设团队。
                </p>
            </div>
            <div class="d">
                <span class="t2">个人描述</span>
                <p>本人性格开朗，工作认真，在汽车行业工作9年，工作经验丰富，从未出过交通事故。</p>
            </div>
        </div>
        <div class="b">
            <button type="button" class="b1">不合适</button>
            <button type="button" class="b2">确认查看</button>
        </div>
    </div>
</template>
<style scoped>
.con {
  margin-top: 46px;
  margin-bottom: 60px;
  line-height: 150%;
}

.con>div {
    padding: 15px 0;
    border-bottom: 1px solid #e6e6e6;
    background: #fff;
    border-left: 12px solid #fff;
    border-right: 12px solid #fff;
    position: relative;
}

.d {
    margin-bottom: 70px;
}

.t1 {
    font-size: 20px;
}
.t2 {
    display: block;
    font-size: 14px;
    margin-bottom: 10px;
}

.t1,.t2 {
    font-weight: bolder;
}

.tel {
    display: block;
    font-size: 14px;
    color: black;
    margin-bottom: 8px;
}

p {
    font-size: 13px;
    color: #4a4a4a;
    position: relative;
}

.time {
    position: absolute;
    right: 0;
}
.avatar {
    display: inline-block;
    height: 70px;
    width: 70px;
    background-color: red;
    border-radius: 70px;
    border: 7px solid #e6e6e6;
    position: absolute;
    top: 10px;
    right: 15px;
}

.tag {
    font-size: 12px;
    display: inline-block;
    padding-left: 16px;
    color: #007aff;
    background: url(../assets/icon/health.png) no-repeat left; 
    background-size: 12px 12px;
    position: absolute;
    top: 98px;
    right: 18px;
}

.b {
    z-index: 1;
    position: fixed;
    bottom: 0;
    background: #fff;
    border-top: 1px solid #e6e6e6;
    height: 60px;
    width: 100%;
}

.b1,.b2 {
    z-index: 10;
    border: none;
    border-radius: 5px;
    text-align: center;
    font-size: 16px;
    width: 40%;
    height: 40px;
    border: 1px solid #007aff;
    position: fixed;
    bottom: 10px;
}

.b2 {
    color: #fff;
    background: #007aff;
    right: 8%;
}

.b1 {
    color: #007aff;
    background: #fff;
    left: 8%;
}

</style>

