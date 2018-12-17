<template>
    <div class="con">
        <div>
            <h1>套餐一</h1>
            <h2>￥200</h2>
            <p>有效期：2年</p>
            <a href="">套餐详情>></a>
        </div>
        <div>
            <h1>套餐二</h1>
            <h2>￥500</h2>
            <p>有效期：2年</p>
            <a href="">套餐详情>></a>
        </div>
        <div>
            <h1>套餐三</h1>
            <h2>￥800</h2>
            <p>有效期：2年</p>
            <a href="">套餐详情>></a>
        </div>
    </div>
</template>

<style scoped>
.con {
    margin-top: 46px;
    padding: 12px 6px;
}

.con>div {
    display: inline-block;
    margin: 0 6px;
    width: 29%;
    border: 1px solid #979797;
    text-align: center;
    background: #fff;
    border-radius: 5px;
    padding: 11px 0;
}

h1 {
    font-size: 14px;
    margin-bottom: 10px;
}

h2 {
    font-size: 32px;
    color: #f14f44;
}

p {
    font-size: 12px;
    margin-bottom: 10px;
}

a {
    font-size: 12px;
    color: #0074ff;
    text-decoration: underline;
}
</style>

