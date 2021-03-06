// This is Generated Source.
import UrlSection from "../../UrlSection";

export default class Token extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("token", id , prv, service);
    }

    /**
        OAuth2 Get Token
    */
    post(body: PostBody): Promise<PostResponse> {
        return this.getService().send({method: "post", url: this.getEndpoint(), query: null, body: body }).then(function (res) {
            return res.json();
        });
    }
}

export interface PostBody {

    /**
     * Must hold password value for Resource Owner Credentials flow. If client application is not authorized by the specified grant_type, response does not contain refresh_token and refresh_token_ttl attributes
     */
    grant_type?: string;

    /**
     * Optional. Access token lifetime in seconds; the possible values are from 600 sec (10 min) to 3600 sec (1 hour). The default value is 3600 sec. If the value specified exceeds the default one, the default value is set. If the value specified is less than 600 seconds, the minimum value (600 sec) is set
     */
    access_token_ttl?: number;

    /**
     * Optional. Refresh token lifetime in seconds. The default value depends on the client application, but as usual it equals to 7 days. If the value specified exceeds the default one, the default value is applied. If client specifies refresh_token_ttl<=0, refresh token is not returned even if the corresponding grant type is supported
     */
    refresh_token_ttl?: number;

    /**
     * Phone number linked to account or extension in account in E.164 format with or without leading "+" sign
     */
    username?: string;

    /**
     * Optional. Extension short number. If company number is specified as a username, and extension is not specified, the server will attempt to authenticate client as main company administrator
     */
    extension?: string;

    /**
     * User's password
     */
    password?: string;

    /**
     * Optional. List of API permissions to be used with access token (see Application Permissions). Can be omitted when requesting all permissions defined during the application registration phase
     */
    scope?: string;

    /**
     * Optional. Unique identifier of a client application. You can pass it in request according to pattern [a-zA-Z0-9_\-]{1,64}. Otherwise it is auto-generated by server. The value will be returned in response in both cases
     */
    endpoint_id?: string;
}

export interface PostResponse {

    /**
     * Access token to pass to subsequent API requests
     */
    access_token?: string;

    /**
     * Issued access token TTL (time to live), in seconds
     */
    expires_in?: number;

    /**
     * Refresh token to get a new access token, when the issued one expires
     */
    refresh_token?: string;

    /**
     * Issued refresh token TTL (time to live), in seconds
     */
    refresh_token_expires_in?: number;

    /**
     * List of permissions allowed with this access token, white-space separated
     */
    scope?: string;

    /**
     * Type of token. Use this parameter in Authorization header of requests
     */
    token_type?: string;

    /**
     * Extension identifier
     */
    owner_id?: string;

    /**
     * Unique identifier of a client application passed by the client, or auto-generated by server if not specified in request
     */
    endpoint_id?: string;
}
