import UrlSection from "../../UrlSection";
import ServiceInfo from "./ServiceInfo";
import End from "./End";
import { MeetingInfo } from "../MeetingInfo";
import { MeetingScheduleInfo } from "../MeetingScheduleInfo";
import PagingResult from "../../PagingResult";
export default class Meeting extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
     *
     */
    serviceInfo(id?: string): ServiceInfo;
    /**
     *
     */
    end(id?: string): End;
    /**
        Create Meeting
    */
    post(body: PostBody): Promise<MeetingInfo>;
    /**
        Get Meetings List
    */
    list(): Promise<PagingResult<MeetingInfo>>;
    /**
        Delete Meeting
    */
    delete(): Promise<void>;
    /**
        Get Meeting
    */
    get(): Promise<MeetingInfo>;
    /**
        Update Meeting
    */
    put(body: PutBody): Promise<MeetingInfo>;
}
export interface PostBody {
    /**
     * Topic of a meeting
     */
    topic?: string;
    /**
     * Type of a meeting. 'Instant' - meeting that is instantly started as soon as the host creates it; 'Scheduled' - common scheduled meeting; 'Recurring' - a recurring meeting. If the specified meeting type is 'Scheduled' then schedule property is mandatory for request
     */
    meetingType?: "Scheduled" | "Instant" | "Recurring";
    /**
     * Password required to join a meeting. Max number of characters is 10
     */
    password?: string;
    /**
     * Schedule of a meeting
     */
    schedule?: MeetingScheduleInfo;
    /**
     * If 'True' then the meeting can be joined and started by any participant (not host only). Supported for the meetings of 'Scheduled' and 'Recurring' type.
     */
    allowJoinBeforeHost?: boolean;
    /**
     * Enables starting video when host joins the meeting
     */
    startHostVideo?: boolean;
    /**
     * Enables starting video when participants join the meeting
     */
    startParticipantsVideo?: boolean;
    /**
     * Meeting audio options. Possible values are 'Phone', 'ComputerAudio'
     */
    audioOptions?: string[];
}
export interface PutBody {
    /**
     * Topic of a meeting
     */
    topic?: string;
    /**
     * Type of a meeting. 'Instant' - meeting that is instantly started as soon as the host creates it; 'Scheduled' - common scheduled meeting; 'Recurring' - a recurring meeting. If the specified meeting type is 'Scheduled' then schedule property is mandatory for request
     */
    meetingType?: "Scheduled" | "Instant" | "Recurring";
    /**
     * Password required to join a meeting. Max number of characters is 10
     */
    password?: string;
    /**
     * Schedule of a meeting
     */
    schedule?: MeetingScheduleInfo;
    /**
     * If 'True' then the meeting can be joined and started by any participant (not host only). Supported for the meetings of 'Scheduled' and 'Recurring' type.
     */
    allowJoinBeforeHost?: boolean;
    /**
     * Enables starting video when host joins the meeting
     */
    startHostVideo?: boolean;
    /**
     * Enables starting video when participants join the meeting
     */
    startParticipantsVideo?: boolean;
    /**
     * Meeting audio options. Possible values are 'Phone', 'ComputerAudio'
     */
    audioOptions?: string[];
}
