<template>
    <div class="cate">
        <ul>
            <li v-for="(item, index) in cateList" :key="index">
                <img v-lazy="item" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
    import {getCateList} from "@/api"
    export default {
        data() {
            return {
                cateList: []
            }
        },
        async created() {
            this.cateList = await getCateList()
        }
    }
</script>
<style scoped>
    .cate ul{
        display: flex;
        flex-wrap: wrap;
    }

    .cate ul li {
        width: 20%;
    }
</style>