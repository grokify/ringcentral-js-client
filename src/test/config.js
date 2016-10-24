"use strict";
require("es6-promise");
var fetch = require("isomorphic-fetch");
var authDataUrl = "/data/rc-auth.json";
if (typeof process !== "undefined" && !process["browser"]) {
    authDataUrl = "http://localhost" + authDataUrl;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = fetch(authDataUrl).then(function (res) { return res.json(); });
