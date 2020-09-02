console.log('这是眼睛模块');
var a=1;
function fn(){
    return 2;
}
//导出功能（添加USB口）
//导出对象，该模块公开的功能，默认是一个空对象，如果要公开出那些功能，只需要添加到对象中
module.exports={
    color:'绿色',
    mya:a,
    myfn:fn
}