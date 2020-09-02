// //创建
// new Date('2020/7/17 10:23:30');
// new Date(2020,6,17,10,23,30);//月份0~11  1~12月
// new Date();//当前操作系统地时间
// new Date(1000);//存储的日期时间是距离计算机元年的毫秒数//计算机元年：1970/1/1 0:0:0
// console.log(d4);

//获取日期时间
// var d=new Date();
// //2020.7.17  2020年7月17日 10:57
// console.log(d.getFullYear());
// console.log(d.getYear());
// console.log(d.getMonth()+1);
// console.log(d.getDate(),d.getHours());
// console.log(d.getMinutes(),d.getSeconds(),d.getMilliseconds());
// console.log(d.getDay());
// console.log(d.getTime());

// var d=new Date();
// var y=d.getFullYear();
// var m=d.getMonth()+1;
// if(m<10){
//     m='0'+m;
// }
// var dd=d.getDate();
// if(m<10){
//     m='0'+m;
// }
// var h=d.getHours();
// var mm=d.getMinutes();
// var s=d.getSeconds();
// var week=d.getDay();
// var arr=['日','一','二','三','四','五','六']
// console.log(y+'年'+m+'月'+dd+'日'+' '+h+'时'+mm+'分'+s+'秒'+' '+'星期'+arr[week]);

var getRemainTime=function(t){
    var now=new Date();
    var then=new Date(t);
    var time=then-now;
    var d=time/1000/60/60/24
    var dd=parseInt(d);
    var h=(d-dd)*24;
    var hh=parseInt(h);
    var m=(h-hh)*60;
    var mm=parseInt(m);
    var s=(m-mm)*60;
    var ss=parseInt(s);
    var result=dd+'天'+hh+'小时'+mm+'分钟'+ss+'秒';
    console.log('距离目标日期还有：'+result);
}
getRemainTime('2020-07-18');
