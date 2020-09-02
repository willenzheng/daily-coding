#设置客户端连接服务器端编码
SET NAMES UTF8;
#丢弃数据库，如果存在
DROP DATABASE IF EXISTS xuezi;
#创建数据库
CREATE DATABASE xuezi CHARSET=UTF8;
#进入数据库
USE xuezi;
#创建保存笔记本数据的表
CREATE TABLE laptop(
  lid INT PRIMARY KEY,
  title VARCHAR(32) NOT NULL,
  price DECIMAL(7,2),
  stockCount SMALLINT,
  shelfTime DATE,
  isIndex BOOLEAN #可以直接使用TINYINT
);
#插入数据
INSERT INTO laptop VALUES('1','Apple Macbook Pro','12998.90','23','2020-03-20','1');
INSERT INTO laptop VALUES('2','Apple Macbook Air','7998.98','10','2020-3-20','1');
INSERT INTO laptop VALUES('3','Apple Macbook','8898','0','2019-09-10','0');
INSERT INTO laptop VALUES('4','Apple Macbook','8898','0','2019-09-10','0');
#修改数据
UPDATE laptop SET price='7298' WHERE lid='2';
#删除数据
DELETE FROM laptop WHERE lid='4';
#插入数据
INSERT INTO laptop VALUES('5','Apple MacPro','108888','0','2019.09.10','2');