"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var DBHelper_1 = require("./DBHelper");
var pg = require("pg");
var ExecuteType_1 = require("./ExecuteType");
var ExecuteResult_1 = require("./ExecuteResult");
/** PostgreSQL数据库访问帮助类 */
var PostgreSQLHelper = /** @class */ (function (_super) {
    __extends(PostgreSQLHelper, _super);
    /**
     * 实例化一个PostgreSQL数据库访问帮助类对象
     * @param connectionConfig 连接配置
     */
    function PostgreSQLHelper(connectionConfig) {
        return _super.call(this, connectionConfig) || this;
    }
    /**
     * 执行SQL语句，返回受影响的行数。
     * @param sql SQL语句
     * @param parameters 参数
     */
    PostgreSQLHelper.prototype.executeNonQuery = function (sql, parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var out, errMsg, client, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = new pg.Client(this._connectionConfig);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 7]);
                        return [4 /*yield*/, client.connect()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, client.query(sql, parameters)];
                    case 3:
                        result = _a.sent();
                        out = result.rowCount;
                        return [3 /*break*/, 7];
                    case 4:
                        error_1 = _a.sent();
                        errMsg = error_1.toString();
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, client.end()];
                    case 6:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 7:
                        if (errMsg)
                            throw errMsg;
                        return [2 /*return*/, out];
                }
            });
        });
    };
    /**
     * 执行SQL语句，返回多条数据。
     * @param sql SQL语句
     * @param parameters 参数
     */
    PostgreSQLHelper.prototype.executeReader = function (sql, parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var out, errMsg, client, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = new pg.Client(this._connectionConfig);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 7]);
                        return [4 /*yield*/, client.connect()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, client.query(sql, parameters)];
                    case 3:
                        result = _a.sent();
                        out = result.rows;
                        return [3 /*break*/, 7];
                    case 4:
                        error_2 = _a.sent();
                        errMsg = error_2.toString();
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, client.end()];
                    case 6:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 7:
                        if (errMsg)
                            throw errMsg;
                        return [2 /*return*/, out];
                }
            });
        });
    };
    /**
     * 执行SQL语句，返回查询结果的第一行第一列。
     * @param sql SQL语句
     * @param parameters 参数
     */
    PostgreSQLHelper.prototype.executeScalar = function (sql, parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var out, errMsg, client, result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = new pg.Client(this._connectionConfig);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 7]);
                        return [4 /*yield*/, client.connect()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, client.query(sql, parameters)];
                    case 3:
                        result = _a.sent();
                        if (result.rowCount > 0)
                            out = result.rows[0][result.fields[0].name];
                        return [3 /*break*/, 7];
                    case 4:
                        error_3 = _a.sent();
                        errMsg = error_3.toString();
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, client.end()];
                    case 6:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 7:
                        if (errMsg)
                            throw errMsg;
                        return [2 /*return*/, out];
                }
            });
        });
    };
    /**
     * 执行SQL批处理，返回所有SQL执行结果的集合
     * @param batches SQL批处理
     */
    PostgreSQLHelper.prototype.executeBatch = function (batches) {
        return __awaiter(this, void 0, void 0, function () {
            var out, errMsg, client, _i, batches_1, item, itemResult, result, error_4, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = new pg.Client(this._connectionConfig);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 11, 12, 14]);
                        return [4 /*yield*/, client.connect()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, client.query('BEGIN;')];
                    case 3:
                        _a.sent();
                        out = [];
                        _i = 0, batches_1 = batches;
                        _a.label = 4;
                    case 4:
                        if (!(_i < batches_1.length)) return [3 /*break*/, 9];
                        item = batches_1[_i];
                        itemResult = new ExecuteResult_1.ExecuteResult();
                        out.push(itemResult);
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, client.query(item.sql, item.parameters)];
                    case 6:
                        result = _a.sent();
                        switch (item.executeType) {
                            case ExecuteType_1.ExecuteType.NonQuery:
                                itemResult.result = result.rowCount;
                                break;
                            case ExecuteType_1.ExecuteType.Reader:
                                itemResult.result = result.rows;
                                break;
                            case ExecuteType_1.ExecuteType.Scalar:
                                if (result.rowCount == 1) {
                                    itemResult.result = result.rows[0][result.fields[0].name];
                                }
                                break;
                        }
                        return [3 /*break*/, 8];
                    case 7:
                        error_4 = _a.sent();
                        itemResult.errMsg = error_4.toString();
                        return [3 /*break*/, 8];
                    case 8:
                        _i++;
                        return [3 /*break*/, 4];
                    case 9: return [4 /*yield*/, client.query('COMMIT;')];
                    case 10:
                        _a.sent();
                        return [3 /*break*/, 14];
                    case 11:
                        error_5 = _a.sent();
                        errMsg = error_5.toString();
                        return [3 /*break*/, 14];
                    case 12: return [4 /*yield*/, client.end()];
                    case 13:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 14:
                        if (errMsg)
                            throw errMsg;
                        return [2 /*return*/, out];
                }
            });
        });
    };
    return PostgreSQLHelper;
}(DBHelper_1.DBHelper));
exports.PostgreSQLHelper = PostgreSQLHelper;
