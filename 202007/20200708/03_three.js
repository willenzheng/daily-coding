//判断一个人是否为成年人
//var age=17;
//var text=age>=18?'成年人':'未成年人';
//console.log(text);

//练习：声明变量保存用户输入的用户名和密码，如果用户名是root并且密码是123456，打印登录成功，否则打印登录失败
var userName,userPassword;
userName='root';
userPassword='1234567';
var text=userName==='root' && userPassword==='123456' ? '登录成功' : '登录失败';
console.log(text);