export default function (ctx, n) {
    ctx.$axios.onResponse( response => {
        if( response.data.status === 401 ){
            ctx.redirect('/login')
        } else {
            console.log('plugins axios', response.data)
            // ctx.error(response.data.message)
            // redirect('/error')
        }
    })
}