// This is Generated Source.
import UrlSection from "../../UrlSection";
import {CallLogRecord} from "../CallLogRecord";
import PagingResult from "../../PagingResult";

export default class ActiveCalls extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("active-calls", id , prv, service);
    }

    /**
        Get Account Active (Recent) Calls
    */
    list(query?:ListQuery): Promise<PagingResult<CallLogRecord>> {
        return this.getService().send({method: "get", url: this.getEndpoint(), query: query, body: null }).then(function (res) {
            return res.json();
        });
    }
}

export interface ListQuery {

    /**
     * The direction for the result records. It is allowed to specify more than one direction. If not specified, both inbound and outbound records are returned. Multiple values are accepted
     */
    direction?: "Inbound" | "Outbound";

    /**
     * Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are accepted
     */
    type?: "Voice" | "Fax";

    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'.
     */
    page?: number;

    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default.
     */
    perPage?: number;
}
