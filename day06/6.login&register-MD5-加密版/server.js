//引入express模块
let express = require('express')
//引入数据模块
let db = require('./db')
//引入UI路由器
let uiRouter = require('./router/uiRouter')
//引入业务路由器
let usersRouter = require('./router/usersRouter')
//引入express-session
let session = require('express-session');
//引入支持session持久化的库
let mongoStore = require('connect-mongo')(session);
//2.实例化一个app应用对象
let app = express()
//3.定义端口号
const PORT = 3000
//4.隐藏具体框架名称
app.disable('x-powered-by')
//6.使用内置中间件
app.use(express.urlencoded({extended:true}))
//设置模板引擎
app.set('view engine','ejs')
//设置模板目录
app.set('views','./views')
//配置express中session

app.use(session({
  name: 'userid',   //设置cookie的name，默认值是：connect.sid
  secret: 'atguigu', //参与加密的字符串（又称签名）
  saveUninitialized: false, //是否在存储内容之前创建会话
  resave: true ,//是否在每次请求时，强制重新保存session，即使他们没有变化
  store: new mongoStore({
    url: 'mongodb://localhost:27017/cookies_container',
    touchAfter: 24 * 3600 //修改频率（例：//在24小时之内只更新一次）
  }),
  cookie: {
    httpOnly: true, // 开启后前端无法通过 JS 操作cookie
    maxAge: 1000*60 // 设置cookie的过期时间
  },
}));



//确保数据库连接成功,数据库连接成功之后的代码
db.then(()=>{
  //UI路由器，专门用于控制页面显示
  app.use(uiRouter)
  //业务路由器，主要负责用户的注册、登录
  app.use(usersRouter)
})

  //抛出异常
  .catch((err)=>{
  console.log(err)
  //数据库连接失败之后的代码
})



//绑定端口监听
app.listen(PORT,(err)=>{
  if(!err) console.log(`服务器成功启动了，访问地址是：http://localhost:${PORT}`)
  else console.log('服务器启动失败，'+err)
})