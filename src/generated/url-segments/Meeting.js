"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var ServiceInfo_1 = require("./ServiceInfo");
var End_1 = require("./End");
var Meeting = (function (_super) {
    __extends(Meeting, _super);
    function Meeting(prv, id, service) {
        _super.call(this, "meeting", id, prv, service);
    }
    /**
     *
     */
    Meeting.prototype.serviceInfo = function (id) {
        return new ServiceInfo_1.default(this, id);
    };
    /**
     *
     */
    Meeting.prototype.end = function (id) {
        return new End_1.default(this, id);
    };
    /**
        Create Meeting
    */
    Meeting.prototype.post = function (body) {
        return this.getService().send({ method: "post", url: this.getEndpoint(true), query: undefined, body: body }).then(function (res) {
            return res.json();
        });
    };
    /**
        Get Meetings List
    */
    Meeting.prototype.list = function () {
        return this.getService().send({ method: "get", url: this.getEndpoint(false), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    };
    /**
        Delete Meeting
    */
    Meeting.prototype.delete = function () {
        return this.getService().send({ method: "delete", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.response();
        });
    };
    /**
        Get Meeting
    */
    Meeting.prototype.get = function () {
        return this.getService().send({ method: "get", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    };
    /**
        Update Meeting
    */
    Meeting.prototype.put = function (body) {
        return this.getService().send({ method: "put", url: this.getEndpoint(true), query: undefined, body: body }).then(function (res) {
            return res.json();
        });
    };
    return Meeting;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Meeting;
