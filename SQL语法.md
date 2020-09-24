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
    - [7.16 表连接查询](#716-表连接查询)
      - [7.16.1 内连接查询（INNER JOIN ON）](#7161-内连接查询inner-join-on)
      - [7.16.2 三表连接查询](#7162-三表连接查询)
      - [7.16.3 左外连接（LEFT JOIN ON）](#7163-左外连接left-join-on)
      - [7.16.4 右外连接（RIGHT JOIN ON）](#7164-右外连接right-join-on)
  - [八、DML 操作【重点】](#八dml-操作重点)
    - [8.1 新增（INSERT）](#81-新增insert)
    - [8.2 修改（UPDATE）](#82-修改update)
    - [8.3 删除（DELETE）](#83-删除delete)
    - [8.4 清空整表数据（TRUNCATE）](#84-清空整表数据truncate)

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

### 7.16 表连接查询

#### 7.16.1 内连接查询（INNER JOIN ON）

> ```sql
> SELECT 列名 FROM 表 连接方式 表2 ON 连接条件
> ```

```sql
# 1. 查询所有有部门的员工信息（不包括没有部门的员工）SQL标准
SELECT * FROM t_employees INNER JOIN t_jobs ON t_employees.job_id = t_jobs.job_id

# 2. 查询所有有部门的员工信息（不包括没有部门的员工）MYSQL
SELECT * FROM t_employees,t_jobs WHERE t_employees.job_id = t_jobs.job_id
```

- 经验：在 MySql 中，第二种方式也可以作为内连接查询，但是不符合 SQL 标准
- 而第一种属于 SQL 标准，与其他关系型数据库通用

#### 7.16.2 三表连接查询

```sql
# 查询所有员工工号、名字、部门名称、部门所在国家ID
SELECT * FROM t_employees e
INNER JOIN t_departments d
ON e.department_id = d.department_id
INNER JOIN t_locations l
ON d.location_id = l.location_id
```

#### 7.16.3 左外连接（LEFT JOIN ON）

```sql
# 查询所有员工信息，以及所对应的部门名称（没有部门的员工，也在查询结果中，部门名称为NULL填充）
SELECT e.employees_id, e.first_name, e.salary, d.department_name FROM t_employees e
LEFT JOIN t_employees d
ON e.department_id = d.department_id
```

- 注意：左外连接，是以左表为主表，依次向右匹配，匹配到，返回结果
- 匹配不到，则返回 NULL 值填充

#### 7.16.4 右外连接（RIGHT JOIN ON）

```sql
# 查询所有部门信息，以及此部门中的所有员工信息（没有员工的部门，也在查询结果中，员工信息以NULL填充）
SELECT e.employees_id, e.first_name, e.salary, d.department_name FROM t_employees e
RIGHT JOIN t_employees d
ON e.department_id = d.department_id
```

- 注意：右外连接，是以右表为主表，依次向左匹配，匹配到，返回结果
- 匹配不到，则返回 NULL 值填充

## 八、DML 操作【重点】

---

### 8.1 新增（INSERT）

> ```sql
> INSERT INTO 表名（列1，列2，列3，...） VALUES (值1，值2，值3)
> ```

- 值与列顺序相对应

### 8.2 修改（UPDATE）

> ```sql
> UPDATE 表名 SET 列1=新值1，列2=新值2，列3=新值3 WHERE 条件;
> ```

- 不加 WHERE 修改整张表

### 8.3 删除（DELETE）

> ```sql
> DELETE FROM 表名 WHERE 条件；
> ```

- 不加 WHERE 删除整张表

### 8.4 清空整表数据（TRUNCATE）

> ```sql
> TRUNCATE TABLE 表名；
> ```
