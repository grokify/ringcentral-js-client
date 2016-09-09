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

    it("fail login, empty credential", () => {
        return service.login({ username: "", password: "" }).then(() => {
            throw "Should not login";
        }, e => {
            if (e.error != "invalid_request") {
                throw new Error("Wrong error code.");
            }
        });
    });

    it("fail login, wrong credential", () => {
        return service.login({ username: "xxx", password: "xxx" }).then(() => {
            throw "Should not login";
        }, e => {
            if (e.error != "invalid_grant") {
                throw new Error("Wrong error code.");
            }
        });
    });

    it("fail login, wrong appKey/appSecret", () => {
        let rightKey = service.appKey;
        service.appKey = Math.random() * 100000 + "";
        let p = service.login(authConfig.user).then(() => {
            throw "Should not login";
        }, e => {
            if (e.error != "invalid_client") {
                throw new Error("Wrong error code.");
            }
        });
        service.appKey = rightKey;
        return p;
    });

    it("login with right credential", () => {
        return service.login(authConfig.user).then(() => {
            let token = service.tokenStore.get().token;
            if (token.expired() || token.refreshTokenExpired()) {
                throw "Token not valid";
            }
        });
    });

    it("Login will try to use cached token", () => {
        let cachedAccessToken;
        let service2 = new Service(authConfig.app);
        return service.login(authConfig.user).then(() => {
            cachedAccessToken = service.tokenStore.get().token.accessToken;
            return service2.login(authConfig.user);
        }).then(() => {
            let cur = service2.tokenStore.get().token.accessToken;
            if (cachedAccessToken != cur) {
                throw "Access token not the same." + cachedAccessToken + " : " + cur;
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

    let NotLoginError = "NotLogin";
    it("Call api before login", () => {
        return service.logout().then(() => {
            return service.get("/some-api");
        }).then(() => {
            throw new Error("Should not success.");
        }, e => {
            if (e.name != NotLoginError) {
                throw new Error("Wrong error code.");
            }
        });
    });

    it("Refresh token before login", () => {
        return service.logout().then(() => {
            return service.refreshToken();
        }).then(() => {
            throw new Error("Should not success.");
        }, e => {
            if (e.name != NotLoginError) {
                throw new Error("Wrong error code.");
            }
        });
    });

    it("Logout expired accessToken.");

    it("Refresh Token", () => {
        return service.refreshToken();
    });

    it("Refresh token with wrong info");

    it("Access token and refresh token should be invalid after logout", () => {
        return service.logout();
    });
});