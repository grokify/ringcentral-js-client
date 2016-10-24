import UrlSection from "../../UrlSection";
import { BusinessAddressInfo } from "../BusinessAddressInfo";
export default class BusinessAddress extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
        Get Company Business Address
    */
    get(): Promise<GetResponse>;
    /**
        Update Company Business Address
    */
    put(body: PutBody): Promise<PutResponse>;
}
export interface GetResponse {
    /**
     * Canonical URI of the business address resource
     */
    uri?: string;
    /**
     * Company business name
     */
    company?: string;
    /**
     * Company business email address
     */
    email?: string;
    /**
     * Company business address
     */
    businessAddress?: BusinessAddressInfo;
}
export interface PutBody {
    /**
     * Company business name
     */
    company?: string;
    /**
     * Company business email address
     */
    email?: string;
    /**
     * Company business address
     */
    businessAddress?: BusinessAddressInfo;
}
export interface PutResponse {
    /**
     * Canonical URI of the business address resource
     */
    uri?: string;
    /**
     * Company business name
     */
    company?: string;
    /**
     * Company business email address
     */
    email?: string;
    /**
     * Company business address
     */
    businessAddress?: BusinessAddressInfo;
}
