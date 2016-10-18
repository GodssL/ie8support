module.exports = {
    entry: {
        app: [
            "./main.js",
            "webpack-dev-server/client?http://localhost:8080/"
        ]
    }, //程序入口
    output: {
        path: './bin',
        filename: 'ie8Support.js',
        publicPath: '/assets/'
    },
    debug: true,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ],
        postLoaders: [
            {
                test: /\.js$/,
                loaders: ['es3ify-loader']
            }
        ]
    }
};