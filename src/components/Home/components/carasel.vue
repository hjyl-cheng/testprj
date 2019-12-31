<template>
  <!-- 解决Loop -->
  <swiper :options="swiperOption" v-if="swiperSlides.length>0">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img v-lazy="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    created() {
        fetch("http://127.0.0.1:8080/dang/banner").then((data)=> {
            return data.json()
        }).then((data)=> {
            this.swiperSlides = data
        })
    },
    data() {
      return {
        swiperOption: {
          autoplay:true,
          loop : true,
          pagination: {
            el: '.swiper-pagination'
          }
        },
        swiperSlides: []
      }
    },
    mounted() {
      
    }
  }
</script>