<template>
    <section class="container">
        <div>
            <div class="hs-banner">
                <!--<img-swiper :imgDatas="head_carousel"></img-swiper>-->
                <div class="bg-banner">
                    <div id="banner_swiper" class="swiper-container swiper-container-horizontal">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="item in head_carousel" :key="item.createTime">
                                <a :href="item.url">
                                    <img :src="item.mig" :alt="item.name">
                                </a>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
                <div class="top-announcement">
                    <img src="~/assets/images/index/icon_announcement_03.png" class="icon-announcement">
                    <div id="shuffling_ann" class="swiper-container swiper-container-vertical">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="item in strategy" :key="item.createTime">
                                <a :href="'/detail/strategy/' + item.baseCode">{{item.title}}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="white-gradient"></div>
                <div class="bottom-cloud"><img src="~/assets/images/index/white_cloud_02.png" alt=""></div>
                <div class="weather">
                    <iframe src="//www.seniverse.com/weather/weather.aspx?uid=U98F69A4D4&amp;cid=CHAH090700|%E5%A4%A9%E6%B0%94%EF%BC%9A&amp;l=zh-CHS&amp;p=SMART&amp;a=0&amp;u=C&amp;s=7&amp;m=0&amp;x=0&amp;d=1&amp;fc=D10F41&amp;bgc=&amp;bc=&amp;ti=0&amp;in=0&amp;li="
                            frameborder="0" scrolling="no" width="180" height="20" allowtransparency="true"></iframe>
                </div>
            </div>

            <div class="hs-nav">
                <ul class="clearfix">
                    <li>
                        <nuxt-link to="/park/list">
                            <img src="~assets/images/index/icon_ticket.png" alt="景区门票">
                            <p>景区门票</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/park/list">
                            <img src="~assets/images/index/icon_hotel.png" alt="酒店住宿">
                            <p>酒店住宿</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/park/list">
                            <img src="~assets/images/index/icon_foods.png" alt="餐饮美食">
                            <p>餐饮美食</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/park/list">
                            <img src="~assets/images/index/icon_strategy.png" alt="跟团游">
                            <p>跟团游</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/park/list">
                            <img src="~assets/images/index/icon_combo.png" alt="游玩套餐">
                            <p>游玩套餐</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/park/list">
                            <img src="~assets/images/index/icon_tram.png" alt="交通包车">
                            <p>交通包车</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/park/list">
                            <img src="~assets/images/index/icon_tour.png" alt="导游">
                            <p>导游</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/park/list">
                            <img src="~assets/images/index/icon_shopping.png" alt="娱乐购物">
                            <p>娱乐购物</p>
                        </nuxt-link>
                    </li>
                </ul>
            </div>

            <div class="hs-search">
                <div class="search-box clearfix"><input type="text" placeholder="请输入您要搜索的景区"><span id="searchBtn"
                                                                                                   class="button">搜索</span>
                </div>
            </div>

            <div class="hs-adv">
                <div class="bg-banner">
                    <div id="adv_swiper" class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <a href="http://hswap.sendinfo.com.cn/">
                                    <img src="http://bzb.sendinfo.com.cn/static//fileupload/20180510/201805101441007ugsvn.jpg" alt="中间轮播2">
                                </a>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>


            <div class="hs-active">
                <div id="active_swiper" class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <a href="http://hswap.sendinfo.com.cn/detail/ticket/park2018042517194831">
                                <img src="http://bzb.sendinfo.com.cn/static//fileupload/20180510/20180510144241sr2cmp.jpg" alt="黄山门票">
                                <p class="title">黄山门票</p>
                                <span><i>￥</i><em>230</em><s>￥230</s></span>
                                <strong><img src="images/index/ico_hot_03.png" alt="..."></strong>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="hs-list">
                <div id="slideTxtBox" class="fq-slide-box">
                    <div class="hd fq-recommend-nav">
                        <div class="list-title"><img src="~/assets/images/index/ico_fire.jpg" alt="..."><em>当季热卖</em></div>
                        <ul class="clearfix">
                            <li class="on">门票</li>
                            <li>酒店</li>
                            <li>美食</li>
                        </ul>
                    </div>
                    <div class="img-list">
                        <div id="fq_swiper"
                             class="swiper-container">
                            <div class="swiper-wrapper fq-img-list">
                                <ul class="swiper-slide clearfix"></ul>
                                <ul class="swiper-slide clearfix swiper-slide-active">
                                    <li>
                                        <a href="http://hswap.sendinfo.com.cn/detail/ticket/park2018042517194831" class="clearfix">
                                            <img src="http://bzb.sendinfo.com.cn/static//fileupload/20180510/201805101446469oxjta.jpg" alt="黄山门票">
                                            <span class="content">
                                                <em class="title">黄山门票</em>
                                                <strong>							</strong>
                                                <span class="price"><i>￥</i><em>230</em><s>￥230</s>
                                                    <span class="label"></span>
                                                </span>
                                            </span>
                                            <span class="flog"><em>热门</em></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    </section>
</template>

<script>
    import AppLogo from '~/components/AppLogo.vue'
    import Footer from '~/components/Footer.vue'
    import api from "~/utils/api"
    // import imgSwiper from '../components/swiper'

    export default {
        head: {
            title: '首页'
        },
        layout: 'wap',
        components: {
            AppLogo,
            Footer,
            // imgSwiper
        },
        data() {
            return {
                indexData: {},
            }
        },
        async asyncData(ctx) {
            let indexUrl = '/apiPrefix' + api.main.index.allInfo;
            let params = {
                modelCode: 'index',
                corpCode: 'cgb2cfxs'
            };
            let indexRes = await ctx.$axios.get(indexUrl, {params});
            // console.log('indexData', indexRes.data.data)
            return {
                ...indexRes.data.data
            }
        }
    }
</script>

<style scoped="scoped">
    @import "../assets/stylesheets/index.css";
</style>

