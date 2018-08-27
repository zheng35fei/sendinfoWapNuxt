const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const jwt = require('express-jwt')
const jsonwebtoken = require('jsonwebtoken')
const axios = require('axios')
const api = require('../utils/api')

// Create app
const app = express()

// Install middleware
app.use(cookieParser())
app.use(bodyParser.json())

// JWT middleware
app.use(
    jwt({
        secret: 'dummy'
    }).unless({
        path: '/api/auth/login'
    })
)

// -- Routes --

// [POST] /login
app.post('/login', async (req, res, next) => {
    const { username, password } = req.body;
    const apiHost = process.env._AXIOS_BASE_URL_
    let loginRes = await axios.get( apiHost + api.member.login.main, {
        params: {
            loginName: username,
            loginPass: password
        }
    });

    if (loginRes.status !== 200 || loginRes.data.status !== 200) {
        // throw new Error('Invalid username or password')
        return res.json({
            message: 'Invalid username or password',
            success: 'fail'
        })
    }
    let loginInfo = loginRes.data.data;
    console.log(loginInfo)
    const accessToken = jsonwebtoken.sign(
        {
            username,
            realName: loginInfo.realName,
            token: loginInfo.token,
            leaguerId: loginInfo.leaguerId,
            scope: ['test', 'user']
        },
        'dummy'
    )

    res.json({
        token: {
            accessToken
        }
    })
})

// [GET] /user
app.get('/user', async (req, res, next) => {
    try{
        const { leaguerId, token } = req.user;
        console.log(req.user)
        let userUrl = api.member.info;
        const apiHost = process.env._AXIOS_BASE_URL_

        let userRes = await axios.get( apiHost + userUrl, {
            params: {
                leaguerId,
            },
            headers: {
                'access-token': token
            }
        });
        if (userRes.status !== 200 || userRes.data.status !== 200) {
            throw new Error('Invalid username or password')
        }
        res.json({ userInfo: Object.assign({}, userRes.data.data, req.user)})
    }catch (e) {
        res.status = e.response.status
        res.json(e.response.data)
    }

})

// [POST] /logout
app.post('/logout', async (req, res, next) => {
    const apiHost = process.env._AXIOS_BASE_URL_
    const logoutUrl = apiHost + api.member.logout;
    const { token } = req.user
    console.log(logoutUrl, token)
    let logoutRes = await axios.get(logoutUrl, {
        headers: {
            'access-token': token
        }
    })
    console.log( 'logout', logoutRes.data)
    if(logoutRes.status !== 200 || logoutRes.data.status !== 200){
        // throw new Error('退出登录失败')
        return res.json({ status: 'fail' })
    }
    res.json(logoutRes.data)
})

// Error handler
app.use((err, req, res, next) => {
    console.error(err) // eslint-disable-line no-console
    res.status(401).send(err + '')
})

// -- export app --
module.exports = {
    path: '/api/auth',
    handler: app
}