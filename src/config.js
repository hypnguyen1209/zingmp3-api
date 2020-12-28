const router = require("./router")

module.exports = {
    apiKey: 'kI44ARvPwaqL7v0KuDSM0rGORtdY1nnw',
    secretKey: '882QcNXV4tUZbvAsjmFOHqNC1LpcBRKW',
    ctime: () => {
        return Math.floor(Date.now() / 1000)
    },
    route: {
        home: '/api/v2/home',
        song: '/api/v2/song/getStreaming',
        info: '/api/v2/playlist/getDetail',
        chart: '/api/v2/chart/getHome',
        video: '/api/v2/video/getSectionRelate',
    }
}