<template>
    <div class="container">
        <div class="user">
            <span class="name">中通物流有限公司</span>
            <span class="health">健康证认证用户</span>
            <span class="n">SL0250</span>
        </div>
        <div class="more">
            <a href="" class="company">
                <span>公司信息</span>
                <span class="cf">已认证</span>
                <span class="go"></span>
            </a>
            <a href="" class="package">套餐管理<span class="go"></span></a>
            <a href="" class="reward">奖励金发放管理<span class="go"></span></a>
            <a href="" class="safety">账号安全<span class="go"></span></a>
            <a href="" class="setting">设置<span class="go"></span></a>
        </div>
    </div>
</template>
<style scoped>
.user {
    margin-bottom: 10px;
    background-color: #4083FF;
    position: relative;
    color: #fff;
    height: 120px;
    padding: 0;
}

.name {
    font-size: 18px;
    position: absolute;
    left: 22px;
    top: 36px; 
}

.health {
  font-size: 12px;
    display: inline-block;
    padding-left: 20px;
    background: url(../assets/me/healthW.png) no-repeat left; 
    background-size: 15px 15px;
    left: 22px;
    top: 65px;
    position: absolute;
}

.n {
  font-size: 14px;
  position: absolute;
  top: 50px;
  right: 14px;
}

.more {
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    padding: 0 0 0 20px;
    background: #ffffff;
}

.more a {
    display: block;
    border-bottom: 1px solid #e6e6e6;
    font-size: 14px;
    padding: 15px 0 14px 34px;
    border-left: 8px solid #ffffff;
    position: relative;
    color: black;
}

.go {
    background: url(../assets/go.png) no-repeat right;
    background-size: 20px 20px;
    padding: 10px;
    position: absolute;
    right: 10px;
    top: 13px;
}

.package {
    background: url(../assets/me/package.png) no-repeat left;
    background-size: 25px 25px;
    padding-left: 8px;
}

.reward {
    background: url(../assets/me/reward.png) no-repeat left;
    background-size: 25px 25px;
    padding-left: 8px;
}

.company {
    background: url(../assets/me/company.png) no-repeat left;
    background-size: 25px 25px;
    padding-left: 8px;
}

.cf {
    color: #9b9b9b;
    position: absolute;
    right: 35px;
}

.safety {
      background: url(../assets/me/safety.png) no-repeat left;
    background-size: 25px 25px;
    padding-left: 8px;
}

.setting {
    background: url(../assets/me/setting.png) no-repeat left;
    background-size: 25px 25px;
    padding-left: 8px;
}

</style>

