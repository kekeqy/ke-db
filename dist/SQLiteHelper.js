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
var sqlite3 = require("sqlite3");
var ExecuteType_1 = require("./ExecuteType");
var ExecuteResult_1 = require("./ExecuteResult");
/** SQLite数据库帮助类 */
var SQLiteHelper = /** @class */ (function (_super) {
    __extends(SQLiteHelper, _super);
    /**
     * 实例化一个SQLite数据库帮助类对象
     * @param connectionConfig 连接配置
     */
    function SQLiteHelper(connectionConfig) {
        return _super.call(this, connectionConfig) || this;
    }
    /**
     * 执行SQL语句，返回受影响的行数。
     * @param sql SQL语句
     * @param parameters 参数
     */
    SQLiteHelper.prototype.executeNonQuery = function (sql, parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var out, errMsg, db, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, 4, 5]);
                        return [4 /*yield*/, new Promise(function (resolve) {
                                db = new sqlite3.Database(_this._connectionConfig, function (err) {
                                    if (err)
                                        throw err;
                                    resolve();
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, new Promise(function (resolve) {
                                db.run(sql, parameters, function (err) {
                                    if (err)
                                        throw err;
                                    out = this.changes;
                                    resolve();
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        error_1 = _a.sent();
                        errMsg = error_1.toString();
                        return [3 /*break*/, 5];
                    case 4:
                        db.close();
                        return [7 /*endfinally*/];
                    case 5:
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
    SQLiteHelper.prototype.executeReader = function (sql, parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var out, errMsg, db, error_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, 4, 5]);
                        return [4 /*yield*/, new Promise(function (resolve) {
                                db = new sqlite3.Database(_this._connectionConfig, function (err) {
                                    if (err)
                                        throw err;
                                    resolve();
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, new Promise(function (resolve) {
                                db.all(sql, parameters, function (err, rows) {
                                    if (err)
                                        throw err;
                                    out = rows;
                                    resolve();
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        error_2 = _a.sent();
                        errMsg = error_2.toString();
                        return [3 /*break*/, 5];
                    case 4:
                        db.close();
                        return [7 /*endfinally*/];
                    case 5:
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
    SQLiteHelper.prototype.executeScalar = function (sql, parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var out, errMsg, db, error_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, 4, 5]);
                        return [4 /*yield*/, new Promise(function (resolve) {
                                db = new sqlite3.Database(_this._connectionConfig, function (err) {
                                    if (err)
                                        throw err;
                                    resolve();
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, new Promise(function (resolve) {
                                db.get(sql, parameters, function (err, row) {
                                    if (err)
                                        throw err;
                                    if (row) {
                                        var keys = Object.keys(row);
                                        if (keys.length > 0)
                                            out = row[keys[0]];
                                    }
                                    resolve();
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        error_3 = _a.sent();
                        errMsg = error_3.toString();
                        return [3 /*break*/, 5];
                    case 4:
                        db.close();
                        return [7 /*endfinally*/];
                    case 5:
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
    SQLiteHelper.prototype.executeBatch = function (batches) {
        return __awaiter(this, void 0, void 0, function () {
            var out, errMsg, db, _loop_1, _i, batches_1, item, error_4;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, 7, 8]);
                        return [4 /*yield*/, new Promise(function (resolve) {
                                db = new sqlite3.Database(_this._connectionConfig, function (err) {
                                    if (err)
                                        throw err;
                                    resolve();
                                });
                            })];
                    case 1:
                        _a.sent();
                        out = [];
                        _loop_1 = function (item) {
                            var itemResult, error_5;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        itemResult = new ExecuteResult_1.ExecuteResult();
                                        out.push(itemResult);
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 3, , 4]);
                                        return [4 /*yield*/, new Promise(function (resolve) {
                                                switch (item.executeType) {
                                                    case ExecuteType_1.ExecuteType.NonQuery:
                                                        db.run(item.sql, item.parameters, function (err) {
                                                            if (err)
                                                                throw err;
                                                            itemResult.result = this.changes;
                                                            resolve();
                                                        });
                                                        break;
                                                    case ExecuteType_1.ExecuteType.Reader:
                                                        db.all(item.sql, item.parameters, function (err, rows) {
                                                            if (err)
                                                                throw err;
                                                            itemResult.result = rows;
                                                            resolve();
                                                        });
                                                        break;
                                                    case ExecuteType_1.ExecuteType.Scalar:
                                                        db.get(item.sql, item.parameters, function (err, row) {
                                                            if (err)
                                                                throw err;
                                                            if (row) {
                                                                var keys = Object.keys(row);
                                                                if (keys.length > 0)
                                                                    itemResult.result = row[keys[0]];
                                                            }
                                                            resolve();
                                                        });
                                                }
                                            })];
                                    case 2:
                                        _a.sent();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        error_5 = _a.sent();
                                        itemResult.errMsg = error_5.toString();
                                        return [3 /*break*/, 4];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        };
                        _i = 0, batches_1 = batches;
                        _a.label = 2;
                    case 2:
                        if (!(_i < batches_1.length)) return [3 /*break*/, 5];
                        item = batches_1[_i];
                        return [5 /*yield**/, _loop_1(item)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        error_4 = _a.sent();
                        errMsg = error_4.toString();
                        return [3 /*break*/, 8];
                    case 7:
                        db.close();
                        return [7 /*endfinally*/];
                    case 8:
                        if (errMsg)
                            throw errMsg;
                        return [2 /*return*/, out];
                }
            });
        });
    };
    return SQLiteHelper;
}(DBHelper_1.DBHelper));
exports.SQLiteHelper = SQLiteHelper;
