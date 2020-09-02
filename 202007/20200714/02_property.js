// var jian={
//     title:'杂粮煎饼',
//     price:50,
// }
// //检测属性是否存在（返回true或false）
// //方法1
// console.log(jian.price===undefined);
// //方法2
// console.log(jian.hasOwnProperty('title'));
// //方法3
// console.log('weight' in jian);


var goods={
    gid:1,
    title:'番薯',
    price:3
}
if (goods.hasOwnProperty('price')){
    goods.price+=10;
}
if ('place' in goods===false){
    goods.place='厦门';
}
console.log(goods);