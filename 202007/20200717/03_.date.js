//转为本地字符串
// var d=new Date();
// console.log(d.toLocaleString());
// console.log(d);
// console.log(d.toLocaleDateString());
// console.log(d.toLocaleTimeString());
//设置日期时间
// var b=new Date('1977/5/29 23:44:44');
// //
// b.setFullYear(1983);
// b.setMonth(10);//0~11
// b.setDate(11);
// b.setTime(1000);
// console.log(b.toLocaleString());

var d=new Date();
var d2=new Date(d);
d.setHours(d.getHours()+3);
d.setDate(d.getDate()+7);
d.setFullYear(d.getFullYear()+5);
d.setMonth(d.getMonth()-3);
console.log(d.toLocaleString());
console.log(d);
console.log(d2);