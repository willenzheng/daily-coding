//作业一：从a~z之间随机取4个字符，把获取到的随机字符放入到一个新数组中
var arr=[
    'a','b','c','d','e','f','g',
    'h','i','j','k','l','m','n',
    'o','p','q','r','s','t',
    'u','v','w','x','y','z'
];
var arrNew=[];
for(var i=1,x;i<=4;i++){
    x=Math.floor(Math.random()*arr.length);
    arrNew.push(arr[x]);
}
console.log(arrNew);

//作业二：将一句英文每个单词的首字母大写，其余小写
var En='hOw aRE yoU';
//下面的语句是把字符串En的字母先变成小写
var en=En.toLowerCase();
//创建一个数组来存储字母
var arr=[];
//把字符串里的字母分配给数组arr
for(var i=0;i<en.length;i++){
    arr[i]=en[i];   
}//执行完循环后，arr=['h','o','w',' ','a','r','e',' ','y','o','u']
//下面的循环是找到数组arr中的空格，并把空格后面的一个字母变为大写
for(var j=0,x;j<arr.length;j++){
    if(arr[j]===' '){
        arr[j+1]=en[j+1].toUpperCase();
    }
}//执行完循环后，arr=['h','o','w',' ','A','r','e',' ','Y','o','u']
//下面的语句是把arr的第一个字母变为大写
arr[0]=arr[0].toUpperCase();
//下面的语句是把数组arr中的字母拼接起来
for(var k=0,result='';k<arr.length;k++){
    result+=arr[k];
}
console.log(result);




//     x=en.search(/ /ig);
//     en.replace(/ /ig,'1');
//     console.log(x);
//     // arr[x]=1;
//     // arr[x+1]=en[x+1].toUpperCase();
// };//此时arr=['h','o','w','1','A','r','e','1','Y','o','u']
// console.log(x);
// arr[0]=en[0].toUpperCase;
// console.log(arr);

// var a='you are beautiful';
// var b=a.split(' ')
// console.log(b);
// for (i=0,n='';i<b.length ;i++ ){
// b[i]=b[i].replace(b[i].substr(0,1), b[i].substr(0,1).toUpperCase())
// console.log(b[i]);
// }
// console.log(b.join(' '))

b=[1,2,3,4];
console.log(b.join('+'));