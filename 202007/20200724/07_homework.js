//引入express和mysql模块
const express=require('express');
const mysql=require('mysql');
//创建web服务器
const app=express();
//设置监听端口
app.listen(8080);
//创建mysql普通连接对象
const c=mysql.createConnection({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'',
    database:'tedu'
});
//创建服务器内置中间件
app.use(express.static('./public'));
//设置路由
app.get('/myadd',(req,res)=>{
    let obj=req.query;//获取URL中查询字符串传递的数据
    res.send('部门添加成功');//响应提交按钮
    //操作数据库：往数据表dept里添加用户输入的部门名称，主键为自增，无需输入
    c.query('INSERT INTO dept VALUES(?,?)',[null,obj.dept],(err,result)=>{
        if(err) throw err;
    });
});
