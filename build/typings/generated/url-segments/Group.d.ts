import UrlSection from "../../UrlSection";
import { GroupInfo } from "../GroupInfo";
import PagingResult from "../../PagingResult";
export default class Group extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
        Get Contact Group List
    */
    list(): Promise<PagingResult<GroupInfo>>;
    /**
        Get Contact Group by ID
    */
    get(): Promise<GroupInfo>;
}
