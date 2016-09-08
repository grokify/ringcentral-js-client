export default class Token {
    /** timeSpent: Time in ms spent fetching token. */
    constructor(data, timeSpent?: number) {
        if (timeSpent == null) {    // From cached data
            for (let p in data) {
                this[p] = data[p];
            }
            return;
        }
        this.accessToken = data["access_token"];
        this.type = data["token_type"];
        this.expiresIn = Date.now() + data["expires_in"] * 1000 - timeSpent;
        this.refreshToken = data["refresh_token"];
        this.refreshTokenExpiresIn = Date.now() + data["refresh_token_expires_in"] * 1000 - timeSpent;
        this.scope = data["scope"].split(" ");
        this.ownerId = data["owner_id"];
        this.endpointId = data["endpoint_id"];
    }

    accessToken: string;
    type: string;
    expiresIn: number;  // Date time
    refreshToken: string;
    refreshTokenExpiresIn: number;  // Date time
    scope: string[];    // Permissions
    ownerId: string;
    endpointId: string;

    expired(): boolean {
        return Date.now() >= this.expiresIn;
    }

    refreshTokenExpired(): boolean {
        return Date.now() >= this.refreshTokenExpiresIn;
    }
}

interface TokenData {
    username: string;
    extension: string;
    token: Token;
}

interface TokenStore {
    save(data: TokenData): void;
    get(): TokenData;
    clear(): void;
}

interface TokenStoreConstructor {
    new (key: string): TokenStore;
}


class LocalStorageTokenStore implements TokenStore {
    key: string;
    constructor(key: string) {
        this.key = key;
    }
    save(data: TokenData) {
        localStorage[this.key] = JSON.stringify(data);
    }
    get(): TokenData {
        let data = localStorage[this.key];
        if (data) {
            let json: TokenData = JSON.parse(data);
            json.token = new Token(json.token);
            return json;
        }
    }
    clear() {
        localStorage[this.key] = "";
    }
}

let memStore = {};
class MemoryTokenStore implements TokenStore {
    key: string;
    constructor(key: string) {
        this.key = key;
    }
    save(data: TokenData) {
        memStore[this.key] = data;
    }
    get(): TokenData {
        return memStore[this.key];
    }
    clear() {
        memStore[this.key] = null;
    }
}

let DefaultTokenStore: TokenStoreConstructor = typeof localStorage != "undefined" ? LocalStorageTokenStore : MemoryTokenStore;

export {
TokenStore,
MemoryTokenStore,
DefaultTokenStore
};