"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var Ringout = (function (_super) {
    __extends(Ringout, _super);
    function Ringout(prv, id, service) {
        _super.call(this, "ringout", id, prv, service);
    }
    /**
        Initiate RingOut Call
    */
    Ringout.prototype.post = function (body) {
        return this.getService().send({ method: "post", url: this.getEndpoint(true), query: undefined, body: body }).then(function (res) {
            return res.json();
        });
    };
    /**
        Cancel RingOut Call
    */
    Ringout.prototype.delete = function () {
        return this.getService().send({ method: "delete", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.response();
        });
    };
    /**
        Get RingOut Call Status
    */
    Ringout.prototype.get = function () {
        return this.getService().send({ method: "get", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    };
    return Ringout;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Ringout;
