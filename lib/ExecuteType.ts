/** 执行类型 */
export enum ExecuteType {
    /// <summary>
    /// 仅返回数据受影响的行数。通常用于数据库的增删改。
    /// </summary>
    NonQuery = 1 << 0,
    /// <summary>
    /// 仅返回数据库的第一行, 第一列的内容。
    /// </summary>
    Scalar = 1 << 1,
    /// <summary>
    /// 返回读取的所有数据，通常用于查询数据库内容。
    /// </summary>
    Reader = 1 << 2
}