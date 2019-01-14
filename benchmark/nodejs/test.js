var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

// 添加测试
suite.add('RegExp#test', function(){
    /o/.test('Hello World!');
}).add('String#indexOf', function() {
    'Hello World!'.indexOf('o') > -1;
}).on('cycle', function(event) {
    console.log(String(event.target));
}).on('complete', function() {
    
}.bind(this))
.run({ 'async': true });