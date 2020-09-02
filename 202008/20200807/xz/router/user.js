const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
const r=express.Router();
//添加路由
//1.用户注册
//post /reg
r.post('/reg',(req,res)=>{
  //1.1获取post传递的数据
  let obj=req.body;
  console.log(obj);
  //1.2验证数据是否为空
  if(!obj.uname){
    res.send({code:401,msg:'uname required'});
	return;
  }
  if(!obj.upwd){
    res.send({code:402,msg:'upwd required'});
	return;
  }
  if(!obj.email){
    res.send({code:403,msg:'email required'});
	return;
  }
  if(!obj.phone){
    res.send({code:404,msg:'phone required'});
	return;
  }
  //1.3执行SQL语句，插入到用户表中
  pool.query('INSERT INTO xz_user SET ?',[obj],(err,result)=>{
    if(err) throw err;
	console.log(result);
	//插入成功再响应
	res.send({code:200,msg:'reg success'});
  }); 
});
//2.用户登陆
//post /login
r.post('/login',(req,res)=>{
  //2.1获取post请求的数据
  let obj=req.body;
  console.log(obj);
  //2.2验证数据是否为空
  if(!obj.uname){
    res.send({code:401,msg:'uname required'});
	return;
  }
  if(!obj.upwd){
    res.send({code:402,msg:'upwd required'});
	return;
  }
  //2.3执行SQL语句，查询是否用户名密码同时匹配，如果有响应‘成功’，否则‘失败’
  pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=?',[obj.uname,obj.upwd],(err,result)=>{
    if(err) throw err;
	//结果是数组
	console.log(result);
	//如果数组长度为0，说明登陆失败；否则登陆成功
	if(result.length===0){
	  res.send({code:301,msg:'login err'});
	}else{
	  res.send({code:200,msg:'login suc'});
	}
  });
});
//3.修改用户
//get  /update
r.get('/update',(req,res)=>{
  //3.1获取查询字符串传递的数据
  let obj=req.query;
  console.log(obj);
  //3.2使用for-in循环遍历对象属性，如果哪一项的值为空，响应哪一项是必须的
  //访问每一个属性
  let i=400;
  for(let key in obj){
	i++;
	//key 属性名   obj[key] 对应的属性值
    //console.log(key,obj[key]);
	//判断属性值是否为空
	if(!obj[key]){
	  res.send({code:i,msg:key+' required'});
	  return;
	}
  }
  //3.3执行SQL语句
  pool.query('UPDATE xz_user SET ? WHERE uid=?',[obj,obj.uid],(err,result)=>{
    if(err) throw err;
	console.log(result);
	//返回结果是对象，如果对象的affectedRows属性值为0说明修改失败，否则修改成功
	if(result.affectedRows===0){
	  res.send({code:301,msg:'update err'});
	}else{
	  res.send({code:200,msg:'update suc'});
	}
  });
});
//导出路由器对象
module.exports=r;