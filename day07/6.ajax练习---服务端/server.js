let express = require('express')
let db = require('./db')
let citiesModel = require('./model/citiesModel')
let app = express()
const PORT = 3000
app.disable('x-powered-by')
app.use(express.urlencoded({extended:true}))

//确保数据库连接成功,数据库连接成功之后的代码
db.then(()=>{

    //获取所有省份信息
    app.get('/getAllProvince',async(req,res)=>{
      let data = await citiesModel.find({level:1},{province:1,name:1,_id:0})
      res.send({state:1,data})
    })

    //根据所选省份获取当前省下的所有市信息
    app.get('/getCitiesByProvince',async(req,res)=>{
      let {province} = req.query
      let data = await citiesModel.find({level:2,province},{name:1,city:1,_id:0})
      res.send({state:1,data})
    })

  //根据所选省份、市，获取当前市下的所有区县信息
    app.get('/getCountyByProvinceCity',async(req,res)=>{
      let {province} = req.query
      let {city} = req.query
      let data = await citiesModel.find({level:3,province,city},{name:1,code:1,_id:0})
      res.send({state:1,data})
    })
})
  //抛出异常
  .catch((err)=>{
  console.log(err)
})



//绑定端口监听
app.listen(PORT,(err)=>{
  if(!err) console.log(`服务器成功启动了，访问地址是：http://localhost:${PORT}`)
  else console.log('服务器启动失败，'+err)
})