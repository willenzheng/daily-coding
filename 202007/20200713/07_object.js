//字面（直接）量
// var hair={
//     color:'绿色',
//     material:'振金',
//     length:'47厘米',
//     'made in':'瓦坎达'
// }
// console.log(hair);
/*
var phone={
    brand:'华力',
    size:'9.8',
    color:'绿色',
    'memory-size':'1T'
}
//对象访问
console.log(phone);
//属性访问
console.log(phone.brand);
//修改属性值
phone.size='21';
//访问不存在的属性，返回undefined
console.log(phone.price)
//添加属性
phone.price='18888';
//访问带引号的属性名，使用中括号
console.log(phone['memory-size']);
//所有的属性都可以使用中括号，但是必须加引号
console.log(phone['color']);
*/

var book={
    bid:'1',
    title:'百年孤独',
    price:'23.00 RMB',
    author:'加西亚-马尔克斯',
}
book.price='3.00 DOLLOR';
book['publicing house']='中信出版社';
console.log(book.price);