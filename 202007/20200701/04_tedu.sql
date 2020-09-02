DROP DATABASE IF EXISTS tedu;
CREATE DATABASE tedu;
USE tedu;
CREATE TABLE emp(
  eid INT,
  ename VARCHAR(8),
  addr VARCHAR(32),
  phone INT
);
INSERT INTO emp VALUES('1','Tom','Beijing','123456789');
INSERT INTO emp VALUES('2','Jerry','Chengdu','123456789');
INSERT INTO emp VALUES('3','Martin','Xiamen','123456789');
SELECT * FROM emp;