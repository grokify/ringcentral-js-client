import UrlSection from "../../UrlSection";
import Parse from "./Parse";
export default class NumberParser extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
     *
     */
    parse(id?: string): Parse;
}
