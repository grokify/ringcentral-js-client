"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var ForwardingNumber = (function (_super) {
    __extends(ForwardingNumber, _super);
    function ForwardingNumber(prv, id, service) {
        _super.call(this, "forwarding-number", id, prv, service);
    }
    /**
        Add New Forwarding Number
    */
    ForwardingNumber.prototype.post = function (body) {
        return this.getService().send({ method: "post", url: this.getEndpoint(true), query: undefined, body: body }).then(function (res) {
            return res.json();
        });
    };
    /**
        Get Forwarding Numbers
    */
    ForwardingNumber.prototype.list = function (query) {
        return this.getService().send({ method: "get", url: this.getEndpoint(false), query: query, body: undefined }).then(function (res) {
            return res.json();
        });
    };
    return ForwardingNumber;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ForwardingNumber;
