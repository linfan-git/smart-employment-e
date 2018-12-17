<template>
    <div class="container">
        <div class="w2">
            <div class="w21">
                <div class="wtag">已发放</div>
                <span>￥ 105.00</span>
            </div>
            <div class="w22">
                <div class="wtag">冻结奖金</div>
                <span>￥ 260.00</span>
            </div>
        </div>
        <table>
            <tr>
                <th>奖励名单</th>
                <th>推荐岗位</th>
                <th>奖励金额</th>
                <th>发放时间</th>
            </tr>
            <span class="s1"></span>
            <span class="s2"></span>
            <tr>
                <td>阿杜</td>
                <td>货车司机</td>
                <td>￥50</td>
                <td>2018.05.25 17:45</td>
            </tr>
            <tr>
                <td>阿杜</td>
                <td>货车司机</td>
                <td>￥50</td>
                <td>2018.05.25 17:45</td>
            </tr>
            <tr>
                <td>阿杜</td>
                <td>货车司机</td>
                <td>￥50</td>
                <td>2018.05.25 17:45</td>
            </tr>
                        <tr>
                <td>阿杜</td>
                <td>货车司机</td>
                <td>￥50</td>
                <td>2018.05.25 17:45</td>
            </tr>
        </table>
        <a href="" class="expand-all">
            <span>查看更多</span>
            <span class="icon"></span>
        </a>
        <div>
            <a href="">
                <span class="d1">奖金退回</span>
                <span class="d2">￥350</span>
                <span class="go"></span>
            </a>
        </div>
        <button type="button" class="publish">发布岗位</button>
    </div>
</template>

<style scoped>

.w2 {
    background: #007aff;
    color: #fff;
    margin-top: 12px;
}

.w21 {
    display: inline-block;
    text-align: center;
    width: 49%;
    margin-top: 12px;
    border-right: 1px solid #fff;
}

.w22 {
    display: inline-block;
    text-align: center;
    width: 49%;
    margin-top: 12px;
    border-left: 1px solid #fff;
}

.w2 span {
    font-size: 20px;
    line-height: 30px;
}

.wtag {
    font-size: 12px;
    text-align: center;
    padding: 5px 23px;
    display: block;
    background-color: #1d60db;
    border-radius: 15px;
    width: 55px;
    margin: auto;
}

table {
    width: 100%;
    text-align: center;
    border-collapse: collapse;
    padding: 0 12px;
    border-left: 12px solid #fff;
    border-right: 12px solid #fff;
}

.s1 ,.s2{
    display: inline-block;
    width: 40%;
    height: 50px;
    position: absolute;
    top: 142px;
}
.s1 {
    border-left: 12px solid #f7f7f7;
    left: 0;
}

.s2 {
    border-right: 12px solid #f7f7f7;
    right: 0;
}

th {
    height: 45px;
    font-size: 14px;
}

td {
    height: 45px;
    background: #fff;
    border-bottom: 1px solid #e6e6e6;
}


.expand-all {
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    color: #666;
    text-align: center;
    background: #fff;
    border-bottom: 1px solid #e6e6e6;
    margin-bottom: 10px;
}

.expand-all .icon {
    display: inline-block;
    width: 24px;
    height: 12px;
    background: url(../assets/expand.png) no-repeat center;
}

.d1,.d2 {
    font-size: 14px;
    display: inline-block;
    margin-right: 30px;
    color: #000;
}

.go {
    background: url(../assets/go.png) no-repeat right;
    background-size: 20px 20px;
    padding: 10px;
    position: absolute;
    right: 10px;
    top: 13px;
}

.publish {
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
