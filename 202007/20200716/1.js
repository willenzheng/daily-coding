// var product=[
//     {id:1,name:'笔',price:2},
//     {id:2,name:'纸',price:1},
//     {id:3,name:'橡皮',price:1},
// ];


// var arr=['a','b','c','d'];
// var arrNew=[];
// for (var i=0;i<arr.length;i++){
//     arrNew[i]=arr[arr.length-i-1];
// }
// console.log(arrNew);

//创建函数
// var getSum=function(n){
//     //下面的循环是为了计算出循环内每个阶乘的和
//     for (var i=1,sum=0;i<=n;i++){
//         //下面的循环是为了计算出每个取值范围内正整数的阶乘
//         for(var j=1,product=1;j<=i;j++){
//             product*=j;
//         }
//         sum+=product;
//     }
//     //返回和
//     return sum;
// }
// var result=getSum(3);
// console.log(result);

// var arr1=['tom','king','lucy'];
// var arr2=arr1;
// arr2.unshift('jerry');
// console.log(arr1);

// var str='javascript';
// console.log(str.replace(/a/g,'A'));



// function fun(){
//     var a=b=c=7;
// }
// fun();
// c+=5;
// b+=3;
// console.log(b);


// var a=1;
// function fn(){
//     a=a+1;
// }
// fn(a);
// console.log(a);

// var num=1;
// function add(num){
//     num+=3;
// }
// add()
// console.log(num);

// var arr=[
//     ['朝阳','海淀','东城','西城'],
//     ['广州','深圳','珠海'],
//     ['杭州','绍兴','宁波']
//   ]
//   console.log( arr[1][2] )

// var person1={  
//     name:'lucy',
//     age: 18,
//     sex: '男'
//  }
//  var person2=person1;
//    person1.name='king';
//    person2.age=20;
//    console.log(person2.name);
//    console.log(person1.age);
// console.log(person1,person2)

// console.log(-3/0);

// var str='this is a dog';
// console.log(str.indexOf('cat'));

var str='welcome';
console.log(str.substring(-2));