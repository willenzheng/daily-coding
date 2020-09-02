#设置客户端连接服务器端编码
SET NAMES UTF8;
#丢弃数据库，如果存在
DROP DATABASE IF EXISTS sina;
#创建新的数据库，设置编码为utf8
CREATE DATABASE sina CHARSET=UTF8;
#进入数据库
USE sina;
#创建数据表
CREATE TABLE news (
  nid INT,
  title VARCHAR(32),
  ctime VARCHAR(10),
  detail VARCHAR(2000),
  origin VARCHAR(16)
);
#插入数据
INSERT INTO news VALUES ('1','北京市确诊人员为新发地市场工作人员','2020-07-03','北京市新增确诊病例1例，该病例为新发地市场工作人员。','APPSO');
INSERT INTO news VALUES ('2','北京石景山万达疑似病例已送医','2020-07-03','石景山卫健委表示，石景山万达广场出现一例疑似新冠患者，已送医。','APPSO');
INSERT INTO news VALUES ('3','苹果上线网页版Apple Card','2020-07-03','苹果推出了网页版Apple Card，方便持卡人查看额度','APPSO');
#修改数据
UPDATE news SET ctime='2020-07-02' WHERE nid='3';
#删除数据
DELETE FROM news WHERE nid='1';