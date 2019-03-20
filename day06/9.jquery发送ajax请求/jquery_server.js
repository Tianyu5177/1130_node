let express = require('express')
let app = express()
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))


app.get('/demo1',(req,res)=>{
  let data = req.query
  console.log(data);
  res.send('我收到了你ajax_get请求,')
})

/*app.post('/demo2',(req,res)=>{
  let data = req.body
  console.log(data);
  res.send('我收到了你ajax_post请求')
})*/



app.listen(3000,(err)=>{
  console.log('ok')
})