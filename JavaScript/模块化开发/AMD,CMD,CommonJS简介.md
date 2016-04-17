# AMD,CMD,CommonJS简介   
 
AMD，CMD是在客户端实现，采用异步的方式加载模块     
CommonJS用在服务器端，采用同步的静态方式加载模块         

#### CommonJS

定义模块：一个单独的文件就是一个模块.通过定义module.exports对象提供对外接口    
加载模块：使用require方法，该方法读取一个文件并执行，最后返回文件内部的exports对象.     
代表：Node.js   
例子：[example](https://github.com/skidaisy/notes/tree/master/Node.js/example)   
CommonJS 加载模块是同步的，所以只有加载完成才能执行后面的操作。像Node.js主要用于服务器的编程，加载的模块文件一般都已经存在本地硬盘，所以加载起来比较快，不用考虑异步加载的方式，适用CommonJS规范。    
但如果是浏览器环境，要从服务器加载模块，这是就必须采用异步模式。所以就有了 AMD，CMD 解决方案。    

#### AMD:    
定义模块：define(id,dependencies,factory)   

- id：模块标识，可以省略
- dependencies： 所依赖的模块，可以省略
- factory：是一个function，应执行实例化模块或对象   

定义一个math模块：
```
    define('math', ['require','exports'], function(require, exports) {
        exports.add = function(a,b){
            return a + b
        }
    })
```

加载模块：require([module], callback)   

- [module]：是一个数组，里面的成员就是要加载的模块
- callback：是模块加载完成之后的回调函数

加载一个math模块，然后调用方法 math.add   
```
    require(['math'], function (math) {
        math.add(2, 3)
    })

```
异步加载：模块的加载不会影响其他代码的运行。所有依赖于某个模块的代码全部移到模块加载语句的回调函数中去。    

代表：require.js    

#### CMD   
在CMD规范中，一个模块就是一个文件   
定义模块：define    
define(id, deps, factory)

- id 模块标识，可以省略
- deps 模块依赖，可以省略
- factory 可以是一个函数，也可以是一个对象或字符串.factory为函数时,默认会传入三个参数:require,exports,module

加载模块：require,require.async,require.resolve   

- require 加载模块,同步往下执行
- require.async 则是异步回调执行,一般用来加载可延迟异步加载的模块
- require.resolve 使用模块系统内部的路径解析机制来解析并返回模块路径。该函数不会加载模块，只返回解析后的绝对路径    

代表：Sea.js   
#### AMD和CMD的区别(玉伯)


AMD 是 RequireJS 在推广过程中对模块定义的规范化产出
CMD 是 SeaJS 在推广过程中对模块定义的规范化产出

这些规范的目的都是为了 JavaScript 的模块化开发，特别是在浏览器端的
目前这些规范的实现都能达成浏览器端模块化开发的目的

区别：

1. 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同）。CMD 推崇 as lazy as possible.     
2. CMD 推崇依赖就近，AMD 推崇依赖前置。看代码：    
    
    ```
    // CMD
        define(function(require, exports, module) {
            var a = require('./a')
            a.doSomething()
            // 此处略去 100 行
            var b = require('./b') // 依赖可以就近书写
            b.doSomething()
            // ... 
        })
    
    // AMD 默认推荐的是
        define(['./a', './b'], function(a, b) { // 依赖必须一开始就写好
            a.doSomething()
            // 此处略去 100 行
            b.doSomething()
            ...
        }) 
    ```
虽然 AMD 也支持 CMD 的写法，同时还支持将 require 作为依赖项传递，但 RequireJS 的作者默认是最喜欢上面的写法，也是官方文档里默认的模块定义写法。

3. AMD 的 API 默认是一个当多个用，CMD 的 API 严格区分，推崇职责单一。
    - AMD 里，require 分全局 require 和局部 require，都叫 require
    - CMD 里，没有全局 require，而是根据模块系统的完备性，提供 seajs.use 来实现模块系统的加载启动。CMD 里，每个 API 都简单纯粹。

Require.js同时适用于浏览器端和服务器环境的模块加载。Sea.js则专注于浏览器端的模块加载实现。通过Node扩展也可以运行于Node环境中   

> 参考资料    

AMD：https://link.zhihu.com/?target=https%3A//github.com/amdjs/amdjs-api/wiki/AMD   
CMD：https://github.com/seajs/seajs/issues/242    
CMD和AMD区别：https://www.zhihu.com/question/20351507    
模块加载方式：

* 静态加载:在编译阶段进行,把所有需要的依赖打包到一个文件中           
* 动态加载:在运行时加载依赖 








