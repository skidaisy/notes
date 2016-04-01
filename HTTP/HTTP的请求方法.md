# HTTP的请求方法
HyperText Transfer Protocol 超文本传输协议

>   GET 获取资源

用来请求访问已被URI识别的资源
如果资源是文本,则原样返回;如果是程序,则执行返回结果.

>  POST 传输实体主体

在URI所标识的资源后附加新的数据

>  PUT 传输文件

类似FTP协议的文件上传，要求在请求报文中的主体中包含文件内容，然后保存到请求URI指定的位置.

> HEAD 获取报文首部

类似GET,但只返还报文首部,不返回报文主体部分,用于确认URI的有效性及资源更新的日期时间等.

> DELETE 删除文件

是与PUT相反的方法,按请求URI删除指定资源

> OPTIONS 询问支持的方法

查询针对请求URI指定资源的支持方法

> TRACE 追踪路径

让web服务器将之前的请求通信环回给客户端,不常用,而且容易引发XST(跨站追踪)攻击

> CONNECT 要求用隧道协议连接代理

CONNECT方法要求在与代理服务器通信时建立隧道,实现用隧道协议进行TCP通信,主要使用SSL和TLS协议把通信内容加密后经网络隧道传输.

    如果构架设计采用REST标准的web网站,以上方法基本都能用到,并且可以跟数据库的CRUD增删改查操作对应起来：
    　　CREATE ：PUT
    　　READ：GET
    　　UPDATE：POST
    　　DELETE：DELETE
> 延伸：REST

 REST 指的是一组架构约束条件和原则。满足这些约束条件和原则的应用程序或设计就是 RESTful。
 如果一个架构符合REST原则，就称它为RESTful架构。
 REST原则 ：Representational State Transfer
 [更多](http://developer.51cto.com/art/200908/141825.htm)

> 名词解释

URI：统一资源标识符，是以一种抽象的，高层次概念定义统一资源标识
URL：统一资源定位符，是URI的子集，提供找到该资源的路径
        联系：URL和URN则是具体的资源标识的方式。URL和URN都是一种URI。
URI的格式: ![URI](http://www.ituring.com.cn/figures/2014/PIC%20HTTP/05.d01z.013.png)