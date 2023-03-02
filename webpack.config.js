const path = require('path');
// const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // start point
    entry: './src/index.js',

    // exit point
    output: {
        filename: 'my-bundle.js',
        path: path.resolve(__dirname, 'build'),
    },

    // loaders
    module: {
        rules: [
// css
            {
        test: /\.scss$/i,
            // reading from right to left
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
// babel
            {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
        ],
    },

    // plugins
    plugins: [
        new HtmlWebpackPlugin({ template: 'src/index.html' }),
        // new HtmlMinimizerPlugin()
        new MiniCssExtractPlugin(),
    ],

    // development server configuration
    devServer: {
            // change localhost port
        port: 3030,
            // auto open browser
        open: true,
    }
};