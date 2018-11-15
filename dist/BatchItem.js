"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 批处理项 */
var BatchItem = /** @class */ (function () {
    /**
     * 实例化一个事务项对象
     * @executeType 执行类型，值不能为ExecuteType.Batch
     * @param sql SQL语句
     * @param parameters 参数
     */
    function BatchItem(executeType, sql, parameters) {
        this.executeType = executeType;
        this.sql = sql;
        this.parameters = parameters;
    }
    return BatchItem;
}());
exports.BatchItem = BatchItem;
