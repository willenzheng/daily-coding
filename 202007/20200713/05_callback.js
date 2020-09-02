function ran(madai){
    console.log('然哥开始跑第一棒');
    console.log('然哥到达第一棒终点');
    //让madai里边的东西开始跑
    //madai=dong
    //madai()相当于dong()
    //madai=function(){}
    madai();
}
function dong(){
    console.log('东哥开始跑第二棒');
    console.log('东哥到达第二棒终点');
}
function hua(){
    console.log('华哥开始跑第二棒');
    console.log('华哥到达第二棒终点');
}
//调用ran
//dong和hua就是回调函数，函数作为参数传递
ran(function(){
    console.log('陌生人跑了');
});
