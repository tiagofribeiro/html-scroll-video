import path, { join } from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export default {
    "mode": "none",
    "entry": "./src/index.js",
    // MUST use Babel to load ts modules from npm
    module: {
        rules: [
            {
                test: /\.(js)$/,
                // exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
                resolve: {
                    fullySpecified: false,
                }
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|mp4)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true
                        }
                    }
                ]
            }
        ],
    },
    "output": {
        "path": __dirname + '/public',
        "filename": "bundle.js",
        "publicPath": '/',
    },
    devServer: {
        port: 3030,
        historyApiFallback: true,
        open: true,
    },
    externals: {
        'react': 'React'
    },
    resolve: {
        extensions: [".ts", ".js", ".jsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ]
}
