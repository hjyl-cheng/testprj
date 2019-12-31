<template>
  <div id="app">
      <!-- 做一个导航 -->
      <navlist></navlist>
      <!-- {{this.$route.meta}} -->
      <!-- {{$route.meta}} -->
      <keep-alive>
        <transition name="bounce">
          <router-view v-if="this.$route.meta.isCache"></router-view>
        </transition>
      </keep-alive>
      <transition name="bounce">
        <router-view v-if="!this.$route.meta.isCache"></router-view>
      </transition>
  </div>  
</template>


<script>
import navlist from "@/common/navlist.vue"
export default {
  name: 'app',
  components: {
    navlist
  }
}
</script>

<style >
#app {
  height: 100%;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>