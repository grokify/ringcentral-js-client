/// <reference path="../typings/tsd.d.ts" />

import * as fetch from "isomorphic-fetch";
import testConfig from "./config";
import Client from "../Client";

let ringcentral;
let p = fetch(testConfig.authDataUrl).then(function (res) {
    return res.json();
}).then(function (auth) {
    ringcentral = new Client(auth.app);
    return ringcentral.login(auth.user);
}).then(function () {
    return ringcentral;
});

export default p;