import * as fetch from "isomorphic-fetch";
import * as querystring from "querystring";

export const SERVER_PRODUCTION = "https://platform.ringcentral.com";
export const SERVER_SANDBOX = "https://platform.devtest.ringcentral.com";

const TOKEN_URL = "/restapi/oauth/token";
const REVOKE_URL = "/restapi/oauth/revoke";

export default class RingCentralService {
    server: string;
    clientBasicAuth: string; //Base64 of appKey:appSecret

    token: Token;

    constructor(opts: {
        server: string;
        appKey: string;
        appSecret: string;
        autoRefreshToken?: boolean;
    }) {
        this.server = opts.server;
        this.clientBasicAuth = new Buffer(opts.appKey + ":" + opts.appSecret).toString("base64");
    }

    login(opts: { username: string; password: string; extension?: string }): Promise<void> {
        let body = {
            grant_type: "password",
            username: opts.username,
            extension: opts.extension,
            password: opts.password
        };
        return fetch(this.server + TOKEN_URL, {
            body: querystring.stringify(body),
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic " + this.clientBasicAuth
            }
        }).then(res => res.json()).then(json => {
            this.token = new Token(json);
        });
    }

    logout(): Promise<void> {
        return fetch(this.server + REVOKE_URL, {
            method: "POST",
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
                "Authorization": "Basic " + this.clientBasicAuth
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