const mysql=require('mysql');
const { join } = require('path');
//创建连接池对象
const pool=mysql.createPool({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'',
    database:'tedu',
    connectionLimit:'20'//设置连接池的大小
});
//执行SQL命令
//参数2是一个数组，把要过滤的值放入里边
// pool.query('SELECT * FROM emp WHERE eid=?',['2 or 1=1'],(err,result)=>{
//     if(err) throw err;
//     console.log(result);
// });
// pool.query('INSERT INTO emp VALUES(?,?,?,?,?,?)',[null,'山田依然',1,'1977-5-29',47899,10],(err,result)=>{
//     if(err) throw err;
//     console.log(result);
// });
//将对象形式的数据插入到数据表中
let obj={
    eid:null,
    ename:'然然',
    salary:18990,
    deptId:20,
    sex:0,
    birthday:'1998-10-20'
}
pool.query('INSERT INTO emp SET ?',[obj],(err,result)=>{
    if(err) throw err;
    console.log(result);
});