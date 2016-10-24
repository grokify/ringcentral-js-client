"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var Revoke = (function (_super) {
    __extends(Revoke, _super);
    function Revoke(prv, id, service) {
        _super.call(this, "revoke", id, prv, service);
    }
    /**
        OAuth2 Revoke Token
    */
    Revoke.prototype.post = function (body) {
        return this.getService().send({ method: "post", url: this.getEndpoint(true), query: undefined, body: body }).then(function (res) {
            return res.response();
        });
    };
    return Revoke;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Revoke;
