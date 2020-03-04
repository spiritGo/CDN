> 自动提交模式分会话系统变量与全局系统变量, 查看方式如下 :

```sql
# 会话系统变量
show session variables like "autocommit";

# 全局系统变量
show global variables like "autocommit";
```

如图是我没有更改提交模式下查询的结果, value 为 on 表示开启, off 表示关闭, 可见系统默认是开启自动提交模式<br/>
![提交模式](https://raw.githubusercontent.com/spiritGo/CDN/master/src/mysql/images/autocommit.png)<br/>