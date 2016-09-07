/// <reference path="./typings/tsd.d.ts" />

import * as fetch from "isomorphic-fetch";
import testConfig from "./test/config";
import Service from "./Service";

let authConfig;
let service: Service;

before(() => {
    return fetch(testConfig.authDataUrl).then(res => res.json())
        .then(json => {
            authConfig = json;
            service = new Service(authConfig.app);
        });
});

describe("Auth", () => {

    it("Login with wrong credential", () => {
        return service.login({ username: "", password: "" }).then(() => {
            throw "Should not login";
        }, e => {
        });
    });

    it("Login with right credential", () => {
        return service.login(authConfig.user).then(() => {
            if (service.token.expired() || service.token.refreshTokenExpired()) {
                throw "Token not valid";
            }
        });
    });

    it("Allow only one refresh token request at the same time", () => {
        return service.login(authConfig.user).then(() => {
            let p1 = service.refreshToken();
            let p2 = service.refreshToken();
            if (p1 != p2) {
                throw new Error("Mutilp requests for token refresh are sent at the same time");
            }
        });
    });

    it("Refresh Token", () => {
        return service.refreshToken();
    });

    it("Logout", () => {
        return service.logout();
    });
});