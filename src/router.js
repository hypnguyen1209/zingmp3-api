const express = require('express')
const axios = require('axios')
const sign = require('./signature')
const { ctime, apiKey } = require('./config')

const router = express.Router()
const BASE_URL = 'https://zingmp3.vn/api'

const getId = (songURL) => {
    return songURL.split('/').slice(-1)[0].split('.html')[0]
}
const onFetchData = (path) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            baseURL: BASE_URL,
            url: `${path}&api_key=${apiKey}`,
            headers: {
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
                'Cookie': 'zmp3_rqid_lagecy=MTAxNzI1NDIzMXwxNzEdUngMjM0LjIxOS4yNDl8djAdUngMi4xMnwxNjA3ODQzNDA5NTmUsIC1'
            }
        })
            //.then(res => res.data)
            .then(resolve)
    })
}
router.get('/', async (req, res) => {
    let { data }  = await onFetchData(`/home?ctime=${ctime()}&sig=${sign('/home', `ctime=${ctime()}`)}`)
    await res.json(data)
})

router.get('/info', async (req, res) => {
    let id = await req.query.id || getId(req.query.url)
    let { data } = await onFetchData(`/song/get-song-info?id=${id}&ctime=${ctime()}&sig=${sign('/song/get-song-info', `ctime=${ctime()}id=${id}`)}`)
    await res.json(data)
})

router.get('/song', async (req, res) => {
    let id = await req.query.id || getId(req.query.url)
    let { data } = await onFetchData(`/song/get-streamings?id=${id}&ctime=${ctime()}&sig=${sign('/song/get-streamings', `ctime=${ctime()}id=${id}`)}`)
    await res.json(data)
})

router.get('/video', async (req, res) => {
    let id = await req.query.id || getId(req.query.url)
    let { data } = await onFetchData(`/video/get-video-detail?id=${id}&ctime=${ctime()}&sig=${sign('/video/get-video-detail', `ctime=${ctime()}id=${id}`)}`)
    await res.json(data)
})

router.get('/album', async (req, res) => {
    let id = await req.query.id || getId(req.query.url)
    let { data } = await onFetchData(`/playlist/get-playlist-detail?id=${id}&ctime=${ctime()}&sig=${sign('/playlist/get-playlist-detail', `ctime=${ctime()}id=${id}`)}`)
    await res.json(data)
})

router.get('/song-beat', async (req, res) => {
    let id = await req.query.id || getId(req.query.url)
    let { data } = await onFetchData(`/song/get-streamings-beat?id=${id}&ctime=${ctime()}&sig=${sign('/song/get-streamings-beat', `ctime=${ctime()}id=${id}`)}`)
    await res.json(data)
})

router.get('/top100', async (req, res) => {
    let { data } = await onFetchData(`/top100?ctime=${ctime()}&sig=${sign('/top100', `ctime=${ctime()}`)}`)
    await res.json(data)
})

router.get('/albums', async (req, res) => {
    let { data } = await onFetchData(`/genre/get-album-home?ctime=${ctime()}&sig=${sign('/genre/get-album-home', `ctime=${ctime()}`)}`)
    await res.json(data)
})

module.exports = router
