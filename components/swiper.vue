<template>
    <div class="swiperBox">
        <swiper :option="optionSwiper" @set-translate="onSetTranslate">
            <swiper-slide v-for="item in imgDatas">{{item.mig}}</swiper-slide>
        </swiper>
    </div>
</template>
<style>
    body {
        background-color: #ff0000;
    }
</style>
<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        data() {
            return {
                msg: 'hello vue',
                optionSwiper: {}
            }
        },
        porps: ['imgDatas'],
        components: {
            swiper,
            swiperSlide
        },
        methods: {
            onSetTranslate() {
                console.log('onSetTranslate')
            }
        }
    }
</script>