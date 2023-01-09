import path, { join } from 'path';
import { fileURLToPath } from 'url';

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
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
                resolve: {
                  fullySpecified: false,
                }
            }
        ],
    },
    "output": {
        "path": __dirname + '/dist',
        "filename": "bundle.js",
    },
    devServer: {
        contentBase: join(__dirname, 'dist')
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
}
