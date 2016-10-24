"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var BusinessHours = (function (_super) {
    __extends(BusinessHours, _super);
    function BusinessHours(prv, id, service) {
        _super.call(this, "business-hours", id, prv, service);
    }
    /**
        Get User Hours Setting
    */
    BusinessHours.prototype.get = function () {
        return this.getService().send({ method: "get", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    };
    return BusinessHours;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BusinessHours;
