import UrlSection from "../../UrlSection";
import { RingOutInfo } from "../RingOutInfo";
import { RingOutRequestFrom } from "../RingOutRequestFrom";
import { RingOutRequestTo } from "../RingOutRequestTo";
import { RingOutRequestCountryInfo } from "../RingOutRequestCountryInfo";
export default class Ringout extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
        Initiate RingOut Call
    */
    post(body: PostBody): Promise<RingOutInfo>;
    /**
        Cancel RingOut Call
    */
    delete(): Promise<void>;
    /**
        Get RingOut Call Status
    */
    get(): Promise<RingOutInfo>;
}
export interface PostBody {
    /**
     * Phone number of the caller. This number corresponds to the 1st leg of the RingOut call. This number can be one of user's configured forwarding numbers or arbitrary number
     */
    from?: RingOutRequestFrom;
    /**
     * Phone number of the called party. This number corresponds to the 2nd leg of the RingOut call
     */
    to?: RingOutRequestTo;
    /**
     * The number which will be displayed to the called party
     */
    callerId?: RingOutRequestTo;
    /**
     * The audio prompt that the calling party hears when the call is connected
     */
    playPrompt?: boolean;
    /**
     * Optional. Dialing plan country data. If not specified, then extension home country is applied by default
     */
    country?: RingOutRequestCountryInfo;
}
