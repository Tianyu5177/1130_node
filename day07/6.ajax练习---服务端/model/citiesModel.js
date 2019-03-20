/*
* 该模块用于生成学生模型对象
* */

//1.引入mongoose模块
const mongoose = require('mongoose')
//2.获取Schema约束对象-----------------请来一个保安
let Schema = mongoose.Schema
//3.实例一个约束对象-------------------制定进入你家的规则
let citiesSchema = new Schema({
  code:String,
  province:String,
  city:String,
  county:String,
  name:String,
  level:Number
})

//4.创建模型对象 ------------------告诉保安你的规则
let citiesModel = mongoose.model('cities',citiesSchema)
module.exports = citiesModel