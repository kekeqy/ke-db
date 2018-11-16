# ke-db
Node.js访问多种数据库的更高层次的抽象封装，能有效屏蔽不同数据库的实现细节差异，目前支持PostgreSQL、MySQL、SQLite三种数据库。
## 如何使用
### 1、安装模块
    npm i ke-db
### 2、导入模块
    import * as db from 'ke-db';
### 3、创建一个数据库上下文对象
    以PostgreSQL数据库为例
    let ctx: db.DBContext = new db.DBContext(db.DBType.PostgreSQL, {
            host: 'localhost',
            database: 'dcv',
            user: 'postgres',
            password: 'postgres',
            port: 5432
        });
### 4、根据SQL语句的返回结果类型，选择相应的方法来执行SQL语句，所有方法均为异步
    返回受影响的行数
    let sql: string = 'INSERT INTO userinfo (username,userpassword) VALUES ($1::varchar,$2::varchar)';
    let parameters: any[] = ['test', 'test123'];
    let result: number = await ctx.executeNonQuery(sql, parameters);
<br/>

    返回多条数据
    let sql: string = 'SELECT * FROM userinfo';
    let result: any[] = await ctx.executeReader(sql);
<br/>
    
    返回查询结果的第一行第一列
    let sql = 'SELECT userpassword FROM userinfo WHERE username=$1::varchar';
    let parameters: any[] = ['test'];
    let result: any = await ctx.executeScalar(sql, parameters);
<br/>
    
    执行SQL批处理，返回多个结果
    let batches: db.BatchItem[] = [];
    let sql: string = 'SELECT * FROM userinfo';
    let item: db.BatchItem = new db.BatchItem(db.ExecuteType.Reader, sql);
    batches.push(item);
    sql = 'SELECT userpassword FROM userinfo WHERE username=$1::varchar';
    let parameters: any[] = ['test'];
    item = new db.BatchItem(db.Scalar, sql, parameters);
    batches.push(item);
    let result: db.ExecuteResult[] = await ctx.executeBatch(batches);
