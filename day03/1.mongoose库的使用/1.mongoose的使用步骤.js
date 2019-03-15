//1.引入mongoose模块
const mongoose = require('mongoose')

//2.使用mongoose模块连接数据库
mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser: true})

let myPromise = new Promise((resolve,reject)=>{
  //3.绑定监听（监听数据库是否连接成功）
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


/*async function demo() {
  await myPromise
  console.log('操作数据库的代码')
}
demo()*/


;(async()=>{
  await myPromise
  console.log('操作数据库的代码')
})()








