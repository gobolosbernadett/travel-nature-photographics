const path = require('path');

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    devtool: "inline-source-map",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist", "reactPage"),
    },
    resolve: {
        extentions: ['.jsx,', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(gif|jpg|jpeg)$/,
                type: "asset/resource",
                generator: {
                    filename: "img/[name][ext]",
                },
            },
            {
                test: /\.(js|jsx)/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [ "@babel/preset-env",
                                {
                                    targets: "defaults",
                                },
                            ],
                            [ "@babel/preset-react",
                                {
                                    runtime: "automatic",
                                    importSource: "react"
                                },
                            ],
                        ],
                    },
                },
            },
        ],
    },
};