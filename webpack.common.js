const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const pages = ["index", "upcoming", "now-playing", "popular", "detail"]

module.exports = {
    entry: pages.reduce((config, page) => {
        config[page] = `./src/${page}.js`;
        return config;
    }, {}),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    plugins: [].concat(
        pages.map(
            (page) => 
            new HtmlWebpackPlugin({
                inject: true,
                template: `./src/${page}.html`,
                filename: `${page}.html`,
                chunks: [page],
            })
        )
    ),
};
