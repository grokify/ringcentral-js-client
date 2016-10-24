import UrlSection from "../../UrlSection";
import ActiveCalls from "./ActiveCalls";
import AddressBookSync from "./AddressBookSync";
import AddressBook from "./AddressBook";
import AnsweringRule from "./AnsweringRule";
import AuthzProfile from "./AuthzProfile";
import BlockedNumber from "./BlockedNumber";
import BusinessHours from "./BusinessHours";
import CallLog from "./CallLog";
import CallLogSync from "./CallLogSync";
import CompanyPager from "./CompanyPager";
import Conferencing from "./Conferencing";
import Device from "./Device";
import Fax from "./Fax";
import ForwardingNumber from "./ForwardingNumber";
import Grant from "./Grant";
import Greeting from "./Greeting";
import Meeting from "./Meeting";
import MessageStore from "./MessageStore";
import MessageSync from "./MessageSync";
import PhoneNumber from "./PhoneNumber";
import Presence from "./Presence";
import ProfileImage from "./ProfileImage";
import Ringout from "./Ringout";
import Sms from "./Sms";
import { ExtensionInfo } from "../ExtensionInfo";
import PagingResult from "../../PagingResult";
export default class Extension extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
     *
     */
    activeCalls(id?: string): ActiveCalls;
    /**
     *
     */
    addressBookSync(id?: string): AddressBookSync;
    /**
     *
     */
    addressBook(id?: string): AddressBook;
    /**
     * Internal identifier of an answering rule. The value can be standard digital ID or specific ID - either business-hours-rule or after-hours-rule
     */
    answeringRule(id?: string): AnsweringRule;
    /**
     *
     */
    authzProfile(id?: string): AuthzProfile;
    /**
     * Internal identifier of a blocked number list entry
     */
    blockedNumber(id?: string): BlockedNumber;
    /**
     *
     */
    businessHours(id?: string): BusinessHours;
    /**
     * Internal identifier of a call log record
     */
    callLog(id?: string): CallLog;
    /**
     *
     */
    callLogSync(id?: string): CallLogSync;
    /**
     *
     */
    companyPager(id?: string): CompanyPager;
    /**
     *
     */
    conferencing(id?: string): Conferencing;
    /**
     * Internal identifier of a device
     */
    device(id?: string): Device;
    /**
     *
     */
    fax(id?: string): Fax;
    /**
     *
     */
    forwardingNumber(id?: string): ForwardingNumber;
    /**
     *
     */
    grant(id?: string): Grant;
    /**
     * Internal identifier of a greeting
     */
    greeting(id?: string): Greeting;
    /**
     * Internal identifier of a meeting
     */
    meeting(id?: string): Meeting;
    /**
     * Internal identifier of a message
     */
    messageStore(id?: string): MessageStore;
    /**
     *
     */
    messageSync(id?: string): MessageSync;
    /**
     * Internal identifier of a phone number
     */
    phoneNumber(id?: string): PhoneNumber;
    /**
     *
     */
    presence(id?: string): Presence;
    /**
     * Dimensions of a profile image which will be returned in response.
     */
    profileImage(id?: string): ProfileImage;
    /**
     * Internal identifier of a RingOut call
     */
    ringout(id?: string): Ringout;
    /**
     *
     */
    sms(id?: string): Sms;
    /**
        Get Extension List
    */
    list(query?: ListQuery): Promise<PagingResult<ExtensionInfo>>;
    /**
        Get Extension Info by ID
    */
    get(): Promise<ExtensionInfo>;
    /**
        Update Extension by ID
    */
    put(body: PutBody): Promise<ExtensionInfo>;
}
export interface ListQuery {
    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
     */
    page?: number;
    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default.
     */
    perPage?: number;
    /**
     * Extension current state. Multiple values are supported. If 'Unassigned' is specified, then extensions without extensionNumber are returned. If not specified, then all extensions are returned
     */
    status?: "Enabled" | "Disabled" | "NotActivated" | "Unassigned";
    /**
     * Extension type. Multiple values are supported
     */
    type?: "User" | "FaxUser" | "VirtualUser" | "DigitalUser" | "Department" | "Announcement" | "Voicemail" | "SharedLinesGroup" | "PagingOnlyGroup" | "IvrMenu" | "ApplicationExtension" | "ParkLocation";
}
export interface PutBody {
}
