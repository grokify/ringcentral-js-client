"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var FormData = require("form-data");
var ProfileImage = (function (_super) {
    __extends(ProfileImage, _super);
    function ProfileImage(prv, id, service) {
        _super.call(this, "profile-image", id, prv, service);
    }
    /**
        Get Profile Image
    */
    ProfileImage.prototype.get = function () {
        return this.getService().send({ method: "get", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.response();
        });
    };
    /**
        Update Profile Image
    */
    ProfileImage.prototype.put = function (imageData, contentType) {
        if (contentType === void 0) { contentType = "image/png"; }
        var form = new FormData();
        form.append("image", imageData, { contentType: contentType, filename: "profile." + contentType.split('/').pop() });
        return this.getService().put(this.getEndpoint(), form).then(function (res) { });
    };
    /**
        Update Profile Image (same as PUT)
    */
    ProfileImage.prototype.post = function (imageData, contentType) {
        if (contentType === void 0) { contentType = "image/png"; }
        var form = new FormData();
        form.append("image", imageData, { contentType: contentType, filename: "profile." + contentType.split('/').pop() });
        return this.getService().put(this.getEndpoint(), form).then(function (res) { });
    };
    return ProfileImage;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProfileImage;
