import Service, {SERVER_PRODUCTION, SERVER_SANDBOX, SERVER_VERSION} from "./Service";
import Account from "./generated/url-builders/Account";
import ClientInfo from "./generated/url-builders/ClientInfo";
import NumberPool from "./generated/url-builders/NumberPool";

export default class Client {
    service: Service;
    autoRefreshToken: boolean;  // Default is true

    constructor(opts: {
        server: string;
        appKey: string;
        appSecret: string;
        autoRefreshToken?: boolean;
    }) {
        this.service = new Service(opts);
        this.autoRefreshToken = opts.autoRefreshToken === false ? false : true;
    }

    login(opts: { username: string; password: string; extension?: string }): Promise<void> {
        return this.service.login(opts);
    }

    logout(): Promise<void> {
        return this.service.logout();
    }

    account(id?: string): Account {
        return new Account(null, id, this.service);
    }

    clientInfo(): ClientInfo {
        return new ClientInfo(null, null, this.service);
    }

    numberPool(): NumberPool {
        return new NumberPool(null, null, this.service);
    }
}

export {
Client, // For commonjs
SERVER_PRODUCTION,
SERVER_SANDBOX,
SERVER_VERSION
};