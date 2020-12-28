const CryptoJS = require('crypto-js');
const { secretKey } = require('./config')

const SHA256 = (a) => CryptoJS.SHA256(a)

module.exports = (p, h) => CryptoJS.HmacSHA512(p + SHA256(h), secretKey).toString()
