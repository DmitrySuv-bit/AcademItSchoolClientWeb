const path = require('path');

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    devtool: 'source-map',

    entry: './frontend/index.js',
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'public'),
    },

    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader, 'css-loader'
            ]
        }, {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
            ]
        }, {
            test: /\.(png|bmp|jpg|jpeg|gif|svg|ttf|eot|woff|woff2)$/,
            use: 'file-loader?name=[path][name].[ext]?[hash]'
        }, {
            test: /\.vue$/,
            use: "vue-loader"
        }]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/styles.css'
        }),
        new VueLoaderPlugin()
    ]
};