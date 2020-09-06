# SQL 语法

- [SQL 语法](#sql-语法)
  - [查询语句](#查询语句)
  - [函数](#函数)
  - [聚合函数](#聚合函数)
  - [分组查询](#分组查询)
  - [限定查询](#限定查询)
    - [7.11 查询总结](#711-查询总结)
      - [7.11.1 SQL 语句编写顺序](#7111-sql-语句编写顺序)
      - [7.11.2 SQL 语句执行顺序](#7112-sql-语句执行顺序)
    - [7.12 子查询（作为条件判断）](#712-子查询作为条件判断)
      - [7.12.1 查询工资大于 Bruce 的员工信息](#7121-查询工资大于-bruce-的员工信息)
    - [7.13 子查询（作为枚举查询条件）](#713-子查询作为枚举查询条件)
      - [7.13.1 查询与名为“King”同一部门的员工信息](#7131-查询与名为king同一部门的员工信息)
      - [7.13.2 工资高于 60 部门所有人的信息](#7132-工资高于-60-部门所有人的信息)
    - [7.14 子查询（作为一张表）](#714-子查询作为一张表)
      - [7.14.1 查询员工表中工资排名前 5 名的员工信息](#7141-查询员工表中工资排名前-5-名的员工信息)

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

> ```sql
> SELECT 聚合函数(列名)FROM 表名；
> ```

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

> ```sql
> SELECT 列名 FROM 表名 WHERE 条件 GROUP BY 分组依据（列）
> ```

| 关键字   | 说明                        |
| -------- | --------------------------- |
| GROUP BY | 分组依据，必须在 WHERE 之后 |

```sql
SELECT department_id, COUNT(employee_id)
FROM t_employees
GROUP BY department_id, job_id
```

## 限定查询

> SELECT 列名 FROM 表名 LIMIT 起始行，查询行数

| 关键字                        | 说明                         |
| ----------------------------- | ---------------------------- |
| LIMIT offset_start, row_count | 限定查询结果的起始行和总行数 |

```sql
SELECT * FROM t_employees LIMIT 0,5;
```

### 7.11 查询总结

---

#### 7.11.1 SQL 语句编写顺序

> ```sql
> SELECT 列名 FROM 表名 WHERE 条件 GROUP BY 分组 HAVING 过滤条件 ORDER BY 排序列（asc｜desc）LIMIT 起始行，总行数
> ```

#### 7.11.2 SQL 语句执行顺序

| 顺序 | 语句       | 说明                     |
| :--: | ---------- | ------------------------ |
|  1   | `FROM`     | 指定数据来源表           |
|  2   | `WHERE`    | 对查询数据做第一次过滤   |
|  3   | `GROUP`    | 分组                     |
|  4   | `HAVING`   | 对分组后的数据第二次过滤 |
|  5   | `SELECT`   | 查询各字段的值           |
|  6   | `ORDER BY` | 排序                     |
|  7   | `LIMIT`    | 限定查询结果             |

### 7.12 子查询（作为条件判断）

> ```sql
> SELECT 列名 FROM 表名 WHERE 条件（子查询结果）
> ```

#### 7.12.1 查询工资大于 Bruce 的员工信息

```sql
# 1. 先查询到Bruce的工资（一行一列）
SELECT SALARY FROM t_employees WHERE FIRST_NAME = 'Bruce'; # 工资是6000

# 2. 查询工资大于Bruce的员工信息
SELECT SALARY FROM t_employees WHERE SALARY > 6000;

# 3. 将 1，2 两条语句整合
SELECT SALARY FROM t_employees
WHERE SALARY > (SELECT SALARY FROM t_employees WHERE FIRST_NAME = 'Bruce');
```

- **注意：将子查询“一行一列”的结果作为外部查询的条件，做第二次查询**
- **子查询得到“一行一列”的结果才能作为外部查询的等值判断条件**

### 7.13 子查询（作为枚举查询条件）

> ```sql
> SELECT 列名 FROM 表名 WHERE 列名 IN(子查询结果)
> ```

#### 7.13.1 查询与名为“King”同一部门的员工信息

```sql
# 思路
# 1. 选查询 “King” 所在的部门编号（多行多列）
SELECT department_id
FROM t_employees
WHERE last_name = "King";

# 2. 再查询80、90号部门的员工信息
SELECT employees_id, first_name, salary, department_id
FROM t_employees
WHERE department_id in(80,90);

# 3. SQL合并
SELECT employees_id, first_name, salary, department_id
FROM t_employees
WHERE department_id in (SELECT department_id FROM t_employees WHERE last_name = 'King'); # N行一列
```

- 将子查询“多行一列”的结果作为外部查询的枚举查询条件，做第二次查询

#### 7.13.2 工资高于 60 部门所有人的信息

```sql
# 1. 查询 60 部门所有人的工资（多行多列）
SELECT salary FROM t_employees WHERE department_id=60;

# 2. 查询高于 60 部门所有人的工资的员工信息（高于所有）
SELECT * FROM t_employees
WHERE salary > ALL(SELECT salary FROM t_employees WHERE department_id=60);

# 2. 查询高于 60 部门所有人的工资的员工信息（高于部分）
SELECT * FROM t_employees
WHERE salary > ANY(SELECT salary FROM t_employees WHERE department_id=60);
```

- 注意：当子查询结果集形式为多行单列时可以使用 ANY 或 ALL 关键字

### 7.14 子查询（作为一张表）

> ```sql
> SELECT 列名 FROM （子查询的结果集） WHERE 条件;
> ```

#### 7.14.1 查询员工表中工资排名前 5 名的员工信息

```sql
# 思路
# 1. 先对所有员工的薪资进行排序（排序后的临时表）
SELECT employees_id, first_name, salary
FROM t_employees
ORDER BY salary DESC

# 2. 再查询临时表中前 5 名员工的信息
SELECT employees_id, first_name, salary
FROM （临时表）
LIMIT 0,5;

# 3. SQL合并
SELECT employees_id, first_name, salary
FROM (SELECT employees_id, first_name, salary FROM t_employees ORDER BY salary DESC) as temp
LIMIT 0,5;
```

- 将子查询“多行多列”的结果作为外部查询的一张表，做第二次查询
- 注意：子查询作为临时表，为其赋予一个临时表名
