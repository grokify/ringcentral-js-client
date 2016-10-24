import UrlSection from "../../UrlSection";
export default class Revoke extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
        OAuth2 Revoke Token
    */
    post(body: PostBody): Promise<void>;
}
export interface PostBody {
    /**
     * Active access or refresh token to be revoked
     */
    token?: string;
}
