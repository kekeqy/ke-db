import { DBHelper } from './DBHelper';
import { BatchItem } from "./BatchItem";
import * as pg from 'pg';
import { ExecuteType } from './ExecuteType';
import { ExecuteResult } from './ExecuteResult';

/** PostgreSQL数据库访问帮助类 */
export class PostgreSQLHelper extends DBHelper {
    /**
     * 实例化一个PostgreSQL数据库访问帮助类对象
     * @param connectionConfig 连接配置
     */
    public constructor(connectionConfig: any) {
        super(connectionConfig);
    }
    /**
     * 执行SQL语句，返回受影响的行数。
     * @param sql SQL语句
     * @param parameters 参数
     */
    public async executeNonQuery(sql: string, parameters?: any[]): Promise<number> {
        let out: number;
        let errMsg: string;
        let client: pg.Client = new pg.Client(this._connectionConfig);
        try {
            await client.connect();
            let result: pg.QueryResult = await client.query(sql, parameters);
            out = result.rowCount;
        }
        catch (error) {
            errMsg = error.toString();
        }
        finally {
            await client.end();
        }
        if (errMsg) throw errMsg;
        return out;
    }
    /**
     * 执行SQL语句，返回多条数据。
     * @param sql SQL语句
     * @param parameters 参数
     */
    public async executeReader(sql: string, parameters?: any[]): Promise<any[]> {
        let out: any[];
        let errMsg: string;
        let client: pg.Client = new pg.Client(this._connectionConfig);
        try {
            await client.connect();
            let result: pg.QueryResult = await client.query(sql, parameters);
            out = result.rows;
        }
        catch (error) {
            errMsg = error.toString();
        }
        finally {
            await client.end();
        }
        if (errMsg) throw errMsg;
        return out;
    }
    /**
     * 执行SQL语句，返回查询结果的第一行第一列。
     * @param sql SQL语句
     * @param parameters 参数
     */
    public async executeScalar(sql: string, parameters?: any[]): Promise<any> {
        let out: any;
        let errMsg: string;
        let client: pg.Client = new pg.Client(this._connectionConfig);
        try {
            await client.connect();
            let result: pg.QueryResult = await client.query(sql, parameters);
            if (result.rowCount > 0) out = result.rows[0][result.fields[0].name];
        }
        catch (error) {
            errMsg = error.toString();
        }
        finally {
            await client.end();
        }
        if (errMsg) throw errMsg;
        return out;
    }
    /**
     * 执行SQL批处理，返回所有SQL执行结果的集合
     * @param batches SQL批处理
     */
    public async executeBatch(batches: BatchItem[]): Promise<any[]> {
        let out: any[];
        let errMsg: string;
        let client: pg.Client = new pg.Client(this._connectionConfig);
        try {
            await client.connect();
            await client.query('BEGIN;');
            out = [];
            for (let item of batches) {
                let itemResult: ExecuteResult = new ExecuteResult();
                out.push(itemResult);
                try {
                    let result: pg.QueryResult = await client.query(item.sql, item.parameters);
                    switch (item.executeType) {
                        case ExecuteType.NonQuery:
                            itemResult.result = result.rowCount;
                            break;
                        case ExecuteType.Reader:
                            itemResult.result = result.rows;
                            break;
                        case ExecuteType.Scalar:
                            if (result.rowCount == 1) {
                                itemResult.result = result.rows[0][result.fields[0].name];
                            }
                            break;
                    }
                }
                catch (error) {
                    itemResult.errMsg = error.toString();
                }
            }
            await client.query('COMMIT;');
        }
        catch (error) {
            errMsg = error.toString();
        }
        finally {
            await client.end();
        }
        if (errMsg) throw errMsg;
        return out;
    }
}