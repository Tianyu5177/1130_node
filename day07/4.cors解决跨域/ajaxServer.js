const express = require('express')
const app = express()
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.get('/testAjax',(req,res)=>{
  res.set('Access-Control-Allow-Origin', 'http://localhost:63342');
  res.send('ok')
})


app.listen(3000,(err)=>{
  if(!err){
    console.log('ok')
  }else{
    console.log(err);
  }
})