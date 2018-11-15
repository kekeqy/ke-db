import { DBType } from "./DBType";
import { BatchItem } from "./BatchItem";
import { DBHelper } from "./DBHelper";
import { PostgreSQLHelper } from "./PostgreSQLHelper";
import { MySQLHelper } from "./MySQLHelper";
import { SQLiteHelper } from "./SQLiteHelper";

/** 数据库上下文 */
export class DBContext {
    private _helper: DBHelper;
    /**
     * 实例化一个数据库上下文对象
     * @param dbType 数据库类型
     * @param connectionConfig 连接配置
     */
    public constructor(dbType: DBType, connectionConfig: any) {
        switch (dbType) {
            case DBType.PostgreSQL:
                this._helper = new PostgreSQLHelper(connectionConfig);
                break;
            case DBType.SQLite:
                this._helper = new SQLiteHelper(connectionConfig);
                break;
            case DBType.MySQL:
                this._helper = new MySQLHelper(connectionConfig);
                break;
            default:
                throw '不支持的数据库类型！';
        }
    }
    /**
     * 执行SQL语句，返回受影响的行数。
     * @param sql SQL语句
     * @param parameters 参数
     */
    public async executeNonQuery(sql: string, parameters?: any[]): Promise<number> {
        return this._helper.executeNonQuery(sql, parameters);
    }
    /**
     * 执行SQL语句，返回多条数据。
     * @param sql SQL语句
     * @param parameters 参数
     */
    public async executeReader(sql: string, parameters?: any[]): Promise<any[]> {
        return this._helper.executeReader(sql, parameters);
    }
    /**
     * 执行SQL语句，返回查询结果的第一行第一列。
     * @param sql SQL语句
     * @param parameters 参数
     */
    public async executeScalar(sql: string, parameters?: any[]): Promise<any> {
        return this._helper.executeScalar(sql, parameters);
    }
    /**
     * 执行SQL批处理，返回所有SQL执行结果的集合
     * @param batches SQL批处理
     */
    public async executeBatch(batches: BatchItem[]): Promise<any[]> {
        return this._helper.executeBatch(batches);
    }
}