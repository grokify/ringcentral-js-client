import * as fetch from "isomorphic-fetch";
import * as querystring from "querystring";

export const SERVER_PRODUCTION = "https://platform.ringcentral.com";
export const SERVER_SANDBOX = "https://platform.devtest.ringcentral.com";

const TOKEN_URL = "/restapi/oauth/token";

export default class RingCentralService {
    server: string;
    appKey: string;
    appSecret: string;

    token: Token;

    constructor(opts: {
        server: string;
        appKey: string;
        appSecret: string;
        autoRefreshToken?: boolean;
    }) {
        this.server = opts.server;
        this.appKey = opts.appKey;
        this.appSecret = opts.appSecret;
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
                "Authorization": "Basic " + new Buffer(this.appKey + ":" + this.appSecret).toString("base64")
            }
        }).then(res => res.json()).then(json => {
            this.token = new Token(json);
        });
    }

    logout() {

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