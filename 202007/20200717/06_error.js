// var a=1；
console.log(1);
// var b=2;
// console.log(c);
// var d=new Date();
// d.setDay(0);
// console.log(d);

// var arr=new Array(-10);

//自定义错误
// throw 1;

// console.log(2);
var age=15;
try{
    if(age<18||age>60){
        throw'不合法的年龄';
    }
}catch(err){
    console.log(err);
}