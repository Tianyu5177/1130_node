/*
* 1.什么是Buffer？
*     1.它是一个类数组的对象，用于存储数据（存储的全部是二进制数据）
*     2.Buffer的效率很高，存储和读取的速度都很快，本质就是对内存的直接操作
*     3.Buffer的大小一旦确定了，不可修改。
*     4.每个元素占用内存的空间是1字节。
*     5.Buffer是Node中非常核心的模块，无需下载，无需引入，直接可以使用
*
*  2.进制：
*  十六进制：00--------ff
*  十进制：0--------255
*  二进制：00000000-------11111111
*
*  1字节(byte) = 8位(bit)
*  1KB = 1024byte1
*  1MB = 1024KB
*  1GB = 1024MB
*  1TB = 1024GB
*  1PB = 1024TB
*  ...
*
* */


//将一个字符串保存到Buffer中
let str = 'Hello atguigu尚硅谷'
console.log(str);//输出的是字符串长度

let buf1 = Buffer.from(str)
console.log(buf1);//输出的占用内存空间的大小


//第一种：使用new关键字，实例一个Buffer
//备注：即将被废弃！效率稍低
/*let buf2 = new Buffer(10)
console.log(buf2);*/


//第二种：使用Buffer.alloc
//效率不是最高的
/*let buf3 = Buffer.alloc(10)
console.log(buf3);*/


//第三种：使用Buffer
//效率最高，但是有一定的安全性问题
/*
let buf4 = Buffer.allocUnsafe(10)
console.log(buf4);*/
