<template>
    <div class="search">
        <img class="left-img" src="../images/logo.jpg" alt="">
        <div class="input">
            <img src="../images/search.png" alt="">
            <input type="text" placeholder="你当像鸟飞往你的山">
        </div>
        <img class="right-img" src="../images/cate.png" alt="">
    </div>
</template>
<style scoped>
    .left-img {
        width: 80px;
        height: 60px;
        padding: 20px;
    }

    .search>.input>img {
        width: 40px;
        height: 40px;
        margin: 0 20px;
    }

    .right-img {
        width: 60px;
        height: 60px;
         padding: 20px;
    }

    .search {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: white;
        position: relative;
        z-index: 111;
    }

    .search .input {
        height: 70px;
        background: #e8ecf0;
        display: flex;
        flex:1;
        border-radius: 32px;
        align-items: center;
    }

    .search .input>input {
        flex:1;
        height: 100%;
        background: transparent;
    }

</style>