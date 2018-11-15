import { DBType } from "./DBType";
import { BatchItem } from "./BatchItem";
/** 数据库上下文 */
export declare class DBContext {
    private _helper;
    /**
     * 实例化一个数据库上下文对象
     * @param dbType 数据库类型
     * @param connectionConfig 连接配置
     */
    constructor(dbType: DBType, connectionConfig: any);
    /**
     * 执行SQL语句，返回受影响的行数。
     * @param sql SQL语句
     * @param parameters 参数
     */
    executeNonQuery(sql: string, parameters?: any[]): Promise<number>;
    /**
     * 执行SQL语句，返回多条数据。
     * @param sql SQL语句
     * @param parameters 参数
     */
    executeReader(sql: string, parameters?: any[]): Promise<any[]>;
    /**
     * 执行SQL语句，返回查询结果的第一行第一列。
     * @param sql SQL语句
     * @param parameters 参数
     */
    executeScalar(sql: string, parameters?: any[]): Promise<any>;
    /**
     * 执行SQL批处理，返回所有SQL执行结果的集合
     * @param batches SQL批处理
     */
    executeBatch(batches: BatchItem[]): Promise<any[]>;
}
