<template>
    <div class="hs-footer">
        <ul>
            <li>
                <nuxt-link to="/">
                    <i class="icon-ihome"></i>
                    <p>首页</p>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/order/list">
                    <i class="icon-iorder"></i>
                    <p>订单</p>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/strategy/list">
                    <i class="icon-nav-order"></i>
                    <p>攻略</p>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/user">
                    <i class="icon-imember"></i>
                    <p>我的</p>
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>
<style>

</style>
<script>
    export default {
        data() {
            return {}
        }
    }
</script>