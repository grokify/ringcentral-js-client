"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var Content_1 = require("./Content");
var MessageStore = (function (_super) {
    __extends(MessageStore, _super);
    function MessageStore(prv, id, service) {
        _super.call(this, "message-store", id, prv, service);
    }
    /**
     * Internal identifier of a message attachment
     */
    MessageStore.prototype.content = function (id) {
        return new Content_1.default(this, id);
    };
    /**
        Get Message List
    */
    MessageStore.prototype.list = function (query) {
        return this.getService().send({ method: "get", url: this.getEndpoint(false), query: query, body: undefined }).then(function (res) {
            return res.json();
        });
    };
    /**
        Delete Message by ID
    */
    MessageStore.prototype.delete = function (query) {
        return this.getService().send({ method: "delete", url: this.getEndpoint(true), query: query, body: undefined }).then(function (res) {
            return res.response();
        });
    };
    /**
        Get Message by ID
    */
    MessageStore.prototype.get = function () {
        return this.getService().send({ method: "get", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    };
    /**
        Update Message by ID
    */
    MessageStore.prototype.put = function (body) {
        return this.getService().send({ method: "put", url: this.getEndpoint(true), query: undefined, body: body }).then(function (res) {
            return res.json();
        });
    };
    return MessageStore;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MessageStore;
