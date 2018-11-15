"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 执行类型 */
var ExecuteType;
(function (ExecuteType) {
    /// <summary>
    /// 仅返回数据受影响的行数。通常用于数据库的增删改。
    /// </summary>
    ExecuteType[ExecuteType["NonQuery"] = 1] = "NonQuery";
    /// <summary>
    /// 仅返回数据库的第一行, 第一列的内容。
    /// </summary>
    ExecuteType[ExecuteType["Scalar"] = 2] = "Scalar";
    /// <summary>
    /// 返回读取的所有数据，通常用于查询数据库内容。
    /// </summary>
    ExecuteType[ExecuteType["Reader"] = 4] = "Reader";
})(ExecuteType = exports.ExecuteType || (exports.ExecuteType = {}));
