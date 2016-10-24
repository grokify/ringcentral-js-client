"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var CallLogSync = (function (_super) {
    __extends(CallLogSync, _super);
    function CallLogSync(prv, id, service) {
        _super.call(this, "call-log-sync", id, prv, service);
    }
    /**
        Call Log Synchronization
    */
    CallLogSync.prototype.get = function (query) {
        return this.getService().send({ method: "get", url: this.getEndpoint(true), query: query, body: undefined }).then(function (res) {
            return res.json();
        });
    };
    return CallLogSync;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CallLogSync;
