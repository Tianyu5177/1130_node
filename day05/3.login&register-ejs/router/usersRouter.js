/*
*
* 该路由器，主要负责用户注册、登录的逻辑，以后修改校验规则，在这里修改
* */

let express = require('express')
let usersModel = require('../model/usersModel')
let {Router} = express
let router = new Router()


//注册逻辑
router.post('/register',async(req,res)=>{
  let {email,pwd,re_pwd,name} = req.body
  let errMsg = {}
  //定义正则校验
  const emailReg = /^[a-zA-Z0-9_]{5,20}@[a-zA-Z0-9_]{2,10}\.com/
  const pwdReg = /^[a-zA-Z0-9_]{6,18}/
  const nameReg = /^[\u4e00-\u9fa5]/
  //进行判断
  if(!emailReg.test(email)){
    errMsg.emailErr = '邮箱输入不合法，格式应该只包含字母、数字、下划线'
  }
  if(!pwdReg.test(pwd)){
    //res.send('密码输入不合法，格式应该只包含字母、数字、下划线，6--18')
    //return
    errMsg.pwdErr = '密码输入不合法，格式应该只包含字母、数字、下划线，6--18'
  }
  if(!nameReg.test(name)){
    // res.send('姓名输入不合法，格式应该只包含字母、数字、下划线')
    // return
    errMsg.nameErr = '姓名输入不合法，格式应该只包含字母、数字、下划线'
  }
  if(pwd !== re_pwd){
    //res.send('两次输入的密码不一致')
    //return
    errMsg.rePwdErr = '两次输入的密码不一致'
  }
  //判断错误对象是否为空
  if(JSON.stringify(errMsg) !== '{}'){
    res.render('register',{errMsg})
  }else{
    try{
      let finData = await usersModel.findOne({email})
      if(!finData){
        let result = await usersModel.create({email,pwd,re_pwd,name})
        console.log(result);
        //res.send('注册成功！')
        //res.render('login')
        res.redirect('/login?email='+email)
      }else{
       //res.send('邮箱已经被注册过，请更换邮箱')
        errMsg.emailErr = '邮箱已经被注册过，请更换邮箱'
        res.render('register',{errMsg})
      }
    }
    catch(err){
      console.log(err)
      res.send('网络不稳定，请稍后重试！')
    }
  }

})
//登录逻辑
router.post('/login',async(req,res)=>{
  let {email,pwd} = req.body
  let errMsg = {}
  const emailReg = /^[a-zA-Z0-9_]{5,20}@[a-zA-Z0-9_]{2,10}\.com/
  const pwdReg = /^[a-zA-Z0-9_]{6,18}/
  if(!emailReg.test(email)){
    //res.send('邮箱输入不合法，格式应该只包含字母、数字、下划线')
    //return
    errMsg.emailErr = '邮箱输入不合法，格式应该只包含字母、数字、下划线'
  }
  if(!pwdReg.test(pwd)){
    //res.send('密码输入不合法，格式应该只包含字母、数字、下划线，6--18')
    //return
    errMsg.pwdErr = '密码输入不合法，格式应该只包含字母、数字、下划线，6--18'
  }

  if(JSON.stringify(errMsg) !== '{}'){
    res.render('login',{errMsg})
  }else{
    try{
      let resData = await usersModel.findOne({email,pwd})
      if(!resData){
        res.send('登录失败，用户名或密码错误')
      }else{
        res.redirect('http://www.baidu.com')
      }
    }catch(err){
      console.log(err)
      res.send('网络不稳定，请稍后重试！')
    }
  }
})

module.exports = router