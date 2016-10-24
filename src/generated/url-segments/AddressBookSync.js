"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var AddressBookSync = (function (_super) {
    __extends(AddressBookSync, _super);
    function AddressBookSync(prv, id, service) {
        _super.call(this, "address-book-sync", id, prv, service);
    }
    /**
        Contacts Synchronization
    */
    AddressBookSync.prototype.get = function (query) {
        return this.getService().send({ method: "get", url: this.getEndpoint(true), query: query, body: undefined }).then(function (res) {
            return res.json();
        });
    };
    return AddressBookSync;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AddressBookSync;
