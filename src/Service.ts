import * as fetch from "isomorphic-fetch";
import * as querystring from "querystring";
import {name as packageName, version as packageVersion} from "./generated/package";
import Token, {TokenCache, MemoryCache} from "./Token";

export const SERVER_PRODUCTION = "https://platform.ringcentral.com";
export const SERVER_SANDBOX = "https://platform.devtest.ringcentral.com";

export const SERVER_VERSION = "v1.0";

const TOKEN_URL = "/restapi/oauth/token";
const REVOKE_URL = "/restapi/oauth/revoke";

/**
 * A wrapper for sending http requests to RingCentralService.
 */
export default class Service {
    server: string;
    appKey: string;
    appSecret: string;

    token: Token;
    tokenCache: TokenCache;
    tokenCacheKey: string;
    refreshTokenPromise: Promise<void>;

    constructor(opts: {
        server?: string;
        appKey: string;
        appSecret: string;
        tokenCache?: TokenCache;
    }) {
        this.server = opts.server || SERVER_PRODUCTION;
        this.appKey = opts.appKey;
        this.appSecret = opts.appSecret;
        
        let cache = opts.tokenCache;
        if (!cache && typeof localStorage != "undefined") {
            cache = localStorage;
        }
        this.tokenCache = cache || new MemoryCache();
    }

    basicAuth(): string {
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
        if (!this.token) {
            return Promise.reject(new Error("Not login, can not perform api calls"));
        }
        if (this.token.expired()) {
            return this.refreshToken().then(() => {
                return this.send(endpoint, query, opts);
            });
        }
        opts = opts || {};
        opts.headers = opts.headers || {};
        opts.headers["Authorization"] = this.token.type + " " + this.token.accessToken;
        opts.headers["Client-Id"] = this.appKey;
        opts.headers["X-User-Agent"] = packageName + "/" + packageVersion;
        return fetch(this.server + "/restapi/" + SERVER_VERSION + endpoint + "?" + querystring.stringify(query), opts);
    }

    login(opts: { username: string; password: string; extension?: string, accessTokenTtl?: number, refreshTokenTtl?: number, scope?: string[] }): Promise<void> {
        this.tokenCacheKey = [packageName + "/" + packageVersion, opts.username, opts.extension, ].join("$");
        let tokenData = this.tokenCache.getItem(this.tokenCacheKey);
        if (tokenData) {
            this.token = new Token(JSON.parse(tokenData));
            if (!this.token.expired()) {
                return Promise.resolve(null);
            }
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
            this.token = new Token(json, Date.now() - startTime);
            this.tokenCache.setItem(this.tokenCacheKey, JSON.stringify(this.token));
        });
    }

    logout(): Promise<void> {
        if (!this.token) {
            return Promise.resolve(null);
        }
        return fetch(this.server + REVOKE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic " + this.basicAuth()
            },
            body: querystring.stringify({ token: this.token.accessToken })
        }).then(() => {
            this.token = null;
            this.tokenCache.setItem(this.tokenCacheKey, "");
        });
    }

    /** Only one request will be sent at the same time. */
    refreshToken(): Promise<void> {
        if (!this.token) {
            return Promise.reject(new Error("Not authorized."));
        }
        if (this.refreshTokenPromise) {
            return this.refreshTokenPromise;
        }
        if (this.token.refreshTokenExpired()) {
            return Promise.reject(new Error("Refresh token has expired."));
        }
        let body = {
            refresh_token: this.token.refreshToken,
            grant_type: "refresh_token",
            endpoint_id: this.token.endpointId
        };
        let startTime = Date.now();
        this.refreshTokenPromise = fetch(this.server + TOKEN_URL, {
            method: "POST",
            body: querystring.stringify(body),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic " + this.basicAuth()
            }
        }).then(res => res.json()).then(json => {
            this.refreshTokenPromise = null;
            this.token = new Token(json, Date.now() - startTime);
        }).catch(e => {
            this.refreshTokenPromise = null;
            throw e;
        });
        return this.refreshTokenPromise;
    }
}