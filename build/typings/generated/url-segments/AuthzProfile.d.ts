import UrlSection from "../../UrlSection";
import Check from "./Check";
import { UserPermission } from "../UserPermission";
export default class AuthzProfile extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
     *
     */
    check(id?: string): Check;
    /**
        Get User Permissions
    */
    get(): Promise<GetResponse>;
}
export interface GetResponse {
    /**
     * Canonical URI of an authorization profile resource
     */
    uri?: string;
    /**
     * List of user permissions granted
     */
    permissions?: UserPermission[];
}
