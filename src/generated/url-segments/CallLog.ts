// This is Generated Source.
import UrlSection from "../../UrlSection";
import {CallLogRecord} from "../CallLogRecord";
import PagingResult from "../../PagingResult";
import {CallLogInfo} from "../CallLogInfo";

export default class CallLog extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("call-log", id , prv, service);
    }

    /**
        Get Account Call Log
    */
    list(query?:ListQuery): Promise<PagingResult<CallLogRecord>> {
        return this.getService().send({method: "get", url: this.getEndpoint(), query: query, body: null }).then(function (res) {
            return res.json();
        });
    }

    /**
        Get Account Call Log Record by ID
    */
    get(): Promise<CallLogInfo> {
        return this.getService().send({method: "get", url: this.getEndpoint(), query: null, body: null }).then(function (res) {
            return res.json();
        });
    }

    /**
        Delete Extension Call Log
    */
    delete(query?:DeleteQuery): Promise<void> {
        return this.getService().send({method: "delete", url: this.getEndpoint(), query: query, body: null }).then(function (res) {
            return res.response();
        });
    }
}

export interface ListQuery {

    /**
     * Extension number of a user. If specified, returns call log for a particular extension only. Cannot be specified together with the phoneNumber filter
     */
    extensionNumber?: string;

    /**
     * Phone number of a caller/call recipient. If specified, returns all calls (both incoming and outcoming) with the mentioned phone number. Cannot be specified together with the extensionNumber filter
     */
    phoneNumber?: string;

    /**
     * The direction for the result records. It is allowed to specify more than one direction. If not specified, both inbound and outbound records are returned. Multiple values are accepted
     */
    direction?: "Inbound" | "Outbound";

    /**
     * Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are accepted
     */
    type?: "Voice" | "Fax";

    /**
     * The default value is 'Simple' for both account and extension call log
     */
    view?: "Simple" | "Detailed";

    /**
     * 'True' if only recorded calls have to be returned
     */
    withRecording?: boolean;

    /**
     * The start datetime for resulting records in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is dateTo minus 24 hours
     */
    dateFrom?: string;

    /**
     * The end datetime for resulting records in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is current time
     */
    dateTo?: string;

    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. The default value is '1'
     */
    page?: number;

    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default.
     */
    perPage?: number;
}

export interface DeleteQuery {

    /**
     * The end datetime for records deletion in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is current time
     */
    dateTo?: string;
}
