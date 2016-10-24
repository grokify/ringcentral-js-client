"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var Lookup = (function (_super) {
    __extends(Lookup, _super);
    function Lookup(prv, id, service) {
        _super.call(this, "lookup", id, prv, service);
    }
    /**
        Look up Phone Number
    */
    Lookup.prototype.post = function (query) {
        return this.getService().send({ method: "post", url: this.getEndpoint(true), query: query, body: undefined }).then(function (res) {
            return res.json();
        });
    };
    return Lookup;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Lookup;
