<template>
    <div>
        <h3>this is template index</h3>
        <div @click="back">back1</div>
        <h4>{{username}}</h4>
    </div>
</template>
<style>

</style>
<script>
    import { mapGetters } from 'vuex'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        computed:{
            ...mapGetters({
                username: 'auth/username'
            })
        },
        components:{
        },
        methods:{
            back(){
                this.$router.back();
            }

        }
    }
</script>
