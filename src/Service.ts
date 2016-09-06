import * as fetch from "isomorphic-fetch";
import * as querystring from "querystring";
import {name as packageName, version as packageVersion} from "./generated/package";

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
    autoRefreshToken: boolean;

    constructor(opts: {
        server?: string;
        appKey: string;
        appSecret: string;
        autoRefreshToken?: boolean;
    }) {
        this.server = opts.server || SERVER_PRODUCTION;
        this.appKey = opts.appKey;
        this.appSecret = opts.appSecret;
        this.autoRefreshToken = opts.autoRefreshToken === false ? false : true;
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
        opts = opts || {};
        opts.headers = opts.headers || {};
        opts.headers["Authorization"] = this.token.type + " " + this.token.accessToken;
        opts.headers["Client-Id"] = this.appKey;
        opts.headers["X-User-Agent"] = packageName + "/" + packageVersion;
        return fetch(this.server + "/restapi/" + SERVER_VERSION + endpoint + "?" + querystring.stringify(query), opts);
    }

    login(opts: { username: string; password: string; extension?: string, accessTokenTtl?: number, refreshTokenTtl?: number, scope?: string[] }): Promise<void> {
        let body = {
            grant_type: "password",
            username: opts.username,
            extension: opts.extension,
            password: opts.password,
            access_token_ttl: opts.accessTokenTtl,
            refresh_token_ttl: opts.refreshTokenTtl,
            scope: opts.scope && opts.scope.join(",")
        };
        return fetch(this.server + TOKEN_URL, {
            body: querystring.stringify(body),
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic " + this.basicAuth()
            }
        }).then(res => res.json()).then(json => {
            this.token = new Token(json);
        });
    }

    logout(): Promise<void> {
        return fetch(this.server + REVOKE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic " + this.basicAuth()
            },
            body: querystring.stringify({ token: this.token.accessToken })
        }).then(() => {
            this.token = null;
        });
    }

    refreshToken(): Promise<void> {
        let body = {
            refresh_token: this.token.refreshToken,
            grant_type: "refresh_token",
            endpoint_id: this.token.endpointId
        };
        return fetch(this.server + TOKEN_URL, {
            method: "POST",
            body: querystring.stringify(body),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic " + this.basicAuth()
            }
        }).then(res => res.json()).then(json => {
            this.token = new Token(json);
        });
    }
}

class Token {
    constructor(data) {
        this.accessToken = data["access_token"];
        this.type = data["token_type"];
        this.expiresIn = data["expires_in"];
        this.refreshToken = data["refresh_token"];
        this.refreshTokenExpiresIn = data["refresh_token_expires_in"];
        this.scope = data["scope"].split(" ");
        this.ownerId = data["owner_id"];
        this.endpointId = data["endpoint_id"];
    }

    accessToken: string;
    type: string;
    expiresIn: number;  // The miliseconds of the date
    refreshToken: string;
    refreshTokenExpiresIn: number;
    scope: string[];    // Permissions
    ownerId: string;
    endpointId: string;
}