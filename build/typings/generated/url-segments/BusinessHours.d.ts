import UrlSection from "../../UrlSection";
import { BusinessHourScheduleInfo } from "../BusinessHourScheduleInfo";
export default class BusinessHours extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
        Get User Hours Setting
    */
    get(): Promise<GetResponse>;
}
export interface GetResponse {
    /**
     * Canonical URI of a business-hours resource
     */
    uri?: string;
    /**
     * Schedule when an answering rule is applied
     */
    schedule?: BusinessHourScheduleInfo;
}
