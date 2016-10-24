import UrlSection from "../../UrlSection";
import Lookup from "./Lookup";
import Reserve from "./Reserve";
export default class NumberPool extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
     *
     */
    lookup(id?: string): Lookup;
    /**
     *
     */
    reserve(id?: string): Reserve;
}
