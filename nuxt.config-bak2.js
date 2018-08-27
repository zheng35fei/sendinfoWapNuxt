const { resolve } = require('path')
const baseUrl = 'http://192.168.200.59:8080/'

module.exports = {
    env: {
        baseUrl: 'http://192.168.200.59:8080'   // 接口地址
    },
    /*
    ** Headers of the page
    */
    head: {
        title: 'xxxx',
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
    render: {
        resourceHints: false
    },
    build: {
        extractCSS: true,
        // babel: {
        //     plugins: ['transform-decorators-legacy', 'transform-class-properties']
        // }
    },
    serverMiddleware: ['./api/auth'],
    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: { propertyName: 'token.accessToken' }
                }
            }
        }
    },
    modules: ['@nuxtjs/axios'],
    axios: {
        proxy: true, // Can be also an object with default options
        baseURL: baseUrl,
    },
    proxy: {
        '/product/': baseUrl,
        '/leaguer/': baseUrl,
        '/order/': baseUrl,
        '/info/': baseUrl,
        '/pay/': baseUrl,
    }
}