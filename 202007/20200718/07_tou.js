//引入模块，执行被引入模块的代码
//引入同一级路径下的模块必须加./
//引入模块得到的是什么？得到的是该模块导出的内容，格式为对象。
let obj=require('./07_yan.js');
// const { mya } = require('./07_yan.js');
console.log(obj.myfn());