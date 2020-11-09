var path = require('path'); //Core module

module.exports = {
    entry: './src/app.ts',
    context: __dirname,
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js',
        publicPath: '/build'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            use: {
                loader: 'ts-loader'
            }
        }]
    },
    resolve: {
        extensions: ['.ts']
    },
    plugins: [
    ]
}