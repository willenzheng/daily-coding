// var i=1;
// while(true){
//     console.log(i);
//     // if(i===10){
//     //     break;
//     // }
//     i++;
// }

var i=11;
var s=1;
while(true){
    s=i*s;
    if((i+2)>20){
        break;
    }
    i=i+2;
}
console.log(s)