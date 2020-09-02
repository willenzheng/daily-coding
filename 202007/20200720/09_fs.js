//引入fs（文件系统）模块
const fs=require('fs');
const { EEXIST } = require('constants');
//读取目录
fs.readdir('./04',(err,arr)=>{
    if(err){throw err;}
    console.log(arr);
});
// console.log(arr);
console.log('执行结束');
