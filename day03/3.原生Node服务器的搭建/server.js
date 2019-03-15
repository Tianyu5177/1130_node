/*
* 使用原生Node搭建一个简单的web服务器
* */

//1.引入http模块（http模块是node中的核心模块）
let http = require('http')
//引入解析请求字符串的库(将请求的字符串变成对象)
let queryString = require('querystring')

//2.创建一个服务对象（服务前端过来的请求）-------------来一个服务员进行服务
let server = http.createServer((request,response)=>{
  /*
  * 1.request:请求对象
  *     所有客户端过来的请求包含的信息，全部都在request对象身上
  * 2.response：响应对象
  *     所有服务器给客户端的信息，全部包含在response对象身上
  *     当调用response.end()的时候，本次请求响应完毕
  * 备注：对于服务器来说，一次请求，只能有一次响应，一般来说服务器不会主动给客户端响应
  * 3.在地址栏使用url+？使用&作为分隔的传参方式叫做：urlencoded编码方式
  *
  * */
  let str = request.url.split('?')[1]
  let obj = queryString.parse(str)
  console.log(obj);

  //设置响应头
  response.setHeader('content-type','text/html;charset=utf-8')
  //返回响应
  response.end('<h3>这是我的第一个原生node服务器</h3>')
  response.end('<h3>哈哈，我在补一句</h3>')

})

//3.绑定端口号
server.listen(3000,(err)=>{
  if (!err) console.log('服务器启动成功了,访问地址是：http://localhost:3000')
  else console.log('服务器启动失败，'+err)
})