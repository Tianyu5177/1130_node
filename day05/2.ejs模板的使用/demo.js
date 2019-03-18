//引入express模块
let express = require('express')
//2.实例化一个app应用对象
let app = express()
//3.定义端口号
const PORT = 3000
//4.隐藏具体框架名称
app.disable('x-powered-by')
//配置模板引擎
app.set('view engine','ejs')
//设置模板目录
app.set('views','./views')


app.get('/demo',(req,res)=>{
  //res.send('ok')
  //let data = '<h3>这是我第一次学习使用ejs模板，我还不会用</h3>'
  //let data = [{name:'kobe',age:12},{name:'wade',age:13}]
  let data = {name:'wade',age:34}
  res.render('demo',{data})
})



//绑定端口监听
app.listen(PORT,(err)=>{
  if(!err) console.log(`服务器成功启动了，访问地址是：http://localhost:${PORT}`)
  else console.log('服务器启动失败，'+err)
})