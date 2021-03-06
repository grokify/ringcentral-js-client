// This is Generated Source.
import UrlSection from "../../UrlSection";
import {PersonalContactInfo} from "../PersonalContactInfo";
import {SyncInfo} from "../SyncInfo";

export default class AddressBookSync extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("address-book-sync", id , prv, service);
    }

    /**
        Contacts Synchronization
    */
    get(query?:GetQuery): Promise<GetResponse> {
        return this.getService().send({method: "get", url: this.getEndpoint(), query: query, body: null }).then(function (res) {
            return res.json();
        });
    }
}

export interface GetQuery {

    /**
     * Type of synchronization. The default value is 'FSync'
     */
    syncType?: "FSync" | "ISync";

    /**
     * Value of syncToken property of the last sync request response
     */
    syncToken?: string;

    /**
     * Number of records per page to be returned. The max number of records is 250, which is also the default. For FSync — if the number of records exceeds the parameter value (either specified or default), all of the pages can be retrieved in several requests. For ISync — if the number of records exceeds the page size, the number of incoming changes to this number is limited
     */
    perPage?: number;

    /**
     * Internal identifier of a page. It can be obtained from the 'nextPageId' parameter passed in response body
     */
    pageId?: number;
}

export interface GetResponse {

    /**
     * List of contacts with synchronization information
     */
    records?: PersonalContactInfo[];

    /**
     * Sync type, token and time
     */
    syncInfo?: SyncInfo;

    /**
     * Internal identifier of the next page, if any
     */
    nextPageId?: number;

    /**
     * URL of the next page, if any
     */
    nextPageUri?: string;
}
