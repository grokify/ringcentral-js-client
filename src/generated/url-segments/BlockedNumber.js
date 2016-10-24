"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var BlockedNumber = (function (_super) {
    __extends(BlockedNumber, _super);
    function BlockedNumber(prv, id, service) {
        _super.call(this, "blocked-number", id, prv, service);
    }
    /**
        Add New Blocked Number
    */
    BlockedNumber.prototype.post = function (body) {
        return this.getService().send({ method: "post", url: this.getEndpoint(true), query: undefined, body: body }).then(function (res) {
            return res.json();
        });
    };
    /**
        Get Blocked Number List
    */
    BlockedNumber.prototype.list = function () {
        return this.getService().send({ method: "get", url: this.getEndpoint(false), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    };
    /**
        Delete Blocked Number by ID
    */
    BlockedNumber.prototype.delete = function () {
        return this.getService().send({ method: "delete", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.response();
        });
    };
    /**
        Get Blocked Number by ID
    */
    BlockedNumber.prototype.get = function () {
        return this.getService().send({ method: "get", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    };
    /**
        Update Blocked Number Label
    */
    BlockedNumber.prototype.put = function (body) {
        return this.getService().send({ method: "put", url: this.getEndpoint(true), query: undefined, body: body }).then(function (res) {
            return res.json();
        });
    };
    return BlockedNumber;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BlockedNumber;
