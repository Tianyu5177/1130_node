//1.引入express框架
let express = require('express')
//2.实例一个app应用对象
let app = express()
//3.定义端口号
const PORT = 3000

/*
* 一、请求对象（request）
*     request.query  获取GET请求的查询字符串参数（urlencoded编码方式），获取到的是一个对象
*     request.params 获取GET请求的参数路由中的参数，拿到的是一个对象
*     request.body   获取POST请求的请求体中的参数（必须要借助一个中间件才可以）
*     request.get('xxx') 获取请求报文中指定的信息
*
* 二、响应对象（response）
*     response.end('xxxxx')  给客户端一个回应（容易乱码，中文的时候需要注意）
*     response.send('xxxxx') 给客户端一个回应
*     response.download('相对路径') 给浏览器返回一个下载的响应
*     response.sendFile('绝对路径') 给浏览器发送一个文件，浏览器根据文件的种类，决定如何去展示。
*     response.redirect('网址') 重定向到一个新的网址
*     response.set('key','value') 自定义响应头
*     response.get('key') 获取响应头中的指定内容
*
* */

//备注：在解析路由的时候，做出的是完整、精准匹配
//根路由
app.get('/',(request,response)=>{
  //console.log(request.query);
  console.log(request.get('Host'));
  response.send('我是根路由的响应')
})

//一级路由
app.get('/test',(request,response)=>{
  //console.log(request.body);
  //response.download('./music.mp3')
  //response.sendFile(__dirname+'/test.html')
  //response.sendFile(__dirname+'/music.mp3')
  //response.sendFile(__dirname+'/test2')
  //response.redirect('http://www.baidu.com')
  //response.set('demo',123)
  response.send('我是一级路由的响应')
})

//二级路由
app.get('/test/demo',(request,response)=>{
  response.send('我是二级路由的响应')
})

//参数路由
app.get('/movie/:id',(request,response)=>{
  console.log(request.params);
  response.send('我是二级路由的响应')
})




//4.绑定端口监听
app.listen(PORT,(err)=>{
  if(!err) console.log(`服务器成功启动了，访问地址是：http://localhost:${PORT}`)
  else console.log('服务器启动失败，'+err)
})