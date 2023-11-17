const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");


module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "app/index.ts"),
    output: {
        filename: "static/scripts/main.[contenthash].js",
        path: path.resolve(__dirname, "build"),
        assetModuleFilename: "static/media/[name].[contenthash][ext]",
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
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: "static/styles/main.[contenthash].css",
            chunkFilename: "static/styles/main.[contenthash].map"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "app/index.html"),
        })
    ],
    resolve: {
        extensions: [".ts", ".js"],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            extractComments: false,
                terserOptions: {
                    compress: {
                        drop_console: true,
                    },
                },
        })],
    },
};