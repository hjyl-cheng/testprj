<template>
    <div class="category">
        <!-- 搜索组件 -->
        <search/>
        <!-- 内容区 -->
        <div class="content">
            <div class="content-left" ref="left">
                <ul ref="ul">
                    <li ref="li" @click="selectCate(index)" :class="{active:currentIndex==index}" v-for="(item, index) in bookCateList" :key="index">{{item.name}}</li>
                </ul>
            </div>
            <div class="content-right">
                <ul>
                    <li v-for="(item,index) in 10" :key="index">
                        <img :src="img" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <loading ref="load"/>
    </div>
</template>
<script>
import BScroll from '@better-scroll/core'
import search from "./components/search"
import {getBookCateList} from "@/api"
import loading from "./components/loading"
export default {
    data() {
        return {
            leftBs: null,
            // 分类列表
            bookCateList: [],
            /// 当前索引
            currentIndex: 0,
            img: "http://img60.ddimg.cn/upload_img/00796/ts1226_1231/886x315-1577267619.jpg"
        }
    },
    components: {
        search,
        loading
    },
    created() {
        
    },
    methods: {
        // 当点击分类列表时，设置currentIndex值为当前的索引
        selectCate(index) {
            this.currentIndex = index
            this.img = "http://img62.ddimg.cn/upload_img/00803/1/886x315_dl_1219-1576831576.jpg"

            this.scrollToPosition(index);
        },
        scrollToPosition(index) {
            // 1.先判断用不用滚动
            // ul的高度
            var ulHeight = this.$refs.ul.offsetHeight;
            // ul已经卷进去的高度
            var ulScrollHeight = this.leftBs.y;
            // content-left的高度
            var leftbsHeight = this.$refs.left.offsetHeight
            // ul没有卷进去的高度
            var offsetHeight = ulHeight + ulScrollHeight
 
            if(offsetHeight <= leftbsHeight) {
                window.console.log("123123")
            }else {
                // 也先得计算出来最大滚动值
                var maxScrollHeight = ulHeight - leftbsHeight;
                // 需要滚动的高度
                var xyScrollHeight = this.$refs.li[index].offsetTop;

                if(xyScrollHeight > maxScrollHeight) {
                    // 如果需要滚动的高度大于最大滚动高度，只需要滚动到最大滚动高度即可
                    this.leftBs.scrollTo(0, -maxScrollHeight, 300)
                }else {
                    // 2.计算需要滚动的距离进行滚动
                    // window.console.log(this.$refs.li[0].offsetHeight)
                    var scrollHeight = index * this.$refs.li[index].offsetHeight;
                    // window.console.log(scrollHeight)
                    this.leftBs.scrollTo(0, -scrollHeight, 300)
                }
                
            }
        }
    },
    async mounted() {
        // 在加载之前进行显示
        // this.loading.
        this.$refs.load.showLoading()
        // 请求分类列表
        this.bookCateList = await getBookCateList()
        this.$nextTick(()=> {
            // 渲染完毕
            this.$refs.load.hideLoading()
            // 请求到之后并且成功渲染页面之后才设置betterscroll容器
            this.leftBs = new BScroll('.content-left', {
                pullUpLoad: true,
                wheel: true,
                scrollbar: true,
                click: true
            })

            new BScroll('.content-right', {
                pullUpLoad: true,
                wheel: true,
                scrollbar: true,
                click: true
            })
        })
    }
}
</script>
<style scoped>
    .category {
        height: 100%;
    }
    .content {
        display: flex;
        height: calc(100% - 98px);
    }
    .content-left {
        height: 100%;
        /* overflow-y: auto; */
    }

    .content-left li{
        width: 80px;
        height: 47px;
        text-align: center;
        line-height: 47px;
        font-size: 14px;
    }

    .active {
        background: #EFF4FA;
        color: #E98982;
    }

    .content-right {
        margin-left: 10px;
    }

    .content-right ul li {
        margin-bottom: 20px;
    }
</style>