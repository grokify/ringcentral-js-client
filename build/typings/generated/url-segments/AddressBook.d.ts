import UrlSection from "../../UrlSection";
import Contact from "./Contact";
import Group from "./Group";
export default class AddressBook extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
     * Internal identifier of a contact record in the RingCentral database
     */
    contact(id?: string): Contact;
    /**
     * Internal identifier of a group in an address book
     */
    group(id?: string): Group;
}
