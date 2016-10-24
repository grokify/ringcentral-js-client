import UrlSection from "../../UrlSection";
import { PhoneNumberInfo } from "../PhoneNumberInfo";
import PagingResult from "../../PagingResult";
export default class PhoneNumber extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
        Get Extension Phone Numbers
    */
    list(query?: ListQuery): Promise<PagingResult<PhoneNumberInfo>>;
    /**
        Get Phone Number by ID
    */
    get(): Promise<PhoneNumberInfo>;
}
export interface ListQuery {
    /**
     * Usage type of the phone number
     */
    usageType?: "MainCompanyNumber" | "AdditionalCompanyNumber" | "CompanyNumber" | "DirectNumber" | "CompanyFaxNumber" | "ForwardedNumber";
    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
     */
    page?: number;
    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default
     */
    perPage?: number;
}
