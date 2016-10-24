import UrlSection from "../../UrlSection";
import { DeviceInfo } from "../DeviceInfo";
import PagingResult from "../../PagingResult";
export default class Device extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
        Get Account Device List
    */
    list(): Promise<PagingResult<DeviceInfo>>;
    /**
        Get Device by ID
    */
    get(): Promise<DeviceInfo>;
}
