"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var Contact = (function (_super) {
    __extends(Contact, _super);
    function Contact(prv, id, service) {
        _super.call(this, "contact", id, prv, service);
    }
    /**
        Create New Contact
    */
    Contact.prototype.post = function (body) {
        return this.getService().send({ method: "post", url: this.getEndpoint(true), query: undefined, body: body }).then(function (res) {
            return res.json();
        });
    };
    /**
        Get Contact List
    */
    Contact.prototype.list = function (query) {
        return this.getService().send({ method: "get", url: this.getEndpoint(false), query: query, body: undefined }).then(function (res) {
            return res.json();
        });
    };
    /**
        Delete Contact by ID
    */
    Contact.prototype.delete = function () {
        return this.getService().send({ method: "delete", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.response();
        });
    };
    /**
        Get Contact by ID
    */
    Contact.prototype.get = function () {
        return this.getService().send({ method: "get", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    };
    /**
        Update Contact by ID
    */
    Contact.prototype.put = function (body) {
        return this.getService().send({ method: "put", url: this.getEndpoint(true), query: undefined, body: body }).then(function (res) {
            return res.json();
        });
    };
    return Contact;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Contact;
