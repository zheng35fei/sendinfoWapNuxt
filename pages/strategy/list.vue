<template>
    <div>
        <div id="search-h" class="search-bar-box">
            <div id="searchBar" class="search-bar"><input type="text" placeholder="搜索关键字" class="list-search-input">
                <button class="search-btn font-icon icon-search"></button>
            </div>
        </div>

        <div data-module="strategy" class="drop-box raiders-list">
            <ul class="page-list list-main">
                <li>
                    <nuxt-link to="">
                        <div class="raiders-img">
                            <img src="http://bzb.sendinfo.com.cn/static//fileupload/20180510/201805101435501gdh5x.jpeg"
                                 alt="图片">
                        </div>
                        <div class="raiders-info">
                            <h3>黄山邀你一同领略云海之美</h3>
                            <p>
                                <span><i class="font-icon icon-clock"></i>2018-05-10 14:35:54</span>
                                <span class="fr"><i class="font-icon icon-views"></i>7</span>
                            </p>
                        </div>
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
<style>
    @import '~/assets/stylesheets/list.css';
</style>
<script>
    import Footer from '~/components/Footer.vue'
    // import OtherComponent from './components/other.vue'

    export default {
        data() {
            return {
                msg: 'hello vue'
            }
        },
        components: {
            Footer
        }
    }
</script>