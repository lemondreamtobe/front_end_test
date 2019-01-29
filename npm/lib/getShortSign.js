const createHmac = require('create-hmac');

function getShortSign(appSecret, longUrl){
    const sign = createHmac('sha256', new Buffer(appSecret))
    .update(encodeURIComponent(longUrl), 'utf8')
    .digest('hex');
    return sign;
}

module.exports = getShortSign;