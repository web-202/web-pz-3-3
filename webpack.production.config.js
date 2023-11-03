const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "app", "src", "index.ts"),
    output: {
        filename: "static/js/main.[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "static/media/[name].[contenthash][ext]",
    },
    performance: {
        hints: false,
        maxAssetSize: 500000,
        maxEntrypointSize: 100000,
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader",
                exclude: path.resolve(__dirname, "tsconfig.json"),
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "static/css/main.[contenthash].css",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "app", "index.html"),
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production"),
        }),
    ],
    resolve: {
        extensions: [".ts", ".js"],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
};
