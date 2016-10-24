import UrlSection from "../../UrlSection";
import { PermissionDetailsInfo } from "../PermissionDetailsInfo";
export default class Check extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
        Check User Permissions
    */
    get(query?: GetQuery): Promise<GetResponse>;
}
export interface GetQuery {
    /**
     * Permission to check
     */
    permissionId?: string;
    /**
     * Optional. Internal identifier of an extension for which user permissions are to be checked. The default value is the currently logged-in extension
     */
    targetExtensionId?: string;
}
export interface GetResponse {
    /**
     * Canonical URI of a permission resource
     */
    uri?: string;
    /**
     * Specifies if check result is successful or not
     */
    successful?: boolean;
    /**
     * Information on a permission checked. Returned if successful is 'True'
     */
    details?: PermissionDetailsInfo;
    /**
     * List of active scopes for permission. Returned if successful is 'True'
     */
    scopes?: string[];
}
