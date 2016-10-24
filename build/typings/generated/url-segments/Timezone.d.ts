import UrlSection from "../../UrlSection";
import { TimezoneInfo } from "../TimezoneInfo";
import PagingResult from "../../PagingResult";
export default class Timezone extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
        Get Time Zone List
    */
    list(query?: ListQuery): Promise<PagingResult<TimezoneInfo>>;
    /**
        Get Time Zone by ID
    */
    get(): Promise<TimezoneInfo>;
}
export interface ListQuery {
    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
     */
    page?: string;
    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default
     */
    perPage?: string;
}
