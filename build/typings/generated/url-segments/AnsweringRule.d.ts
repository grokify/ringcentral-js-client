import UrlSection from "../../UrlSection";
import { AnsweringRuleInfo } from "../AnsweringRuleInfo";
import { CallersInfo } from "../CallersInfo";
import { CalledNumberInfo } from "../CalledNumberInfo";
import { AnsweringRuleScheduleInfo } from "../AnsweringRuleScheduleInfo";
import { ForwardingInfo } from "../ForwardingInfo";
import { UnconditionalForwardingInfo } from "../UnconditionalForwardingInfo";
import { VoicemailInfo } from "../VoicemailInfo";
import PagingResult from "../../PagingResult";
import { GreetingInfo } from "../GreetingInfo";
export default class AnsweringRule extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
        Create Custom Answering Rule
    */
    post(body: PostBody): Promise<AnsweringRuleInfo>;
    /**
        Get Answering Rules List
    */
    list(): Promise<PagingResult<AnsweringRuleInfo>>;
    /**
        Delete Answering Rule by ID
    */
    delete(): Promise<void>;
    /**
        Get Custom Answering Rule by ID
    */
    get(): Promise<AnsweringRuleInfo>;
    /**
        Update Answering Rule by ID
    */
    put(body: PutBody): Promise<AnsweringRuleInfo>;
}
export interface PostBody {
    /**
     * Specifies if the rule is active or inactive. The default value is 'True'
     */
    enabled?: boolean;
    /**
     * Type of an answering rule, the supported value is 'Custom'
     */
    type?: string;
    /**
     * Name of an answering rule specified by user. Max number of symbols is 30
     */
    name?: string;
    /**
     * Answering rule will be applied when calls are received from the specified caller(s)
     */
    callers?: CallersInfo[];
    /**
     * Answering rule will be applied when calling the specified number(s)
     */
    calledNumbers?: CalledNumberInfo[];
    /**
     * Schedule when an answering rule should be applied
     */
    schedule?: AnsweringRuleScheduleInfo;
    /**
     * Specifies how incoming calls should be forwarded. The default value is 'ForwardCalls'
     */
    callHandlingAction?: "ForwardCalls" | "UnconditionalForwarding";
    /**
     * Forwarding parameters. If the 'callHandlingAction' parameter value is set to 'ForwardCalls' - should be specified . The settings determine the forwarding numbers to which the call should be forwarded. If not specified in request, then the business-hours forwarding rules are set by default
     */
    forwarding?: ForwardingInfo;
    /**
     * Unconditional forwarding parameters. If the 'callHandlingAction' parameter value is set to 'UnconditionalForwarding' - should be specified
     */
    unconditionalForwarding?: UnconditionalForwardingInfo;
    /**
     * Specifies whether to take a voicemail and who should do it
     */
    voiceMail?: VoicemailInfo;
}
export interface PutBody {
    /**
     * Specifies if the answering rule is active or not
     */
    enabled?: boolean;
    /**
     * Custom name of an answering rule. The maximum number of characters is 64
     */
    name?: string;
    /**
     * Forwarding parameters. Returned if 'ForwardCalls' is specified in 'callHandlingAction'. These settings determine the forwarding numbers to which the call will be forwarded
     */
    forwarding?: ForwardingInfo;
    /**
     * Predefined greetings applied for an answering rule
     */
    greetings?: GreetingInfo[];
}
