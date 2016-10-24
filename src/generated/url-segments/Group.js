"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var Group = (function (_super) {
    __extends(Group, _super);
    function Group(prv, id, service) {
        _super.call(this, "group", id, prv, service);
    }
    /**
        Get Contact Group List
    */
    Group.prototype.list = function () {
        return this.getService().send({ method: "get", url: this.getEndpoint(false), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    };
    /**
        Get Contact Group by ID
    */
    Group.prototype.get = function () {
        return this.getService().send({ method: "get", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    };
    return Group;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Group;
