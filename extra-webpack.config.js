module.exports = {

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
          if (/^dojo\//.test(request) ||
            /^dojox/.test(request) ||
            /^dijit/.test(request) ||
            /^esri\//.test(request) ||
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