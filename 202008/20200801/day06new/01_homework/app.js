const express=require('express');
const mysql=require('mysql');
//创建web服务器
const app=express();
//设置端口
app.listen(8080);

//托管静态资源到public目录
app.use( express.static('./public') );
//创建连接池对象
const pool=mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'',
  database:'tedu',
  connectionLimit:'20'
});
//创建路由
//get  /add
app.get('/add',(req,res)=>{
  //获取URL中查询字符串传递的数据
  console.log(req.query);
  //把数据对象插入到数据表dept
  pool.query('INSERT INTO dept SET ?',[req.query],(err,result)=>{
    if(err) throw err;
	console.log(result);
	//只有数据插入成功才会作出响应
	res.send('部门添加成功');
  });
});