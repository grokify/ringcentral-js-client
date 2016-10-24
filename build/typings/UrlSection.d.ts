/**
 * UrlParts
 */
export default class UrlSection {
    private name;
    private value;
    private previous;
    private _service;
    constructor(name: string, value?: string, prv?: UrlSection, service?: any);
    toString(withValue?: boolean): string;
    getEndpoint(withValue?: boolean): string;
    protected getService(): any;
}
