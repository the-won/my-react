const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'wordrelay-settting',
    mode: 'development', // 실서비스 : production
    devtool: 'eval', //빠르게 하겠다 실서비스 : hidden-source-map
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: ['./client'],
    }, //입력

    module: {
        rules: [{
            test: /\.jsx?/, 
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 1% in KR'], // broswersList
                        },
                        debug: true,
                    }],
                    '@babel/preset-react'
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel',
                ],
            },
        },
        {
        	test: /\.css$/,
            use: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                }
            ]
        },
        {
            test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: [{
                loader: 'file-loader'
            }]
        },
        {
        	test: /.(sass|scss)$/,
        	use: [
        	{ loader: 'style-loader' },
        
        	]
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'file-loader'
            }]
        }
        ],
    },

    plugins: [
        new RefreshWebpackPlugin()
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/',
    },// 출력

    devServer: {
        publicPath: '/dist/',
        hot: true,
    }
};
