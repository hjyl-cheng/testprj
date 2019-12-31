<template>
  <div class="loading" v-if="isShow">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>
<script>
export default {
    data() {
        return {
            isShow: false
        }
    },
    methods: {
        showLoading() {
            this.isShow = true;
        },
        hideLoading() {
            this.isShow = false;
        }
    }
};
</script>
<style scoped>
.loading {
  width: 160px;
  height: 80px;
  position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
.loading span {
  display: inline-block;
  width: 16px;
  height: 100%;
  border-radius: 8px;
  background: lightgreen;
  -webkit-animation: load 1s ease infinite;
}
@-webkit-keyframes load {
  0%,
  100% {
    height: 80px;
    background: lightgreen;
  }
  50% {
    height: 140px;
    margin: -30px 0;
    background: lightblue;
  }
}
.loading span:nth-child(2) {
  -webkit-animation-delay: 0.2s;
}
.loading span:nth-child(3) {
  -webkit-animation-delay: 0.4s;
}
.loading span:nth-child(4) {
  -webkit-animation-delay: 0.6s;
}
.loading span:nth-child(5) {
  -webkit-animation-delay: 0.8s;
}
</style>