/*
*
* UI页面路由器，专门用于展示页面
* */
//引入express
let express = require('express')
let cookieParser = require('cookie-parser')
let usersModel = require('../model/usersModel')
//引入路由器构造函数
let {Router} = express
//实例一个路由器对象
let router = new Router()
//引入path模块----------node内置的一个模块，专门用于解决路径问题。
let {resolve} = require('path')
router.use(cookieParser())
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


//个人中心路由
router.get('/userCenter',async(req,res)=>{
  //此处的name实际上是cookie携带的id（数据库唯一标识）
  let {name} = req.cookies
  //如果携带着cookie，或者cokkie中包含着id
  if(name){
    //操作数据库
    try{
      let resData = await usersModel.findOne({_id:name})
      //console.log(resData);
      //如果查到了
      if(resData){
        let errMsg = {name:resData.name}
        res.render('userCenter',{errMsg})
      }
      //如果没查到（cookie被恶意修改过）
      else{
        //let errMsg = {}
        //res.render('login',{errMsg})
        res.redirect('/login')
      }
    }
    catch(err){
      console.log(err)
      //let errMsg = {loginErr:'网络不稳定，稍后再试'}
      //res.render('login',{errMsg})
      res.redirect('/login')
    }
  }
  else{
    res.redirect('/login')
  }


})

module.exports = router
