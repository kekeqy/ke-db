"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 数据库帮助类 */
var DBHelper = /** @class */ (function () {
    /**
     * 实例化一个数据库帮助类对象
     * @param connectionConfig 连接配置对象
     */
    function DBHelper(connectionConfig) {
        this._connectionConfig = connectionConfig;
    }
    return DBHelper;
}());
exports.DBHelper = DBHelper;
