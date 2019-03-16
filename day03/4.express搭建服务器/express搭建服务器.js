/*
* 使用express搭建一个服务器
* */

//1.引入express框架
let express = require('express')
//2.创建应用对象
let app = express();
//隐藏具体框架名称
app.disable('x-powered-by')

/*
*   请求的分类（主流）：
*     一、GET请求：
*         1.单纯获取一些信息（非敏感数据），使用GET请求
*         2.在浏览器中输入url访问网址的这种方式，使用的是GET方式
*         3.html页面中的：外部css、外部js、img标签的src属性.....都属于GET方式
*
*     二、POST请求：
*         1.请求中包含一些敏感数据的时候，使用POST方式（POST只能一定程度上，或者说相对于GET方式来说，安全了一些）
*         2.前端的html页面中，form表单发送数据的时候，可以选择POST方式。
* */

//设置路由
//根路由
app.get('/',(request,response)=>{
  /*
  * 通过哪种方式能访问到当前的服务器：
  *   1.http://localhost:3000
  *   2.http://127.0.0.1:3000  ------- (本地回环地址)
  *   3.http://192.168.24.64:3000
  * */
  console.log(request.query);
  //console.log(a);
  response.send('<h3>我是最帅的人</h3>')
})
app.get('/test',(request,response)=>{
  /*
  * 什么时候能触发这里方法？第一点：请求的方式必须为GET，第二点：请求的路由必须为/test
  * */

  response.send('<h3>这是我的第一个express服务器</h3>')
})

app.get('/haha',(request,response)=>{
  /*
  * 什么时候能触发这里方法？第一点：请求的方式必须为GET，第二点：请求的路由必须为/test
  * */

  response.send('<h3>这是我的第一个哈哈</h3>')
})

//拦截PSOT请求
app.post('/demo',(req,res)=>{
  res.send('我收到了你的POST请求')
})




//3.绑定端口监听
app.listen(3000,(err)=>{
  if (!err) console.log('服务器启动成功了,访问地址是：http://localhost:3000')
  else console.log('服务器启动失败，'+err)
})