const webpack = require('webpack');



module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                //exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    "source-map-loader"
                ],
                enforce: "pre"
            },
        ]
    },
    resolve: {
        extensions: ['*', '.ts', '.tsx', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: 3001,
        contentBase: './dist',
        hot: true
    }
};
