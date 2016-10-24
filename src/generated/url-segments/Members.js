"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var Members = (function (_super) {
    __extends(Members, _super);
    function Members(prv, id, service) {
        _super.call(this, "members", id, prv, service);
    }
    /**
        Get Department Members
    */
    Members.prototype.list = function (query) {
        return this.getService().send({ method: "get", url: this.getEndpoint(false), query: query, body: undefined }).then(function (res) {
            return res.json();
        });
    };
    return Members;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Members;
