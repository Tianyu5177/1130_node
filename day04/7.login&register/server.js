//引入express模块
let express = require('express')
//引入数据模块
let db = require('./db')
//引入模型对象模块
let usersModel = require('./model/usersModel.js')
//2.实例化一个app应用对象
let app = express()
//3.定义端口号
const PORT = 3000
//4.隐藏具体框架名称
app.disable('x-powered-by')
//6.使用内置中间件
app.use(express.urlencoded({extended:true}))
//使用内置中间件暴露静态资源
app.use(express.static('public'))

//确保数据库连接成功
db.then(()=>{
  //数据库连接成功之后的代码
  //注册逻辑
  app.post('/register',async(req,res)=>{
    let {email,pwd,re_pwd,name} = req.body
    //定义正则校验
    const emailReg = /^[a-zA-Z0-9_]{5,20}@[a-zA-Z0-9_]{2,10}\.com/
    const pwdReg = /^[a-zA-Z0-9_]{6,18}/
    const nameReg = /^[\u4e00-\u9fa5]/
    //进行判断
    if(!emailReg.test(email)){
      res.send('邮箱输入不合法，格式应该只包含字母、数字、下划线')
      return
    }
    if(!pwdReg.test(pwd)){
      res.send('密码输入不合法，格式应该只包含字母、数字、下划线，6--18')
      return
    }
    if(!nameReg.test(name)){
      res.send('姓名输入不合法，格式应该只包含字母、数字、下划线')
      return
    }
    if(pwd !== re_pwd){
      res.send('两次输入的密码不一致')
      return
    }

    /*
    * try : 放置可能出现错误的代码，一旦代码出错，立即停止运行，并且将发生的具体错误，以参数的形式传给catch方法
    * catch： 接收try中出现错误的具体内容
    *
    * */
      try{
        let result = await usersModel.create({email,pwd,re_pwd,name})
        console.log(result);
        res.send('注册成功！')
        }
      catch(err){
        console.log(err)
        res.send('网络不稳定，请稍后重试！')
      }
  })
  //登录逻辑
  app.post('/login',async(req,res)=>{
    let {email,pwd} = req.body
    const emailReg = /^[a-zA-Z0-9_]{5,20}@[a-zA-Z0-9_]{2,10}\.com/
    const pwdReg = /^[a-zA-Z0-9_]{6,18}/
    if(!emailReg.test(email)){
      res.send('邮箱输入不合法，格式应该只包含字母、数字、下划线')
      return
    }
    if(!pwdReg.test(pwd)){
      res.send('密码输入不合法，格式应该只包含字母、数字、下划线，6--18')
      return
    }
      try{
        let resData = await usersModel.findOne({email,pwd})
        if(!resData){
          res.send('登录失败，用户名或密码错误')
        }else{
          res.redirect('http://www.baidu.com')
        }
      }catch(err){
        console.log(err)
        res.send('网络不稳定，请稍后重试！')
      }
  })

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