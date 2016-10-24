import UrlSection from "../../UrlSection";
import { StateInfo } from "../StateInfo";
import PagingResult from "../../PagingResult";
export default class State extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
        Get State/Province List
    */
    list(query?: ListQuery): Promise<PagingResult<StateInfo>>;
    /**
        Get State/Province by ID
    */
    get(): Promise<StateInfo>;
}
export interface ListQuery {
    /**
     * Internal identifier of a country
     */
    countryId?: number;
    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'.
     */
    page?: number;
    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default
     */
    perPage?: number;
    /**
     * If 'True', the list of states with phone numbers available for buying is returned. The default value is 'False'
     */
    withPhoneNumbers?: boolean;
}
