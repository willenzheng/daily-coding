// console.log(1);//日志
// console.info(2);//消息
// console.warn(3);//警告
// console.error(4);//错误

// 统计耗时
// 开始计时
console.time('giao');
for(let i=1;i<=100000000;i++){}
//结束计时
console.timeEnd('giao');

console.time('for');
for(let i=1;i<=10000;i++){};
console.timeEnd('for');

{
console.time('while');
let i=1;
while(i<=10000){i++;};
console.timeEnd('while');
}
{
console.time('do-while');
let i=1
do {i++;} while(i<=10000);
console.timeEnd('do-while');
}