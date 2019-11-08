const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: "development",
    entry: "./src/principal.js",
    output: {
        filename: "principal.js",
        path: __dirname + "/public"
    },
    devServer {
        contentBase: "./public",
        porta: "900"
    }
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                // "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ["file-loader"]
        }]
    }
}