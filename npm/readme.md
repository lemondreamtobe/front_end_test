# get-short-sign

## Introduction
  在nodejs上对接短链接服务的时候，在签名的时候出现问题；所以将该部分抽离出来，封装成一个npm包，以防后面的小伙伴也出现同样的问题；  
  http://doc.psd.gz.cvte.cn/shorturl/start.html;


## Install
```
$ npm install @cvte/get-short-sign --registry http://nexus.gz.cvte.cn/nexus/repository/npm-group
```

## Usage
```js
  var getShortSign = require('@cvte/get-short-sign');


  /*
  * appSecret: 注册应用时会给你； 
  * logUrl: 代表重定向的url；eg: longUrl=http://www.baidu.com&t=1477961146000
  * 返回值: 通过算法算后的值： x-auth-short-sign 值；
  */
  var sign = getShortSign(appSecret, logUrl); //返回值为签名

```

## Test
覆盖测试  
```
$ npm run test
```
