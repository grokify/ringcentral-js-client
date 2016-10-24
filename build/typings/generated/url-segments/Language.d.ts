import UrlSection from "../../UrlSection";
import { LanguageInfo } from "../LanguageInfo";
import PagingResult from "../../PagingResult";
export default class Language extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
        Get Supported Language List
    */
    list(): Promise<PagingResult<LanguageInfo>>;
    /**
        Get Language by ID
    */
    get(): Promise<LanguageInfo>;
}
