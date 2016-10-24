import UrlSection from "../../UrlSection";
import Authorize from "./Authorize";
import Revoke from "./Revoke";
import Token from "./Token";
export default class Oauth extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
     *
     */
    authorize(id?: string): Authorize;
    /**
     *
     */
    revoke(id?: string): Revoke;
    /**
     *
     */
    token(id?: string): Token;
}
