#设置客户端连接服务器端编码
SET NAMES UTF8;
#丢弃数据库，如果存在
DROP DATABASE IF EXISTS xz;
#创建数据库
CREATE DATABASE xz CHARSET=UTF8;
#进入数据库
USE xz;
#创建数据表family
CREATE TABLE family (
  fid INT PRIMARY KEY,
  fname VARCHAR(8) UNIQUE NOT NULL
);
#创建数据表laptop
CREATE TABLE laptop (
  lid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(32) NOT NULL UNIQUE,
  price DECIMAL(7,2),
  spec VARCHAR(32),
  detail VARCHAR(2000),
  shelfTime DATE NOT NULL,
  isOnsale BOOLEAN DEFAULT 0,
  familyId INT,
  FOREIGN KEY(familyId) REFERENCES family(fid)
);
#插入数据至数据表family
INSERT INTO family VALUES('10','联想');
INSERT INTO family VALUES('20','戴尔');
INSERT INTO family VALUES('30','小米');
#插入数据至数据表laptop
INSERT INTO laptop VALUES(1,'联想最新笔记本',5000,'酷睿i9','商品详情...','2020-07-03',0,10);
INSERT INTO laptop VALUES(2,'戴尔最新笔记本',6000,'酷睿i7','商品详情...','2020-07-02',1,20);
INSERT INTO laptop VALUES(4,'小米最新笔记本',7000,'酷睿i5','商品详情...','2020-07-01',1,30);
INSERT INTO laptop VALUES(NULL,'小白最新笔记本',7000,'酷睿i5','商品详情...','2020-07-01',1,30);