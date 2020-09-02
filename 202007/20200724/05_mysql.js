const mysql=require('mysql');
//创建连接对象
const c=mysql.createConnection({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'',
    database:'tedu'//连接后要操作的数据库
});
//测试连接
c.connect();
//执行SQL命令,执行连接
//是异步方法，通过回调函数获取结果
c.query('SELECT * FROM emp',(err,result)=>{
    if(err) throw err;
    //result:SQL命令的结果
    console.log(result);
});