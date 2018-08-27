<template>
    <div>child this is template body aa {{id}}</div>
</template>
<style>
    body{
        background-color:#fff;
    }
</style>
<script>
    export default{
        validate({ params }){
            return /^\d+$/.test(params.id)
        },
        data(){
            return{
                msg:'hello vue',
                id: ''
            }
        },
        components:{

        },
        mounted(){
          console.log(111111111111, this.$route.params)
          console.log(111111111111, this.$route.query)
        }
    }
</script>
