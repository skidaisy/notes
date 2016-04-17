# JavaScript异步编程   

> Promise   

Promise是一种抽象对象。CommonJS定义了Promises/A规范。   
Promise库：bluebird, Q,then.js,es6-promise,async    

Promise 对象是对一个异步事件最终状态的封装，其最基本的用法是通过 then 方法注册一个回调函数，来接收该异步事件的结果    
这个回调函数接受执行成功的返回值或执行失败的错误原因(错误原因一般是Error对象)    
需要注意的是，then方法执行的返回值是一个Promise对象，而then方法接受的回调函数的返回值则可以是任意的JavaScript对象，包括Promises。基于这种机制，Promise对象的链式调用就起作用了。   

#### 一个 Promise 可以处于三种状态：    
pending: 异步事件正在进行中   
fulfilled: 异步事件成功完成   
rejected: 异步事件执行过程中发生错误   
其中，一旦该 Promise 已进入 fulfilled 或 rejected 状态，就不能转变为其它状态。也就是说，一个 Promise 的最终状态有且只有一个     


### 参考   

初识JavaScript Promises ：http://www.cnblogs.com/1000/p/getting-started-with-promises.html   
JavaScript异步编程：https://idiotwu.me/going-async-with-javascript/   




