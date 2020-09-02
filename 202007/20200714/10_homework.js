// var arr1=['a','b','c','d'];
// var arr2=new Array();
// for(var i=arr1.length-1,y=0;i>=0,y<arr1.length;i--,y++){
//     arr2[y]=arr1[i];
// }
// console.log(arr2);

// var arr1=['a','b','c','d'];
// var arr2=new Array();
// for(var i=arr1.length-1;i>=0;i--){
//     arr2[arr1.length-1-i]=arr1[i];
// }
// console.log(arr2);

var arr=['a','b','c','d','e','f','g'];
for(var i=0,c;i<arr.length/2;i++){
    c=arr[i];
    arr[i]=arr[arr.length-1-i];
    arr[arr.length-1-i]=c;
}
console.log(arr);

// var arr=[100,90,80,70,60,50,40];
// for(var y=0;y<arr.length-1;y++){
//     for(var i=0;i<arr.length-1;i++){
//         if(arr[i]>arr[i+1]){
//             var c=arr[i+1];
//             arr[i+1]=arr[i];
//             arr[i]=c;
//         }
//     }
// }
// console.log(arr);
