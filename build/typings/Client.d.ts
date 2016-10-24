import Account from "./generated/url-segments/Account";
import ClientInfo from "./generated/url-segments/ClientInfo";
import NumberPool from "./generated/url-segments/NumberPool";
import * as Ringcentral from "ringcentral";
export default class Client {
    service: Ringcentral;
    constructor(opts: {
        server?: string;
        appKey: string;
        appSecret: string;
    } | Ringcentral);
    /**
     * FIXME: Allow additional options: brand_id, display, prompte?
     */
    loginUrl(opts: {
        redirectUri: string;
        state?: string;
    }): string;
    login(opts: {
        username?: string;
        password?: string;
        extension?: string;
        code?: string;
        redirectUri?: string;
        accessTokenTtl?: number;
        refreshTokenTtl?: number;
        scope?: string[];
    }): Promise<void>;
    getAuthCode(callbackUrl: string): string;
    logout(): Promise<void>;
    on(evtName: string, handler: Function): void;
    createSubscription(): any;
    /** Returns a promise that resovles if access token is valid or refresh token is valid, and refresh the token if needed. */
    ensureLoggedIn(): Promise<void>;
    account(id?: string): Account;
    clientInfo(): ClientInfo;
    numberPool(): NumberPool;
}
declare const SERVER_PRODUCTION: string;
declare const SERVER_SANDBOX: string;
declare const EVENT_LOGIN_START: string;
declare const EVENT_LOGIN_SUCCESS: string;
declare const EVENT_LOGIN_ERROR: string;
declare const EVENT_REFRESH_START: string;
declare const EVENT_REFRESH_SUCCESS: string;
declare const EVENT_REFRESH_ERROR: string;
declare const EVENT_LOGOUT_START: string;
declare const EVENT_LOGOUT_SUCCESS: string;
declare const EVENT_LOGOUT_ERROR: string;
export { Client, SERVER_PRODUCTION, SERVER_SANDBOX, EVENT_LOGIN_START, EVENT_LOGIN_SUCCESS, EVENT_LOGIN_ERROR, EVENT_REFRESH_START, EVENT_REFRESH_SUCCESS, EVENT_REFRESH_ERROR, EVENT_LOGOUT_START, EVENT_LOGOUT_SUCCESS, EVENT_LOGOUT_ERROR };
