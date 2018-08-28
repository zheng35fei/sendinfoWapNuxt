export default function (ctx, n) {
    ctx.$axios.onRequest(config => {
        console.log('before', config.url)
        // 删除api前缀
        console.log('middle', config.url.split('/apiPrefix'))
        if (process.server) {
            config.url = config.url.split('/apiPrefix').length > 1 ? config.url.split('/apiPrefix')[1] : config.url
            console.log('after', config.url)
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
    })
}