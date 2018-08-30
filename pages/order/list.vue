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

        <div data-module="order" class="drop-box">
            <ul class="page-list list-main">
                <template v-for="item in orderListData.rows">
                    <li class="myorder-item" :key="item.id" v-if="item.orderType === 'shop'">
                        <nuxt-link :to="'/order/detail/'+ item.modelCode">
                            <div class="myorder-header">
                                <span class="order-info">
                                    <i class="font-icon icon-iconfont-shouji3"></i><em>{{item.orderType}}</em>|<em
                                        class="unpay"> {{item.sendStatus}}</em>
                                </span>
                                <span>下单日期：{{item.createTime}}</span><span class="price fr"><em>￥</em>{{item.orderSum}}</span>
                            </div>
                            <h3 class="myorder-item-title">{{item.orderInfo}}</h3>
                            <p>{{item.sendType}}快递</p>
                            <p>{{item.linkAddr}}</p>
                            <p><i class="font-icon fr icon-iconfont-jiantou"></i>1件</p>
                        </nuxt-link>
                    </li>

                    <li class="myorder-item" v-else>
                        <nuxt-link :to="'/order/detail/'+ item.modelCode">
                            <div class="myorder-header">
                            <span class="order-info">
                                <i class="font-icon icon-iconfont-jiudian"></i><em>{{item.orderType}}</em>|<em
                                    class="unpay">{{item.sendStatus}}</em>
                            </span>
                                <span class="creatTime">下单日期：{{item.createTime}}</span>
                                <span class="price fr"><em>￥</em>{{item.orderSum}}</span>
                            </div>
                            <h3 class="myorder-item-title">{{item.orderInfo}}</h3>
                            <p>订单号：{{item.orderNo}}</p>
                            <p>未使用</p>
                            <p><i class="font-icon fr icon-iconfont-jiantou"></i>1张</p>
                        </nuxt-link>
                    </li>
                </template>


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
        async asyncData({env, app}) {
            const url = env.prefix + api.member.order.pagelist
            const userInfo = app.$auth.$state.user;
            const params = {
                buyerId: userInfo.leaguerId,
                currPage: 1,
                pageSize: 10
            };
            let orderListRes = await app.$axios.get(url, {
                params,
                headers: {'access-token': userInfo.token}
            });
            console.log('orderlistres', orderListRes.data.data)
            return {
                orderListData: orderListRes.data.data
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
            console.log('111111111111111111111111111111111111111111111')
            console.log('33333mounted', this.$auth.$state.user)
        }
    }
</script>
