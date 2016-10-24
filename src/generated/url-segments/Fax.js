"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var FormData = require("form-data");
var Fax = (function (_super) {
    __extends(Fax, _super);
    function Fax(prv, id, service) {
        _super.call(this, "fax", id, prv, service);
    }
    /**
        Create and Send Fax Message
    */
    Fax.prototype.post = function (body, attachments) {
        function inNode() {
            return typeof process != "undefined" && !process["browser"];
        }
        function browserSupportBlob() {
            return typeof Blob == "function";
        }
        var meta = JSON.stringify(body);
        var form = new FormData();
        var jsonType = "application/json";
        if (inNode()) {
            form.append("json", meta, { filename: 'request.json', contentType: jsonType });
            for (var i = 0; i < attachments.length; i++) {
                var atch = attachments[i];
                if (typeof atch == "string") {
                    form.append("attachment", atch, { contentType: "text/plain" });
                }
                else {
                    form.append("attachment", atch);
                }
            }
        }
        else if (browserSupportBlob()) {
            form.append("json", new Blob([meta], { type: jsonType }));
            for (var i = 0; i < attachments.length; i++) {
                var atch = attachments[i];
                if (typeof atch == "string") {
                    form.append("attachment", new Blob([atch], { type: "text/plain" }));
                }
                else {
                    form.append("attachment", atch);
                }
            }
        }
        else {
            return Promise.reject("Your're not in node and your environment does not support Blob or File API.");
        }
        return this.getService().post(this.getEndpoint(false), form).then(function (res) { return res.json(); });
    };
    return Fax;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Fax;
