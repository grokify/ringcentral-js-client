const webpack = require("webpack");

module.exports = [{
    entry: "./build/src/Client.js",
    output: {
        path: "./build",
        filename: "ringcentral-client.js",
        library: "ringcentral",
        libraryTarget: "umd"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ],
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
}, {
        entry: "./build/src/test/tests.js",
        output: {
            path: "./build",
            filename: "tests.js"
        },
        externals: {
            "../Client": "RingCentralClient",
            "node-fetch": "fetch"
        },
        node: {
            fs: "empty"
        },
        plugins: [new webpack.optimize.UglifyJsPlugin({})]
    }, {
        entry: "./build/src/test/service.js",
        output: {
            path: "./build",
            filename: "service-test.js"
        },
        plugins: [new webpack.optimize.UglifyJsPlugin({})]
    }];