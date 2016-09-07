# RingCentral Client

[![Build Status](https://travis-ci.org/zengfenfei/ringcentral-js-client.svg?branch=master)](https://travis-ci.org/zengfenfei/ringcentral-js-client)

This is a library implemented in typescript which provides convenient apis for typescript and javascript developers to access RingCentral webservice(https://developer.ringcentral.com/api-docs/latest/index.html).

## Getting started

### Install

```shell
npm install https://github.com/zengfenfei/ringcentral-js-client#releases --save # This version is for test only which will change soon.
```

### Prerequisites
To perform subsequent operations, you need a ringcentral developer account(apply at https://developer.ringcentral.com/) and a ringcentral account. 

### Used in Typescript or ES6
```typescript
import RingCentralClient, {SERVER_SANDBOX} from "ringcentral-client";

let client = new RingCentralClient({
	server: SERVER_SANDBOX, // Optional, default is production server
	appKey: "{yourAppKey}",
	appSecret: "{yourAppSecret}"
});

// Log into RingCentral
client.login({
	"username": "{username}",
	"extension": "{extension}",
	"password": "{password}"
}).then(() => {
	console.log("Login success");
	return client.account().get(); // Call RingCentral REST API
}).then((accountInfo) => {
	console.log("Current account info", accountInfo);
	return client.logout();	// Logout
}).then(() => {
	console.log("logout success");
}).catch(e => {
	console.error("Error occured", e);
});
```

### Used in commonjs(node.js, webpack and browserify)
```javascript
var ringcentral = require("ringcentral-client");
var RingCentralClient = ringcentral.Client;

let client = new RingCentralClient({
	server: ringcentral.SERVER_SANDBOX, // Optional, default is production server
	appKey: "{yourAppKey}",
	appSecret: "{yourAppSecret}"
});

// Log into RingCentral
client.login({
	"username": "{username}",
	"extension": "{extension}",
	"password": "{password}"
}).then(() => {
	console.log("Login success");
	return client.account().get(); // Call RingCentral REST API
}).then((accountInfo) => {
	console.log("Current account info", accountInfo);
	return client.logout();	// Logout
}).then(() => {
	console.log("logout success");
}).catch(e => {
	console.error("Error occured", e);
});
```

### Used in browser as a bundled javascript library 

All APIs are exposed on the global variable `ringcentral`.
```html
<!DOCTYPE html>
<html>

<head>
	<title>Using RingCentralClient in browser as bundle.</title>
</head>

<body>
	<!-- Include the bundled version of RingCentralClient -->
	<script type="text/javascript" src="node_modules/ringcentral-client/build/ringcentral-client.js"></script>
	<script type="text/javascript">
console.log("All api", ringcentral);

let client = new ringcentral.Client({
	server: ringcentral.SERVER_SANDBOX, // Optional, default is production server
	appKey: "{yourAppKey}",
	appSecret: "{yourAppSecret}"
});

// Log into RingCentral
client.login({
	"username": "{username}",
	"extension": "{extension}",
	"password": "{password}"
}).then(() => {
	console.log("Login success");
	return client.account().get(); // Call RingCentral REST API
}).then((accountInfo) => {
	console.log("Current account info", accountInfo);
	return client.logout();	// Logout
}).then(() => {
	console.log("logout success");
}).catch(e => {
	console.error("Error occured", e);
});
</script>
</body>

</html>
```

## Examples

### Get extension info

```typescript
client.account().extension('theExtensionId').get().then(function (extInfo) {
    console.log("The extension info", extInfo);
}).catch(function (e) {
    console.error("Get extension error", e);
});
```

### List extensions of an account

```typescript
client.account("theAccountId").extension().list().then(function (extensions) {
    console.log("The list of extension info", extensions.records);
}).catch(function (e) {
    console.error("Get extension list error", e);
});
```

### Update extension info
```typescript
client.account().extension().put({ status: "Enabled" }).then(function () {
    console.log("Success to update extension.");
}).catch(function () {
    console.error("Fail to update extension.");
});
```

### Send sms
```typescript
client.account().extension().sms().post({ to: [{ phoneNumber: "911" }], text: "Sms content" }).then(function (messageInfo) {
    console.log("Sms sent successfully", messageInfo);
}).catch(function (e) {
    console.error("Fail to send sms", e);
});
```

## Token cache
Token will be cached in `localStorage` when used in browser. Login will use cached token if valid, perform api calls will try cached token if token in memory expires.