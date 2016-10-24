"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var CallLog = (function (_super) {
    __extends(CallLog, _super);
    function CallLog(prv, id, service) {
        _super.call(this, "call-log", id, prv, service);
    }
    /**
        Get Account Call Log
    */
    CallLog.prototype.list = function (query) {
        return this.getService().send({ method: "get", url: this.getEndpoint(false), query: query, body: undefined }).then(function (res) {
            return res.json();
        });
    };
    /**
        Get Account Call Log Record by ID
    */
    CallLog.prototype.get = function () {
        return this.getService().send({ method: "get", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    };
    /**
        Delete Extension Call Log
    */
    CallLog.prototype.delete = function (query) {
        return this.getService().send({ method: "delete", url: this.getEndpoint(true), query: query, body: undefined }).then(function (res) {
            return res.response();
        });
    };
    return CallLog;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CallLog;
