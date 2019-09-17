// const webpack = require('webpack');

module.exports = {

    target: "web",
    externals: [
        /^(dojo)(.)*/i,
        /^(dijit)(.)*/i,
        /^(mxui)(.)*/i,
        "react",
        "react-dom"
    ],
    // optimization: {
    //     minimize: false
    // },
    devtool: "source-map",
    // mode: "production",
    mode: "development",
    output: {
        filename: "./com/mendix/widget/custom/ReactKanbanBoard/ReactKanbanBoard.js",
        libraryTarget: "umd",
    },
    cache: false,
    module: {
        rules: [
            // { sideEffects: true },
        ]
    },
    plugins: [
    ]
}