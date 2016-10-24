"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var Check_1 = require("./Check");
var AuthzProfile = (function (_super) {
    __extends(AuthzProfile, _super);
    function AuthzProfile(prv, id, service) {
        _super.call(this, "authz-profile", id, prv, service);
    }
    /**
     *
     */
    AuthzProfile.prototype.check = function (id) {
        return new Check_1.default(this, id);
    };
    /**
        Get User Permissions
    */
    AuthzProfile.prototype.get = function () {
        return this.getService().send({ method: "get", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    };
    return AuthzProfile;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AuthzProfile;
