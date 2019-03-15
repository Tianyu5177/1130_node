//引入连接数据库的模块
let db = require('./db')
//引入学生模型对象模块
let studentsModel = require('./model/studentsModel')

//真正操作数据库的代码
;(async()=>{
  //等待数据库连接成功
  await db

  //1.向数据库中写入数据的两种方式
  //第一种保存数据的方式
  /*  //4.创建一个插入的实例对象（真正的数据,即文档对象）--------------模拟出一个人
  let stu1 = new studentsModel({
    stu_id:'0002',
    stu_name:'班长',
    stu_age:18,
    stu_sex:'男',
    stu_hobby:['女','打代码'],
    stu_info:'一个颜值非常高的男人',
  })
  
  //5.开始保存到数据库中
  stu1.save((err,data)=>{
    if(!err) console.log('保存成功')
    else  console.log(err)
  })*/

  //第二种保存数据的方式(模型.方法)
    studentsModel.create({
    stu_id:'0001',
    stu_name:'张江伟',
    stu_age:34,
    stu_sex:'男',
    stu_hobby:['女','女'],
    stu_info:'一个颜值非常帅气的男人',
  },(err,data)=>{
    if(!err) console.log(`数据保存成功${data}`)
    else console.log(err)
  })


  //2.从数据库中查找数据的方法
  /*  studentsModel.findOne({stu_sex:'男'},{stu_hobby:1,_id:0},(err,data)=>{
    if (!err){
      console.log(data)
    }
    else{
      console.log(err)
    }
  })*/

  //3.修改数据库中的信息
  /*studentsModel.deleteMany({stu_sex:'女'},(err,data)=>{
    if (!err){
      console.log(data)
    }
    else{
      console.log(err)
    }
  })*/



})()








