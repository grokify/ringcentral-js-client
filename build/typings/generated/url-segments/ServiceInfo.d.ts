import UrlSection from "../../UrlSection";
import { MeetingServiceInfo } from "../MeetingServiceInfo";
export default class ServiceInfo extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
        Get Meeting Service Info
    */
    get(): Promise<MeetingServiceInfo>;
}
