<template>
    <div class="login">
        <img src="../assets/login.png" alt="">
        <p>更真实的招聘平台</p>
        <div class="user">
            <input type="text" name="" id="" class="name">
            <input type="text" name="" id="" class="password">
        </div>
        <a href="">忘记密码</a>
        <a href="">没有账号，立即注册</a>
        <button type="button" class="add">注册/登录</button>
    </div>
</template>

<style scoped>
.login {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin-top: 46px;
    background-color: #fff;
    padding: 0 12px;
    text-align: center;
}

img {
    width: 130px;
    height: 36px;
    margin: 15% 0 22px 0;

}

p {
    font-size: 24px;
    margin-bottom: 15%;
}

.user {
    height: 115px;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
}

input {
    border: 0;
}
</style>

