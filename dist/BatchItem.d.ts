import { ExecuteType } from "./ExecuteType";
/** 批处理项 */
export declare class BatchItem {
    /** 执行类型 */
    executeType: ExecuteType;
    /** SQL语句 */
    sql: string;
    /** 参数 */
    parameters?: any[];
    /**
     * 实例化一个事务项对象
     * @executeType 执行类型，值不能为ExecuteType.Batch
     * @param sql SQL语句
     * @param parameters 参数
     */
    constructor(executeType: ExecuteType, sql: string, parameters?: any[]);
}
