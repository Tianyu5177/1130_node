### cookie和session的区别

> 他们都是用于解决http无状态的问题，并且一般配合着使用

  * 储存位置
    * cookie保存在浏览器中(不是很安全,别人可以分析存放在本地的cookie并进行cookie欺骗)
    * session保存在服务器中(相对安全)
  * 大小容量
    * cookie 4kb 20个左右
    * session 理论上没有限制
  * 传输流量
    * cookie每次请求时都会自动携带上，cookie越多，流量越大
    * session会产生一个cookie（包含session“容器”的编号），所有数据都在服务器端，流量相对较小
    * 一般来说网站为了安全，会在上述cookie的基础上，返回一些其他cookie用于校验用户身份