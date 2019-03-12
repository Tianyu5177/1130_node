/*
* 1.JS由哪几部分组成（对于浏览器说）？
*     1.DOM（document） 文档对象模型 -----------很多API能对DOM进行增删改查。
*     2.BOM （window）浏览器对象模型------------很多的API，例如：location、history...
*     3.ES规范  ---------- function var let .....
*
* 2.NodeJs由哪几部分组成？
*     1.没有DOM，因为服务端不需要。
*     2.没有BOM，因为服务端没有窗口。
*     3.几乎包含所有的ES规范，在Node中是没有window的，但是取而代之的是global
*       console.log()
*       setTimeOut()
*       ...
*  3.global上有什么东西？
*     1.process.nextTick-----立即执行函数
*     2.Buffer
*     3.clearImmediate
*     4.clearInterval----
*     5.clearTimeout-----
*     6.setImmediate------立即执行函数
*     7.setInterval----
*     8.setTimeout----
* */

//console.log(this)
//console.log(global)


//立即执行函数
setImmediate(()=>{
  console.log('setImmediate被调用')
})

//立即执行函数
process.nextTick(()=>{
  console.log('process.nextTick被调用了')
})

setTimeout(()=>{
  console.log('setTimeout被调用了')
})
console.log('主线程上的代码')