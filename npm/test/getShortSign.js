const getShortSign = require('../lib/getShortSign');
const expect = require('chai').expect;

describe('验证获取测试签名function', function(){
    var result = '6a0a917b885aa2f00b5bbac982587a52423847951fe05e1c59ec04be07de28ab';
    var appSecret = '563280d01c26419a9ca2e4cc749fdc40';
    var logUrl = 'longUrl=http://www.baidu.com';
    it('验证getShortSign函数', function(){
        expect(getShortSign(appSecret, logUrl)).to.be.equal(result);
    })
})