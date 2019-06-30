-- **数据库级别：**  
--  显示所有数据库  
show databases;
--  进入某个数据库  
use db_name;
--  创建一个数据库  
create databases db_name;
--  创建指定字符集的数据库  
create databases db_name character set utf8;
--  显示数据库的创建信息   
show create databases db_name;
--  修改数据库的编码  
alter databases db_name character set gb2312;
--  删除一个数据库   
drop databases db_name;
-- **表级别**
--  修改表名
alter table t1 rename t2;
--  修改字段的数据类型
alter table t1 modify name varchar(20);
--  修改字段名
alter table t1 change name firstname varchar(10);
--  添加字段
alter table t1 add age int;
--  删除字段
alter table t1 drop age;
--  修改表的存储引擎
alter table t1 engine=MyISAM;
--  删除表的外键约束
alter table t1 drop foreign key fk_name;
--  删除一张表
drop table t1;
