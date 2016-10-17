module.exports = {
    entry: "./main.js", //程序入口
    output: { // 编译后的文件
        path: "./bin",
        filename: "ie8Support.js"
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