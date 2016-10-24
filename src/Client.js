"use strict";
var url_1 = require("url");
var Account_1 = require("./generated/url-segments/Account");
var ClientInfo_1 = require("./generated/url-segments/ClientInfo");
var NumberPool_1 = require("./generated/url-segments/NumberPool");
var Ringcentral = require("ringcentral");
var Client = (function () {
    function Client(opts) {
        if (opts instanceof Ringcentral) {
            this.service = opts;
        }
        else {
            opts.server = opts.server || SERVER_PRODUCTION;
            this.service = new Ringcentral(opts);
        }
    }
    /**
     * FIXME: Allow additional options: brand_id, display, prompte?
     */
    Client.prototype.loginUrl = function (opts) {
        return this.service.platform().loginUrl(opts);
    };
    Client.prototype.login = function (opts) {
        return this.service.platform().login(opts);
    };
    Client.prototype.getAuthCode = function (callbackUrl) {
        var res = url_1.parse(callbackUrl, true).query;
        var code = res["code"];
        if (code) {
            return code;
        }
        else if (res["error_description"]) {
            var err = new Error(res["error_description"]);
            err.name = res["error"];
            err["errors"] = res["errors"];
            throw err;
        }
    };
    Client.prototype.logout = function () {
        return this.service.platform().logout();
    };
    Client.prototype.on = function (evtName, handler) {
        this.service.platform().on(evtName, handler);
    };
    Client.prototype.createSubscription = function () {
        return this.service.createSubscription();
    };
    /** Returns a promise that resovles if access token is valid or refresh token is valid, and refresh the token if needed. */
    Client.prototype.ensureLoggedIn = function () {
        return this.service.platform().ensureLoggedIn();
    };
    Client.prototype.account = function (id) {
        return new Account_1.default(null, id, this.service.platform());
    };
    Client.prototype.clientInfo = function () {
        return new ClientInfo_1.default(null, null, this.service.platform());
    };
    Client.prototype.numberPool = function () {
        return new NumberPool_1.default(null, null, this.service.platform());
    };
    return Client;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Client;
exports.Client = Client;
var SERVER_PRODUCTION = "https://platform.ringcentral.com";
exports.SERVER_PRODUCTION = SERVER_PRODUCTION;
var SERVER_SANDBOX = "https://platform.devtest.ringcentral.com";
exports.SERVER_SANDBOX = SERVER_SANDBOX;
// Auth events
var EVENT_LOGIN_START = "beforeLogin";
exports.EVENT_LOGIN_START = EVENT_LOGIN_START;
var EVENT_LOGIN_SUCCESS = "loginSuccess";
exports.EVENT_LOGIN_SUCCESS = EVENT_LOGIN_SUCCESS;
var EVENT_LOGIN_ERROR = "loginError";
exports.EVENT_LOGIN_ERROR = EVENT_LOGIN_ERROR;
var EVENT_REFRESH_START = "beforeRefresh";
exports.EVENT_REFRESH_START = EVENT_REFRESH_START;
var EVENT_REFRESH_SUCCESS = "refreshSuccess";
exports.EVENT_REFRESH_SUCCESS = EVENT_REFRESH_SUCCESS;
var EVENT_REFRESH_ERROR = "refreshError";
exports.EVENT_REFRESH_ERROR = EVENT_REFRESH_ERROR;
var EVENT_LOGOUT_START = "beforeLogout";
exports.EVENT_LOGOUT_START = EVENT_LOGOUT_START;
var EVENT_LOGOUT_SUCCESS = "logoutSuccess";
exports.EVENT_LOGOUT_SUCCESS = EVENT_LOGOUT_SUCCESS;
var EVENT_LOGOUT_ERROR = "logoutError";
exports.EVENT_LOGOUT_ERROR = EVENT_LOGOUT_ERROR;
