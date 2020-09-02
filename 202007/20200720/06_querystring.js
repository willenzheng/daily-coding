const querystring=require('querystring');
let str='kw=dell&price=4000';
let obj=querystring.parse(str);
console.log(obj.kw,obj.price);
