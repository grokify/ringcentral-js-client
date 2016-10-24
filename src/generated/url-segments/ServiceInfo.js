"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var ServiceInfo = (function (_super) {
    __extends(ServiceInfo, _super);
    function ServiceInfo(prv, id, service) {
        _super.call(this, "service-info", id, prv, service);
    }
    /**
        Get Meeting Service Info
    */
    ServiceInfo.prototype.get = function () {
        return this.getService().send({ method: "get", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    };
    return ServiceInfo;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ServiceInfo;
