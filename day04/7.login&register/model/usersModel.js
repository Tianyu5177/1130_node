/*
* 该模块用于生成学生模型对象
* */

//1.引入mongoose模块
const mongoose = require('mongoose')
//2.获取Schema约束对象-----------------请来一个保安
let Schema = mongoose.Schema

//3.实例一个约束对象-------------------制定进入你家的规则
let usersSchema = new Schema({
  email:{
    type:String,//字段类型
    required:true,//必填字段
    unique:true//唯一（不可重复）字段
  },
  pwd:{
    type:String,
    required:true,//必填字段
  },
  re_pwd:{
    type:Number,
    required:true,//必填字段
  },
  name:{
    type:String,
    required:true,//必填字段
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
let usersModel = mongoose.model('users',usersSchema)

module.exports = usersModel