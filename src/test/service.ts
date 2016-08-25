/// <reference path="../typings/tsd.d.ts" />

import * as fetch from "isomorphic-fetch";
import testConfig from "./config";
import Service from "../Service";

let service: Service;

describe("Auth", () => {
    it("Login", () => {
        return fetch(testConfig.authDataUrl)
            .then(function (res) {
                return res.json();
            }).then(function (auth) {
                service = new Service(auth.app);
                return service.login(auth.user);
            });
    });

    it("Refresh Token", () => {
        return service.refreshToken();
    });

    it("Logout", () => {
        return service.logout();
    });
});