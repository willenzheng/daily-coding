// var r=4;
// if (r===1) {
//     console.log('瓦坎达');
// } else if (r===2) {
//     console.log('印度');
// } else if (r===3) {
//     console.log('日本');
// } else {
//     console.log('八宝山');
// }

// 练习：声明变量保存订单的状态，根据订单的状态码打印对应的汉字状态
// 1-等待付款 2-等待发货 3-运输中 4-已签收 5-已取消 其他-无法追踪
// var status;
// status = NaN;
// if (status === 1) {
//     console.log('等待付款');
// } else if (status === 2) {
//     console.log("等待发货");
// } else if (status === 3) {
//     console.log('运输中');
// } else if (status === 4) {
//     console.log('已签收');
// } else if (status === 5) {
//     console.log('已取消');
// } else {
//     console.log('无法追踪');
// }
// console.log(typeof orderStatus);

// var score = 100;
// if (score >= 90) {
//     console.log('优秀');
// } else if (score >= 80) {
//     console.log('良好');
// } else if (score >= 70) {
//     console.log('中等');
// } else if (score >= 60) {
//     console.log('及格');
// } else { 
//     console.log('不及格'); 
// }

var money = prompt('请输入存款金额');
if (money < 0 && typeof (money) !== Number) {
    alert('error');
} else if (money < 100000) {
    alert('putong');
} else if (money < 1000000) {
    alert('youzhi');
} else if (money < 5000000) {
    alert('jinpai');
} else {
    alert('zuanshi');
}