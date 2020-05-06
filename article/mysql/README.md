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

## 更新

```sql
UPDATE table_name SET field1=new-value1, field2=new-value2
[WHERE Clause]
```

替换某个字段中的某些字符

```sql
UPDATE table_name SET field=REPLACE(field, 'old-string', 'new-string') 
[WHERE Clause]
```

例如: 更新 runoob_id 为 3 的 runoob_title 字段值的 "C++" 替换为 "Python"

```sql
UPDATE runoob_tbl SET runoob_title = REPLACE(runoob_title, 'C++', 'Python') where 
runoob_id = 3;
```

## 字段类型为 json 的查询

查询 json 中的数据用 *column->path* 的形式，其中对象类型 path 这样表示 *$.path*, 而数组类型则是 *$[index]*

```sql
SELECT id, category->'$.id', category->'$.name', tags->'$[0]', tags->'$[2]' FROM lnmp;
```

