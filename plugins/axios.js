export default function (ctx, n) {
    ctx.$axios.onRequest(config => {
        // 删除api前缀
        if (process.server) {
            config.url = config.url.split('/apiPrefix').length > 1 ? config.url.split('/apiPrefix')[1] : config.url
            // /api/auth url地址，需修改baseUrl
            if (config.url.indexOf('/api/auth') > -1) {
                config.baseURL = 'http://' + ctx.req.headers.host
            }
        }
    });
    ctx.$axios.onResponse( response => {
        if( response.data.status === 401 ){
            ctx.redirect('/login')
        } else {
            // console.log('plugins axios', response.data)
            // ctx.error(response.data.message)
            // redirect('/error')
        }
    });
    ctx.$axios.onError(err => {
        console.log('error 出错了', err)
    })
}