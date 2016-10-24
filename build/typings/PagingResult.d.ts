import { NavigationInfo } from "./generated/NavigationInfo";
import { PagingInfo } from "./generated/PagingInfo";
/**
 * PagingResult
 */
export default class PagingResult<T> {
    /**
     * List of real results
     */
    records: T[];
    navigation: NavigationInfo;
    paging: PagingInfo;
    constructor(data: {
        [n: string]: any;
    });
}
