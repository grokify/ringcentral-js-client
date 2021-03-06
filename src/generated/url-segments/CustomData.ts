// This is Generated Source.
import UrlSection from "../../UrlSection";
import {AttachmentInfo} from "../AttachmentInfo";

export default class CustomData extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("custom-data", id , prv, service);
    }

    /**
        Update Custom Data by Key
    */
    put(body: PutBody): Promise<PutResponse> {
        return this.getService().send({method: "put", url: this.getEndpoint(), query: null, body: body }).then(function (res) {
            return res.json();
        });
    }
}

export interface PutBody {

    /**
     * Custom data access key. Optional. If specified, must match the custom key in the URL
     */
    id?: string;

    /**
     * Description of custom data. Mandatory for create, if there is no attachment specified. Maximum length is limited to 256 symbols
     */
    value?: string;
}

export interface PutResponse {

    /**
     * Custom data access key
     */
    id?: string;

    /**
     * Link to the custom data
     */
    uri?: string;

    /**
     * Description of custom data
     */
    value?: string;

    /**
     * Time of the last change in custom data
     */
    lastModifiedTime?: string;

    /**
     * Attachment data: link and type
     */
    attachment?: AttachmentInfo;
}
