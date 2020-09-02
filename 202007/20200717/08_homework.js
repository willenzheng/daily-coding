//创建红色球和蓝色球数组
var red=[];
var blue=[];
//将1~33放进红色球数组
for(var i=0;i<33;i++){
    red[i]=i+1;
}
//将1~16放进蓝色球数组
for(var i=0;i<16;i++){
    blue[i]=i+1;
}
//创建中奖名单数组
var list=[];
//从红色球数组中取出不重复的6个数字放进中奖名单数组
for(var i=0;i<6;i++){
    //取0~32的一个随机下标
    var index1=Math.floor(Math.random()*red.length);
    //将相对应下标的1个红色球放进中奖名单中
    list[i]=red[index1];
    //从红色球数组删除掉已选出的球
    red.splice(index1,1);
}
//将中奖名单中从红色球取出的6个球从小到大排列
for(var j=0;j<list.length;j++){
    for(var i=0,c;i<list.length;i++){
        if(list[i]>list[i+1]){
            c=list[i];
            list[i]=list[i+1];
            list[i+1]=c;
        }
    }
}
//取0~15的一个随机下标
var index2=Math.floor(Math.random()*blue.length);
//将相对应下标的1个蓝色球放进中奖名单中
list[list.length]=blue[index2];
//打印中奖名单
console.log(list);



var d1=new Date('2020/7/17');
var d2=new Date(d1);
d2.setFullYear(d2.getFullYear()+3);
d2.setMonth(d2.getMonth()-1);
var d3=new Date(d2);
if(d3.getDay()===6){
    d3.setDate(d3.getDate()-1);
}else if(d3.getDay()===0){
    d3.setDate(d3.getDate()-2);
}
console.log('入职时间:'+d1.toLocaleString());
console.log('到期时间:'+d2.toLocaleString());
console.log('续签时间:'+d3.toLocaleString());



let sum=0;
for(let i=1;i<=100;i++){
        sum+=i;
}
console.log(sum);