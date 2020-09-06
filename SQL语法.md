# SQL 语法

- [SQL 语法](#sql-语法)
  - [查询语句](#查询语句)
  - [函数](#函数)
  - [聚合函数](#聚合函数)
  - [分组查询](#分组查询)
  - [](#)

## 查询语句

- `SELECT` 查询列
- `FROM` 查询表
- `AS` 别名
- `WHERE` 条件查询
- `LIKE` 模糊查询

  ```sql
    # 替代 0 个或多个字符
    %
    # 替代一个字符
    _
    # 字符列中的任何单一字符
    [charlist]
    # 不在字符列中的任何单一字符
    [^charlist] 或 [!charlist]
  ```

- `IN` 是否存在

  ```sql
  # 例子
  SELECT * FROM table
  WHERE column_name IN (value1,value2,...);
  ```

- `BETWEEN AND` 范围区间

  ```sql
  SELECT * FROM Websites
  WHERE alexa BETWEEN 1 AND 20;
  ```

- `IS`
- `JOIN` 连接

  ```sql
  INNER JOIN：如果表中有至少一个匹配，则返回行
  LEFT JOIN：即使右表中没有匹配，也从左表返回所有的行
  RIGHT JOIN：即使左表中没有匹配，也从右表返回所有的行
  FULL JOIN：只要其中一个表中存在匹配，则返回行
  ```

## 函数

- `IFNULL` 如果为 null
- `CONCAT` 连接

## 聚合函数

> 语法：SELECT 聚合函数(列名)FROM 表名；

- 经验：对多条数据的单列进行统计，返回统计后的一行结果

| 聚合函数 | 说明     |
| -------- | -------- |
| SUM      | 求和     |
| AVG      | 平均值   |
| MAX      | 最大值   |
| MIN      | 最小值   |
| COUNT    | 求总行数 |

```sql
# 统计所有员工每月的工资总和
SELECT SUM(salary)
FROM t_employees
```

```sql
# 统计所有员工每月的平均工资
SELECT SVG(salary)
FROM t_employees
```

## 分组查询

> 语法：SELECT 列名 FROM 表名 WHERE 条件 GROUP BY 分组依据（列）

| 关键字   | 说明                        |
| -------- | --------------------------- |
| GROUP BY | 分组依据，必须在 WHERE 之后 |

```sql
SELECT department_id, COUNT(employee_id)
FROM t_employees
GROUP BY
```

## 