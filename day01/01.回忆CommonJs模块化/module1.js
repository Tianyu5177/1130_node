
exports.demo = function () {
  console.log('demo')
}

module.exports = {
  data : 'atguigu',

  getData(){
    return this.data
  }
}


/*
*
* 在CommonJs中，默认存在一个关系：exports = module.exports = {}
* */