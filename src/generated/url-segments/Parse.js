"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var Parse = (function (_super) {
    __extends(Parse, _super);
    function Parse(prv, id, service) {
        _super.call(this, "parse", id, prv, service);
    }
    /**
        Parse Phone Number
    */
    Parse.prototype.post = function (body, query) {
        return this.getService().send({ method: "post", url: this.getEndpoint(true), query: query, body: body }).then(function (res) {
            return res.json();
        });
    };
    return Parse;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Parse;
