<template>
    <div>
        <div class="con">
            <div>
                <span class="t1">账号</span>
                <spam class="t2">13800000000</spam>
            </div>
            <div>
                <span class="t1">密码</span>
                <spam class="t2">******</spam>
            </div>
            <div>
                <span class="t1">公司名称</span>
                <spam class="t2">中通物流有限公司</spam>
            </div>
        </div>
        <button type="button" class="switch">切换至个人求职</button>
        <button type="button" class="logout">退出账号</button>
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

.switch {
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
    bottom: 75px;
}

.logout {
    border: 1px solid #007aff;
    border-radius: 5px;
    text-align: center;
    font-size: 16px;
    width: 92%;
    height: 44px;
    color: #007aff;
    background: #fff;
    margin: 0 4%;
    position: absolute;
    bottom: 20px;
}


</style>

