/*
* 1.流是什么？
*     类似于现实生活中的水流，可以传输数据（液体）
* 2.特点：将要写入的数据，放在文件流中，连续不断的向指定位置传输，节约内存空间，而且效率高。
*     fs.createWriteStream(path[, options])
*         --path : 要写入的文件路径+文件名+文件后缀
*         --options：配置对象
*                 --flag：打开文件要进行的操作，默认值：'w'
*                     'w' : 写入
*                     'r' ：读取
*                     'a' ：追加
*                 --mode ：文件的权限控制，默认值是0o666
*                     0o111 : 文件可被执行的权限
*                     0o222 ：文件被写入的权限
*                     0o444 ：文件被读取的权限
*                 --encoding ：编码，默认是：'utf-8'
*                 --fd ：文件描述符（文件内部编码），默认值是null
*                 --autoClose ：自动关闭，当数据写入完毕后，自动关闭操作完的文件，默认值true
*                 --start：写入文件的起始点（开始位置）
* */

let fs = require('fs')

//创建一个可写流（构建出一个水管）
let ws = fs.createWriteStream('./hello2.txt',{
  start:30
})

//给流绑定监听
ws.on('open',()=>{
  console.log('可写流打开了')
})
ws.on('close',()=>{
  console.log('可写流关闭了')
})

ws.write('小猪佩奇身上纹\n')
ws.write('掌声献给技术人')
ws.write('掌声献给技术人')
ws.write('掌声献给技术人')
ws.write('掌声献给技术人')

//ws.close()//这种关闭流的方式，极其不推荐使用
ws.end('文件写入结束了')//当流中没有可需要传输的数据时，再关闭流

//如果在v8版本的Node中使用close关闭的流，会造成数据丢失。