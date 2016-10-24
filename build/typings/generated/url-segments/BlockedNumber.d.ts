import UrlSection from "../../UrlSection";
import { BlockedNumberInfo } from "../BlockedNumberInfo";
import PagingResult from "../../PagingResult";
export default class BlockedNumber extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
        Add New Blocked Number
    */
    post(body: BlockedNumberInfo): Promise<BlockedNumberInfo>;
    /**
        Get Blocked Number List
    */
    list(): Promise<PagingResult<BlockedNumberInfo>>;
    /**
        Delete Blocked Number by ID
    */
    delete(): Promise<void>;
    /**
        Get Blocked Number by ID
    */
    get(): Promise<BlockedNumberInfo>;
    /**
        Update Blocked Number Label
    */
    put(body: BlockedNumberInfo): Promise<BlockedNumberInfo>;
}
