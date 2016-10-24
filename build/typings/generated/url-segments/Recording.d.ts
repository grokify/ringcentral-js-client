import UrlSection from "../../UrlSection";
import Content from "./Content";
export default class Recording extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
     * Internal identifier of a message attachment
     */
    content(id?: string): Content;
    /**
        Get Call Recording Metadata
    */
    get(): Promise<GetResponse>;
}
export interface GetResponse {
    /**
     * Internal identifier of the call recording
     */
    id?: number;
    /**
     * Link to the call recording binary content
     */
    contentUri?: string;
    /**
     * Call recording file format. Supported format is audio/x-wav
     */
    contentType?: string;
    /**
     * Recorded call duration
     */
    duration?: number;
}
