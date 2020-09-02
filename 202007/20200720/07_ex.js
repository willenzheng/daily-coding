//练习：解析以下URL，获取URL中查询字符串部分
//https://www.tmooc.cn:443/web.html?cid=2006&cname=nodejs
const url=require('url');
const querystring=require('querystring');
let str1='https://www.tmooc.cn:443/web.html?cid=2006&cname=nodejs'
let obj1=url.parse(str1);
let obj2=querystring.parse(obj1.query);
console.log(obj1.query);
console.log(obj2.cid,obj2.cname);
