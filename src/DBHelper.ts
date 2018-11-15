import { BatchItem } from "./BatchItem";
import { ExecuteResult } from "./ExecuteResult";

/** 数据库帮助类 */
export abstract class DBHelper {
    protected _connectionConfig: any;
    /**
     * 实例化一个数据库帮助类对象
     * @param connectionConfig 连接配置对象
     */
    public constructor(connectionConfig: any) {
        this._connectionConfig = connectionConfig;
    }
    /**
     * 执行SQL语句，返回受影响的行数。
     * @param sql SQL语句
     * @param parameters 参数
     */
    public abstract async executeNonQuery(sql: string, parameters?: any[]): Promise<number>;
    /**
     * 执行SQL语句，返回多条数据。
     * @param sql SQL语句
     * @param parameters 参数
     */
    public abstract async executeReader(sql: string, parameters?: any[]): Promise<any[]>;
    /**
     * 执行SQL语句，返回查询结果的第一行第一列。
     * @param sql SQL语句
     * @param parameters 参数
     */
    public abstract async executeScalar(sql: string, parameters?: any[]): Promise<any>;
    /**
     * 执行SQL批处理，返回所有SQL执行结果的集合
     * @param batches SQL批处理
     */
    public abstract async executeBatch(batches: BatchItem[]): Promise<ExecuteResult[]>;
}