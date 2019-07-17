const mode = process.env.MODE

module.exports = {
    mode,
    entry: './src/app.js',
    output: {
        path: `${__dirname}/public/scripts`,
        filename: 'app.min.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 51200
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: `${__dirname}/public`,
        port: 3000,
        open: true
    }
}
