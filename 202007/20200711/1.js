// function sum(n) {
//     var s=0;
//     for(var i=1;i<=n;i++){
//         s+=i;
//     }
//     console.log(s);
// }
// sum(3);

// function runCount(start,end) {
//     for(var year=start,count=0;year<=end;year++){
//         if(year%4===0 && year%100!==0 || year%400===0){
//             count++;
//         }
//     }
//     console.log(count);
// }
// runCount(2000,2020);
// runCount(1996,2020);

// function add(a,b){
//     // console.log(a+b);
//     return 'giao';
// }
// var res=add(3,4);
// console.log('结果为：'+res);

// function max(n1,n2) {
//     // if(n1>=n2){
//     //     return n1;
//     // }else return n2;
//     return(n1>n2?n1:n2);
// }
// var max1=max(1,2);
// var max2=max(4,3);
// var max3=max(3,3);
// console.log(max1,max2,max3);

// function getMax(n1,n2,n3){
//     if(n1>n2){
//         if(n2>n3){
//             return n1;
//         }else if(n1>n3){
//             return n1;
//         }else return n3;
//     }else if(n2>n3){
//         return n2;
//     }else return n3;
// }
// var max=getMax(4,5,5);
// console.log(max);

// function getOrderStatus(n){
//     var orderStatus;
//     switch (n) {
//         case 1:
//             orderStatus='等待付款';
//             break;
//         case 2:
//             orderStatus='等待发货';
//             break;
//         case 3:
//             orderStatus='运输中';
//             break;
//         case 4:
//             orderStatus='已签收';
//             break;
//         case 5:
//             orderStatus='已取消';
//             break;
//         default:
//             orderStatus='无法追踪';
//             break;
//     }
//     return orderStatus;
// }
// // var orderStatus=getOrderStatus(4);
// console.log(); 

// function isLeapyear(year) {
//     return (year%4===0 && year%100!==0 || year%400===0)?true:false;
// }
// var r=isLeapyear(1000);
// console.log(r);

// function fun(   ){
//     var n2=n3=4;
// }
// fun();
// console.log(n3);
// console.log(n2);

// function foo(n){
//     console.log(n);
// }
// foo(5);
// console.log(n);

// function bar(m){
//     m=m+3;
// }
// bar(2);
// console.log(m);
foo();
function foo(){
    console.log(1);
}
