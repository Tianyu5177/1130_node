/*
* 1.在NodeJS中，所有的模块（js文件），都被自动包裹了一个外层函数
* 2. 外层函数：function (exports, require, module, __filename, __dirname) {...}
*       -- exports : 用于暴露模块
*       -- require ：用于引入模块
*       -- module ： 用于暴露了模块
*       -- __filename ：当前文件的路径（绝对路径）
*       --__dirname ：当前文件所在文件夹的路径（绝对路径）
*
* 3.这个外层函数有什么用？
*     1.让我们可以直接使用CommonJs语法。
*     2.隐藏内部实现（作用域）
*     3.处于安全性考虑
*
* */


/*function demo(a,b,c) {
  console.log(arguments.callee.toString())
}*/

//demo(1,2,3)

console.log(arguments.callee.toString())
//console.log(__filename)
console.log(__dirname)