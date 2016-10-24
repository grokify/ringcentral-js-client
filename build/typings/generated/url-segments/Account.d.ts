import UrlSection from "../../UrlSection";
import ActiveCalls from "./ActiveCalls";
import BusinessAddress from "./BusinessAddress";
import CallLog from "./CallLog";
import Department from "./Department";
import Device from "./Device";
import DialingPlan from "./DialingPlan";
import Extension from "./Extension";
import Order from "./Order";
import PhoneNumber from "./PhoneNumber";
import Recording from "./Recording";
import ServiceInfo from "./ServiceInfo";
import { AccountInfo } from "../AccountInfo";
export default class Account extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
     *
     */
    activeCalls(id?: string): ActiveCalls;
    /**
     *
     */
    businessAddress(id?: string): BusinessAddress;
    /**
     * Internal identifier of a call log record
     */
    callLog(id?: string): CallLog;
    /**
     * Internal identifier of a Department extension (same as extensionId but only the ID of a department extension is valid)
     */
    department(id?: string): Department;
    /**
     * Internal identifier of a device
     */
    device(id?: string): Device;
    /**
     *
     */
    dialingPlan(id?: string): DialingPlan;
    /**
     * Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session
     */
    extension(id?: string): Extension;
    /**
     * Internal identifier of an order
     */
    order(id?: string): Order;
    /**
     * Internal identifier of a phone number
     */
    phoneNumber(id?: string): PhoneNumber;
    /**
     * Internal identifier of recording (returned in Call Log)
     */
    recording(id?: string): Recording;
    /**
     *
     */
    serviceInfo(id?: string): ServiceInfo;
    /**
        Get Account Info by ID
    */
    get(): Promise<AccountInfo>;
}
