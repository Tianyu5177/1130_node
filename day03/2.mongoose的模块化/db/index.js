/*
* 该模块主要用于连接数据库
* */

//1.引入mongoose模块
const mongoose = require('mongoose')
//2.设置要连接的数据库名称
const dbName = 'test'
//3.使用一个新的解析器
mongoose.set('useCreateIndex',true)

//4.创建一个Promise实例（等待异步任务成功之后，再进行其他逻辑操作）
module.exports = new Promise((resolve,reject)=>{
  //5.使用mongoose模块连接数据库
  mongoose.connect(`mongodb://localhost:27017/${dbName}`,{useNewUrlParser: true})
  //6.绑定监听（监听数据库是否连接成功）
  mongoose.connection.once('open',(err)=>{
    if(!err){
      console.log('数据库连接成功')
      resolve()
    }else{
      console.log(err)
      reject()
    }
  })
})
