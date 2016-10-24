import UrlSection from "../../UrlSection";
import { PresenceInfo } from "../PresenceInfo";
export default class Presence extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
        Get Extension Presence
    */
    get(): Promise<PresenceInfo>;
}
