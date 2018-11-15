import { DBHelper } from "./DBHelper";
import * as mysql from 'mysql';
import { BatchItem } from "./BatchItem";
import { ExecuteType } from './ExecuteType';
import { ExecuteResult } from './ExecuteResult';

/** MySQLHelper帮助类 */
export class MySQLHelper extends DBHelper {
    /**
     * 实例化一个MySQL数据库访问帮助类对象
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
        let client: mysql.Connection = mysql.createConnection(this._connectionConfig);
        try {
            await new Promise<void>(resolve => {
                client.connect(err => {
                    if (err) throw err;
                    resolve();
                });
            });
            await new Promise<void>(resolve => {
                client.query(sql, parameters, (err, result) => {
                    if (err) throw err;
                    out = result.affectedRows;
                    resolve();
                });
            });
        }
        catch (error) {
            errMsg = error.toString();
        }
        finally {
            client.end();
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
        let client: mysql.Connection = mysql.createConnection(this._connectionConfig);
        try {
            await new Promise<void>(resolve => {
                client.connect(err => {
                    if (err) throw err;
                    resolve();
                });
            });
            await new Promise<void>(resolve => {
                client.query(sql, parameters, (err, result) => {
                    if (err) throw err;
                    out = result;
                    resolve();
                });
            });
        }
        catch (error) {
            errMsg = error.toString();
        }
        finally {
            client.end();
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
        let client: mysql.Connection = mysql.createConnection(this._connectionConfig);
        try {
            await new Promise<void>(resolve => {
                client.connect(err => {
                    if (err) throw err;
                    resolve();
                });
            });
            await new Promise<void>(resolve => {
                client.query(sql, parameters, (err, result, fields) => {
                    if (err) throw err;
                    if (result.length > 0) out = result[0][fields[0].name];
                    resolve();
                });
            });
        }
        catch (error) {
            errMsg = error.toString();
        }
        finally {
            client.end();
        }
        if (errMsg) throw errMsg;
        return out;
    }
    /**
     * 执行SQL批处理，返回所有SQL执行结果的集合
     * @param batches SQL批处理
     */
    public async executeBatch(batches: BatchItem[]): Promise<ExecuteResult[]> {
        let out: ExecuteResult[];
        let errMsg: string;
        let client: mysql.Connection = mysql.createConnection(this._connectionConfig);
        try {
            await new Promise<void>(resolve => {
                client.connect(err => {
                    if (err) throw err;
                    resolve();
                });
            });
            out = [];
            for (let item of batches) {
                let itemResult: ExecuteResult = new ExecuteResult();
                out.push(itemResult);
                try {
                    await new Promise<void>(resolve => {
                        client.query(item.sql, item.parameters, (err, result, fields) => {
                            if (err) throw err;
                            switch (item.executeType) {
                                case ExecuteType.NonQuery:
                                    itemResult.result = result.affectedRows;
                                    break;
                                case ExecuteType.Reader:
                                    itemResult.result = result;
                                    break;
                                case ExecuteType.Scalar:
                                    if (result.length > 0) itemResult.result = result[0][fields[0].name];
                                    break;
                            }
                            var x = out;
                            resolve();
                        });
                    });
                }
                catch (error) {
                    itemResult.errMsg = error.toString();
                }
            }
        }
        catch (error) {
            errMsg = error.toString();
        }
        finally {
            client.end();
        }
        if (errMsg) throw errMsg;
        return out;
    }
}