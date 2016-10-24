"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var MessageSync = (function (_super) {
    __extends(MessageSync, _super);
    function MessageSync(prv, id, service) {
        _super.call(this, "message-sync", id, prv, service);
    }
    /**
        Message Synchronization
    */
    MessageSync.prototype.get = function (query) {
        return this.getService().send({ method: "get", url: this.getEndpoint(true), query: query, body: undefined }).then(function (res) {
            return res.json();
        });
    };
    return MessageSync;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MessageSync;
