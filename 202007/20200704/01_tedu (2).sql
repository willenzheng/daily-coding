#设置客户端连接数据库utf8
SET names utf8;
#丢弃数据库tedu
DROP DATABASE IF EXISTS tedu;
#创建数据库tedu，设置存储编码
CREATE DATABASE tedu CHARSET=UTF8;
#进入数据库
USE tedu;
#创建保存数据表
CREATE TABLE dept(
 did INT PRIMARY KEY,
 dname VARCHAR(8)
);
#插入数据
INSERT INTO dept VALUES
(10,'研发部'),
(20,'市场部'),
(30,'运营部'),
(40,'测试部');
#创建保存笔记本的表
CREATE TABLE emp(
 eid INT PRIMARY KEY auto_increment,
 ename VARCHAR(8),
 sex VARCHAR(1),
 birthday DATE,
 salary DECIMAL(7,2),
 deptId INT,
foreign key(deptId) REFERENCES dept(did)
 );
INSERT INTO emp VALUES(1,'然哥','g','1995-4-9','6999',10);