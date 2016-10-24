import UrlSection from "../../UrlSection";
import { PersonalContactInfo } from "../PersonalContactInfo";
import PagingResult from "../../PagingResult";
export default class Contact extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
        Create New Contact
    */
    post(body: PersonalContactInfo): Promise<PersonalContactInfo>;
    /**
        Get Contact List
    */
    list(query?: ListQuery): Promise<PagingResult<PersonalContactInfo>>;
    /**
        Delete Contact by ID
    */
    delete(): Promise<void>;
    /**
        Get Contact by ID
    */
    get(): Promise<PersonalContactInfo>;
    /**
        Update Contact by ID
    */
    put(body: PersonalContactInfo): Promise<PersonalContactInfo>;
}
export interface ListQuery {
    /**
     * Phone number in E.164 (11-digits) format with or without plus '+'. Multiple values are supported
     */
    phoneNumber?: string;
    /**
     * If specified, only contacts whose First name or Last name start with the mentioned substring are returned. Case-insensitive
     */
    startsWith?: string;
    /**
     * Sorts results by the specified property. The default is 'First Name'
     */
    sortBy?: "FirstName" | "LastName" | "Company";
    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
     */
    page?: number;
    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default
     */
    perPage?: number;
}
