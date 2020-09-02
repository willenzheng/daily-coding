//完成双色球案例，将获取的随机值放入到数组中
//红球，在1~33之间随机取6个，不能重复
let arr=[];
//循环产生1~33之间所有的整数，然后把他们放入数组arr中
for(let i=1;i<=33;i++){
  arr.push(i);
}
//console.log(arr);
let arr2=[];
//随机取6个，循环6次，然后取到放到一个新数组
for(let i=0;i<6;i++){
  //获取随机下标  0~32
  //0~1 * 33(数组长度)  0~32.x   向下取整
  let index=Math.floor( Math.random()*arr.length );
  //下标对应的元素
  //console.log( arr[index] );
  //把找不到的随机元素放入到新数组中
  arr2.push( arr[index] );
  //把取到随机元素在原数组arr中删除，下次再获取就不会出现
  //删除按照下标删
  arr.splice(index,1);
}
//从小到大排序
arr2.sort( function(a,b){
  return a-b;
} );

//获取1个蓝球 
//随机范围1~16
//>=0  <1
//0~1 * 16   0~15.x  向上取整  0~16
//0~1 * 16   0~15.x  向下取整  0~15  +1   1~16
//0~1 * 17   0~16.x  向下  0~16
//					 向上  0~17
let blue=Math.floor( Math.random()*16 ) + 1;
//把蓝球添加到新数组arr2
arr2.push(blue);
console.log(arr2);