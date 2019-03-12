/*
* 1.什么是包？
*   你写的代码（你的项目），符合了一些规范之后，就能称之为包。
*
* 2.包的结构：
    1)	package.json 	描述文件--------------必不可少的！！！
    2)	bin 	可执行二进制文件
    3)	lib 	js代码
    4)	doc	文档
    5)	test	单元测试
    如何创建一个属于自己的包？使用命令：npm init
    包名：不能使用中文、不能包含大写字母
    package-lock.json:用于缓存已经下载过的包的下载地址，使下一次下载安装时速度更快（缓存文件）


  3.npm与node是什么关系？
     安装node之后，自动默认安装了一个npm包管理器


  4.npm常用的命令：
      一、搜索：
            1.借助命令搜索：npm search xxxx；
            2.借助npm官网搜索：https://www.npmjs.com

      二、安装：（在要安装的目录下，已经建立好了package.json文件）

            1.npm install xxx --save 或 npm i xxxx -S  或 npm i xxx
            （下载并安装xxx包到当前工程的node_modules文件夹中，并且将该包写入包说明文件（pacjage.json），并添加到生产依赖（dependencies）中）

            2.npm install xxx ---save-dev 或 npm i xxxx -D
            （下载并安装xxx包到当前工程的node_modules文件夹中，并且将该包写入包说明文件（pacjage.json），并添加到开发依赖（devDependencies中）

            3.npm install 或 npm i
            （安装所有在package.json中声明的包）

            4.npm install xxxxx@1.2.3 :安装xxxx包的指定版本

            5.npm install xxxx -g:全局安装xxxx包（一般来说有指令的包，要进行全局安装，全局安装之后的包，在任意位置都能使用）

      三、移除：

            1.npm remove xxx
            （从当前的工程，移除指定的包）

      四、其他命令：

          1.npm view xxxx versions :查看远程npm仓库中xxxx包的所有版本

          2.npm view xxxx version :查看远程npm仓库中xxxx包的最新版本

          3.npm get prefix ：获取全局安装的位置

          4.npm audit fix:用于修复一些错误和bug

          5.npm ls xxxx :用于查看当前搞工程安装的xxxx包的简介
\
* */

let uniq = require('uniq')

console.log(uniq([1, 2, 2, 3, 4, 4, 5]));