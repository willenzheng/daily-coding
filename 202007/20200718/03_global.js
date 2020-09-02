//声明变量
var a=1;
//创建函数
function fn(){
    return 2;
}
//a不是全局变量
console.log(global.a);
//fn不是全局函数
console.log(global.fn());