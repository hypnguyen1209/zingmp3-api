const axios = require('axios')

axios.get('https://zingmp3.vn')
    .then(res => res.headers['set-cookie'].filter(e => e.includes('zmp3_rqid_lagecy')).join('').split(';')[0])
    .then(console.log)