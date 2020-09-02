//引入node.js内置的url模块
const url=require('url');
//使用url模块下的parse方法将url解析为对象存放到常量中
const myURL=url.parse("http://nodejs.cn/api/url.html#url_url");
console.log(myURL);