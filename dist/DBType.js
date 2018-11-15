"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 数据库类型 */
var DBType;
(function (DBType) {
    /** PostgreSQL数据库 */
    DBType[DBType["PostgreSQL"] = 1] = "PostgreSQL";
    /** SQLite数据库 */
    DBType[DBType["SQLite"] = 2] = "SQLite";
    /** MySQL数据库 */
    DBType[DBType["MySQL"] = 4] = "MySQL";
})(DBType = exports.DBType || (exports.DBType = {}));
