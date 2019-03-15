/*
* 该模块用于生成学生模型对象
* */

//1.引入mongoose模块
const mongoose = require('mongoose')
//2.获取Schema约束对象-----------------请来一个保安
let Schema = mongoose.Schema

//3.实例一个约束对象-------------------制定进入你家的规则
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

//4.创建模型对象 ------------------告诉保安你的规则
let studentsModel = mongoose.model('students',studentsSchema)

module.exports = studentsModel