<template>
    <div>
        <div id="search-h" class="member-search-box">
            <section data="" class="header-tab has-search member-search">
                <ul id="myOrderTab" class="tab clearfix myorder-tab">
                    <li><a href="/orderList/order" class="c-base">全部订单</a></li>
                    <li><a href="/list/order?orderStatus=0">待支付</a></li>
                    <li><a href="/list/order?orderStatus=1">已出票</a></li>
                    <li><a href="/list/order?orderStatus=2">已完成</a></li>
                    <li><a href="/list/refund?orderStatus=-1">退单</a></li>
                </ul>
            </section>
        </div>

        <div class="page-line page-line2"></div>

        <div data-module="order" class="drop-box ">
            <ul class="page-list list-main">
                <li class="myorder-item">
                    <nuxt-link to="">
                        <div class="myorder-header">
                            <span class="order-info">
                                <i class="font-icon icon-iconfont-shouji3"></i><em>购物</em>|<em class="unpay"> 未发货</em>
                            </span>
                            <span>下单日期：2018-08-15</span><span class="price fr"><em>￥</em>0.02</span>
                        </div>
                        <h3 class="myorder-item-title">4.0测试商家(4.0测试洗发水别名)</h3>
                        <p>快递</p>
                        <p>浙江省杭州市市辖区爱爱爱</p>
                        <p><i class="font-icon fr icon-iconfont-jiantou"></i>1件</p>
                    </nuxt-link>
                </li>
                <li class="page-line"></li>
                <li class="myorder-item">
                    <nuxt-link to="">
                        <div class="myorder-header">
                            <span class="order-info">
                                <i class="font-icon icon-iconfont-jiudian"></i><em>酒店</em>|<em class="unpay">待消费</em>
                            </span>
                            <span class="creatTime">下单日期：2018-08-15 09:28:33</span>
                            <span class="price fr"><em>￥</em>0.01</span>
                        </div>
                        <h3 class="myorder-item-title">
                            自动生成酒店15325952658719959(自动生成渠道码153259735259027)</h3>
                        <p>订单号：18318081509112800602812</p>
                        <p>未使用</p>
                        <p><i class="font-icon fr icon-iconfont-jiantou"></i>1张</p>
                    </nuxt-link>
                </li>

            </ul>
            <div class="dropload-down">
                <div class="dropload-refresh">↑上拉加载更多</div>
            </div>
        </div>

        <Footer></Footer>
    </div>
</template>
<style scoped>
    @import "~/assets/stylesheets/list.css";
</style>
<script>
    import Footer from '~/components/Footer.vue'
    import api from '~/utils/api.js'
    // import OtherComponent from './components/other.vue'
    export default {
        async asyncData(ctx) {
            let url = ctx.env.prefix + api.member.order.pagelist
            let params = {
                buyerId: 0,
                currPage: 0,
                pageSize: 10
            };
            console.log('2222222222222ctx', ctx)
            console.log('11111111ctx', ctx.app.$auth.$state.user)
            // let orderListRes = await ctx.$axios.get(url, {
            //     params,
            //     headers: {'access-token': }
            // });
            return {
                // params: orderListRes.data.data
            }
        },
        layout: 'wap',
        data() {
            return {
                msg: 'hello vue'
            }
        },
        components: {
            Footer
        },
        mounted() {
        }
    }
</script>
