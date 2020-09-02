//引入URL模块
const url=require('url');
// console.log(url);
let str='http://www.codeboy.com:9999/login.html';
let obj=url.parse(str);
console.log(obj.pathname);