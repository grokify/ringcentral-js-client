"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var Token = (function (_super) {
    __extends(Token, _super);
    function Token(prv, id, service) {
        _super.call(this, "token", id, prv, service);
    }
    /**
        OAuth2 Get Token
    */
    Token.prototype.post = function (body) {
        return this.getService().send({ method: "post", url: this.getEndpoint(true), query: undefined, body: body }).then(function (res) {
            return res.json();
        });
    };
    return Token;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Token;
