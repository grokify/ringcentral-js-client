"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var Conferencing = (function (_super) {
    __extends(Conferencing, _super);
    function Conferencing(prv, id, service) {
        _super.call(this, "conferencing", id, prv, service);
    }
    /**
        Get Conferencing info
    */
    Conferencing.prototype.get = function (query) {
        return this.getService().send({ method: "get", url: this.getEndpoint(true), query: query, body: undefined }).then(function (res) {
            return res.json();
        });
    };
    /**
        Update Conferencing info
    */
    Conferencing.prototype.put = function (body) {
        return this.getService().send({ method: "put", url: this.getEndpoint(true), query: undefined, body: body }).then(function (res) {
            return res.json();
        });
    };
    return Conferencing;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Conferencing;
