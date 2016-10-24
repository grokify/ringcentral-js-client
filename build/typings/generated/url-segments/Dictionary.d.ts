import UrlSection from "../../UrlSection";
import Country from "./Country";
import Language from "./Language";
import Location from "./Location";
import State from "./State";
import Timezone from "./Timezone";
export default class Dictionary extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?: any);
    /**
     * Internal identifier of a country
     */
    country(id?: string): Country;
    /**
     * Internal identifier of a language
     */
    language(id?: string): Language;
    /**
     *
     */
    location(id?: string): Location;
    /**
     * Internal identifier of a state
     */
    state(id?: string): State;
    /**
     * Internal identifier of a timezone
     */
    timezone(id?: string): Timezone;
}
