# MySql

## 列出所有数据库或者表

```sql
# 列出数据库
show databases

# 列出已指定数据库的所有表
show tables
```

## 列出表的列信息

```sql
desc table_name

# or

describe table_name

# or

explain table_name
```

## 排序

```sql
SELECT col1, col2... FROM table_name1, table_name2...
ORDER BY col1 <ASC|DESC>, col2 <ASC|DESC>...
```

## 寻找重复项

```sql
SELECT col, COUNT(col) from table_name
GROUP BY col HAVING COUNT(col) > 1;
```
