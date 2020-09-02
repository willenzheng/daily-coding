//原始类型数据存储
/*
var a=1;
//把当前a的值拷贝一份赋给b，a和b两个之间没有关联
var b=a;
a=2;
console.log(b);
*/

//引用类型数据存储
var ran={
    color:'荧光绿',
    size:'XXXL',
}
//
var dong=ran;
dong.size='XXXXL';
ran.color='红色';
console.log(ran);
console.log(dong);