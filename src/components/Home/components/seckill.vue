<template>
    <div class="seckill">
        <!-- logo -->
        <img src="http://img62.ddimg.cn/upload_img/00707/mobile/mao_title.jpg" alt="">
        <div class="djs">
            <i>{{leftTime.hours}}</i>
            <span>时</span>
            <i>{{leftTime.minutes}}</i>
            <span>分</span>
            <i class="last">{{leftTime.seconds}}</i>
            <span>秒</span>
        </div>
        <!-- 内容 -->
        <div class="content">
            <ul>
                <li v-for="(item,index) in msproduct" :key="index">
                    <img v-lazy="item.imgurl"/>
                    <p class="desc">{{item.desc}}</p>
                    <p class="yprice">￥{{item.yprice}}</p>
                    <p class="price">￥{{item.price}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import getTime from "@/utils/time"
import {getMsProduct} from "@/api"
export default {
    data() {
        return {
            leftTime: {
                hours: '',
                minutes: '',
                seconds: ''
            },
            msproduct: []
        }
    },
    async created() {
        setInterval(()=> {
            this.leftTime = getTime("2019/12/25 19:45:32")
        }, 1000)

        this.msproduct = await getMsProduct()
    }
}
</script>
<style scoped>
    .seckill {
        margin-top: 30px;
        background: white;
    }

    .djs {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .djs i{
        width: 38px;
        height: 50px;
        background: #000;
        color: white;
        border-radius: 8px;
        font-size: 26px;
        text-align: center;
        line-height: 50px;
        margin: 0 16px;
    }

    .djs i.last{
        background: #F3344A
    }

    .content {
        margin-top: 20px;
        width: 100%;
        overflow-x: auto;
    }
 
    .content ul {
        display: flex;
        width: 2400px;
    }

    .content ul li {
        width: 200px;
        padding: 0 20px;
    }

    .yprice {
        color: #f3344a
    }

    .price {
        color: #bababa;
        text-decoration: line-through
    }

    .desc {
        width: 100%;
        overflow : hidden;/*必须结合的属性,当内容溢出元素框时发生的事情*/
        text-overflow: ellipsis;/*可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 。*/
        display: -webkit-box;/*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。*/
        -webkit-line-clamp: 2;/*用来限制在一个块元素显示的文本的行数。*/
        -webkit-box-orient: vertical;
    }

    ::-webkit-scrollbar {
        height: 0;
        width: 0;
    }
</style>