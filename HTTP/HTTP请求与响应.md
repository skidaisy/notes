# HTTP请求与响应

> HTTP请求过程
	1. 客户端发起请求,创建端口   
	2. 服务器在端口监听客户端请求   
	3. 服务器向客户端返回状态码和内容   
    http地址->   
    获取IP地址(浏览器搜索自身DNS缓存的IP地-no-接着搜索操作系统的DNS缓存-no-读取本地host文件-no-对DNS服务器发起域名解析请求   
    -得到对应的IP地址)->   
    对发起发起TCP链接请求(三次握手)->   
    发送HTTP请求->   
    服务器接受到请求返回相应(经过服务器后端处理)数据->   
    客户端得到返回结果并对返回解决进行解析渲染   


> 请求报文和响应报文

1. 请求报文由请求行，请求首部(可选),空行,请求正文四部分组成
![请求报文](http://img0.ph.126.net/RGy3aUKG4BA_QdeO1KXLDw==/1158832479218105346.png)
    - 请求行由3个字段组成(空格隔开)：请求方法，URL，HTTP协议版本
    - 请求头部由多组首部字段名:字段值组成
    - 请求数据一般在POST方法中使用

2. 响应报文是由状态行，响应首部(可选),响应正文组成
    - 响应状态行由：协议版本，状态码，状态码原因短语组成

客户端发送请求报文的时，使用方法(GET,POST等)下达命令

> HTTP首部

组成：字段名:字段值(字段值可以有多个)
类型：
        1. 通用首部字段：请求报文和响应报文都会用   
        2. 请求首部字段：补充请求的附加内容，客户端信息，响应内容相关优先级等信息   
        3. 响应首部字段：补充响应的附加内容，也会要求客户端附加额外内容信息   
        4. 实体首部字段：补充资源内容，更新时间等与实体有关的信息   

> 通用首部字段：
   
    Cache-Control：no-store, no-cache 控制缓存行为   
    Connection：keep-alive 链接管理   
    Date：Fri, 01 Apr 2016 14:25:24 GMT 创建报文的日期   
    Pragma：no-cache 报文指令   
    Trailer：报文末端的首部一览   
    Transfer-Encoding：gzip 指定报文主体的传输编码方式   
    Upgrade：升级为其他协议   
    Via：代理服务器相关信息   
    Warning：错误通知   

> 请求首部字段

    Accept：用户代理可处理的媒体类型   
    Accept-Charset：优先的字符集   
    Accept-Encoding：优先的内容编码   
    Accept-Language：优先的语言   
    Authorization：Web认证信息   
    Expect：期待服务器的特定行为   
    From：用户的电子邮箱   
    Host：请求资源所在服务器   
    Range：实体的字节范围请求   
    Referer：对请求中URI的原始获取方   
    User-Agent：HTTP客户端程序的信息   
    if-Match：比较实体标记(ETag)   
    if-Modified-Since：比较资源的更新时间   
    if-None-Match：比较实体标记(和if-Match相反)   
    if-Range：资源未更新时发送实体Byte的范围请求   
    if-Unmodified-Since：比较资源的更新时间(和if-Modified-Since相反)   
    Max-Forwards：最大传输逐跳数   
    Proxy-Authorization：代理服务器要求客户端的认证信息   

> 响应首部字段

    Accept-Ranges：是否接受字节范围请求   
    Age：推算资源创建经过时间   
    ETag：资源的匹配信息   
    Location：令客户端重新定向至指定URI   












