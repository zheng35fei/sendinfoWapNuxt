<template>
    <div class="login-bg">
        <div class="login-logo"><img src="~/assets/images/login/logo_03.png" alt="logo"></div>
        <div class="login-main">
            <div id="login_type" class="login-type clearfix">
                <span :class="{on : formIndex === 1}" @click="showForm(1)">帐号登录</span>
                <span :class="{on : formIndex === 2}" @click="showForm(2)">动态密码登录</span>
            </div>

            <div class="login-list" v-if="formIndex === 1">
                <form @submit.prevent="loginSubmit">
                    <div class="input-box text" novalidate="novalidate" :rules="ruleCustom">
                        <i><img src="~/assets/images/login/ico_phone.png" alt="手机号"></i>
                        <input type="text" name="loginName" placeholder="请输入手机号码" v-model.trim="logindata.loginName">
                    </div>
                    <div class="input-box text">
                        <i><img src="~/assets/images/login/ico_password.png" alt="密码"></i>
                        <input type="password" name="loginPass" placeholder="请输入密码" v-model.trim="logindata.loginPass">
                    </div>
                    <div class="other-box clearfix">
                        <div class="forget-password"><a href="/forgetPassword">忘记密码？</a></div>
                        <div class="go-register"><a href="/register">立即注册</a></div>
                    </div>
                    <div class="input-box input-button">
                        <input id="submitBtn" :disabled="requestting" type="submit" data-url="./member" value="立即登录">
                    </div>
                </form>
            </div>

            <div class="login-list quick-login" v-if="formIndex === 2">
                <form id="submitLogin" action="phoneNumberLogin" method="post" novalidate="novalidate">
                    <div id="getCardPhone" class="input-box text">
                        <!--select.number-select(name='', id='')option(value='') 中国 +86-->
                        <i><img src="~/assets/images/login/ico_phone.png" alt="手机号"></i>
                        <input type="tel" name="mobile" placeholder="请输入手机号码" v-model.trim="logindata.loginName">
                    </div>
                    <div class="input-box code clearfix">
                        <input type="button" value="获取验证码" data-type="pcLogin" class="fr" @click="getValidateCode">
                        <input type="tel" name="checkCode" placeholder="请输入验证码" class="input-code" v-model.trim="logindata.checkCode">
                    </div>
                    <div class="input-box input-button">
                        <input id="quickLogin" type="submit" data-url="./member" value="立即登录">
                    </div>
                </form>
            </div>
        </div>
        <div id="mask" class="mask" style="height: 667px;">
            <div class="tips"><p></p><a href="javascript:;" class="queding">确定</a></div>
        </div>
    </div>
</template>
<style scoped>
    @import "../assets/stylesheets/login.css";
</style>
<script>
    import api from '../utils/api'
    import querystring from 'querystring'
    import { mapGetters } from 'vuex'
    export default {
        head: {
            title: '登录',
        },
        data() {
            return {
                formIndex: 1,
                logindata: {},
                ruleCustom: {
                    loginName: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    loginPass: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ]
                },
                requestting: false
            }
        },
        computed: {
            ...mapGetters({
                username:'auth/username'
            })
        },
        methods: {
            showForm: function (i) {
                console.log(i)
                this.formIndex = i;
            },

            // send phone validate code
            getValidateCode: async function(){
                let url = api.member.login.sendCheckCode
                // reg:wap注册
                // pwd:wap找回密码
                // pcLogin:PC端手机快捷登录
                // pcReg:PC端注册
                let params = {
                    mobile: this.logindata.loginName,
                    sendType: 'pcLogin'
                }
                url = url + '?' + querystring.stringify(params)
                let phoneCodeRes = await this.$axios.post(url)
                console.log(phoneCodeRes.data.message)
            },

            // login by password
            loginSubmit: async function () {
                return this.$auth.loginWith('local', {
                    data: {
                        username: this.logindata.loginName,
                        password: this.logindata.loginPass,
                    }
                }).catch(e => {
                    this.error = e + ''
                })
            },
        },
        components: {}
    }
</script>
