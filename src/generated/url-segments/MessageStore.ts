// This is Generated Source.
import UrlSection from "../../UrlSection";
import Content from "./Content";
import {MessageInfo} from "../MessageInfo";
import PagingResult from "../../PagingResult";

export default class MessageStore extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("message-store", id , prv, service);
    }

    /**
     * Internal identifier of a message attachment
     */
    content(id?: string) {
        return new Content(this, id);
    }

    /**
        Get Message List
    */
    list(query?:ListQuery): Promise<PagingResult<MessageInfo>> {
        return this.getService().send({method: "get", url: this.getEndpoint(), query: query, body: null }).then(function (res) {
            return res.json();
        });
    }

    /**
        Delete Message by ID
    */
    delete(query?:DeleteQuery): Promise<void> {
        return this.getService().send({method: "delete", url: this.getEndpoint(), query: query, body: null }).then(function (res) {
            return res.response();
        });
    }

    /**
        Get Message by ID
    */
    get(): Promise<MessageInfo> {
        return this.getService().send({method: "get", url: this.getEndpoint(), query: null, body: null }).then(function (res) {
            return res.json();
        });
    }

    /**
        Update Message by ID
    */
    put(body: PutBody): Promise<MessageInfo> {
        return this.getService().send({method: "put", url: this.getEndpoint(), query: null, body: body }).then(function (res) {
            return res.json();
        });
    }
}

export interface ListQuery {

    /**
     * Specifies the availability status for the resulting messages. Default value is 'Alive'. Multiple values are accepted
     */
    availability?: "Alive" | "Deleted" | "Purged";

    /**
     * Specifies the conversation identifier for the resulting messages
     */
    conversationId?: number;

    /**
     * The start datetime for resulting messages in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is dateTo minus 24 hours
     */
    dateFrom?: string;

    /**
     * The end datetime for resulting messages in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is current time
     */
    dateTo?: string;

    /**
     * The direction for the resulting messages. If not specified, both inbound and outbound messages are returned. Multiple values are accepted
     */
    direction?: "Inbound" | "Outbound";

    /**
     * If 'True', then the latest messages per every conversation ID are returned
     */
    distinctConversations?: boolean;

    /**
     * The type of the resulting messages. If not specified, all messages without message type filtering are returned. Multiple values are accepted
     */
    messageType?: "Fax" | "SMS" | "VoiceMail" | "Pager" | "Text";

    /**
     * The read status for the resulting messages. Multiple values are accepted
     */
    readStatus?: "Read" | "Unread";

    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
     */
    page?: number;

    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default
     */
    perPage?: number;

    /**
     * The phone number. If specified, messages are returned for this particular phone number only
     */
    phoneNumber?: string;
}

export interface DeleteQuery {

    /**
     * If the value is 'True', then the message is purged immediately with all the attachments. The default value is 'False'
     */
    purge?: boolean;

    /**
     * Internal identifier of a message thread
     */
    conversationId?: number;
}

export interface PutBody {

    /**
     * Read status of a message to be changed. Multiple values are accepted
     */
    readStatus?: "Read" | "Unread";
}
