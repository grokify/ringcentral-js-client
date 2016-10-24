import UrlSection from "../../UrlSection";
import { SubscriptionInfo } from "../SubscriptionInfo";
import { SubscriptionRequestDeliveryMode } from "../SubscriptionRequestDeliveryMode";
export default class Subscription extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
        Create New Subscription
    */
    post(body: PostBody): Promise<SubscriptionInfo>;
    /**
        Cancel Subscription by ID
    */
    delete(): Promise<void>;
    /**
        Get Subscription by ID
    */
    get(): Promise<SubscriptionInfo>;
    /**
        Update/Renew Subscription by ID
    */
    put(body: PutBody): Promise<SubscriptionInfo>;
}
export interface PostBody {
    /**
     * Mandatory. Collection of URIs to API resources (see Event Types for details). For APNS transport type only message event filter is available
     */
    eventFilters?: string[];
    /**
     * Notification delivery settings
     */
    deliveryMode?: SubscriptionRequestDeliveryMode;
}
export interface PutBody {
    /**
     * Collection of URIs to API resources (see Event Types). Mandatory field
     */
    eventFilters?: string[];
}
