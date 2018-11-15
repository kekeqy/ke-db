import { DBHelper } from "./DBHelper";
import { BatchItem } from "./BatchItem";
/** SQLite数据库帮助类 */
export declare class SQLiteHelper extends DBHelper {
    /**
     * 实例化一个SQLite数据库帮助类对象
     * @param connectionConfig 连接配置
     */
    constructor(connectionConfig: any);
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
