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
        }),
        /**
         * Plugin: ContextReplacementPlugin
         * Description: Provides context to Angular's use of System.import
         *
         * See: https://webpack.github.io/docs/list-of-plugins.html#contextreplacementplugin
         * See: https://github.com/angular/angular/issues/11580
         */
        new webpack.ContextReplacementPlugin(
            /**
             * The (\\|\/) piece accounts for path separators in *nix and Windows
             */
            /\@angular(\\|\/)core(\\|\/)esm5/,
            path.resolve(__dirname, '../src')
        )
    ]
};

export default config;
