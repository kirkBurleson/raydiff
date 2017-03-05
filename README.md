# raydiff
Filters array by removing matching elements contained in one or more additional arrays.

# Install

$ npm install raydiff --save

# Usage

Returns the difference between the first array and additional arrays.<br/>
```JavaScript
var diff = require('raydiff');
var a = ['a', 'b', 'c', 'd'];
var b = ['b', 'c'];

console.log(diff(a, b))
//=> ['a', 'd']
```
# Benchmarks

raydiff versus <a href="https://github.com/jonschlinkert/arr-diff">arr-diff</a> & <a href="https://github.com/sindresorhus/array-differ">array-differ</a>, using arr-diff's
own benchmark tests, on Mar 05, 2017:

#benchmark\fixtures\long.js (94529 bytes)
array-differ x 360 ops/sec ±0.12% (83 runs sampled)<br/>
current x 507 ops/sec ±1.14% (57 runs sampled)<br/>
<b>raydiff x 861 ops/sec ±0.09% (88 runs sampled)</b><br/>
    
#benchmark\fixtures\med.js (708 bytes)
array-differ x 96,510 ops/sec ±0.96% (88 runs sampled)<br/>
current x 215,471 ops/sec ±0.76% (88 runs sampled)<br/>
<b>raydiff x 545,171 ops/sec ±1.18% (88 runs sampled)</b><br/>
  
#benchmark\fixtures\short.js (60 bytes)
array-differ x 178,184 ops/sec ±0.96% (86 runs sampled)<br/>
current x 311,669 ops/sec ±0.57% (90 runs sampled)<br/>
<b>raydiff x 1,418,764 ops/sec ±1.58% (86 runs sampled)</b><br/>
  
# Author

Kirk Burleson<br/>
==> <a href="https://github.com/kirkBurleson">github/kirkBurleson</a>
