//使用循环打印1~10之间所有的整数；

/*
for(var i=1;i<=10;i++){
    console.log(i);
}
*/

// var i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// for(var i=50;i>=41;i--){
//     console.log(i);
// }

// for(var i=1;i<=100;i++){
//     if(i%2!==0){
//         console.log(i);
//     }
// }
// var i=1,s=0;

// for(i<=100;i++){
//     if(i%7===0){
//         s+=i;
//     }
// }
// console.log(s);

// for(a=1,str='';a<=5;a++){
//     str+=a;
// }
// console.log(str);

// for(a=1,str='';a<=100;a++){
//     str+=a+'*5='+a*5+'   ';
// }
// console.log('\n'+str);

var i=1;
for(;;){
    console.log(i);
    if(i%100===0){
        break;
    }
    i++;
}