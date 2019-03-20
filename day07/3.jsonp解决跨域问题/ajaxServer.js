const express = require('express')
const app = express()
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))


app.get('/test',(req,res)=>{
    let {callBack} = req.query
    let arr = [{name:'kobe',age:12},{name:'wade',age:13}]
   // res.send(arr)
    let str = callBack+'('+JSON.stringify(arr)+')'
    //getData([{name:'kobe',age:12},{name:'wade',age:13}])
      //res.send('alert2(0)')
    res.send(str)
})



app.listen(3000,(err)=>{
  if(!err){
    console.log('ok')
  }else{
    console.log(err);
  }
})