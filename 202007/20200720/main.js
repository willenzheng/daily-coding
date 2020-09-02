let obj=require ('./circle.js');
let obj2=require('./07_yan.js');
console.log(obj.c(1).toFixed(0),obj.s(1).toFixed(0));
console.log(obj2.myfn());
console.log(global.__filename);
console.log(global.__dirname);