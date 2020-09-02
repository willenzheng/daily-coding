const express = require('express');
//引入用户路由器
const ur = require('./router/user.js');
const ajax = require('./router/ajax.js');
const pro = require('./router/pro.js');
//引入body-parser中间件
const bodyParser = require('body-parser');
const app = express();
app.listen(8080);
//托管静态资源到public目录
app.use(express.static('./public'));
app.use(express.static('./pro'));
//使用body-parser将post请求数据解析为对象
app.use(bodyParser.urlencoded({
	extended: false
}));
//路由器（路由）都是放在当前服务器的最后
//挂载路由器，添加前缀/user
//  /user/reg
app.use('/user', ur);
app.use('/ajax', ajax);
app.use('/pro', pro);
