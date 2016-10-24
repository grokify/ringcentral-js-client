"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var CustomData = (function (_super) {
    __extends(CustomData, _super);
    function CustomData(prv, id, service) {
        _super.call(this, "custom-data", id, prv, service);
    }
    /**
        Update Custom Data by Key
    */
    CustomData.prototype.put = function (body) {
        return this.getService().send({ method: "put", url: this.getEndpoint(true), query: undefined, body: body }).then(function (res) {
            return res.json();
        });
    };
    return CustomData;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CustomData;
