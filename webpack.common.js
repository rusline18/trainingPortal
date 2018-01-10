/* eslint-disable no-undef */
const path = require("path"),
    CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: __dirname + "/public/js/AuthForm.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname + "/public/client")
    },
    plugins: [
        new CleanWebpackPlugin(['public/client']),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                },{
                    loader: "css-loader"
                },{
                  loader: "sass-loader"
                }]
            }
        ]
    },
};