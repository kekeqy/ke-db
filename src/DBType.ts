/** 数据库类型 */
export enum DBType {
    /** PostgreSQL数据库 */
    PostgreSQL = 1 << 0,
    /** SQLite数据库 */
    SQLite = 1 << 1,
    /** MySQL数据库 */
    MySQL = 1 << 2
}