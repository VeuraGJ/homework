-- 插入记录  
insert into student(id,name,age,sex) values('003','五五',20,'男');
-- 修改记录  
update student set name='小小' where id='003';
--  删除记录  
delete from student where id='003';
-- 查询记录  
select * from student where age<22;