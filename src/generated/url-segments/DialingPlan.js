"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var DialingPlan = (function (_super) {
    __extends(DialingPlan, _super);
    function DialingPlan(prv, id, service) {
        _super.call(this, "dialing-plan", id, prv, service);
    }
    /**
        Get IBO Dialing Plans
    */
    DialingPlan.prototype.list = function (query) {
        return this.getService().send({ method: "get", url: this.getEndpoint(false), query: query, body: undefined }).then(function (res) {
            return res.json();
        });
    };
    return DialingPlan;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DialingPlan;
