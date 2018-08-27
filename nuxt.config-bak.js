// const bodyParser = require('body-parser')
// const session = require('express-session')
const { resolve } = require('path')

module.exports = {
    env: {
        baseUrl: 'http://192.168.200.59:8080'   // 接口地址
    },
    /*
    ** Headers of the page
    */
    head: {
        title: 'sendinfo-wap',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Nuxt.js project'}
        ],
        script: [
            {src: '/js/jquery-1.8.3.min.js'},
            {src: '/js/public.js'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    css: [
        '~/assets/stylesheets/reset.css',
        '~/assets/stylesheets/common.css',
        '~/assets/main.css',
    ],
    /*
    ** Customize the progress bar color
    */
    loading: {color: '#3B8070'},
    /*
    ** Build configuration
    */
    plugins: ['~/plugins/vue-notifications',
        '~/plugins/axios'
    ],

    build: {
        // vendor: ['axios', '~/plugins/vue-notifications'],

        /*
        ** Run ESLint on save
        */
        extend(config, {isDev}) {
            if (isDev && process.client) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    router: {},

    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth',
    ],
    // auth: {
    //     strategies: {
    //         local: {
    //             endpoints: {
    //                 login: [ { url: '/leaguer/api/leaguer/leaguerLogin', method: 'get', propertyName: 'data.data.token' },
    //                     { url: '/leaguer/api/leaguer/leaguerMobileLogin', method: 'get', propertyName: 'data.data.token' }],
    //                 logout: { url: '/leaguer/api/leaguer/manage/leaguerLogout', method: 'get' },
    //                 user: { url: '/api/leaguer/manage/leaguerInfo', method: 'get', propertyName: 'user' }
    //             },
    //             // tokenRequired: true,
    //             // tokenType: 'bearer',
    //         }
    //     },
    //     redirect: {
    //         login: '/login',
    //         logout: '/',
    //         callback: '/login',
    //         user: '/user'
    //     },
    //     token: {
    //         prefix: '_SDToken'
    //     },
    //     localStorge:{
    //         prefix: 'SDAuth.'
    //     },
    //     cookie: {
    //         prefix: 'SDAuth.',
    //         options: {
    //             path: '/'
    //         }
    //     }
    // },
    axios: {
        proxy: true, // Can be also an object with default options
        baseURL: 'http://192.168.200.59:8080/',
    },
    proxy: {
        '/product/': 'http://192.168.200.59:8080/',
        '/leaguer/': 'http://192.168.200.59:8080/',
        '/order/': 'http://192.168.200.59:8080/',
        '/info/': 'http://192.168.200.59:8080/',
        '/pay/': 'http://192.168.200.59:8080/',
    }
}

