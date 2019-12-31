<template>
    <div class="home">
        <!-- 搜索框 -->
        <search/>
        <!-- 轮播图 -->
        <carasel/>
        <!-- 分类 
            需要用-隔开
        -->
        <category-list></category-list>
        <!-- 今日秒杀 -->
        <seckill/>
        <!-- 图片 -->
        <ul>
            <li>
                <img src="http://img63.ddimg.cn/upload_img/00796/1/11.18-1575272441.png" alt="">
            </li>
            <li>
                <img src="http://img63.ddimg.cn/upload_img/00796/1/11.18-1575272441.png" alt="">
            </li>
            <li>
                <img src="http://img63.ddimg.cn/upload_img/00796/1/11.18-1575272441.png" alt="">
            </li>
            <li>
                <img src="http://img63.ddimg.cn/upload_img/00796/1/11.18-1575272441.png" alt="">
            </li>
            <li>
                <img src="http://img63.ddimg.cn/upload_img/00796/1/11.18-1575272441.png" alt="">
            </li>
            <li>
                <img src="http://img63.ddimg.cn/upload_img/00796/1/11.18-1575272441.png" alt="">
            </li>
            <li>
                <img src="http://img63.ddimg.cn/upload_img/00796/1/11.18-1575272441.png" alt="">
            </li>
            <li>
                <img src="http://img63.ddimg.cn/upload_img/00796/1/11.18-1575272441.png" alt="">
            </li>
            <li>
                <img src="http://img63.ddimg.cn/upload_img/00796/1/11.18-1575272441.png" alt="">
            </li>
            <li>
                <img src="http://img63.ddimg.cn/upload_img/00796/1/11.18-1575272441.png" alt="">
            </li>
            <li>
                <img src="http://img63.ddimg.cn/upload_img/00796/1/11.18-1575272441.png" alt="">
            </li>
            <li>
                <img src="http://img63.ddimg.cn/upload_img/00796/1/11.18-1575272441.png" alt="">
            </li>
            <li>
                <img v-lazy="img" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
    import search from "./components/search.vue"
    import carasel from "./components/carasel.vue"
    import categoryList from "./components/category.vue"
    import seckill from "./components/seckill"
    export default {
        data() {
            return {
                img: 'http://img61.ddimg.cn/upload_img/00796/1/10.22-1575272532.png'
            }
        },
        components: {
            search,
            carasel,
            categoryList,
            seckill
        }
    }
</script>
<style scoped>
.home {
    background: #EFF4FA
}
</style>