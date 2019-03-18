//1.引入express模块
let express = require('express')
//引入第三方中间件（bodyParser能够解析POST请求请求体中的数据，以body属性挂载到requset对象上）
//let bodyParser = require('body-parser')
//2.实例化一个app应用对象
let app = express()
//3.定义端口号
const PORT = 3000
//4.隐藏具体框架名称
app.disable('x-powered-by')
//5.使用第三方中间件
//app.use(bodyParser.urlencoded({extended:true}))
//6.使用内置中间件
app.use(express.urlencoded({extended:true}))
//使用内置中间件暴露静态资源
app.use(express.static('public'))

/*
* 中间件（middleWare）？
*   本质就是一个函数，有三个参数（request,response,next）
*
* 组成：
*   1.request对象
*   2.response对象
*   3.next函数
*
* 作用：
*   1)	执行任何代码。
    2)	修改请求和响应对象。
    3)	终结请求-响应循环。（当一个请求来到服务器的时候，服务器开始处理，终结本次请求）
    4)	调用（堆栈中的）下一个中间件。

  分类：
      1.应用级中间件
          --1.修改请求和响应对象  2.拦截非法请求
      2.第三方中间
          --不是express提供的，使我们自己下载的
          app.use(bodyParser.urlencoded({extended:true}))
      3.express内置中间件
          --express给我们提供的中间件
          --app.use(express.urlencoded({extended:true}))
          --app.use(express.static('public'))
      4.路由器中间件
          --后期在路由器章节详细解释


  备注：
      1.在服务器中，客户端的一个请求达到服务端后，服务器只会做出一次响应，做出响应以后，不可以再修改request，和response
      2.在express中，当你定义路由和中间件的时候，会把你定义的东西按照定义的顺序（代码的顺序）放在类似于数组的容器中
        当请求过来的时候，依次从类数组的容器中拿出进行匹配，一旦匹配成功交给当前的处理，后续的都失效。
      3.当一个请求到达express服务器时，不管经过多少次的加工，所有路由和中间件中的request以及response，都是对第一次的引用。
*
* */

//使用一个应用级中间件
//第一种使用应用级中间件的方法
/*app.use((request,response,next)=>{
  console.log(request.query);
  const domain = request.get('Host')
  if(domain !== 'localhost:3000'){
    response.send('禁止盗用本站链接')
    return
  }else{
    request.xxx = 123
    next()//让下一个符合条件的中间件执行
  }
})*/

//第二种使用应用级中间件的方法
function middle1(request,response,next) {
  console.log(request.query);
  const domain = request.get('Host')
  if(domain !== 'localhost:3000'){
    response.send('禁止盗用本站链接')
    return
  }else{
    request.xxx = 123
    next()//让下一个符合条件的中间件执行
  }
}

//定义一个根路由
app.get('/',middle1,(request,response)=>{
  console.log(request.xxx);
  console.log('根路由被触发了')
  response.send('ok')
})

app.post('/demo',(request,response)=>{

  console.log(request.body);
  response.send('post---ok')
})

//发送文件直接给浏览器
// app.get('/index',(req,res)=>{
//   res.sendFile(__dirname+'../index.html')
// })








//绑定端口监听
app.listen(PORT,(err)=>{
  if(!err) console.log(`服务器成功启动了，访问地址是：http://localhost:${PORT}`)
  else console.log('服务器启动失败，'+err)
})