import UrlSection from "../../UrlSection";
import { CustomGreetingInfo } from "../CustomGreetingInfo";
import { CustomGreetingInfoAnsweringRuleInfo } from "../CustomGreetingInfoAnsweringRuleInfo";
export default class Greeting extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
        Create Custom Greeting
    */
    post(body: PostBody): Promise<CustomGreetingInfo>;
    /**
        Get Custom Greeting by ID
    */
    get(): Promise<CustomGreetingInfo>;
}
export interface PostBody {
    /**
     * Type of a greeting, specifying the case when the greeting is played. See also Greeting Types
     */
    type?: "Introductory" | "Announcement" | "ConnectingMessage" | "ConnectingAudio" | "Voicemail" | "Unavailable";
    /**
     * Information on an answering rule that the greeting is applied to
     */
    answeringRule?: CustomGreetingInfoAnsweringRuleInfo;
}
