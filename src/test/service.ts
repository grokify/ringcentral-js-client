/// <reference path="../typings/tsd.d.ts" />

import * as fetch from "isomorphic-fetch";
import testConfig from "./config";
import Service from "../Service";

let service;
let p = fetch(testConfig.authDataUrl).then(function (res) {
    return res.json();
}).then(function (auth) {
    service = new Service(auth.app);
    return service.login(auth.user);
}).then(function () {
    console.log("Login success.");
    return;
}).catch(e => {
    console.error("error", e);
});
