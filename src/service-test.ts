import testConfig from "./test/config";
import Service from "./Service";
import {expect} from "chai";

let authConfig;
let service: Service;

before(() => {
    return testConfig.then(json => {
        authConfig = json;
        service = new Service(authConfig.app);
    });
});

describe("Auth", () => {

    it("fail login, empty credential", () => {
        return service.login({ username: "", password: "" }).then(() => {
            throw "Should not login";
        }, e => {
            expect(e.error).to.equal("invalid_request");
        });
    });

    it("fail login, wrong credential", () => {
        return service.login({ username: "xxx", password: "xxx" }).then(() => {
            throw "Should not login";
        }, e => {
            expect(e.error).to.equal("invalid_grant");
        });
    });

    it("fail login, wrong appKey/appSecret", () => {
        let service2 = new Service({appKey: "xx", appSecret: "xx"});
        return service2.login(authConfig.user).then(() => {
            throw "Should not login:";
        }, e => {
            expect(e.error).to.equal("invalid_client");
        });
    });

    let NotLoginError = "NotLogin";
    it("Call api before login", () => {
        return service.logout().then(() => {
            return service.get("/some-api");
        }).then(() => {
            throw new Error("Should not success.");
        }, e => {
            expect(e.name).to.eq(NotLoginError);
        });
    });

    it("Refresh token before login", () => {
        return service.logout().then(() => {
            return service.refreshToken();
        }).then(() => {
            throw new Error("Should not success.");
        }, e => {
            expect(e.name).to.eq(NotLoginError);
        });
    });

    it("login with right credential", () => {
        return service.login(authConfig.user).then(() => {
            let token = service.tokenStore.get().token;
            expect(token.expired()).to.be.false;
            expect(token.refreshTokenExpired()).to.be.false;
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
            expect(cachedAccessToken).to.eql(cur);
        });
    });

    it("Allow only one refresh token request at the same time", () => {
        return service.login(authConfig.user).then(() => {
            let p1 = service.refreshToken();
            let p2 = service.refreshToken();
            expect(p1).to.eq(p2);
        });
    });

    

    it("Logout expired accessToken.");

    it("Refresh Token", () => {
        return service.login(authConfig.user).then(() => service.refreshToken());
    });

    it("Refresh token with wrong info");

    it("Access token and refresh token should be invalid after logout", () => {
        return service.logout();
    });
});