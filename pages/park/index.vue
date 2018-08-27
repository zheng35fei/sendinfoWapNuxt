<template>
    <div>
        <div>this is template body</div>
        <h3>{{params}}</h3>
    </div>
    <!--<header-component/>-->
    <!--<other-component/>-->
</template>
<style scoped>

</style>
<script>
    // import HeaderComponent from './components/header.vue'
    // import OtherComponent from './components/other.vue'
    export default{
        asyncData ( ctx ){
            console.log('params', ctx);
            return {
              params: 'aaaaaaaaa'
            }
        },
        layout: 'wap',
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            // 'other-component':OtherComponent,
            // HeaderComponent,
        },
        mounted(){
          console.log(1111, this)
        }
    }
</script>
