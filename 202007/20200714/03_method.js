// var ran={
//     //属性:
//     name:'山田一然',
//     sex:'男',
//     //方法：
//     play:function(){
//         //this指代当前所在的对象
//         console.log(this.name+'正在玩单杠');
//     }
// }
// //调用方法
// ran.play();

// var circle={
//     r:1,
//     pi:3.14,
//     calcC:function(){
//         return 2*this.pi*this.r;
//     },
//     calcS:function(){
//         return this.pi*this.r*this.r;
//     }
// }
// console.log(circle.calcC(),circle.calcS());


var calculator={
    add:function(n1,n2){
        return n1+n2;
    }
}
console.log(calculator.add(1,2));