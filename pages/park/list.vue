<template>
    <div>
        <div>this is template body</div>
        <h3>{{params}}</h3>
        <nuxt-link to="/user">個人中心</nuxt-link>

        <div class="list">
            <div data-module="park" data-type="" class="drop-box ">
                <ul class="page-list list-main">
                    <li v-for="item in listData" :key="item.id + Math.random()">
                        <nuxt-link to="/park/detail/">
                            <div class="page-list-img">
                                <img
                                        :src= item.linkMobileImg
                                        :alt= item.name>
                            </div>
                            <div class="page-list-info">
                                <h3 class="page-list-title">
                                    <div class="list-title-box">{{item.name}}</div>
                                    <span class="pro-flag c-base border-base">自然风光</span>
                                </h3>
                                <p class="page-list-article one">世界文化与自然遗产、世界地质公园，是国家级风景名胜区、全国文明风景旅游区、国家5A级旅游景区</p>
                                <span class="price fr">
                                <em>￥</em><strong>115.00</strong>起
                            </span>
                                <p class="page-list-explian">
                                    <span class="c-base">12443</span>人已购买
                                </p>
                            </div>
                        </nuxt-link>
                        <!--<a class="clearfix" href="/detail/ticket/park2017122114525726">-->
                    </li>
                </ul>
                <div class="dropload-down">
                    <div class="dropload-noData">暂无更多数据</div>
                </div>
            </div>
        </div>
        <div @click="getList">aaaaaaaa</div>
    </div>
    <!--<header-component/>-->
    <!--<other-component/>-->
</template>
<style scoped>
    @import "../../assets/stylesheets/list.css";
</style>
<script>
    export default {
        async asyncData(ctx) {
            //try {
                console.log(22222, process.server)
                console.log(3333, process.client)
                const listUrl = '/product/api/product/parks';
                let params = {
                    "currPage": 1,
                    "pageSize":10,
                    "corpCode": "cgb2cfxs",
                    "wayType": "2"
                };

                let listData = await ctx.$axios.get(listUrl, { params });
                // console.log(JSON.stringify(listData))
                // console.log(listData.data.data.rows)
                return {
                    params: 'aaaaaaaaa',
                    listData: listData.data.data.rows
                }
            // } catch (e) {
            //     throw new Error(e)
            // }


        },
        layout: 'wap',
        data() {
            return {
                listData: [],
                msg: 'hello vue'
            }
        },
        mounted() {
            console.log(1111, this)
        },
        methods:{
             getList: async function () {
                const listUrl = '/product/api/product/parks';
                let params = {
                    "currPage": 1,
                    "pageSize":10,
                    "corpCode": "cgb2cfxs",
                    "wayType": "2"
                };

                let listData = await this.$axios.get(listUrl, { params });
                 this.listData = this.listData.concat(listData.data.data.rows)
                // this.listData.push(listData.data.data.rows[0])
                 console.log(this.listData)
            }
        }
    }
</script>
