import { ExecuteType } from "./ExecuteType";

/** 批处理项 */
export class BatchItem {
    /** 执行类型 */
    public executeType: ExecuteType;
    /** SQL语句 */
    public sql: string;
    /** 参数 */
    public parameters?: any[];
    /**
     * 实例化一个事务项对象
     * @executeType 执行类型，值不能为ExecuteType.Batch
     * @param sql SQL语句
     * @param parameters 参数
     */
    public constructor(executeType: ExecuteType, sql: string, parameters?: any[]) {
        this.executeType = executeType;
        this.sql = sql;
        this.parameters = parameters;
    }
}