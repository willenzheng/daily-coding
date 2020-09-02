#丢弃数据库jd，如果存在
DROP DATABASE IF EXISTS jd;
#创建数据库jd
CREATE DATABASE jd;
#进入数据库jd
USE jd;
#创建保存数据的表
CREATE TABLE student(
  sid INT, #int为整型
  name VARCHAR(8), #varchar为字符串，必须指定长度
  sex VARCHAR(1),
  score INT
);
#插入数据
INSERT INTO student VALUES('1','ran','b','59');
INSERT INTO student VALUES('2','然姐','g','59.5');
#查询数据
SELECT * FROM student;