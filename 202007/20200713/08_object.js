// //内置的构造函数
// var emp=new Object();
// //需要单独添加每一个属性
// emp.eid='1102';
// emp.ename='然哥';
// console.log(emp);

var goods=new Object();
goods.title='袜子';
goods.price='3元';
goods.shelfTime='2020-07-13';
goods.isOnsale='true';


//任意对象都可以遍历属性
for(var giao in goods){
    //key代表每一个属性名
    console.log(giao,goods[giao]);
}
