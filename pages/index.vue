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
                    <li><a href="/park/list"><img src="~/assets/images/index/icon_ticket.png" alt="...">
                        <p>景区门票</p></a></li>
                    <li><a href="/hotel/list"><img src="~/assets/images/index/icon_hotel.png" alt="...">
                        <p>酒店住宿</p></a></li>
                    <li><a href="/repast/list"><img src="~/assets/images/index/icon_foods.png" alt="...">
                        <p>餐饮美食</p></a></li><!--li--><!--  a(href='list/strategy')-->
                    <!--    img(src='images/index/icon_strategy.png', alt='...')--><!--    p 游玩攻略-->
                    <li><a href="/route/list"><img src="~/assets/images/index/icon_strategy.png" alt="...">
                        <p>跟团游</p></a></li>
                    <li><a href="/combo/list"><img src="~/assets/images/index/icon_combo.png" alt="...">
                        <p>游玩套餐</p></a></li>
                    <li><a href="list/car"><img src="~/assets/images/index/icon_tram.png" alt="...">
                        <p>交通包车</p></a></li>
                    <li><a href="/guide/list"><img src="~/assets/images/index/icon_tour.png" alt="...">
                        <p>导游</p></a></li>
                    <li><a href="/shop/list"><img src="~/assets/images/index/icon_shopping.png" alt="...">
                        <p>娱乐购物</p></a></li>
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


            <div class="hs-footer">
                <ul>
                    <li>
                        <a href="/" class="on"><i class="icon-ihome"></i>
                            <p>首页1</p>
                        </a>
                    </li>
                    <li>
                        <a href="/order/list"><i class="icon-iorder"></i>
                        <p>订单</p>
                        </a>
                    </li>
                    <li>
                        <a href="/strategy/list"><i class="icon-nav-order"></i>
                            <p>攻略</p>
                        </a>
                    </li>
                    <li>
                        <a href="/user"><i class="icon-imember"></i>
                            <p>我的</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>


        <!--<div>-->
        <!--<app-logo/>-->
        <!--<h1 class="title">-->
        <!--sendinfo-wap-->
        <!--</h1>-->
        <!--<h2 class="subtitle">-->
        <!--Nuxt.js project-->
        <!--</h2>-->
        <!--<nuxt-link to="/park/list">parklist</nuxt-link>-->
        <!--<br>-->
        <!--<nuxt-link to="/login">login</nuxt-link>-->
        <!--<br>-->
        <!--<div @click="$auth.logout()">logout</div>-->
        <!--<br>-->
        <!--<div class="links">-->
        <!--<a-->
        <!--href="https://nuxtjs.org/"-->
        <!--target="_blank"-->
        <!--class="button&#45;&#45;green">Documentation</a>-->
        <!--<a-->
        <!--href="https://github.com/nuxt/nuxt.js"-->
        <!--target="_blank"-->
        <!--class="button&#45;&#45;grey">GitHub</a>-->
        <!--</div>-->
        <!--</div>-->
    </section>
</template>

<script>
    import AppLogo from '~/components/AppLogo.vue'
    import api from "../utils/api"
    // import imgSwiper from '../components/swiper'

    export default {
        head: {
            title: '首页'
        },
        components: {
            AppLogo,
            // imgSwiper
        },
        data() {
            return {
                indexData: {}
            }
        },
        async asyncData(ctx) {
            let indexUrl = api.main.index.allInfo;
            let params = {
                modelCode: 'index',
                corpCode: 'cgb2cfxs'
            };
            let indexRes = await ctx.$axios.get(indexUrl, {params});
            console.log('indexData', indexRes.data.data)
            return {
                ...indexRes.data.data
            }
        }
    }
</script>

<style scoped="scoped">
    @import "../assets/stylesheets/index.css";

    .container {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .title {
        font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }
</style>

