import UrlSection from "../../UrlSection";
import { DeviceInfo } from "../DeviceInfo";
export default class Order extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
        Create New Order
    */
    post(body: PostBody): Promise<PostResponse>;
    /**
        Get Order by ID
    */
    get(): Promise<GetResponse>;
}
export interface PostBody {
    /**
     * List of devices to order
     */
    devices?: DeviceInfo[];
}
export interface PostResponse {
    /**
     * List of the ordered devices
     */
    devices?: DeviceInfo[];
}
export interface GetResponse {
    /**
     * Identifier of a device
     */
    id?: string;
    /**
     * Canonical URI of an order resource
     */
    uri?: string;
    /**
     * List of the ordered devices
     */
    devices?: DeviceInfo[];
}
