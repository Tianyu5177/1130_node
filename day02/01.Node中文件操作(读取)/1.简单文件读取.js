/*
* 简单文件读取：
*   fs.readFile(path[, options], callback)
*           --path:要写入的文件路径+文件名+文件后缀
*           --options：配置对象
*               --flag：打开文件要进行的操作，默认值：'w'
*                     'w' : 写入
*                     'r' ：读取
*                     'a' ：追加
*               --encoding ：编码，默认是：'utf-8'
*           --callback：回调函数
* */

let fs = require('fs')

fs.readFile('../music.mp3',(err,data)=>{
    if(!err) {
      //data是Bufefr格式，为什么不自动转成可阅读的文字？
      //因为读取的文件不一定是可观的文字
      //关于：
      //  如果是字符串，输出的是字符串长度
      //  如果是buffer，输出的是占用内存空间的大小
      console.log(data.length)
      fs.writeFile('./demo2.mp3',data,(err)=>{
        if(!err) console.log('文件写入成功了')
        else console.log(err)
      })
    }else{
      console.log(err)
    }
})