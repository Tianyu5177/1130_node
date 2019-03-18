/*
* 关于cookie：
*     1.是什么？（早期用于解决http无状态的问题）
*       -本质上就是一个浏览器所存储的字符串，里面包含着客户端和服务器交互时所产生的信息，
*       -存储的形式是：key-value的形式
*       -浏览器请求服务器时会自动携带目标网站的cookie
*       -cookie一般是由服务器生成（“种”），随着第一次响应返回给客户端
*       -前端人员（通过js）一样可以生成cookie，但是意义不大。
*       -一般来说网站不会只用cookie去存储信息，一般还会配合session
*
*     2.分类：
*       -会话cookie：保存在运行浏览器的那一块内存中（关闭浏览器之后，cookie自动消失）
*       -持久化cookie：保存在用户的硬盘里，直到达到了过期的时间，才自动销毁。
*
*     3.工作原理：
*       -当浏览器第一次请求服务器时，服务器可能会响应一个cookie，包裹在响应报文中。
*       -当浏览器收到这个cookie之后，将这个cookie保存起来。
*           --如果是会话cookie，保存在浏览器的那一块内存中。
*           --如果是持久化的cookie，保存在用户的硬盘里。
*       -当浏览器再一次请求服务器时（还是刚刚的那台服务器），自动携带之前所有该网站的cookie
*       -服务器接收到cookie之后，查看cookie里的内容，根据cookie里的内容，进行一些逻辑处理。
*
*     4.应用：
*         -早期用于解决http无状态的问题
*         -七天免登录等等
*
*     5.在不同的语言、不同的框架中，操作cookie的语法是不一样的，工作的原理和过程是一样的。
*     备注：
*        在express框架中，不需要任何的第三方插件（库）就可以实现设置cookie
* */


let express =  require('express')

let cookieParser = require('cookie-parser')

let app = express()

app.use(cookieParser())
/*
*
* 引入cookie-parser之后，自动解析客户端携带过来的cookie，挂载到req对象的cookies属性上
* */

app.get('/demo',(req,res)=>{
  /*
  * 如果没给过期时间，那么就是会话cookkie
  * */
  res.cookie('xiaozhupeiqi','hahawoshiyitouzhu',{maxAge:1000*60*60})
  console.log(req.cookies);
  res.send('ok')
})

app.get('/demo2',(req,res)=>{
  /*
  * 如果没给过期时间，那么就是会话cookkie
  * */
  //第一种删除cookie的方法
  //res.clearCookie('xiaozhupeiqi')
  //res.clearCookie ----- ???
  //第二种删除cookie的方法
  //res.cookie('xiaozhupeiqi','hahawoshiyitouzhu',{maxAge:0})
  //res.send('ok')
})


app.listen(4000,(err)=>{
  console.log('ok')
})