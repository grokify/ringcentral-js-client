import * as fetch from "isomorphic-fetch";

const authDataUrl = "http://localhost/data/rc-auth.json";

export default fetch(authDataUrl).then(res => res.json());