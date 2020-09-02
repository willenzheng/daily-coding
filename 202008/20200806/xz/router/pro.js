const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
const r=express.Router();
//-------------开始写项目---------------
//1.登录接口 get /login/:uname&:upwd  返回1和0  无请求主体
r.get("/login/:uname&:upwd",(req,res) => {
	let _uname = req.params.uname;
	let _upwd = req.params.upwd;
	let sql = "select * from xz_user where uname = ? and upwd = ?";
	pool.query(sql,[_uname,_upwd],(err,result) => {
		if(err) throw err;
		if(!result.length){
			res.send("0");
		}else{
			res.send("1")
		}
	})
})
//2.查询所有用户  get  /list       返回json     无请求主体
r.get('/list',(req,res) => {
	console.log('请求中...');
	let obj = req.query;
	pool.query('SELECT * FROM xz_user', (err,result) => {
		if(err) throw err;
		res.send(result);
	})
})
//3.根据uid删除用户  delete  /deluser/:uid  返回1和0  无请求主体
r.delete("/delete/:uid",(req,res) => {
	let _uid = req.params.uid;
	console.log(_uid);
	let sql = "delete from xz_user where uid = ?";
	pool.query(sql,[_uid],(err,result) => {
		if(err)throw err;
		if(!result.affectedRows){
			res.send('0');
		}else{
			res.send('1');
		}
	})
})
//4.根据uid查询用户  get  /search/:uid   json			无请求主体
r.get("/search/:uid",(req,res) => {
	let _uid = req.params.uid;
	console.log(_uid)
	let sql = "select * from xz_user where uid=?";
	pool.query(sql,[_uid],(err,result) => {
		if(err) throw err;
		if(!result.length){
			res.send("0");
		}else{
			res.send(result);
		}
	})
})
//5.根据uid修改用户	put 	/update       返回1和0  有请求主体
r.put("/update",(req,res) => {
	//console.log(req.body)
	let obj = req.body;
	console.log(obj)
	let _uid = req.body.uid;
	// let obj = {};
	// obj.uname = req.body.uname;
	// obj.upwd = req.body.upwd;
	// obj.phone = req.body.phone;
	//console.log(_uid,_uname,_upwd);
	
	let sql = "UPDATE xz_user SET ? WHERE uid=?";
	pool.query(sql,[obj,_uid],(err,result) => {
		if(err) throw err;
		console.log(result);
		if(result.affectedRows == 0){
			res.send("0");
		}else{
			res.send("1");
		}
	})
})
//6.根据uname查询用户,注册之前验证用户名是否存在,存在就不能注册 
// get    /select/:uname   返回1和0    无请求主体
r.get("/select/:uname",(req,res) => {
	let _uname = req.params.uname;
	let sql = "select * from xz_user where uname = ?";
	pool.query(sql,[_uname],(err,result) => {
		if(err) throw err;
		console.log(result);
		if(!result.length){
			res.send("0")
		}else{
			res.send("1")
		}
	})
})
//7.注册模块 post  /reg   返回1和0      有请求主体
r.get("/checkName/:uname",(req,res) => {
	let _uname = req.params.uname;
	console.log(_uname);
	let sql = "select * from xz_user where uname = ?";
	pool.query(sql,[_uname],(err,result) => {
		if(err) throw err;
		console.log(result);
		if(!result.length){
			res.send("1");
		}else{
			res.send("0");
		}
	})
})
r.put("/reg",(req,res) => {
	//console.log(req);
	let obj = req.body;
	console.log(obj);
	let sql = "insert into xz_user set ?";
	pool.query(sql,[obj],(err,result) => {
		if(err) throw err;
		if(!result.affectedRows){
			res.send("0")
		}else{
			res.send("1")
		}
	})
})
//导出路由器对象
module.exports=r;