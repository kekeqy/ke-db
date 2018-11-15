import { DBHelper } from "./DBHelper";
import * as sqlite3 from 'sqlite3';
import { BatchItem } from "./BatchItem";
import { ExecuteType } from './ExecuteType';
import { ExecuteResult } from './ExecuteResult';

/** SQLite数据库帮助类 */
export class SQLiteHelper extends DBHelper {
    /**
     * 实例化一个SQLite数据库帮助类对象
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
        let db: sqlite3.Database;
        try {
            await new Promise<void>(resolve => {
                db = new sqlite3.Database(this._connectionConfig, err => {
                    if (err) throw err;
                    resolve();
                });
            });
            await new Promise<void>(resolve => {
                db.run(sql, parameters, function (err) {
                    if (err) throw err;
                    out = this.changes;
                    resolve();
                });
            });
        }
        catch (error) {
            errMsg = error.toString();
        }
        finally {
            db.close();
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
        let db: sqlite3.Database;
        try {
            await new Promise<void>(resolve => {
                db = new sqlite3.Database(this._connectionConfig, err => {
                    if (err) throw err;
                    resolve();
                });
            });
            await new Promise<void>(resolve => {
                db.all(sql, parameters, function (err, rows) {
                    if (err) throw err;
                    out = rows;
                    resolve();
                });
            });
        }
        catch (error) {
            errMsg = error.toString();
        }
        finally {
            db.close();
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
        let db: sqlite3.Database;
        try {
            await new Promise<void>(resolve => {
                db = new sqlite3.Database(this._connectionConfig, err => {
                    if (err) throw err;
                    resolve();
                });
            });
            await new Promise<void>(resolve => {
                db.get(sql, parameters, function (err, row) {
                    if (err) throw err;
                    if (row) {
                        let keys: string[] = Object.keys(row);
                        if (keys.length > 0) out = row[keys[0]];
                    }
                    resolve();
                });
            });
        }
        catch (error) {
            errMsg = error.toString();
        }
        finally {
            db.close();
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
        let db: sqlite3.Database;
        try {
            await new Promise<void>(resolve => {
                db = new sqlite3.Database(this._connectionConfig, err => {
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
                        switch (item.executeType) {
                            case ExecuteType.NonQuery:
                                db.run(item.sql, item.parameters, function (err) {
                                    if (err) throw err;
                                    itemResult.result = this.changes;
                                    resolve();
                                });
                                break;
                            case ExecuteType.Reader:
                                db.all(item.sql, item.parameters, (err, rows) => {
                                    if (err) throw err;
                                    itemResult.result = rows;
                                    resolve();
                                });
                                break;
                            case ExecuteType.Scalar:
                                db.get(item.sql, item.parameters, (err, row) => {
                                    if (err) throw err;
                                    if (row) {
                                        let keys: string[] = Object.keys(row);
                                        if (keys.length > 0) itemResult.result = row[keys[0]];
                                    }
                                    resolve();
                                });
                        }
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
            db.close();
        }
        if (errMsg) throw errMsg;
        return out;
    }
}