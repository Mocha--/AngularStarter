import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ScriptExtensionHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';

const main = 'main';
const polyfills = 'polyfills';

const config: webpack.Configuration = {
    target: 'web',
    entry: {
        [polyfills]: path.resolve(__dirname, '../src/polyfills.ts'),
        [main]: path.resolve(__dirname, '../src/index.ts')
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [{
            test: /\.html$/,
            include: [
                path.resolve(__dirname, '../src')
            ],
            loader: 'html-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html'),
            inject: 'body'
        }),
        new ScriptExtensionHtmlWebpackPlugin({
            defer: [main, polyfills]
        })
    ]
};

export default config;
