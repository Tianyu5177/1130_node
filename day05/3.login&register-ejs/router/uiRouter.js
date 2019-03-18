/*
*
* UI页面路由器，专门用于展示页面
* */
//引入express
let express = require('express')
//引入路由器构造函数
let {Router} = express
//实例一个路由器对象
let router = new Router()
//引入path模块----------node内置的一个模块，专门用于解决路径问题。
let {resolve} = require('path')

//登录页面路由
router.get('/login',(req,res)=>{
  let {email} = req.query
  let errMsg = {email}
  //errMsg.name = name
  res.render('login',{errMsg})
})

//注册页面路由
router.get('/register',(req,res)=>{
  let errMsg = {}
  res.render('register',{errMsg})
})


module.exports = router
