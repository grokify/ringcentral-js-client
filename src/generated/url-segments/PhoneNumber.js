"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var PhoneNumber = (function (_super) {
    __extends(PhoneNumber, _super);
    function PhoneNumber(prv, id, service) {
        _super.call(this, "phone-number", id, prv, service);
    }
    /**
        Get Extension Phone Numbers
    */
    PhoneNumber.prototype.list = function (query) {
        return this.getService().send({ method: "get", url: this.getEndpoint(false), query: query, body: undefined }).then(function (res) {
            return res.json();
        });
    };
    /**
        Get Phone Number by ID
    */
    PhoneNumber.prototype.get = function () {
        return this.getService().send({ method: "get", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    };
    return PhoneNumber;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PhoneNumber;
