DROP DATABASE IF EXISTS xz; #如果存在数据库xz，则丢弃
CREATE DATABASE xz; #创建数据库xz
USE xz; #进入数据库xz
CREATE TABLE user(
  uid INT,
  uname VARCHAR(16),
  upwd VARCHAR(32),
  email VARCHAR(16),
  phone VARCHAR(11),
  sex VARCHAR(1),
  userName VARCHAR(8),
  regTime VARCHAR(10),
  isOnline VARCHAR(1)
); #创建数据表user
INSERT INTO user VALUES('1','ran','123456','ran@126.com','18112345678','g','然哥','2019-12-31','y'); #插入数据
INSERT INTO user VALUES('2','dong','666666','dong@163.com','17312345678','b','东东','2020-6-1','n');
INSERT INTO user VALUES('3','hua','666666','hua@163.com','19312345678','b','华哥','2020-07-02','y');
INSERT INTO user VALUES('4','user_4','pass4','1231234@outlook.com','15112345678','b','John','2020-06-28','off');
INSERT INTO user VALUES('5','user_5','pass5','1231235@icloud.com','18512345678','b','Jerry','2020-06-27','on');
SELECT * FROM user;