const FixDefaultImportPlugin = require('webpack-fix-default-import-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [{
            enforce: "pre",
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: "tslint-loader",
            options: {
                emitErrors: true,
                failOnHint: true,
                configFile: 'tslint.json',
                typeCheck: true // You want to make sure this is removed or set to false
            }
        }]
    },
    plugins: [
        new FixDefaultImportPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunks: ["runtime", "styles"],
            inject: 'head'
        })
    ],
    output: {
        libraryTarget: 'amd'
    },
    devServer: {
        contentBase: "D:\\DEV\\Office\\EMF\\arcgis-js-api",
        historyApiFallback: true,
        stats: 'minimal',
        host: require('./scripts/hostname'),
        disableHostCheck: true,
        proxy: {
            '/proxy': {
                target: 'https://devtfs2012la.esri.com/proxy.ashx',
                secure: false
            }
        },
        host: '0.0.0.0'
    },
    externals: [
        function (context, request, callback) {
            if (/^dojo/.test(request) ||
                /^dojox/.test(request) ||
                /^dijit/.test(request) ||
                /^esri/.test(request) ||
                /^dgrid/.test(request) ||
                /^moment/.test(request) ||
                /^reusables/.test(request)
            ) {
                return callback(null, "amd " + request);
            }
            callback();
        }
    ]
};