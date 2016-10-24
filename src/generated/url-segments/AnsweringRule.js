"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var AnsweringRule = (function (_super) {
    __extends(AnsweringRule, _super);
    function AnsweringRule(prv, id, service) {
        _super.call(this, "answering-rule", id, prv, service);
    }
    /**
        Create Custom Answering Rule
    */
    AnsweringRule.prototype.post = function (body) {
        return this.getService().send({ method: "post", url: this.getEndpoint(true), query: undefined, body: body }).then(function (res) {
            return res.json();
        });
    };
    /**
        Get Answering Rules List
    */
    AnsweringRule.prototype.list = function () {
        return this.getService().send({ method: "get", url: this.getEndpoint(false), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    };
    /**
        Delete Answering Rule by ID
    */
    AnsweringRule.prototype.delete = function () {
        return this.getService().send({ method: "delete", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.response();
        });
    };
    /**
        Get Custom Answering Rule by ID
    */
    AnsweringRule.prototype.get = function () {
        return this.getService().send({ method: "get", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    };
    /**
        Update Answering Rule by ID
    */
    AnsweringRule.prototype.put = function (body) {
        return this.getService().send({ method: "put", url: this.getEndpoint(true), query: undefined, body: body }).then(function (res) {
            return res.json();
        });
    };
    return AnsweringRule;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AnsweringRule;
