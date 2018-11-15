"use strict";
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
var DBType_1 = require("./DBType");
var PostgreSQLHelper_1 = require("./PostgreSQLHelper");
var MySQLHelper_1 = require("./MySQLHelper");
var SQLiteHelper_1 = require("./SQLiteHelper");
/** 数据库上下文 */
var DBContext = /** @class */ (function () {
    /**
     * 实例化一个数据库上下文对象
     * @param dbType 数据库类型
     * @param connectionConfig 连接配置
     */
    function DBContext(dbType, connectionConfig) {
        switch (dbType) {
            case DBType_1.DBType.PostgreSQL:
                this._helper = new PostgreSQLHelper_1.PostgreSQLHelper(connectionConfig);
                break;
            case DBType_1.DBType.SQLite:
                this._helper = new SQLiteHelper_1.SQLiteHelper(connectionConfig);
                break;
            case DBType_1.DBType.MySQL:
                this._helper = new MySQLHelper_1.MySQLHelper(connectionConfig);
                break;
            default:
                throw '不支持的数据库类型！';
        }
    }
    /**
     * 执行SQL语句，返回受影响的行数。
     * @param sql SQL语句
     * @param parameters 参数
     */
    DBContext.prototype.executeNonQuery = function (sql, parameters) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._helper.executeNonQuery(sql, parameters)];
            });
        });
    };
    /**
     * 执行SQL语句，返回多条数据。
     * @param sql SQL语句
     * @param parameters 参数
     */
    DBContext.prototype.executeReader = function (sql, parameters) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._helper.executeReader(sql, parameters)];
            });
        });
    };
    /**
     * 执行SQL语句，返回查询结果的第一行第一列。
     * @param sql SQL语句
     * @param parameters 参数
     */
    DBContext.prototype.executeScalar = function (sql, parameters) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._helper.executeScalar(sql, parameters)];
            });
        });
    };
    /**
     * 执行SQL批处理，返回所有SQL执行结果的集合
     * @param batches SQL批处理
     */
    DBContext.prototype.executeBatch = function (batches) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._helper.executeBatch(batches)];
            });
        });
    };
    return DBContext;
}());
exports.DBContext = DBContext;
