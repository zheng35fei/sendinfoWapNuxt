<template>
    <div>
        <header class="member-header">
            <h3 class="user-name c-333">{{username}}</h3>
            <p class="header-explian c-666">welcome</p>
            <a href="javascript:;" class="user-face">
                <i class="font-icon icon-iconfont-geren"></i>
            </a>
            <!--p.header-explian.me-score-->
            <!--    em 等级 #{data.elevelCode}--><!--    label 积分： #{data.leaguerScore || 0}-->
        </header>

        <section>
            <ul class="tab clearfix member-tab">
                <li>
                    <a href="/list/order?orderStatus=0">
                        <i class="font-icon icon-iconfont-daizhifu dingdan-unpay"></i>待支付
                    </a>
                </li>
                <li>
                    <a href="/list/order?orderStatus=1">
                        <i class="font-icon icon-iconfont-yizhifu2 dingdan-pay"></i>已出票
                    </a>
                </li>
                <li>
                    <a href="/list/order?orderStatus=2">
                        <i class="font-icon icon-iconfont-gougou dingdan-complent"></i>已完成
                    </a>
                </li>
                <li>
                    <a href="/list/refund?orderStatus=-1">
                        <i class="font-icon icon-iconfont-tuikuan dingdan-refund"></i>退单
                    </a>
                </li>
            </ul>
        </section>

        <ul class="order-list member-list">
            <li>
                <a href="/list/order"><label class="lab-title">
                    <i class="font-icon icon-iconfont-dingdan"></i>全部订单</label>
                    <i class="font-icon fr icon-iconfont-jiantou"></i>
                </a>
            </li>
        </ul>

        <div class="page-line"></div>

        <ul class="order-list member-list">
            <li>
                <a href="/member/user">
                    <label for="" class="lab-title">
                        <i class="font-icon icon-iconfont-suo"></i>账户中心
                    </label>
                    <i class="font-icon fr icon-iconfont-jiantou"></i>
                </a>
            </li>
        </ul>
        <div class="page-line"></div>
        <ul class="order-list member-list">
            <li>
                <a href="/coupons/member">
                    <label for="" class="lab-title">
                        <i class="font-icon icon-iconfont-hongbao"></i>优惠劵</label>
                    <i class="font-icon fr icon-iconfont-jiantou"></i>
                </a>
            </li>
            <li>
                <a href="tel:400-000-000">
                    <label for="" class="lab-title">
                        <i class="font-icon icon-italk"></i>客服
                    </label>
                    <i class="font-icon fr icon-iconfont-jiantou"></i>
                </a>
            </li>
        </ul>
        <div class="page-line"></div>
        <ul class="order-list member-list">
            <li>
                <a href="javascript:;" @click="$auth.logout()">
                    <label for="" class="lab-title"><i
                            class="font-icon icon-iconfont-tuichu"></i>退出登录
                    </label>
                </a>
            </li>
        </ul>

        <Footer></Footer>
    </div>
</template>
<style>
    @import '../../assets/stylesheets/member.css';
</style>
<script>
    import {mapGetters} from 'vuex'
    import Footer from '~/components/Footer.vue'

    export default {
        middleware: ['auth'],
        data() {
            return {
                msg: 'hello vue'
            }
        },
        computed: {
            ...mapGetters({
                username: 'auth/username'
            })
        },
        components: {
            Footer
        },
        methods: {
            back() {
                this.$router.back();
            }

        }
    }
</script>
