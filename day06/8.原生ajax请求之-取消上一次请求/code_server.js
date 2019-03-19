let express = require('express')
let app = express()
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))


app.get('/code',(req,res)=>{
  console.log('验证码路由被触发了！')
  setTimeout(()=>{
    res.send(Math.ceil(Math.random()*10000).toString())
  },2000)
})


app.listen(3000,(err)=>{
  console.log('ok')
})