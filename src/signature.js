const CryptoJS = require('crypto-js');
const { secretKey } = require('./config')

const SHA256 = (a) => CryptoJS.SHA256(a)

const hmacSHA512 = (str) => CryptoJS.HmacSHA512(str, secretKey).toString()

module.exports = (path, param) => hmacSHA512(path + SHA256(param.replace(/&/g, '')))