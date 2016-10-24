import UrlSection from "../../UrlSection";
export default class End extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
        End Current Meeting
    */
    post(): Promise<void>;
}
