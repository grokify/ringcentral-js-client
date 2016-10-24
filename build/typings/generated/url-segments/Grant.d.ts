import UrlSection from "../../UrlSection";
import { GrantInfo } from "../GrantInfo";
import PagingResult from "../../PagingResult";
export default class Grant extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
        Get Extension Grants
    */
    list(query?: ListQuery): Promise<PagingResult<GrantInfo>>;
}
export interface ListQuery {
    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
     */
    page?: number;
    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default
     */
    perPage?: number;
}
