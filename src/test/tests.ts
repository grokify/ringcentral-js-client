import * as fetch from "isomorphic-fetch";
import testConfig from "./config";
import Client from "../Client";
import {expect} from "chai";
import * as fs from "fs";
import "../service-test";

let config: any;
let client: Client;

before(function () {
    // runs before all tests in this block
    return fetch(testConfig.authDataUrl).then(res => res.json()).then(conf => {
        config = conf;
        client = new Client(config.app);
        return client.login(config.user);
    });
});

describe("Account", function () {
    it("Get Account info", function () {
        return client.account().get();
    });

    it("Get Account info with id not exists should return 404", function () {
        return client.account("accountIdNotExist").get().catch(function (e) {
            expect(e.apiResponse.response().status).to.equal(404);
        });
    });
});

describe("Extension", function () {
    it("Get extension list", function () {
        return client.account().extension().list();
    });

    it("Union type parameters, update extension info", function () {
        return client.account().extension().put({ status: "Enabled" });
    });
});

describe("Binary response", function () {
    let aYearAgo = new Date();
    aYearAgo.setFullYear(aYearAgo.getFullYear() - 1);
    it("Get message content as binary", function () {
        let ext = client.account().extension();
        return ext.messageStore().list({ dateFrom: aYearAgo.toISOString() }).then(function (msgs) {
            if (msgs.records.length <= 0) {
                throw new Error("No messages found for this extension.");
            }
            return msgs.records[0];
        }).then(function (msg) {
            return ext.messageStore(msg.id).content(msg.attachments[0].id).get();
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
            return client.account().recording(recording.id + "").content().get();
        });
    });

});

let imgPath = __dirname + "/res/banner_index_logged.png";
describe("Binary request", function () {
    if (!fs.createReadStream) {
        return;
    }
    it("Put profile image, input binary, response is empty.", function () {
        return client.account().extension().profileImage().put(fs.createReadStream(imgPath));
    });

    it("Post profile image, input binary, response is empty.", function () {
        return client.account().extension().profileImage().post(fs.createReadStream(imgPath));
    });
});

describe("Fax", function () {
    it("send fax, post form data", function () {
        let attachments;
        if (fs.createReadStream) {
            attachments = ["Text attentment for test. Followed by a png picture.", fs.createReadStream(imgPath)];
        } else {
            attachments = ["Test fax test sent from browser, " + navigator.userAgent];
        }
        return client.account().extension().fax().post({ to: [{ phoneNumber: "+16507411615" }] }, attachments);
    });

    it("send fax fail, empty parameter", () => {
        return client.account().extension().fax().post({}, []).then(msg => {
            throw new Error("should not send.");
        }, e => {
            if (e.errorCode != "InvalidParameter") {
                throw new Error("Wrong errorCode.");
            }
        });
    });
});

describe("Call Log", () => {
    it("Get call log", () => {
        return client.account().extension().callLog().list({ perPage: 2 });
    });
});