"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var End = (function (_super) {
    __extends(End, _super);
    function End(prv, id, service) {
        _super.call(this, "end", id, prv, service);
    }
    /**
        End Current Meeting
    */
    End.prototype.post = function () {
        return this.getService().send({ method: "post", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.response();
        });
    };
    return End;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = End;
