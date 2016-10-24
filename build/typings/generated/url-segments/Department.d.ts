import UrlSection from "../../UrlSection";
import Members from "./Members";
export default class Department extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
     *
     */
    members(id?: string): Members;
}
