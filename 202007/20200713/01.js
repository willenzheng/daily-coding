// var a=1;
// var b=2;
// var c=a;
// a=b;
// b=c;
// console.log(a,b);

// function fib(n){
//     var s;
//     if(n===1 || n===2){
//         s=1;
//     }else if(n>2){
//         s=fib(n-2)+fib(n-1);
//     }else {
//         s="giao";
//     }
//     return s;
// }
// var a=fib(10);
// console.log(a);

// function fib(n){
//     var n1=1,n2=1;
//     //如果要获取第n项的值，只需要往后挪动n1和n2，每次挪动都是从3开始。
//     for(var i=3;i<=n;i++){
//         var c=n1;
//         n1=n2;
//         n2+=c;
//     }
//     return n2;
// }
// console.log(fib(48));

function fib(n){
    var s;
    if(n===1){
        s=1;
    }else{
        s=fib(n-1)+n
    }
    return s;
}
console.log(fib(100));