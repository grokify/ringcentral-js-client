import UrlSection from "../../UrlSection";
import { ReservePhoneNumberRequestReserveRecord } from "../ReservePhoneNumberRequestReserveRecord";
import { ReservePhoneNumberResponseReserveRecord } from "../ReservePhoneNumberResponseReserveRecord";
export default class Reserve extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
        Reserve Phone Number
    */
    post(body: PostBody): Promise<PostResponse>;
}
export interface PostBody {
    /**
     * Phone numbers to be reserved/un-reserved
     */
    records?: ReservePhoneNumberRequestReserveRecord[];
}
export interface PostResponse {
    /**
     * Phone numbers to be reserved/un-reserved
     */
    records?: ReservePhoneNumberResponseReserveRecord[];
}
