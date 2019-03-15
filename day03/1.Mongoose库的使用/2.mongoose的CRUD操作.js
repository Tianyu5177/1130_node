//1.引入mongoose模块
const mongoose = require('mongoose')
//使用一个新的解析器
mongoose.set('useCreateIndex',true)
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

//真正操作数据库的代码
;(async()=>{
  await myPromise

  //1.获取Schema约束对象-----------------请来一个保安
  let Schema = mongoose.Schema

  //2.实例一个约束对象-------------------制定进入你家的规则
  let studentsSchema = new Schema({
      stu_id:{
        type:String,//字段类型
        required:true,//必填字段
        unique:true//唯一（不可重复）字段
      },
      stu_name:{
        type:String,
        required:true,//必填字段
      },
      stu_age:{
        type:Number,
        required:true,//必填字段
      },
      stu_sex:{
        type:String,
        required:true,//必填字段
        default:'男'
      },
      stu_hobby:{
        type:Array,//[String]
      },
      stu_info:{
        type:Schema.Types.Mixed//能接收所有类型的数据
      },
      date:{
        type:Date,
        default:Date.now()//默认值是当前的时间
      },
      enable_flag:{
        type:String,
        default:'Y'
      }
  })

  //3.创建模型对象 ------------------告诉保安你的规则
  let studentsModel = mongoose.model('students',studentsSchema)

  //4.创建一个插入的实例对象（真正的数据,即文档对象）--------------模拟出一个人
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
  })
  
})()








