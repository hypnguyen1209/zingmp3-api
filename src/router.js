const express = require('express')
const axios = require('axios')
const sign = require('./signature')
const { ctime, apiKey, route } = require('./config')
const { home, song, info, chart, video } = route
const router = express.Router()
const BASE_URL = 'https://zingmp3.vn'

var cookie

try {
    setInterval(() => {
        axios.get(BASE_URL)
            .then(res => res.headers['set-cookie'].filter(e => e.includes('zmp3_rqid')).join('').split(';')[0])
            .then(cookies => cookie = cookies)
    }, 3600)
} catch (error) {
    console.log(error)
}

const getId = (songURL) => {
    return songURL.split('/').slice(-1)[0].split('.html')[0]
}

const onFetchData = (path) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            baseURL: BASE_URL,
            url: `${path}&apiKey=${apiKey}`,
            headers: {
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
                'Cookie': cookie
            }
        })
            .then(resolve)
    })
}

router.get('/', async (req, res) => {
    const page = await req.query.page || '1'
    let { data } = await onFetchData(`${home}?page=${page}&ctime=${ctime()}&version=1.0.10&sig=${sign(home, `ctime=${ctime()}page=${page}version=1.0.10`)}`)
    await res.json(data)
})

router.get('/chart', async (req, res) => {
    let { data } = await onFetchData(`${chart}?&ctime=${ctime()}&version=1.0.10&sig=${sign(chart, `ctime=${ctime()}version=1.0.10`)}`)
    await res.json(data)
})

router.get('/info', async (req, res) => {
    let id = await req.query.id || getId(req.query.url)
    let { data } = await onFetchData(`${info}?id=${id}&ctime=${ctime()}&version=1.0.10&sig=${sign(info, `ctime=${ctime()}id=${id}version=1.0.10`)}`)
    await res.json(data)
})

router.get('/song', async (req, res) => {
    let id = await req.query.id || getId(req.query.url)
    let { data } = await onFetchData(`${song}?id=${id}&ctime=${ctime()}&version=1.0.10&sig=${sign(song, `ctime=${ctime()}id=${id}version=1.0.10`)}`)
    await res.json(data)
})

router.get('/video', async (req, res) => {
    let id = await req.query.id || getId(req.query.url)
    let { data } = await onFetchData(`${video}?id=${id}&ctime=${ctime()}&version=1.0.10&sig=${sign(video, `ctime=${ctime()}id=${id}version=1.0.10`)}`)
    await res.json(data)
})

module.exports = router
