@[TOC]

# MYSQL 自动提交模式(autocommit)

_在 MySQL 中只有使用了 Innodb 数据库引擎的数据库或表才支持事务。_

_自动提交是处理事务的一种处理方式, 也就是说, 只有使用了 Innodb 数据库引擎才支持 autocommit_

> 自动提交模式分会话系统变量与全局系统变量, 查看方式如下 :

_code_

```sql
--- 会话系统变量
SHOW SESSION VARIABLES LIKE "autocommit";
SHOW VARIABLES LIKE "autocommit";

--- 全局系统变量
SHOW GLOBAL VARIABLES LIKE "autocommit";
```

如下 : 是我没有更改提交模式下查询的结果, value 为 on 表示开启, off 表示关闭, 可见系统默认是开启自动提交模式的

_shell_

```shell
mysql> SHOW SESSION VARIABLES LIKE "autocommit";
+---------------+-------+
| Variable_name | Value |
+---------------+-------+
| autocommit    | ON    |
+---------------+-------+
1 row in set, 1 warning (0.67 sec)

mysql> SHOW GLOBAL VARIABLES LIKE "autocommit";
+---------------+-------+
| Variable_name | Value |
+---------------+-------+
| autocommit    | ON    |
+---------------+-------+
1 row in set, 1 warning (0.19 sec)
```

> MySQL 中可以直接用 SET 来改变 MySQL 的自动提交模式
>
> - 开启自动提交模式
>
>   `SET [SESSION][GLOBAL] AUTOCOMMIT = 1;`
>
> - 关闭自动提交模式
>
>   `SET [SESSION][GLOBAL] AUTOCOMMIT = 0;`

**首先, 我们不做任何处理, 也就是说, 让会话和全局的自动提交模式都为 ON(开启)**

_code_

```sql
--- 创建一个数据库 test, 并创建表1 table01, 定义初始字段 id, name, age
CREATE DATABASE test;
USE test;
CREATE TABLE table01 (id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(20), age INT(3));
SHOW COLUMNS FROM table01;
```

执行结果如下

_shell_

```shell
mysql> CREATE DATABASE test;
Query OK, 1 row affected (1.67 sec)

mysql> USE test;
Database changed
mysql> CREATE TABLE table01 (id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(20), age INT(3));
Query OK, 0 rows affected, 1 warning (2.71 sec)

mysql> SHOW COLUMNS FROM table01;
+-------+-------------+------+-----+---------+----------------+
| Field | Type        | Null | Key | Default | Extra          |
+-------+-------------+------+-----+---------+----------------+
| id    | int         | NO   | PRI | NULL    | auto_increment |
| name  | varchar(20) | YES  |     | NULL    |                |
| age   | int         | YES  |     | NULL    |                |
+-------+-------------+------+-----+---------+----------------+
3 rows in set (0.30 sec)
```

**接下来, 我们要打开两个控制台, 控制台 1 是目前这个控制台, 控制台 2 是新开的控制台**

**在控制台 1 中插入一行数据到 table01 中, 代码如下**

_code_

```sql
--- 控制台1 输入
INSERT INTO table01 (name, age) VALUES ("TOM", 25);
SELECT * FROM table01;

--- 控制台2 登录数据库, 并选择 test数据库 输入
SELECT * FROM table01;
```

**运行结果如下, 说明数据插入成功**

_shell 控制台 1_

```shell
mysql> INSERT INTO table01 (name, age) VALUES ("TOM", 25);
Query OK, 1 row affected (0.61 sec)

mysql> SELECT * FROM table01;
+----+------+------+
| id | name | age  |
+----+------+------+
|  1 | TOM  |   25 |
+----+------+------+
1 row in set (0.01 sec)
```

_shell 控制台 2_

```shell
mysql> SELECT * FROM table01;
+----+------+------+
| id | name | age  |
+----+------+------+
|  1 | TOM  |   25 |
+----+------+------+
1 row in set (0.00 sec)
```

可见, 当自动提交开启时, 每个 DML 操作语句都会被视为一个完整的事务, 立即进行隐式提交, 除非显示创建一条事务;

当显示创建一条事务时, 如下

_code_

```sql
--- 控制台 1
INSERT INTO table01 (name) VALUES ("Lucy");
SELECT * FROM table01;

--- 控制台 2
SELECT * FROM table01;
```

_shell 控制台 1_

```shell
mysql> INSERT INTO table01 (name) VALUES ("Lucy");
Query OK, 1 row affected (0.02 sec)

mysql> SELECT * FROM table01;
+----+------+------+
| id | name | age  |
+----+------+------+
|  1 | TOM  |   25 |
|  2 | Lucy | NULL |
+----+------+------+
2 rows in set (0.00 sec)
```

_shell 控制台 2_

```shell
mysql> SELECT * FROM table01;
+----+------+------+
| id | name | age  |
+----+------+------+
|  1 | TOM  |   25 |
+----+------+------+
1 row in set (0.00 sec)
```

可见, 当显式开启事务时, 如果没有手动提交, 即使自动提交开启了, 也不会自动提交, 必须我们
使用 commit; 或 begin; 手动提交

如果, 我们把自动提交关闭, 再插入一条数据试试;

_code_

```sql
--- 控制台 1
SET AUTOCOMMIT = 0;
SHOW VARIABLES LIKE "autocommit";
INSERT INTO table01 (name) VALUES ("autocommit-off");
SELECT * FROM table01;

--- 控制台 2
SHOW VARIABLES LIKE "autocommit";
SELECT * FROM table01;
```

_shell 控制台 1_

```shell
mysql> SET AUTOCOMMIT = 0;
Query OK, 0 rows affected (0.00 sec)

mysql> SHOW VARIABLES LIKE "autocommit";
+---------------+-------+
| Variable_name | Value |
+---------------+-------+
| autocommit    | OFF   |
+---------------+-------+
1 row in set, 1 warning (0.00 sec)

mysql> INSERT INTO table01 (name) VALUES ("autocommit-off");
Query OK, 1 row affected (0.00 sec)

mysql> SELECT * FROM table01;
+----+----------------+------+
| id | name           | age  |
+----+----------------+------+
|  1 | TOM            |   25 |
|  2 | Lucy           | NULL |
|  3 | autocommit-off | NULL |
+----+----------------+------+
3 rows in set (0.00 sec)
```

_shell 控制台 2_

```shell
mysql> SHOW VARIABLES LIKE "autocommit";
+---------------+-------+
| Variable_name | Value |
+---------------+-------+
| autocommit    | ON    |
+---------------+-------+
1 row in set, 1 warning (0.00 sec)

mysql> SELECT * FROM table01;
+----+------+------+
| id | name | age  |
+----+------+------+
|  1 | TOM  |   25 |
+----+------+------+
1 row in set (0.00 sec)
```

综上运行结果可知, 当自动提交关闭时, 在单个控制台上的 DML 操作已经不再自动提交, 需要手动提交才能提交事务, 如下是我在控制台 1 使用手动提交 控制台 2 的结果
_shell 控制台 2_

```shell
mysql> SELECT * FROM table01;
+----+----------------+------+
| id | name           | age  |
+----+----------------+------+
|  1 | TOM            |   25 |
|  2 | Lucy           | NULL |
|  3 | autocommit-off | NULL |
+----+----------------+------+
3 rows in set (0.00 sec)
```

当然，事务处理是为了保障表数据原子性、一致性、隔离性、持久性。这些都是要消耗系统资源的，要谨慎选择。

# MySQL SQL 注入 (略) 请移步 [菜鸟教程](https://www.runoob.com/mysql/mysql-sql-injection.html)

# MySQL 导出数据

_MySQL 导出要有 `secure-file-priv` 指定的路径, 可以使用 `show variables like %secure%` 来查看该值_

_默认有可能是 NULL 就代表禁止导出，所以需要设置一下才能正常导出_

找到 mysql 安装路径下的 my.ini 文件(没有的话自己创建)，设置一下路径：
找到或添加 secure_file_priv, 等于号后面的是地址,注意地址分割使用 /, 而不是 \

**secure-file-priv 的值有三种情况：**

- secure_file_prive=null 限制 mysqld 不允许导入导出
- secure_file_priv=/path/ 限制 mysqld 的导入导出只能发生在默认的/path/目录下
- secure_file_priv=’’ 不对 mysqld 的导入 导出做限制

```ini
[mysqld]
port = 3306
basedir=D:/Installs/mysql-8.0.19-winx64
datadir=D:/Installs/mysql-8.0.19-winx64/data
max_connections=200
character-set-server=utf8
default-storage-engine=INNODB
sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES
secure_file_priv=""
[mysql]
default-character-set=utf8
```

重启服务器

- 我的电脑 => 右键管理 => 服务和应用程序 => 服务 => MySql 右键重启

MySql 将数据导出

> SELECT \* FROM table_name INTO OUTFILE '路径';

_code_

```sql
--- 指定导出字段, 字段之间用逗号分隔, 数据用 ' 号包围, 一行数据后换行
SELECT id, name, age INTO OUTFILE "E:/SPIRIT/study/temp/temp.txt"
FIELDS TERMINATED BY ","
OPTIONALLY ENCLOSED BY "'"
LINES TERMINATED BY '\n'
FROM table01;
```

导出内容如下

_temp.txt_

```
1,'TOM',25
2,'Lucy',\N
3,'autocommit-off',\N
```

<!-- **导出表作为原始数据**

_mysqldump 是 mysql 用于转存储数据库的实用程序。它主要产生一个 SQL 脚本，其中包含从头重新创建数据库所必需的命令 CREATE TABLE INSERT 等。_

_使用 mysqldump 导出数据需要使用 --tab 选项来指定导出文件指定的目录，该目标必须是可写的。_

> mysqldump -u 用户名 -p 数据库名 > 导出文件名 -->

**导出 SQL 格式的数据**

> 导出指定表的数据
>
> `mysqldump -u root -p database_name table_name > 导出路径(指定文件)`
>
> 导出整个数据库的数据
>
> `mysqldump -u root -p database_name > 导出路径(指定文件)`
>
> 备份所有数据库
>
> `mysqldump -u root -p --all-databases > 导出路径(指定文件)`

_code_

```sql
--- 导出指定表的数据
mysqldump -u root -p test table01 > "E:\SPIRIT\study\temp\dump.txt"
password ********
```

导出内容过多我就不贴出来了

# MySQL 导入数据

语法 :

> 1. mysql 命令导入<br/> `mysql -u 用户名 -p 密码 < 要导入的数据库数据 .sql 文件`
> 2. source 命令导入 (source 命令导入数据库需要先登录到数库终端) <br/> `source .sql文件路径`
> 3. 使用 LOAD DATA 导入数据 <br/> `LOAD DATA LOCAL INFILE '指定文件路径' INTO TABLE 数据表;`

_code 1_

```shell
$ mysql -u root -p < "E:\SPIRIT\study\temp\test.sql"
```

_code 2_

```shell
mysql> create database abc;      # 创建数据库
mysql> use abc;                  # 使用已创建的数据库
mysql> set names utf8;           # 设置编码
mysql> source "E:\SPIRIT\study\temp\test.sql"  # 导入备份数据库
```

_code 3_

```shell
mysql> LOAD DATA LOCAL INFILE 'dump.txt' INTO TABLE test;
```

# MySQL 函数 (略) 请移步 [菜鸟教程](https://www.runoob.com/mysql/mysql-functions.html)

# MySQL 运算符 (略) 请移步 [菜鸟教程](https://www.runoob.com/mysql/mysql-operator.html)
