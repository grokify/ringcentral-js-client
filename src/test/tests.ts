import testConfig from "./config";
import Client from "../Client";
import { expect } from "chai";
import { createReadStream } from "fs";
import "../service-test";

let config: any;
let client: Client;

let aYearAgo = new Date();
aYearAgo.setFullYear(aYearAgo.getFullYear() - 1);

before(function () {
    // runs before all tests in this block
    return testConfig.then(conf => {
        config = conf;
        client = new Client(config.app);
    });
});

beforeEach(() => client.login(config.user));

describe("Account", function () {

    it("Get Account info", function () {
        return client.account().get().then(account => {
            expect(account).to.contain.keys(["id", "uri", "mainNumber", "operator", "serviceInfo", "setupWizardState", "status"]);
        });
    });

    it("Get Account info with id not exists should return 404", function () {
        return client.account("accountIdNotExist").get().catch(function (e) {
            expect(e.errorCode).to.equal("InvalidParameter");
        });
    });
});

describe("Extension", function () {
    let extensionProps = ["uri", "id", "extensionNumber", "contact", "name", "type", "status", "permissions", "profileImage"];

    it("get current extension", () => {
        return client.account().extension().get().then(ext => {
            expect(ext).to.contain.keys(extensionProps);
        });
    });

    it("Get extension list", function () {
        return client.account().extension().list().then(exts => {
            shouldBePagingResult(exts);
            expect(exts.records[0]).to.has.keys(extensionProps);
        });
    });

    it("Union type parameters, update extension info", function () {
        return client.account().extension().put({ status: "Enabled" }).then(ext => {
            expect(ext).to.contain.keys(extensionProps);
        });
    });
});

describe("Binary response", function () {
    it("Get message content as binary", function () {
        let ext = client.account().extension();
        return ext.messageStore().list({ dateFrom: aYearAgo.toISOString() }).then(function (msgs) {
            if (msgs.records.length <= 0) {
                throw new Error("No messages found for this extension.");
            }
            return msgs.records[0];
        }).then(function (msg) {
            return ext.messageStore(msg.id).content(msg.attachments[0].id).get().then(atch => {
                // expect(atch.headers.get("content-type")).to.has.string("text/plain");
            });
        });
    });

    it("Get recording content", function () {
        let ext = client.account().extension();
        return ext.callLog().list({ withRecording: true, dateFrom: aYearAgo.toISOString() }).then(function (callLogs) {
            if (callLogs.records.length <= 0) {
                throw new Error("No recordings found.");
            }
            return callLogs.records[0].recording;
        }).then(function (recording) {
            return client.account().recording(recording.id + "").content().get().then(content => {
                expect(content.headers.get("content-type")).to.has.string("audio/mpeg");
            });
        });
    });

});

let imgPath = __dirname + "/res/banner_index_logged.png";
describe("Binary request", function () {
    if (!createReadStream) {
        return;
    }
    it("Put profile image, input binary, response is empty.", function () {
        return client.account().extension().profileImage().put(createReadStream(imgPath));
    });

    it("Post profile image, input binary, response is empty.", function () {
        return client.account().extension().profileImage().post(createReadStream(imgPath));
    });
});

describe("Fax", function () {
    it("send fax, post form data", function () {
        let attachments;
        if (createReadStream) {
            attachments = ["Text attentment for test. Followed by a png picture.", createReadStream(imgPath)];
        } else {
            attachments = ["Test fax test sent from browser, " + navigator.userAgent];
        }
        return client.account().extension().fax().post({ to: [{ phoneNumber: "+16507411615" }] }, attachments);
    });

    it("send fax fail, empty parameter", () => {
        return client.account().extension().fax().post({}, []).then(msg => {
            throw new Error("should not send.");
        }, e => {
            expect(e.errorCode).to.eq("InvalidParameter");
        });
    });
});

describe("Call Log", () => {
    it("Get call log", () => {
        return client.account().extension().callLog().list({ perPage: 2, dateFrom: aYearAgo.toISOString() }).then(callLogs => {
            shouldBePagingResult(callLogs);
            expect(callLogs.records[0]).to.has.keys(["uri", "id", "sessionId", "startTime", "duration", "type", "direction", "action", "result", "to", "from"]);
        });
    });

    it("delete today's call log", () => {
        return client.account().extension().callLog().delete();
    });
});

describe("post", () => {
    it("send sms, post plain object", () => {
        return client.account().extension().sms().post({ to: [{ phoneNumber: "+16507411615" }], from: { phoneNumber: config.user.username }, text: "test sms text content." }).then(sms => {
            expect(sms).to.has.keys(["uri", "id", "to", "from", "type", "creationTime", "readStatus", "priority", "attachments", "direction", "availability", "subject", "messageStatus", "smsSendingAttemptsCount", "conversationId", "conversation", "lastModifiedTime"]);
        });
    });

    it("send sms, without from", () => {
        return client.account().extension().sms().post({ to: [{ phoneNumber: "+16507411615" }], text: "test sms text content." }).then(sms => {
            throw new Error("should fail");
        }).catch(e => {
            expect(e.errorCode).to.eq("InvalidParameter");
        });
    });
});

function shouldBePagingResult(list) {
    expect(list).to.has.keys(["navigation", "paging", "records"]);
}