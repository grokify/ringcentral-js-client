import UrlSection from "../../UrlSection";
export default class Content extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
        Get Message Attachment
    */
    get(): Promise<Response>;
}
