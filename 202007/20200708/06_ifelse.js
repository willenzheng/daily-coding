//根据数据库中所存储的性别（1/0）显示男或者女
// var sex=1;
// if (sex===1) {
//     console.log('男');
// }else {
//     console.log('女');
// }

//练习：使用if-else完成用户登录，如果用户名是root并且密码是123456，打印登录成功，否则登录失败
// var userName,userPwd;
// userName='root';
// userPwd='1234567';
// check=userName==='root'&&userPwd==='123456';
// if (check) {
//     console.log('登录成功');
// } else {
//     console.log('登录失败');
// }

//练习：声明变量保存用户的登录状态（true/false)，如果已经登录，打印‘root’，否则打印‘请登录’。
//使用if-else和三目运算符两种方法
// var dl;
// dl=false;
// if (dl) {
//     console.log('root');
// } else {
//     console.log('请登录');
// }

var dl;
dl = false;
dl ? console.log('root') : console.log('请登录');
