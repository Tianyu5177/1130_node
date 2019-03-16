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

app.post('/register',async(req,res)=>{
    let {email,pwd,re_pwd,name} = req.body
    //定义正则校验
    const emailReg = /^[a-zA-Z0-9_]{5,20}@[a-zA-Z0-9_]{2,10}\.com/
    const pwdReg = /^[a-zA-Z0-9_]{6,18}/
    const nameReg = /^[a-zA-Z0-9_]{2,16}/
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
    else{
      res.send('注册成功')
    }

    await db
    let result = usersModel.create({email,pwd,re_pwd,name})
    let data = await result
    console.log(data);


})



//绑定端口监听
app.listen(PORT,(err)=>{
  if(!err) console.log(`服务器成功启动了，访问地址是：http://localhost:${PORT}`)
  else console.log('服务器启动失败，'+err)
})