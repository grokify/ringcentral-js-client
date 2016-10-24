import UrlSection from "../../UrlSection";
import Binary from "../../Binary";
export default class ProfileImage extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
        Get Profile Image
    */
    get(): Promise<Response>;
    /**
        Update Profile Image
    */
    put(imageData: Binary, contentType?: string): Promise<void>;
    /**
        Update Profile Image (same as PUT)
    */
    post(imageData: Binary, contentType?: string): Promise<void>;
}
