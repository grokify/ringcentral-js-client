import * as fetch from "isomorphic-fetch";
import * as querystring from "querystring";
import {name as packageName, version as packageVersion} from "./generated/package";
import Token, {TokenStore, DefaultTokenStore} from "./Token";

const SERVER_PRODUCTION = "https://platform.ringcentral.com";
const SERVER_SANDBOX = "https://platform.devtest.ringcentral.com";

const SERVER_VERSION = "v1.0";

const TOKEN_URL = "/restapi/oauth/token";
const REVOKE_URL = "/restapi/oauth/revoke";

/**
 * A wrapper for sending http requests to RingCentralService.
 */
export default class Service {
    server: string;
    appKey: string;
    appSecret: string;

    tokenStore: TokenStore;
    private ongoingTokenRefresh: Promise<void>;

    constructor(opts: ServiceOptions) {
        this.server = opts.server || SERVER_PRODUCTION;
        this.appKey = opts.appKey;
        this.appSecret = opts.appSecret;
        this.tokenStore = opts.tokenStore || new DefaultTokenStore(packageName + "/" + packageVersion + "$TokenStore$" + opts.appKey);
    }

    private basicAuth(): string {
        return new Buffer(this.appKey + ":" + this.appSecret).toString("base64");
    }

    /**
     * Sent GET http method
     */
    get(url: string, query?: {}): Promise<Response> {
        return this.send(url, query);
    }

    delete(url: string, query?: {}): Promise<Response> {
        if (query) {
            url += "?" + querystring.stringify(query)
        }
        return this.send(url, query, {
            method: "DELETE"
        });
    }

    post(url: string, body: {}, query?: {}): Promise<Response> {
        let a;
        return a;
    }

    put(url: string, body: {}, query?: {}): Promise<Response> {
        let a;
        return a;
    }

    /**
     * Perform an authenticated API call.
     */
    send(endpoint: string, query?: {}, opts?: RequestInit): Promise<Response> {
        let tokenData = this.tokenStore.get();
        if (!tokenData) {
            return Promise.reject(new Error("No access token, can not perform api calls"));
        }
        let token = tokenData.token;
        if (token.expired()) {
            if (token.refreshTokenExpired()) {
                return Promise.reject("Token has expired.");
            } else {
                return this.refreshToken().then(() => {
                    return this.send(endpoint, query, opts);
                });
            }
        }
        opts = opts || {};
        opts.headers = opts.headers || {};
        opts.headers["Authorization"] = token.type + " " + token.accessToken;
        opts.headers["Client-Id"] = this.appKey;
        opts.headers["X-User-Agent"] = packageName + "/" + packageVersion;
        return fetch(this.server + "/restapi/" + SERVER_VERSION + endpoint + "?" + querystring.stringify(query), opts);
    }

    login(opts: { username: string; password: string; extension?: string, accessTokenTtl?: number, refreshTokenTtl?: number, scope?: string[] }): Promise<void> {
        let tokenData = this.tokenStore.get();
        if (tokenData && tokenData.username == opts.username && tokenData.extension == opts.extension && !tokenData.token.expired()) {
            return Promise.resolve(null);;
        }
        let body = {
            grant_type: "password",
            username: opts.username,
            extension: opts.extension,
            password: opts.password,
            access_token_ttl: opts.accessTokenTtl,
            refresh_token_ttl: opts.refreshTokenTtl,
            scope: opts.scope && opts.scope.join(" ")
        };
        let startTime = Date.now();
        return fetch(this.server + TOKEN_URL, {
            body: querystring.stringify(body),
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic " + this.basicAuth()
            }
        }).then(res => res.json()).then(json => {
            if (json["errors"] || json["errorCode"]) {
                throw json;
            }
            this.tokenStore.save({
                username: opts.username,
                extension: opts.extension,
                token: new Token(json, Date.now() - startTime)
            });
        });
    }

    logout(): Promise<void> {
        let tokenData = this.tokenStore.get();
        if (!tokenData) {
            return Promise.resolve(null);
        }
        return fetch(this.server + REVOKE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic " + this.basicAuth()
            },
            body: querystring.stringify({ token: tokenData.token.accessToken })
        }).then(() => {
            this.tokenStore.clear();
        });
    }

    /** Only one request will be sent at the same time. */
    refreshToken(): Promise<void> {
        let tokenData = this.tokenStore.get();
        if (!tokenData) {
            return Promise.reject(new Error("No access token, can not refresh token."));
        }
        if (this.ongoingTokenRefresh) {
            return this.ongoingTokenRefresh;
        }
        let token = tokenData.token;
        if (token.refreshTokenExpired()) {
            return Promise.reject(new Error("Refresh token has expired, can not refresh."));
        }
        let body = {
            refresh_token: token.refreshToken,
            grant_type: "refresh_token",
            endpoint_id: token.endpointId
        };
        let startTime = Date.now();
        this.ongoingTokenRefresh = fetch(this.server + TOKEN_URL, {
            method: "POST",
            body: querystring.stringify(body),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic " + this.basicAuth()
            }
        }).then(res => res.json()).then(json => {
            this.ongoingTokenRefresh = null;
            tokenData.token = new Token(json, Date.now() - startTime);
            this.tokenStore.save(tokenData);
        }, e => {
            this.ongoingTokenRefresh = null;
            throw e;
        });
        return this.ongoingTokenRefresh;
    }

}

interface ServiceOptions {
    server?: string;
    appKey: string;
    appSecret: string;
    /** By default, token is stored in localStorage in browser and memory in node. */
    tokenStore?: TokenStore;    
}

export {
SERVER_PRODUCTION,
SERVER_SANDBOX,
SERVER_VERSION,
ServiceOptions
}