const webpack = require('webpack')
const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode,
    entry: './src/scripts/search-subject.js',
    output: {
        filename: 'search-subject.js',
        path: `${__dirname}/dist/scripts`
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        }]
    }
}