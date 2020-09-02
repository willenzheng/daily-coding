// var arr=['a','b','c','d'];
// /*
// for(var key in arr){
//     console.log(key,arr[]);
// }
// */
// //使用循环，遍历下标 0~3
// for(var i=0;i<arr.length;i++){
//     //i代表下标
//     //arr[i]代表下标对应的元素
//     console.log(i,arr[i]);
// }


// var score=[60,70,80,90,100,90,80,70,60];
// for(var i=0,sum=0;i<score.length;i++){
//     sum+=score[i];
// }
// var avg=sum/score.length;
// console.log(sum,avg);

// var name=['a','b','c','然哥'];
// for(var i=0;i<name.length;i++){
//     if(name[i]==='然哥'){
//         name[i]='然姐';
//     }
// }
// console.log(name);

var number=[15,23,18,40,66,3]
for(var i=0,a=number[0];i<number.length;i++){
    if(a<number[i]){
        a=number[i]
    }
}
console.log(a);