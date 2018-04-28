const path = require('path')

const ROOT = __dirname
const DIST = path.resolve(ROOT, 'dist')

module.exports = {
    entry: path.resolve(ROOT, 'js/main.js'),
    output: {
        filename: 'bundle.js',
        path: DIST
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: [
                path.resolve(ROOT, 'js')
            ],
            loader: 'babel-loader',
            options: {
                presets: ['es2015']
            }
        }, {
            test: /\.css$/,
            include: [
                path.resolve(ROOT, 'css')
            ],
            // Chain loaders
            use: [{
                loader: 'style-loader', // creates style nodes from JS strings
                options: {
                    sourceMap: true
                }
            }, {
                loader: 'css-loader', // translates CSS into CommonJS
                options: {
                    sourceMap: true
                }
            }, {
                loader: 'px2rem-loader', // convert px to rem
                // options here
                options: {
                    remUnit: 75,
                    remPrecision: 8
                }
            }]
        }]
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'app')
        ]
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        host: '0.0.0.0',
        port: 8080
    }
}
