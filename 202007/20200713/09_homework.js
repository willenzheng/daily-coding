var score={
    zhangsan:90,
    lisi:80,
    wangwu:70,
    chenliu:60
}
var sum=0;
for(var key in score){
    sum+=score[key];
}
console.log(sum);